import Link from "next/link";

export default function selectSize() {
  return (
    <div className="main">
      <div className="innerContainer px-5 flex flex-col justify-between">
        <div>
          <h2 className="heading">Result</h2>
          <p className="text pb-6">
            View your option, if you do not like it you can shuffle to change
            the combination.
          </p>

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

      
            <button className="button mt-7 bg-transparent border font-semibold border-black text-black hover:bg-black hover:text-white">Shuffle</button>
 
        </div>

        <div>
          <Link href={"/generateOrder"}>
            <button className="button mb-3">Generate Order</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
