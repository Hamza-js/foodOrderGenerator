"use client";
import Link from "next/link";
import Image from "next/image";
import BD from "../images/Home/BG.png";
import BG from "../images/Home/bgpic.png";
import homeIcon from "../images/Home/homeIcon.png";

import logo from "../images/Home/logo.png";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="mainHeight">
      <Image
        alt="Home Icon"
        src={homeIcon}
        className="h-7 w-7 absolute top-6 right-6 cursor-pointer z-[1000]"
      />

      <div className="innerContainerHome flex justify-between flex-col relative">
        <Image
          alt="Home Icon"
          src={homeIcon}
          className="h-7 w-7 absolute top-6 right-6 cursor-pointer z-[1000]"
        />
        <Image
          className="absolute w-full h-full max-w-[420px] sm:max-h-[90vh] sm:max-w-[390px]"
          src={BG}
          alt="bg-image"
        />
        <Image
          className="absolute bottom-0"
          src={BD}
          alt="flowers"
          width={420}
        />
        {/* bg image suppose to be here */}
        <div className="flex justify-center w-full">
          <Image
            className="absolute mt-10"
            src={logo}
            alt="logo"
            height={272}
            width={279}
          />
        </div>

        <span></span>
        <div className=" w-full h-[120px] bg-white rounded-t-[25px] z-[1] mt-12">
          <div
            onClick={() => router.replace("/requirements")}
            className="bg-[#AF9186] text-white mx-[18px] my-[30px] py-[11px] flex justify-center items-center rounded-[18px] cursor-pointer"
          >
            <p className="text-[18px] font-medium ">Continue</p>
            <ChevronRightIcon className="h-7 w-7 pl-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
