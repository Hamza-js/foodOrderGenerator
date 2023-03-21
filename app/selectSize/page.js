"use client";

import Link from "next/link";
import Header from "../../components/Header";

export default function selectSize() {
  return (
    <div className="main">
      <Header />

      <div className="innerContainer px-5">
        <h2 className="heading">Select Size</h2>
        <p className="text pb-6">Please select a Size</p>
        <Link href={"/resultsPreview"}>
          <div className="selectCatogoryButton">
            <p className="selectCatogoryText">8oz</p>
          </div>
        </Link>

        <Link href={"/resultsPreview"}>
          <div className="selectCatogoryButton">
            <p className="selectCatogoryText">12oz</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
