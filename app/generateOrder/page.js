"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import QRCode from "react-qr-code";
import Header from "../../components/Header";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function selectSize() {
  const pathname = usePathname();

  return (
    <div className="mainHeight">
      <div className="innerContainerWhite flex flex-col justify-between">
        <Header url={pathname} />
        <div className="px-5 mt-[75px] sm:mt-[55px]">
          <div className="flex items-center justify-center flex-col text-center">
            <h2 className="text-black font-semibold sm:text-lg text-2xl font-sans pb-4 sm:pb-0">
              Your Result
            </h2>
            <p className="text-[#60656E] text-sm sm:text-xs font-medium w-[275px] h-[54px] sm:h-auto">
              Show this at the counter
            </p>
          </div>
          <QRCode
            value="Walnut, Ce, Apple, Orange, Milk"
            // size={256}
            style={{
            //   // height: 168,
            //   marginBottom: 20,
            //   maxWidth: "100%",
              width: "100%",
            }}
            // viewBox={`0 0 256 256`}
            className="sm:h-[100px] sm:w-[100px] sm:mt-[5px] h-[100px] sm:mb-5"
          />

          <div className="rounded-xl border border-gray-400-500 mt-[25px] sm:my-[0px] mb-[25px]">
            <div className="flex flex-row justify-between sm:py-[4px] p-2">
              <p className="font-medium text-sm">Calories</p>
              <p className="font-medium text-sm">240 cal</p>
            </div>
            <div className="flex flex-col rounded-xl bg-[#7264E4] text-white justify-between sm:items-center pb-[10px] mt-[8px] sm:mt-[6px] px-3 w-full">
              <div className="flex flex-col w-full py-3 sm:py-1 border-b-2 border-solid border-[#9186EA] border-opacity-22">
                <p className=" font-semibold text-base sm:text-xs">Base</p>
                <div className="flex flex-row w-full justify-between">
                  <p className=" font-normal text-xs">Almond Milk</p>
                  <p className=" font-normal text-xs">20 Cal</p>
                </div>
              </div>

              <div className="flex flex-col w-full py-3 sm:py-1 border-b-2 border-solid border-[#9186EA] border-opacity-22">
                <p className=" font-semibold text-base sm:text-xs">Fruit</p>
                <div className="flex flex-row w-full justify-between mb-1">
                  <p className=" font-normal text-xs">Apple</p>
                  <p className=" font-normal text-xs">20 Cal</p>
                </div>
                <div className="flex flex-row w-full justify-between">
                  <p className=" font-normal text-xs">Orange</p>
                  <p className=" font-normal text-xs">20 Cal</p>
                </div>
              </div>

              <div className="flex flex-col w-full py-3 sm:py-1 border-b-2 border-solid border-[#9186EA] border-opacity-22">
                <p className=" font-semibold text-base sm:text-xs">Dry</p>
                <div className="flex flex-row w-full justify-between">
                  <p className=" font-normal text-xs">20 Cal</p>
                  <p className=" font-normal text-xs">20 Cal</p>
                </div>
              </div>

              <div className="flex flex-col w-full pt-1 pb-7 sm:pb-3">
                <p className=" font-semibold text-base sm:text-xs">Other</p>
                <div className="flex flex-row w-full justify-between">
                  <p className=" font-normal text-xs">Walnut</p>
                  <p className=" font-normal text-xs">20 Cal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full flex items-center justify-center sm:max-h-[9vh] h-[120px] bg-[#7264E4] sm:rounded-t-[15px] rounded-t-[25px] z-[1]">
          <Link href={"/"}>
            <div className="bg-white hover:bg-[#5e53b5] hover:text-white w-[320px] sm:w-[178px] mx-[18px] my-[30px] sm:my-[13px] py-[11px] sm:py-[3px] flex justify-center items-center rounded-[18px] text-black cursor-pointer">
              <p className="font-mediums text-lg sm:text-sm">Generate</p>
              <ChevronRightIcon className="h-7 w-7 sm:h-6 pt-1 pl-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
