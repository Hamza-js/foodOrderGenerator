"use client";

import Link from "next/link";
import Header from "../../components/Header";

export default function selectCategory() {
  return (
    <div className="main">
      <Header />

      <div className="innerContainer px-5">
        <h2 className="heading">Select Category</h2>
        <p className="text pb-6">Please select a category</p>
        <Link href={"/selectSize"}>
          <div className="selectCatogoryButton">
            <p className="selectCatogoryText">Frozen Yogurt</p>
          </div>
        </Link>
        <Link href={"/selectSize"}>
          <div className="selectCatogoryButton">
            <p className="selectCatogoryText">Superfood</p>
          </div>
        </Link>
        <Link href={"/selectSize"}>
          <div className="selectCatogoryButton">
            <p className="selectCatogoryText">Juices</p>
          </div>
        </Link>
        <Link href={"/selectSize"}>
          <div className="selectCatogoryButton">
            <p className="selectCatogoryText">Smoothie</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
