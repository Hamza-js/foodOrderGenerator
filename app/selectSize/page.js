"use client";

import Link from "next/link";
import Header from "../../components/Header";
import { usePathname } from "next/navigation";

export default function selectSize() {
  const pathname = usePathname();

  return (
    <div className="main">
      <div className="innerContainerWhite flex flex-col">
        <Header url={pathname} />
        <div className="px-5 mt-[60px]">
          <div className="flex items-center justify-center flex-col text-center">
            <h2 className="text-black font-semibold text-2xl font-sans py-4 ">
              Select Size
            </h2>
            <p className="text-[#60656E] text-sm font-medium w-[275px] h-[54px]">
              Please select a category
            </p>
          </div>

          <Link href={"/resultsPreview"}>
            <div className="min-h-[74px] w-full rounded-[26px] bg-[#F7F6FB] pl-4 flex items-center mb-5">
              <p className="font-medium text-xl text-[#596070]">8oz</p>
            </div>
          </Link>

          <Link href={"/resultsPreview"}>
            <div className="min-h-[74px] w-full rounded-[26px] bg-[#F7F6FB] pl-4 flex items-center mb-5">
              <p className=" font-medium text-xl text-[#596070]">12oz</p>
            </div>
          </Link>
          <Link href={"/resultsPreview"}>
            <div className="min-h-[74px] w-full rounded-[26px] bg-[#F7F6FB] pl-4 flex items-center mb-5">
              <p className=" font-medium text-xl text-[#596070]">16oz</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
