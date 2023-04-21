"use client";
import Link from "next/link";
import Header from "../../components/Header";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Requirments() {
  const pathname = usePathname();
  const [calories, setCalories] = useState("");
  const [proteins, setProteins] = useState("");
  const [caloriesValid, setCaloriesValid] = useState(true);
  const [proteinsValid, setProteinsValid] = useState(true);
  const [data, setData] = useState(null);
  const router = useRouter();

  function validateInputs() {
    let valid = true;
    const caloriesRegex = /^[0-9\b]+$/;
    const proteinsRegex = /^[0-9\b]+$/;
    if (calories === "" || !caloriesRegex.test(calories)) {
      setCaloriesValid(false);
      valid = false;
    }
    if (proteins === "" || !proteinsRegex.test(proteins)) {
      setProteinsValid(false);
      valid = false;
    }
    return valid;
  }

  async function handleSubmit() {
    if (validateInputs()) {
      // call the postData function with the form data
      const formData = new FormData();
      formData.append("calories", calories);
      formData.append("proteins", proteins);

      try {
        const response = await axios.post(
          "http://hsicecream.herokuapp.com/api/requirements",
          formData
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
        alert("Server Error");
      }
    }
  }

  function handleClick() {
    handleSubmit();
    router.push({
      pathname: "/selectCategory",
      query: data,
    });
  }

  return (
    <div className="mainHeight">
      <div className="innerContainerWhite flex flex-col justify-between">
        <Header url={pathname} />
        <div className="px-5 mt-[75px] sm:mt-[55px]">
          <div className="flex items-center justify-center flex-col text-center">
            <h2 className="text-black font-semibold sm:text-lg text-2xl font-sans pb-4">
              {/* <h1>Current URL: {pathname}</h1> */}
              Input Requirements
            </h2>
            <p className="text-[#60656E] text-sm font-medium w-[275px] h-[54px]">
              Either enter Calories required or Proteins Required or BOTH
            </p>
          </div>

          <div>
            <p className="text-black font-medium text-lg mt-[20px] mb-[10px]">
              Calories
            </p>
            <input
              className={`min-h-[64px] sm:min-h-[8vh] w-full rounded-[10px] bg-[#F4F2FF] pl-4 outline-none text-[#9E9E9E] ${
                !caloriesValid && "border-2 border-red-500"
              }`}
              placeholder="Enter Calories"
              value={calories}
              onChange={(e) => {
                setCalories(e.target.value);
                setCaloriesValid(true);
              }}
            />
            {!caloriesValid && (
              <p className="text-red-500 text-sm">
                Please enter calories in numbers.
              </p>
            )}
          </div>
          <div>
            <p className="text-black font-medium text-lg mt-[20px] mb-[10px]">
              Protien
            </p>
            <input
              className={`min-h-[64px] sm:min-h-[8vh] w-full rounded-[10px] bg-[#F4F2FF] pl-4 outline-none text-[#9E9E9E] ${
                !proteinsValid && "border-2 border-red-500"
              }`}
              placeholder="Enter Protein"
              value={proteins}
              onChange={(e) => {
                setProteins(e.target.value);
                setProteinsValid(true);
              }}
            />
            {!proteinsValid && (
              <p className="text-red-500 text-sm">
                Please enter proteins in numbers.
              </p>
            )}
          </div>
        </div>
        <div className="w-full sm:max-h-[15vh] h-[120px] bg-[#7264E4] rounded-t-[25px] sm:rounded-t-[15px] z-[1] flex flex-row justify-between">
          <Link href={"/"}>
            <div className="bg-[#7264E4] mx-[18px] my-[30px] py-[11px] sm:py-[7px] flex justify-center items-center rounded-[18px] cursor-pointer">
              <ChevronLeftIcon className="h-7 w-7 pt-[3px] pr-1 text-white" />
              <p className="font-mediums text-lg text-white">Previous</p>
            </div>
          </Link>
          {/* <Link
            href={{
              pathname: "/selectCategory",
              query: data,
            }}
          > */}
          <button
            className="bg-white hover:bg-[#5e53b5] hover:text-white w-[178px] mx-[18px] my-[30px] py-[11px] sm:py-[7px] flex justify-center items-center rounded-[18px] text-black cursor-pointer"
            onClick={handleClick}
          >
            <p className="font-mediums text-lg">Continue</p>
            <ChevronRightIcon className="h-7 w-7 pt-1 pl-1" />
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
