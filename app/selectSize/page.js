"use client";
import Header from "../../components/Header";
import { usePathname, useRouter } from "next/navigation";
import {
  selectCalories,
  selectId,
  selectProtines,
  selectSizes,
  setResults,
  setSelectedSize,
} from "../Redux/slices/category";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "@<components>/components/loading";

export default function selectSize() {
  const [newSizeArr, setNewSizeArr] = useState([]);
  const pathname = usePathname();
  // const cat = useSelector(selectCatArr);
  const size = useSelector(selectSizes);
  const id = useSelector(selectId);
  const calories = useSelector(selectCalories);
  const proteins = useSelector(selectProtines);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const selectedCatSizes = size[0];
    const sizesArray = [];
    for (let sizeKey in selectedCatSizes) {
      const sizeObj = selectedCatSizes[sizeKey];
      sizesArray.push(sizeObj);
    }
    setNewSizeArr(sizesArray);
    console.log(sizesArray);
  }, []);

  // console.log(size, id);
  // console.log(calories, proteins);

  async function handleSubmit(size1) {
    console.log(size1, id, proteins, calories);
    const formData = new FormData();
    formData.append("selected_cat_id", id);
    formData.append("calories", calories);
    formData.append("proteins", proteins);
    formData.append("selected_size", size1);

    try {
      setLoading(true);

      const response = await axios.post(
        "https://hsicecream.herokuapp.com/api/selectSize",
        formData
      );

      if (response.status === 200) {
        console.log(response.data.collection);
        dispatch(setResults(response.data));
        dispatch(setSelectedSize(size));
        router.push("/resultsPreview");
      } else {
        console.error("API error:", response.statusText);
      }
      // setLoading(false);
    } catch (error) {
      setLoading(false);

      console.error(error);
      alert("Server Error");
    }
  }
  return (
    <>
      <div className="mainHeight">
        <div className="innerContainerWhite flex flex-col">
          <Header url={pathname} />
          {loading ? (
            <Loading />
          ) : (
            <div className="px-5 mt-[75px] sm:mt-[55px]">
              <div className="flex items-center justify-center flex-col text-center">
                <h2 className="text-black font-semibold sm:text-lg text-2xl font-sans pb-4">
                  Select Size
                </h2>
                <p className="text-[#60656E] text-sm font-medium w-[275px] h-[54px]">
                  Please select a size
                </p>
              </div>
              {newSizeArr.length != 0 &&
                newSizeArr.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => handleSubmit(item.value)}
                      className="min-h-[74px] sm:min-h-[8vh] w-full rounded-[10px] bg-[#F7F6FB] pl-4 flex items-center mb-5 cursor-pointer"
                    >
                      <p className="font-medium text-xl text-[#596070]">
                        {item.key}
                      </p>
                    </div>
                  );
                })}

              {/* <div
            onClick={() => handleSubmit()}
            className="min-h-[74px] sm:min-h-[8vh] w-full rounded-[10px] bg-[#F7F6FB] pl-4 flex items-center mb-5"
          >
            <p className=" font-medium text-xl text-[#596070]">12oz</p>
          </div>

          <div
            onClick={() => handleSubmit()}
            className="min-h-[74px] sm:min-h-[8vh] w-full rounded-[10px] bg-[#F7F6FB] pl-4 flex items-center mb-5"
          >
            <p className=" font-medium text-xl text-[#596070]">16oz</p>
          </div> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
