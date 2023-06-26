"use client";
import Link from "next/link";
import Header from "../../components/Header";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setGlobelCalories,
  setCatArr,
  setGlobelProtine,
} from "../Redux/slices/category";
import { useRouter } from "next/navigation";
import Loading from "@<components>/components/loading";

export default function Requirments() {
  const pathname = usePathname();
  const [calories, setCalories] = useState("");
  const [proteins, setProteins] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const [error, setError] = useState("");
  const [calRangeError, setCalRangeError] = useState(false);
  const [proRangeError, setProRangeError] = useState(false);

  function handleClosePopup() {
    console.log("Close button clicked");
    setShowPopup(false);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!calories && !proteins) {
      setError("Please fill out at least one field.");
    } else if (
      (calories !== "" && !/^\d+$/.test(calories)) ||
      (proteins !== "" && !/^\d+$/.test(proteins))
    ) {
      setError("Please enter only numbers for input values.");
    } else if (calories !== "" && (calories < 50 || calories > 500)) {
      setCalRangeError(true);
    } else if (proteins !== "" && (proteins < 3 || proteins > 45)) {
      setProRangeError(true);
    } else {
      // console.log(calories, proteins);
      console.log("api called successfully");
      const formData = new FormData();
      formData.append("calories", calories);
      formData.append("proteins", proteins);

      try {
        setLoading(true);
        const response = await axios.post(
          "https://hsicecream.herokuapp.com/api/requirements",
          formData
        );
        if (response.status === 200) {
          setError("");
          dispatch(setCatArr(response.data.data));
          dispatch(setGlobelCalories(calories));
          dispatch(setGlobelProtine(proteins));
          router.push("/selectCategory");
        } else {
          setShowPopup(true);
          console.error("API error:", response.statusText);
        }
      } catch {
        setShowPopup(true);
        setLoading(false);
      }
    }
  }

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
                  Input Requirements
                </h2>
                <p className="text-[#60656E] text-sm font-medium w-[275px] h-[54px]">
                  Either enter Calories required or Proteins Required or BOTH
                </p>
              </div>
              {error && (
                <div className="text-red-500 w-full flex justify-center">
                  <p>{error}</p>
                </div>
              )}
              <div>
                <p className="text-black font-medium text-lg mt-[20px] mb-[10px]">
                  Calories
                </p>
                <input
                  className={`min-h-[64px] sm:min-h-[8vh] w-full rounded-[10px] bg-[#FBF1EE] pl-4 outline-none text-[#786761] `}
                  placeholder="Enter Calories"
                  value={calories}
                  onChange={(e) => {
                    setCalories(e.target.value);
                    // setCaloriesValid(true);
                  }}
                  style={{ "--placeholder-color": "#b39b92" }}
                />
                <p
                  className={`${
                    calRangeError ? "text-red-600" : "text-[#AF9186]"
                  } text-sm`}
                >
                  The range should be between 50cal to 500cal
                </p>
              </div>
              <div>
                <p className="text-black font-medium text-lg mt-[20px] mb-[10px]">
                  Proteins
                </p>
                <input
                  className={`min-h-[64px] sm:min-h-[8vh] w-full rounded-[10px] bg-[#FBF1EE] pl-4 outline-none text-[#786761]`}
                  placeholder="Enter Proteins"
                  value={proteins}
                  onChange={(e) => {
                    setProteins(e.target.value);
                    // setProteinsValid(true);
                  }}
                  style={{ "--placeholder-color": "#b39b92" }}
                />
                <p
                  className={`${
                    proRangeError ? "text-red-600" : "text-[#AF9186]"
                  } text-sm`}
                >
                  The range should be between 3g to 45g of protein
                </p>
              </div>
            </div>
          )}

          {showPopup && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="bg-gray-900 opacity-50 pointer-events-none"></div>
              <div className="bg-white p-8 rounded-md">
                <p className="text-lg z-1000 font-bold mb-4">
                  Something went wrong
                </p>
                <p>Please try again...</p>
                <button
                  className="mt-4 bg-[#AF9186] text-white font-bold py-2 px-4 rounded"
                  onClick={handleClosePopup}
                >
                  Ok
                </button>
              </div>
            </div>
          )}

          <div className="w-full sm:max-h-[15vh] h-[120px] bg-[#AF9186] rounded-t-[25px] sm:rounded-t-[15px] z-[1] flex flex-row justify-between">
            <Link href={"/"}>
              <div className="bg-[#AF9186] mx-[18px] my-[30px] py-[11px] sm:py-[7px] flex justify-center items-center rounded-[18px] cursor-pointer">
                <ChevronLeftIcon className="h-7 w-7 pt-[3px] pr-1 text-white" />
                <p className="font-mediums text-lg text-white">Previous</p>
              </div>
            </Link>

            <button
              className="bg-white w-[178px] mx-[18px] my-[30px] py-[11px] sm:py-[7px] flex justify-center items-center rounded-[18px] text-black cursor-pointer"
              onClick={handleSubmit}
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
