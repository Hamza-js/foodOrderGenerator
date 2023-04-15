"use client";
import Image from "next/image";
import one from "../../images/selectCategory/1.png";
import two from "../../images/selectCategory/2.png";
import three from "../../images/selectCategory/3.png";
import four from "../../images/selectCategory/4.png";
import { usePathname } from "next/navigation";

import Link from "next/link";
import Header from "../../components/Header";

export default function selectCategory() {
  const pathname = usePathname();

  return (
    <div className="mainHeight">
      <div className="innerContainerWhite  flex flex-col">
        <Header url={pathname}/>
        <div className="px-5 mt-[75px] sm:mt-[55px]">
          <div className="flex items-center justify-center flex-col text-center">
          <h2 className="text-black font-semibold sm:text-lg text-2xl font-sans pb-4 ">
              Select Category
            </h2>
            <p className="text-[#60656E] text-sm font-medium w-[275px] h-[54px]">
              Please select a category
            </p>
          </div>
          <Link href={"/selectSize"}>
            <div className="flex items-center cursor-pointer w-full justify-betwee relative pb-4 ">
              <div className=" relative min-h-[99px] sm:min-h-[10vh] rounded-3xl sm:rounded-2xl w-full border bg-[#FF6C35] flex items-center pl-3 justify-between">
                <p className="text-white font-semibold text-base">
                  Frozen Yogurt
                </p>
                <div className="bg-[#FFAE90] w-[102px] sm:w-[90px] h-[77px] sm:h-[50px] absolute right-0 bottom-0 sm:rounded-br-2xl rounded-tl-[45px] sm:rounded-tl-[43px]"></div>
              </div>

              <Image
                className="z-10 absolute right-0 bottom-3 sm:h-[14vh] object-contain"
                src={one}
                alt="Example"
              />
            </div>
          </Link>
          <Link href={"/selectSize"}>
            <div className="flex items-center cursor-pointer w-full justify-betwee relative py-5">
              <div className=" relative min-h-[99px] sm:min-h-[10vh] rounded-3xl sm:rounded-2xl w-full border  bg-[#4BBFED] flex items-center pl-3 justify-between">
                <p className="text-white font-semibold text-base">Superfood</p>
                <div className="bg-[#9CE3FF] w-[102px] sm:w-[90px] h-[77px] sm:h-[50px] absolute right-0 bottom-0 sm:rounded-br-2xl rounded-tl-[45px] sm:rounded-tl-[43px]"></div>
              </div>

              <Image
                className="z-10 absolute right-0 bottom-4 sm:h-[14vh] object-contain"
                src={two}
                alt="Example"
              />
            </div>
          </Link>
          <Link href={"/selectSize"}>
            <div className="flex items-center cursor-pointer w-full justify-betwee relative py-5">
              <div className=" relative min-h-[99px] sm:min-h-[10vh] rounded-3xl sm:rounded-2xl w-full border bg-[#FFCA46] flex items-center pl-3 justify-between">
                <p className="text-white font-semibold text-base">Juices</p>
                <div className="bg-[#FEE5A6] w-[102px] sm:w-[90px] h-[77px] sm:h-[50px] absolute right-0 bottom-0 sm:rounded-br-2xl rounded-tl-[45px] sm:rounded-tl-[43px]"></div>
              </div>

              <Image
                className="z-10 absolute right-0 bottom-3 sm:h-[14vh] object-contain"
                src={three}
                alt="Example"
              />
            </div>
          </Link>
          <Link href={"/selectSize"}>
            <div className="flex items-center cursor-pointer w-full justify-betwee relative py-5">
              <div className=" relative min-h-[99px] sm:min-h-[10vh] rounded-3xl sm:rounded-2xl w-full border bg-[#EF4F8B] flex items-center pl-3 justify-between">
                <p className="text-white font-semibold text-base">Smoothie</p>
                <div className="bg-[#FFA4C6] sm:w-[90px] w-[102px] h-[77px] sm:h-[50px] absolute right-0 bottom-0 rounded-br-3xl sm:rounded-br-2xl rounded-tl-[45px] sm:rounded-tl-[43px]"></div>
              </div>

              <Image
                className="z-10 absolute right-0 bottom-3 sm:h-[14vh] object-contain"
                src={four}
                alt="Example"
                // style={{height: "10vh"}}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
