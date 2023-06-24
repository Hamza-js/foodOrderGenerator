"use client"

import { useEffect, useState } from "react";

const header = (url) => {
  const [pageUrl, setPageUrl] = useState("");
  useEffect(() => {
    setPageUrl(url.url);
  }, [url]);
  return (
    <div className="w-full sm:max-h-[6vh] h-12 px-5 absolute top-0 left-0">
      <div className="flex gap-3 h-full items-end justify-between">
        <div
          className={`${
            pageUrl === "/requirements" ? "bg-[#AF9186]" : "bg-[#EFDDD7]"
          } h-[3px] w-full rounded-full`}
        ></div>
        {/* <p>{url.url}</p> */}
        <div
          className={`${
            pageUrl === "/selectCategory" ? "bg-[#AF9186]" : "bg-[#EFDDD7]"
          } h-[3px] w-full rounded-full`}
        ></div>
        <div
          className={`${
            pageUrl === "/selectSize" ? "bg-[#AF9186]" : "bg-[#EFDDD7]"
          } h-[3px] w-full rounded-full`}
        ></div>{" "}
        <div
          className={`${
            url.url === "/resultsPreview" ? "bg-[#AF9186]" : "bg-[#EFDDD7]"
          } h-[3px] w-full rounded-full`}
        ></div>
        <div
          className={`${
            url.url === "/generateOrder" ? "bg-[#AF9186]" : "bg-[#EFDDD7]"
          } h-[3px] w-full rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default header;
