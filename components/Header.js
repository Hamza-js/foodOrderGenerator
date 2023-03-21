import { BeakerIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

const header = () => {
  const router = useRouter();

  function handleGoBack() {
    router.back();
  }

  return (
    <div
      onClick={handleGoBack}
      className="w-full cursor-pointer sm:max-w-[360px] h-12 pl-2 border-b border-b-gray-200"
    >
      <div className="flex items-center h-full">
        <ChevronLeftIcon className="h-4" />
        <p>Back</p>
      </div>
    </div>
  );
};

export default header;
