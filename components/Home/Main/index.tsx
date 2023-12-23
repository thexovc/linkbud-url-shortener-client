import { FaLink } from "react-icons/fa6";

export default function index() {
  return (
    <div className="w-full flex flex-col gap-5 justify-center items-center text-white my-16 md:my-20">
      <h1 className="text-3xl md:text-6xl font-bold text-center">
        Short Links, <span className="text-[#EB568E]">Big Impact.</span>{" "}
      </h1>
      <p className="w-3/4 md:w-1/3 text-center text-[#C9CED6]">
        Linkly is an efficient and easy-to-use URL shortening service that
        streamlines your online experience.
      </p>

      <div className="my-5 py-3 px-4 border-4 flex items-center gap-3 border-[#353C4A] rounded-3xl text-[#C9CED6]">
        <div className="flex gap-1 items-center">
          <FaLink className="text-2xl" />
          <input
            className="bg-inherit placeholder:text-[#C9CED6] outline-none text-lg px-6"
            placeholder="Enter the link here"
            type="text"
          />
        </div>

        <button className="bg-indigo-500 hover:bg-indigo-700 py-2 px-3 rounded-xl font-semibold text-lg">
          Shorten Url
        </button>
      </div>
    </div>
  );
}
