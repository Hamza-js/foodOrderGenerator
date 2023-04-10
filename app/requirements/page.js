"use client";
import Link from "next/link";
import Header from "../../components/Header";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

export default function Requirments() {
  const pathname = usePathname();
  return (
    <div className="main">
      <div className="innerContainerWhite flex flex-col justify-between">
        <Header url={pathname}/>
        <div className="px-5">
          <div className="flex items-center justify-center flex-col text-center">
            <h2 className="text-black font-semibold text-2xl font-sans py-4 ">
              {/* <h1>Current URL: {pathname}</h1> */}
              Input Requirements
            </h2>
            <p className="text-[#60656E] text-sm font-medium w-[275px] h-[54px]">
              Either enter Calories required or Proteins Required or BOTH
            </p>
          </div>

          <div>
            <p className="text-black font-medium text-lg mt-[20px] mb-[10px]">
              Calories
            </p>
            <input
              className="min-h-[64px] w-full rounded-[10px] bg-[#F4F2FF] pl-4 outline-none text-[#9E9E9E]"
              placeholder="Enter Calories"
            />
          </div>
          <div>
            <p className="text-black font-medium text-lg mt-[20px] mb-[10px]">
              Protien
            </p>
            <input
              className="min-h-[64px] w-full rounded-[10px] bg-[#F4F2FF] pl-4 outline-none text-[#9E9E9E]"
              placeholder="Enter"
            />
          </div>
        </div>
        <div className="w-full h-[120px] bg-[#7264E4] rounded-t-[25px] z-[1] flex flex-row justify-between">
          <Link href={"/"}>
            <div className="bg-[#7264E4] mx-[18px] my-[30px] py-[11px] flex justify-center items-center rounded-[18px] cursor-pointer">
              <ChevronLeftIcon className="h-5 w-5 pt-1 pr-1 text-white" />
              <p className="font-mediums text-lg text-white">Previous</p>
            </div>
          </Link>
          <Link href={"/selectCategory"}>
            <div className="bg-white hover:bg-[#5e53b5] hover:text-white w-[178px] mx-[18px] my-[30px] py-[11px] flex justify-center items-center rounded-[18px] text-black cursor-pointer">
              <p className="font-mediums text-lg">Continue</p>
              <ChevronRightIcon className="h-5 w-5 pt-1 pl-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
