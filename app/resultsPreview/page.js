"use client";

import Link from "next/link";
import Header from "../../components/Header";
import { usePathname, useRouter } from "next/navigation";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import {
  selectCalories,
  selectId,
  selectProtines,
  selectResults,
  selectSingleSize,
  setResults,
} from "../Redux/slices/category";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "@<components>/components/loading";

export default function selectSize() {
  const pathname = usePathname();
  const result = useSelector(selectResults);
  const selectedSize = useSelector(selectSingleSize);
  const id = useSelector(selectId);
  const calories = useSelector(selectCalories);
  const proteins = useSelector(selectProtines);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  async function handleSubmit() {
    console.log(id, proteins, calories);
    const formData = new FormData();
    formData.append("selected_cat_id", id);
    formData.append("calories", calories);
    formData.append("proteins", proteins);
    formData.append("selected_size", selectedSize);

    try {
      // setLoading(true);

      const response = await axios.post(
        "https://hsicecream.herokuapp.com/api/shuffle",
        formData
      );

      if (response.status === 200) {
        console.log(response.data.collection);
        // setCollection(response.data.collection)
        dispatch(setResults(response.data));
        // router.push("/resultsPreview");
      } else {
        console.error("API error:", response.statusText);
      }
      // setLoading(false);
    } catch (error) {
      // setLoading(false);

      console.error(error);
      alert("Server Error");
    }
  }

  async function handleSubmit1() {
    console.log(selectedSize);
    const formData = new FormData();
    formData.append("save_method_cat_id", id);
    formData.append("save_method_calories", calories);
    formData.append("save_method_proteins", proteins);
    formData.append("save_method_size", selectedSize);
    // formData.append("save_collection", JSON.stringify(result.collection || []));
    formData.append("save_collection", JSON.stringify(result.collection || []));

    try {
      setLoading(true);

      const response = await axios.post(
        "https://hsicecream.herokuapp.com/api/placeOrder",
        formData
      );

      if (response.status === 200) {
        console.log(response.data);
        router.replace("/generateOrder");
      } else {
        console.error("API error:", response.statusText);
      }
    } catch (error) {
      setLoading(false);

      console.error(error);
      alert("Server Error");
    }
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="mainHeight">
          <div
            style={{ height: "100%", overflowX: "hidden" }}
            className="innerContainerWhite flex flex-col overflow-y-auto scrollbar-none"
          >
            <Header url={pathname} />
            <div className="mt-[75px] sm:mt-[55px] flex flex-col justify-between h-full">
              <div className="flex items-center justify-center flex-col text-center">
                <h2 className="text-black font-semibold sm:text-2xl text-3xl font-sans pb-4">
                  Result
                </h2>
                <p className="text-[#60656E] text-sm sm:text-xs font-medium w-[275px] h-[54px] sm:h-auto">
                  View your option, if you do not like it you can shuffle to
                  change the combination.
                </p>
              </div>
              <div className="sm:h-[30vh] mt-[25px] sm:my-[10px]">
                <div className="mx-5 rounded-xl border border-[E8E8E8] ">
                  <div className="flex flex-row justify-between sm:py-[4px] p-2">
                    <p className="font-medium text-sm">Calories</p>
                    {result && result.sum && (
                      <p className="font-medium text-sm">{result.sum}</p>
                    )}
                  </div>
                  <div className="flex flex-row justify-between sm:py-[4px] p-2">
                    <p className="font-medium text-sm">Proteins</p>
                    {result && result.sum && (
                      <p className="font-medium text-sm">
                        {result.sum_proteins}
                      </p>
                    )}
                  </div>
                  <div className=" flex flex-col rounded-xl bg-[#AF9186] text-white sm:items-center pb-[20px] sm:pb-[10px] mt-[8px] sm:mt-[6px] px-3 w-full">
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
                                {`${parseFloat(
                                  ingredient.ingredient_cal
                                ).toFixed(2)} Cal`}
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

                    <button
                      onClick={() => handleSubmit()}
                      className="bg-white rounded-full sm:w-1/2 h-[45px] sm:h-[30px] text-black font-medium text-base"
                    >
                      Shuffle
                    </button>
                  </div>
                </div>
                <div className=" mt-7 w-full sm:max-h-[15vh] h-[120px] bg-[#AF9186] rounded-t-[25px] sm:rounded-t-[15px] z-[1] flex flex-row justify-between">
                  <Link href={"/selectSize"}>
                    <div className="bg-[#AF9186] mx-[18px] my-[30px] py-[11px] sm:py-[7px] flex justify-center items-center rounded-[18px] cursor-pointer">
                      <ChevronLeftIcon className="h-7 sm:h-6 w-7 pt-[3px] pr-1 text-white" />
                      <p className="font-mediums text-lg text-white">
                        Previous
                      </p>
                    </div>
                  </Link>
                  <div
                    onClick={() => handleSubmit1()}
                    className="bg-white w-[178px] mx-[18px] my-[30px] py-[11px] sm:py-[7px] flex justify-center items-center rounded-[18px] text-black cursor-pointer"
                  >
                    <p className="font-mediums text-lg">Continue</p>
                    <ChevronRightIcon className="h-7 w-7 pt-1 pl-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
