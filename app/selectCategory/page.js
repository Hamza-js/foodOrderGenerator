"use client";
import Image from "next/image";
import one from "../../images/selectCategory/1.png";
import two from "../../images/selectCategory/2.png";
import three from "../../images/selectCategory/3.png";
import four from "../../images/selectCategory/4.png";

import Link from "next/link";
import Header from "../../components/Header";

export default function selectCategory() {
  return (
    <div className="main">
      {/* <Header /> */}

      <div className="innerContainerWhite  px-[25px]">
        <div className="flex items-center justify-center flex-col text-center">
          <h2 className="text-black font-semibold text-2xl font-sans py-4 ">
            Select Category
          </h2>
          <p className="text-black text-sm font-medium w-[275px] h-[54px] font-sans">
            Please select a category
          </p>
        </div>

        <Link href={"/selectSize"}>
          <div className="flex items-center cursor-pointer w-full justify-betwee relative py-4">
            <div className=" relative min-h-[99px] rounded-3xl w-full border bg-[#FF6C35] flex items-center pl-3 justify-between">
              <p className="text-white font-semibold text-base">
                Frozen Yogurt
              </p>
              <div className="bg-[#FFAE90] w-[102px] h-[77px] absolute right-0 bottom-0 rounded-br-3xl rounded-tl-[45px]"></div>
            </div>

            <Image
              className="z-10 absolute right-0 bottom-2"
              src={one}
              alt="Example"
            />
          </div>
        </Link>
        <Link href={"/selectSize"}>
          <div className="flex items-center cursor-pointer w-full justify-betwee relative py-4">
            <div className=" relative min-h-[99px] rounded-3xl w-full border bg-[#4BBFED] flex items-center pl-3 justify-between">
              <p className="text-white font-semibold text-base">
              Superfood
              </p>
              <div className="bg-[#9CE3FF] w-[102px] h-[77px] absolute right-0 bottom-0 rounded-br-3xl rounded-tl-[45px]"></div>
            </div>

            <Image
              className="z-10 absolute right-0 bottom-2"
              src={two}
              alt="Example"
            />
          </div>
        </Link>

        <Link href={"/selectSize"}>
          <div className="flex items-center cursor-pointer w-full justify-betwee relative py-4">
            <div className=" relative min-h-[99px] rounded-3xl w-full border bg-[#FFCA46] flex items-center pl-3 justify-between">
              <p className="text-white font-semibold text-base">
              Juices
              </p>
              <div className="bg-[#FEE5A6] w-[102px] h-[77px] absolute right-0 bottom-0 rounded-br-3xl rounded-tl-[45px]"></div>
            </div>

            <Image
              className="z-10 absolute right-0 bottom-2"
              src={three}
              alt="Example"
            />
          </div>
        </Link>
        <Link href={"/selectSize"}>
          <div className="flex items-center cursor-pointer w-full justify-betwee relative py-4">
            <div className=" relative min-h-[99px] rounded-3xl w-full border bg-[#EF4F8B] flex items-center pl-3 justify-between">
              <p className="text-white font-semibold text-base">
              Smoothie
              </p>
              <div className="bg-[#FFA4C6] w-[102px] h-[77px] absolute right-0 bottom-0 rounded-br-3xl rounded-tl-[45px]"></div>
            </div>

            <Image
              className="z-10 absolute right-0 bottom-2"
              src={four}
              alt="Example"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
