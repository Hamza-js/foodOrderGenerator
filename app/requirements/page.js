"use client";
import Link from "next/link";

import Header from "../../components/Header";

export default function Requirments() {
  return (
    <div className="main">
      {/* <Header /> */}
      <div className="innerContainerWhite flex flex-col justify-between">
        <div className="px-5">
          <div className="flex items-center justify-center flex-col text-center">
            <h2 className="text-black font-semibold text-2xl font-sans py-4 ">
              Input Requirements
            </h2>
            <p className="text-black text-sm font-medium w-[275px] h-[54px] font-sans">
              Either enter Calories required or Proteins Required or BOTH
            </p>
          </div>

          <div>
            <p className="text-black font-normal text-lg mt-[20px] mb-[10px]">
              Calories
            </p>
            <input
              className="min-h-[64px] w-full rounded-[10px] bg-[#F4F2FF] pl-4"
              placeholder="Enter Calories"
            />
          </div>
          <div>
            <p className="text-black font-normal text-lg mt-[20px] mb-[10px]">
              Protien
            </p>
            <input
              className="min-h-[64px] w-full rounded-[10px] bg-[#F4F2FF] pl-4"
              placeholder="Enter"
            />
          </div>
        </div>
        <div className="w-full h-[120px] bg-[#7264E4] rounded-t-[25px] z-[1] flex flex-row justify-between">
          <Link href={"/"}>
            <div className="bg-[#7264E4] hover:bg-[#5e53b5]  w-[178px] mx-[18px] my-[30px] py-[11px] flex justify-center items-center rounded-[18px] cursor-pointer">
              <p className="font-mediums text-lg text-white">Previous</p>
            </div>
          </Link>
          <Link href={"/selectCategory"}>
            <div className="bg-white hover:bg-[#5e53b5] hover:text-white w-[178px] mx-[18px] my-[30px] py-[11px] flex justify-center items-center rounded-[18px] cursor-pointer">
              <p className="font-mediums text-lg ">Continue</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
