"use client";
import { usePathname, useRouter } from "next/navigation";
import {
  selectCalories,
  selectId,
  selectProtines,
  selectResults,
  selectSingleSize,
  setResults,
} from "../Redux/slices/category";
import Link from "next/link";
import QRCode from "react-qr-code";
import Header from "../../components/Header";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";

export default function selectSize() {
  const pathname = usePathname();
  const result = useSelector(selectResults);
  const selectedSize = useSelector(selectSingleSize);
  const id = useSelector(selectId);
  const calories = useSelector(selectCalories);
  const proteins = useSelector(selectProtines);
  const router = useRouter();
  const handlSubmit = () => {
    router.replace("./requirements");
  };
  return (
    <div className="mainHeight">
      <div
        style={{ height: "100%", overflowX: "hidden" }}
        className="innerContainerWhite flex flex-col overflow-y-auto scrollbar-none"
      >
        <Header url={pathname} />
        <div className="mt-[75px] sm:mt-[55px]">
          <div className="flex items-center justify-center flex-col text-center">
            <h2 className="text-black font-semibold sm:text-2xl text-3xl font-sans pb-4">
              Your Result
            </h2>
            <p className="text-[#60656E] text-sm sm:text-xs font-medium w-[275px] h-[54px] sm:h-auto">
              Show this at the counter
            </p>
          </div>
          <QRCode
            value={`Protiens:${proteins}  Calories:${calories}`}
            // size={256}
            style={{
              //   // height: 168,
              //   marginBottom: 20,
              //   maxWidth: "100%",
              width: "100%",
            }}
            // viewBox={`0 0 256 256`}
            className="sm:h-[100px] sm:w-[100px] sm:mt-[5px] h-[100px] sm:mb-5"
          />

          <div className="sm:h-[30vh] mt-[25px]">
            <div className="mx-5 rounded-xl border border-[#E8E8E8] ">
              <div className="flex flex-row justify-between sm:py-[4px] p-2">
                <p className="font-medium text-sm">Calories</p>
                {result && result.sum && (
                  <p className="font-medium text-sm">{result.sum}</p>
                )}
              </div>
              <div className="flex flex-row justify-between sm:py-[4px] p-2">
                <p className="font-medium text-sm">Proteins</p>
                {result && result.sum && (
                  <p className="font-medium text-sm">{result.sum_proteins}</p>
                )}
              </div>
              <div className="flex flex-col rounded-xl bg-[#AF9186] text-white justify-between sm:items-center pb-[10px] mt-[8px] sm:mt-[6px] px-3 w-full">
                <div className="flex flex-col w-full py-3 sm:py-1 border-b-2 border-solid border-white border-opacity-22">
                  <p className=" font-bold text-base ">Base</p>
                  {result &&
                    result.collection &&
                    result.collection[0] &&
                    result.collection[0].map((ingredient, i) => (
                      <div key={i}>
                        <p className=" font-semibold text-sm">
                          {ingredient.ingredient}
                        </p>
                        <div className="flex flex-row w-full justify-between">
                          <p className=" font-normal text-xs">Calories</p>
                          <p className=" font-normal text-xs">
                            {`${ingredient.ingredient_cal} Cal`}
                          </p>
                        </div>
                        <div className="flex flex-row w-full justify-between">
                          <p className=" font-normal text-xs">Proteins</p>
                          <p className=" font-normal text-xs">
                            {`${ingredient.ingredient_protein} g`}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="flex flex-col w-full py-3 sm:py-1 border-b-2 border-solid border-white border-opacity-22">
                  <p className=" font-bold text-base ">Fruit</p>
                  {result &&
                    result.collection &&
                    result.collection[1] &&
                    result.collection[1].map((ingredient, i) => (
                      <div key={i}>
                        <p className=" font-semibold text-sm">
                          {ingredient.ingredient}
                        </p>
                        <div className="flex flex-row w-full justify-between">
                          <p className=" font-normal text-xs">Calories</p>
                          <p className=" font-normal text-xs">
                            {`${parseFloat(ingredient.ingredient_cal).toFixed(
                              2
                            )} Cal`}
                          </p>
                        </div>
                        <div className="flex flex-row w-full justify-between">
                          <p className=" font-normal text-xs">Proteins</p>
                          <p className=" font-normal text-xs">
                            {`${ingredient.ingredient_protein} g`}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="flex flex-col w-full py-3 sm:py-1 border-b-2 border-solid border-white border-opacity-22">
                  <p className=" font-bold text-base ">Dry</p>
                  {result &&
                    result.collection &&
                    result.collection[2] &&
                    result.collection[2].map((ingredient, i) => (
                      <div key={i}>
                        <p className=" font-semibold text-sm">
                          {ingredient.ingredient}
                        </p>
                        <div className="flex flex-row w-full justify-between">
                          <p className=" font-normal text-xs">Calories</p>
                          <p className=" font-normal text-xs">
                            {`${ingredient.ingredient_cal} Cal`}
                          </p>
                        </div>
                        <div className="flex flex-row w-full justify-between">
                          <p className=" font-normal text-xs">Proteins</p>
                          <p className=" font-normal text-xs">
                            {`${ingredient.ingredient_protein} g`}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="flex flex-col w-full py-3 sm:py-1 pt-3 pb-7 sm:pb-3">
                  <p className=" font-bold text-base ">Other</p>
                  {result &&
                    result.collection &&
                    result.collection[3] &&
                    result.collection[3].map((ingredient, i) => (
                      <div key={i}>
                        <p className=" font-semibold text-sm">
                          {ingredient.ingredient}
                        </p>
                        <div className="flex flex-row w-full justify-between">
                          <p className=" font-normal text-xs">Calories</p>
                          <p className=" font-normal text-xs">
                            {`${ingredient.ingredient_cal} Cal`}
                          </p>
                        </div>
                        <div className="flex flex-row w-full justify-between">
                          <p className=" font-normal text-xs">Proteins</p>
                          <p className=" font-normal text-xs">
                            {`${ingredient.ingredient_protein} g`}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className=" mt-7 w-full sm:max-h-[15vh] h-[120px] bg-[#AF9186] rounded-t-[25px] sm:rounded-t-[15px] z-[1] flex justify-center items-center">
              <div
                onClick={() => handlSubmit()}
                className="bg-white w-[320px] sm:w-[230px] mx-[18px] my-[30px] py-[11px] sm:py-[7px] flex justify-center items-center rounded-[18px] text-black cursor-pointer"
              >
                <ChevronLeftIcon className="h-7 w-7  pt-1 pl-1" />
                <p className="font-mediums text-base ">Generate new order</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
