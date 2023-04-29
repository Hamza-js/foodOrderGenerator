import Header from "../../components/Header";


export default function loading() {
  return (
    <div className="mainHeight">
      <div className="innerContainerWhite flex flex-col">
        {/* <Header url={pathname} /> */}
        <div className="px-5 mt-[75px] sm:mt-[55px]">
          <div className="flex items-center justify-center flex-col text-center">
            <p className="text-[#60656E] text-sm font-medium w-[275px] h-[54px]">
              Loading...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
