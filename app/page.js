import Link from "next/link";
import Image from "next/image";
import BD from "../images/Home/BG.png";
import logo from "../images/Home/logo.png";

export default function Home() {
  return (
    <div className="main">
      <Image className="absolute bottom-0" src={BD} alt="Example" width={390}  />
      <div className="innerContainer flex justify-between flex-col">
        <div className="flex flex-col w-full items-center mt-[141px]">
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
            <div className="bg-[#7264E4] hover:bg-[#5e53b5] mx-[18px] my-[30px] py-[11px] flex justify-center items-center rounded-[18px] cursor-pointer">
              <p className="text-[18px] font-medium text-white">Continue</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
