"use client";

import Link from "next/link";
import Header from "../../components/Header";

export default function selectSize() {
  return (
    <div className="main">
      {/* <Header /> */}

      <div className="innerContainerWhite px-5">
        <div className="flex items-center justify-center flex-col text-center">
          <h2 className="text-black font-semibold text-2xl font-sans py-4 ">
            Select Size
          </h2>
          <p className="text-black text-sm font-medium w-[275px] h-[54px] font-sans">
            Please select a size
          </p>
        </div>

        <Link href={"/resultsPreview"}>
          <div className="min-h-[74px] w-full rounded-[26px] bg-[#F7F6FB] pl-4 flex items-center mb-5">
            <p className="selectCatogoryText">8oz</p>
          </div>
        </Link>

        <Link href={"/resultsPreview"}>
          <div className="min-h-[74px] w-full rounded-[26px] bg-[#F7F6FB] pl-4 flex items-center mb-5">
            <p className="text-black font-medium text-xl">12oz</p>
          </div>
        </Link>
        <Link href={"/resultsPreview"}>
          <div className="min-h-[74px] w-full rounded-[26px] bg-[#F7F6FB] pl-4 flex items-center mb-5">
            <p className="text-black font-medium text-xl">16oz</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
