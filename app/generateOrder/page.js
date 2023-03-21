"use client";

import Link from "next/link";
import QRCode from "react-qr-code";
import Header from "../../components/Header";

export default function selectSize() {
  return (
    <div className="main">
            <Header />

      <div className="innerContainer px-5 flex flex-col justify-between">
        <div>
          <h2 className="heading">Your Results</h2>
          <p className="text pb-6">Show this at the counter</p>

          <QRCode
            value="Walnut, Ce, Apple, Orange, Milk"
            size={256}
            style={{ height: 280, marginBottom:20, maxWidth: "100%", width: "100%" }}
            viewBox={`0 0 256 256`}
          />

          <div className="flex flex-col gap-y-4 w-full">
            <div className="flex w-full">
              <h3 className="w-1/4 text-black font-bold text-lg">Other</h3>
              <p className="w-full text-black text-lg">Walnut</p>
            </div>

            <div className="flex w-full">
              <h3 className="w-1/4 text-black font-bold text-lg">Dry</h3>
              <p className="w-full text-black text-lg">Ce</p>
            </div>

            <div className="flex w-full">
              <h3 className="w-1/4 text-black font-bold text-lg">Fruit</h3>
              <p className="w-full text-black text-lg">Apple, Orange</p>
            </div>

            <div className="flex w-full">
              <h3 className="w-1/4 text-black font-bold text-lg">Base</h3>
              <p className="w-full text-black text-lg">Milk</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link href={"/"}>
            <button className="button mb-3">Return</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
