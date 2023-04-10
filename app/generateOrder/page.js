"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";
import QRCode from "react-qr-code";
import Header from "../../components/Header";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function selectSize() {
  const pathname = usePathname();

  return (
    <div className="main">
      <div className="innerContainerWhite flex flex-col justify-between">
        <Header url={pathname} />
        <div className="px-8 mt-[75px]">
          <div className="flex items-center justify-center flex-col text-center">
            <h2 className="text-black font-semibold text-2xl font-sans py-4 ">
              Your Result
            </h2>
            <p className="text-[#60656E] text-sm font-medium w-[275px] h-[54px]">
              Show this at the counter
            </p>
          </div>
          <QRCode
            value="Walnut, Ce, Apple, Orange, Milk"
            size={256}
            style={{
              height: 168,
              marginBottom: 20,
              maxWidth: "100%",
              width: "100%",
            }}
            viewBox={`0 0 256 256`}
          />

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

        <div className=" w-full h-[120px] bg-[#7264E4] rounded-t-[25px] z-[1]">
          <Link href={`/`}>
            <div className="bg-white text-black hover:bg-[#5e53b5] hover:text-white mx-[18px] my-[30px] py-[11px] flex justify-center items-center rounded-[18px] cursor-pointer">
              <p className="text-[18px] font-medium ">New Order</p>
              <ChevronRightIcon className="h-7 w-7 pl-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
