import { BACKEND_URL } from "../../../constants/config";
import axios from "axios";
import { useState } from "react";
import { FaLink } from "react-icons/fa6";
import { ThreeDots } from "react-loader-spinner";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";

export default function Index() {
  const [linkText, setLinkText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    setIsLoading(true);
    // console.log(`ddkjd, ${BACKEND_URL}/shortener/shorten`);
    try {
      const res = await axios.post(`${BACKEND_URL}/shortener/shorten`, {
        originalUrl: linkText,
      });

      const shortenUrl = window.location.href + `su/${res.data}`;
      console.log(shortenUrl);

      setResult(shortenUrl);
      setLinkText("");
      setIsLoading(false);
    } catch (error) {
      setLinkText("");
      setIsLoading(false);
      console.log(error);
    }
  };

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
          {result ? (
            <input
              disabled
              className="bg-transparent blur-[0.5px] placeholder:text-[#C9CED6] outline-none md:text-lg px-0 md:px-4"
              value={result}
              type="text"
            />
          ) : (
            <input
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
              className="bg-transparent placeholder:text-[#C9CED6] outline-none md:text-lg px-0 md:px-4"
              placeholder="Enter the link here"
              type="text"
            />
          )}
        </div>

        {result ? (
          <button
            onClick={() => {
              copy(result);
              toast.success("copied!");
              setResult("");
            }}
            className="bg-orange-500 hover:bg-orange-700 md:py-2 md:px-3 p-2 rounded-lg md:rounded-xl font-extrabold md:font-semibold text-sm md:text-lg"
          >
            Copy
          </button>
        ) : (
          <>
            {" "}
            {isLoading ? (
              <div className="bg-indigo-500 hover:bg-indigo-700 md:py-2 md:px-3 p-2 rounded-lg md:rounded-xl font-extrabold md:font-semibold text-sm md:text-lg">
                {" "}
                <ThreeDots
                  visible={true}
                  height="20"
                  width="40"
                  color="#C9CED6"
                  radius="8"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ) : (
              <button
                onClick={handleSubmit}
                className="bg-indigo-500 hover:bg-indigo-700 md:py-2 md:px-3 p-2 rounded-lg md:rounded-xl font-extrabold md:font-semibold text-sm md:text-lg"
              >
                Shorten
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
