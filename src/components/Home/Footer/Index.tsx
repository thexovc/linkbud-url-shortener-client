import { MdDarkMode } from "react-icons/md";
import { IoMdShare, IoMdSunny } from "react-icons/io";

export default function Index() {
  return (
    <div className="relative py-10">
      {/* Blurred overlay at the bottom */}
      <div className="fixed w-2/3 md:w-1/4 mx-auto inset-x-0 bottom-0 mb-5 md:mb-10 rounded-full overflow-hidden">
        {/* Pseudo-element for the blurred background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-[#4a5a7b] filter blur-2xl"
          style={{ zIndex: -1 }}
        ></div>

        {/* Content inside the blurred overlay */}
        <div className="relative h-full flex items-end justify-evenly p-2 text-[#C9CED6]">
          <div className="p-1 md:p-2 bg-indigo-700 rounded-full hover:bg-gray-700 hover:rounded-full cursor-pointer">
            <MdDarkMode className="text-4xl text-white" />
          </div>
          <div className="p-1 md:p-2 hover:bg-indigo-700 hover:rounded-full cursor-pointer">
            <IoMdSunny className="text-4xl" />
          </div>
          <div className="p-1 md:p-2 hover:bg-indigo-700 hover:rounded-full cursor-pointer">
            <IoMdShare className="text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
