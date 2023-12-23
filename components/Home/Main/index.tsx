import { FaLink } from "react-icons/fa6";

export default function index() {
  return (
    <div className="flex-1 w-[95%] bg-[#0B101B]  flex flex-col gap-5 justify-center items-center text-white">
      <h1 className="text-3xl md:text-6xl font-bold text-center">
        Short Links, <span className="text-[#EB568E]">Big Impact.</span>{" "}
      </h1>
      <p className="w-5/6 md:w-1/3 text-center text-[#C9CED6]">
        LinkBud is an efficient and easy-to-use URL shortening service that
        streamlines your online experience.
      </p>

      <div className="my-5 px-2 py-2 md:py-3 md:px-4 border-4 flex items-center gap-1 md:gap-3 border-[#353C4A] rounded-xl md:rounded-3xl text-[#C9CED6]">
        <div className="flex gap-2 md:gap-1 items-center">
          <FaLink className=" text-lg md:text-2xl" />
          <input
            className="bg-transparent placeholder:text-[#C9CED6] outline-none md:text-lg px-0 md:px-4"
            placeholder="Enter the link here"
            type="text"
          />
        </div>

        <button className="bg-indigo-500 hover:bg-indigo-700 md:py-2 md:px-3 p-2 rounded-lg md:rounded-xl font-extrabold md:font-semibold text-sm md:text-lg">
          Shorten
        </button>
      </div>
    </div>
  );
}
