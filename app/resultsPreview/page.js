"use client";

import Link from "next/link";
import Header from "../../components/Header";
import { usePathname } from "next/navigation";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function selectSize() {
  const pathname = usePathname();

  return (
    <div className="main">
      <div className="innerContainerWhite flex flex-col justify-between">
        <Header url={pathname} />
        <div className="px-8 mt-[60px]">
          <div className="flex items-center justify-center flex-col text-center">
            <h2 className="text-black font-semibold text-2xl font-sans py-4 ">
              Result
            </h2>
            <p className="text-[#60656E] text-sm font-medium w-[275px] h-[54px]">
              View your option, if you do not like it you can shuffle to change
              the combination.
            </p>
          </div>
          <div className="rounded-xl border border-gray-400-500 mt-[25px]">
            <div className="flex flex-row justify-between p-2">
              <p className="font-medium text-sm">Calories</p>
              <p className="font-medium text-sm">240 cal</p>
            </div>
            <div className="flex flex-col rounded-xl bg-[#7264E4] text-white justify-between pb-[30px] mb-[30px] mt-[8px] px-3 w-full">
              <div className="flex flex-col w-full py-3 border-b-2 border-solid border-[#9186EA] border-opacity-22">
                <p className=" font-semibold text-base">Base</p>
                <div className="flex flex-row w-full justify-between">
                  <p className=" font-normal text-xs">Almond Milk</p>
                  <p className=" font-normal text-xs">20 Cal</p>
                </div>
              </div>

              <div className="flex flex-col w-full py-3 border-b-2 border-solid border-[#9186EA] border-opacity-22">
                <p className=" font-semibold text-base">Fruit</p>
                <div className="flex flex-row w-full justify-between">
                  <p className=" font-normal text-xs">Apple</p>
                  <p className=" font-normal text-xs">20 Cal</p>
                </div>
                <div className="flex flex-row w-full justify-between">
                  <p className=" font-normal text-xs">Orange</p>
                  <p className=" font-normal text-xs">20 Cal</p>
                </div>
              </div>

              <div className="flex flex-col w-full py-3 border-b-2 border-solid border-[#9186EA] border-opacity-22">
                <p className=" font-semibold text-base">Dry</p>
                <div className="flex flex-row w-full justify-between">
                  <p className=" font-normal text-xs">20 Cal</p>
                  <p className=" font-normal text-xs">20 Cal</p>
                </div>
              </div>

              <div className="flex flex-col w-full pt-3 pb-7">
                <p className=" font-semibold text-base">Other</p>
                <div className="flex flex-row w-full justify-between">
                  <p className=" font-normal text-xs">Walnut</p>
                  <p className=" font-normal text-xs">20 Cal</p>
                </div>
              </div>

              <button className="bg-white hover:bg-[#5e53b5] rounded-full w-full h-[45px] text-[#7264E4] font-medium text-base">
                Shuffle
              </button>
            </div>
          </div>
        </div>
        {/* <div className="mt-12">
          <Link href={"/generateOrder"}>
            <button className="button mb-3">Generate Order</button>
          </Link>
        </div> */}
        <div className="w-full h-[120px] bg-[#7264E4] rounded-t-[25px] z-[1] flex flex-row justify-between">
          <Link href={"/selectSize"}>
            <div className="bg-[#7264E4] mx-[18px] my-[30px] py-[11px] flex justify-center items-center rounded-[18px] cursor-pointer">
              <ChevronLeftIcon className="h-5 w-5 pt-[3px] pr-1 text-white" />
              <p className="font-mediums text-lg text-white">Previous</p>
            </div>
          </Link>
          <Link href={"/generateOrder"}>
            <div className="bg-white hover:bg-[#5e53b5] hover:text-white w-[178px] mx-[18px] my-[30px] py-[11px] flex justify-center items-center rounded-[18px] text-black cursor-pointer">
              <p className="font-mediums text-lg">Generate</p>
              <ChevronRightIcon className="h-5 w-5 pt-1 pl-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
