const header = (url) => {
  console.log(url);
  return (
    <div className="w-full h-12 px-5">
      <div className="flex gap-3 h-full items-end justify-between">
        <div className="bg-[#7264E4] h-[3px] w-full rounded-full"></div>
        <div className="bg-[#7264E4] h-[3px] w-full rounded-full"></div>
        <div className="bg-[#7264E4] h-[3px] w-full rounded-full"></div>
        <div className="bg-[#7264E4] h-[3px] w-full rounded-full"></div>
        <div className="bg-[#7264E4] h-[3px] w-full rounded-full"></div>
      </div>
    </div>
  );
};

export default header;
