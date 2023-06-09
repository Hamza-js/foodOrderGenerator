"use client";
import Image from "next/image";
import one from "../../images/selectCategory/1.png";
import two from "../../images/selectCategory/2.png";
import three from "../../images/selectCategory/3.png";
import four from "../../images/selectCategory/4.png";
import { usePathname } from "next/navigation";
import Header from "../../components/Header";
import { useSelector } from "react-redux";
import {
  selectCalories,
  selectCatArr,
  selectProtines,
  setSelectedId,
  setSizes,
} from "../Redux/slices/category";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useDispatch } from "react-redux";
import Loading from "@<components>/components/loading";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function selectCategory() {
  const pathname = usePathname();
  const cat = useSelector(selectCatArr);
  const calories = useSelector(selectCalories);
  const proteins = useSelector(selectProtines);
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();

  console.log(calories, proteins);
  console.log(cat);
  async function handleSubmit(id) {
    setClicked(true);
    const formData = new FormData();
    formData.append("cat_id", id);
    formData.append("calories", calories);
    formData.append("proteins", proteins);

    try {
      setLoading(true);

      const response = await axios.post(
        "https://hsicecream.herokuapp.com/api/selectCategory",
        formData
      );
      if (response.status === 200) {
        console.log(
          response.data.selected_cat_sizes,
          response.data.selected_cat.id
        );
        dispatch(setSizes(response.data.selected_cat_sizes));
        dispatch(setSelectedId(response.data.selected_cat.id));
        router.replace("/selectSize");
      } else {
        console.error("API error:", response.statusText);
      }
      // setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);

      alert("Server Error");
    }
  }

  const handleNEXT = () => {
    if (clicked) {
      router.replace("./requirements");
    } else {
      setError("Please select a category first.");
    }
  };

  return (
    <>
      <div className="mainHeight">
      <div className="innerContainerWhite flex flex-col justify-between">
          <Header url={pathname} />
          {loading ? (
            <Loading />
          ) : (
            <div className="px-5 mt-[75px] sm:mt-[55px]">
              <div className="flex items-center justify-center flex-col text-center">
                <h2 className="text-black font-semibold sm:text-2xl text-3xl font-sans pb-4">
                  Select Category
                </h2>
                <p className="text-[#60656E] text-sm font-medium w-[275px] h-[54px]">
                  Please select a category
                </p>
              </div>

              {error && (
                <div className="text-red-500 w-full pb-2 flex justify-center">
                  <p>{error}</p>
                </div>
              )}
              {cat && cat[0] && (
                <div
                  onClick={() => handleSubmit(cat[0].id)}
                  className="flex items-center cursor-pointer w-full justify-betwee relative pb-4 "
                >
                  <div className=" relative min-h-[99px] sm:min-h-[10vh] rounded-3xl sm:rounded-2xl w-full border bg-[#FF6C35] flex items-center pl-3 justify-between">
                    <p className="text-white font-semibold text-base">
                      {cat[0].name}
                    </p>
                    <div className="bg-[#FFAE90] w-[102px] sm:w-[90px] h-[77px] sm:h-[50px] absolute right-0 bottom-0 sm:rounded-br-2xl rounded-tl-[45px] sm:rounded-tl-[43px]"></div>
                  </div>

                  <Image
                    className="z-10 absolute right-0 bottom-3 sm:h-[14vh] object-contain"
                    src={one}
                    alt="Example"
                    height="auto"
                    width="auto"
                  />
                </div>
              )}

              {cat && cat[1] && (
                <div
                  onClick={() => handleSubmit(cat[1].id)}
                  className="flex items-center cursor-pointer w-full justify-betwee relative py-5"
                >
                  <div className=" relative min-h-[99px] sm:min-h-[10vh] rounded-3xl sm:rounded-2xl w-full border bg-[#FFCA46] flex items-center pl-3 justify-between">
                    <p className="text-white font-semibold text-base">
                      {cat[1].name}
                    </p>
                    <div className="bg-[#FEE5A6] w-[102px] sm:w-[90px] h-[77px] sm:h-[50px] absolute right-0 bottom-0 sm:rounded-br-2xl rounded-tl-[45px] sm:rounded-tl-[43px]"></div>
                  </div>

                  <Image
                    className="z-10 absolute right-0 bottom-3 sm:h-[14vh] object-contain"
                    src={three}
                    alt="Example"
                    height="auto"
                    width="auto"
                  />
                </div>
              )}

              {cat && cat[2] && (
                <div
                  onClick={() => handleSubmit(cat[2].id)}
                  className="flex items-center cursor-pointer w-full justify-betwee relative py-5"
                >
                  <div className=" relative min-h-[99px] sm:min-h-[10vh] rounded-3xl sm:rounded-2xl w-full border bg-[#EF4F8B] flex items-center pl-3 justify-between">
                    <p className="text-white font-semibold text-base">
                      {cat[2].name}
                    </p>
                    <div className="bg-[#FFA4C6] sm:w-[90px] w-[102px] h-[77px] sm:h-[50px] absolute right-0 bottom-0 rounded-br-3xl sm:rounded-br-2xl rounded-tl-[45px] sm:rounded-tl-[43px]"></div>
                  </div>

                  <Image
                    className="z-10 absolute right-0 bottom-3 sm:h-[14vh] object-contain"
                    src={four}
                    alt="Example"
                    height="auto"
                    width="auto"
                    // style={{height: "10vh"}}
                  />
                </div>
              )}

              {cat && cat[3] && (
                <div
                  onClick={() => handleSubmit(cat[3].id)}
                  className="flex items-center cursor-pointer w-full justify-betwee relative py-5"
                >
                  <div className=" relative min-h-[99px] sm:min-h-[10vh] rounded-3xl sm:rounded-2xl w-full border  bg-[#4BBFED] flex items-center pl-3 justify-between">
                    <p className="text-white font-semibold text-base">
                      {cat[3].name}
                    </p>
                    <div className="bg-[#9CE3FF] w-[102px] sm:w-[90px] h-[77px] sm:h-[50px] absolute right-0 bottom-0 sm:rounded-br-2xl rounded-tl-[45px] sm:rounded-tl-[43px]"></div>
                  </div>

                  <Image
                    className="z-10 absolute right-0 bottom-4 sm:h-[14vh] object-contain"
                    src={two}
                    alt="Example"
                    height="auto"
                    width="auto"
                  />
                </div>
              )}
            </div>
          )}

          <div className="w-full sm:max-h-[15vh] h-[120px] bg-[#AF9186] rounded-t-[25px] sm:rounded-t-[15px] z-[1] flex flex-row justify-between">
            <Link href={"/requirements"}>
              <div className="bg-[#AF9186] mx-[18px] my-[30px] py-[11px] sm:py-[7px] flex justify-center items-center rounded-[18px] cursor-pointer">
                <ChevronLeftIcon className="h-7 w-7 pt-[3px] pr-1 text-white" />
                <p className="font-mediums text-lg text-white">Previous</p>
              </div>
            </Link>

            <button
              className="bg-white w-[178px] mx-[18px] my-[30px] py-[11px] sm:py-[7px] flex justify-center items-center rounded-[18px] text-black cursor-pointer"
              onClick={handleNEXT}
            >
              <p className="font-mediums text-lg">Continue</p>
              <ChevronRightIcon className="h-7 w-7 pt-1 pl-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
