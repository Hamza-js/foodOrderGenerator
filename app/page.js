import Link from "next/link";
import Image from "next/image";
import BD from "../images/Home/BG.png";
import logo from "../images/Home/logo.png";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="mainHeight">
      <Image className="absolute bottom-0" src={BD} alt="Example" width={420} />
      <div className="innerContainer flex justify-between flex-col">
        <div className="flex flex-col w-full items-center mt-[141px] sm:mt-12">
          <Image
            className=""
            src={logo}
            alt="Example"
            width={132}
            height={94}
          />
          <h3 className="font-bold text-white text-2xl">LOGO HERE</h3>
        </div>

        <div className=" w-full h-[120px] bg-white rounded-t-[25px] z-[1]">
          <Link href={`/requirements`}>
            <div className="bg-[#7264E4] hover:bg-[#5e53b5] text-white mx-[18px] my-[30px] py-[11px] flex justify-center items-center rounded-[18px] cursor-pointer">
              <p className="text-[18px] font-medium ">Continue</p>
              <ChevronRightIcon className="h-7 w-7 pl-1" />

            </div>
          </Link>
        </div>
      </div> 
    </div>
  );
}
