"use client";

import Link from "next/link";
import Header from "../../components/Header";
import { usePathname } from "next/navigation";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function selectSize() {
  const pathname = usePathname();

  return (
    <div className="mainHeight">
      <div className="innerContainerWhite flex flex-col justify-between">
        <Header url={pathname} />
        <div className="px-5 mt-[75px] sm:mt-[55px]">
          <div className="flex items-center justify-center flex-col text-center">
            <h2 className="text-black font-semibold sm:text-lg text-2xl font-sans pb-4 sm:pb-1">
              Result
            </h2>
            <p className="text-[#60656E] text-sm sm:text-xs font-medium w-[275px] h-[54px] sm:h-auto">
              View your option, if you do not like it you can shuffle to change
              the combination.
            </p>
          </div>
          <div className="rounded-xl border border-gray-400-500 sm:h-[30vh] mt-[25px] sm:my-[10px] mb-[25px]">
            <div className="flex flex-row justify-between sm:py-[4px] p-2">
              <p className="font-medium text-sm">Calories</p>
              <p className="font-medium text-sm">240 cal</p>
            </div>
            <div className="flex flex-col rounded-xl bg-[#7264E4] text-white justify-between sm:items-center pb-[30px] sm:pb-[20px] mt-[8px] sm:mt-[6px] px-3 w-full">
              <div className="flex flex-col w-full py-3 sm:py-2 border-b-2 border-solid border-[#9186EA] border-opacity-22">
                <p className=" font-semibold text-base">Base</p>
                <div className="flex flex-row w-full justify-between">
                  <p className=" font-normal text-xs">Almond Milk</p>
                  <p className=" font-normal text-xs">20 Cal</p>
                </div>
              </div>

              <div className="flex flex-col w-full py-3 sm:py-2 border-b-2 border-solid border-[#9186EA] border-opacity-22">
                <p className=" font-semibold text-base">Fruit</p>
                <div className="flex flex-row w-full justify-between mb-1">
                  <p className=" font-normal text-xs">Apple</p>
                  <p className=" font-normal text-xs">20 Cal</p>
                </div>
                <div className="flex flex-row w-full justify-between">
                  <p className=" font-normal text-xs">Orange</p>
                  <p className=" font-normal text-xs">20 Cal</p>
                </div>
              </div>

              <div className="flex flex-col w-full py-3 sm:py-2 border-b-2 border-solid border-[#9186EA] border-opacity-22">
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

              <button className="bg-white hover:bg-[#5e53b5] rounded-full sm:w-1/2 h-[45px] sm:h-[30px] text-[#7264E4] font-medium text-base">
                Shuffle
              </button>
            </div>
          </div>
        </div>
        <div className=" sm:absolute sm:bottom-0 w-full sm:max-h-[9vh] h-[120px] bg-[#7264E4] rounded-t-[25px] sm:rounded-t-[15px] z-[1] flex flex-row justify-between items-center">
          <Link href={"/selectSize"}>
            <div className="bg-[#7264E4] mx-[18px] my-[30px] sm:my-[13px] py-[11px] sm:py-[3px] flex justify-center items-center rounded-[18px] cursor-pointer">
              <ChevronLeftIcon className="h-7 sm:h-6 w-7 pt-[3px] pr-1 text-white" />
              <p className="font-mediums text-lg sm:text-sm text-white">
                Previous
              </p>
            </div>
          </Link>
          <Link href={"/generateOrder"}>
            <div className="bg-white hover:bg-[#5e53b5] hover:text-white w-[178px] mx-[18px] my-[30px] sm:my-[13px] py-[11px] sm:py-[3px] flex justify-center items-center rounded-[18px] text-black cursor-pointer">
              <p className="font-mediums text-lg sm:text-sm">Generate</p>
              <ChevronRightIcon className="h-7 w-7 sm:h-6 pt-1 pl-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
