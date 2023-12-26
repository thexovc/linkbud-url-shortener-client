import me from "../../assets/me.jpg";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";

export default function Index({ setToggle }: any) {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full select-none z-50">
      <div className="md:w-2/5 w-[90%] min-h-[20vh] mx-auto bg-slate-700 rounded-lg p-5  text-neutral-100">
        <div
          className="w-full flex justify-end"
          onClick={() => setToggle(false)}
        >
          <FaWindowClose className="text-2xl cursor-pointer hover:text-red-500" />
        </div>
        <Image
          className=" border-4 border-slate-200 w-20 h-20 md:w-28 md:h-28 rounded-full mx-auto object-cover object-top"
          src={me}
          alt={"me"}
        />

        <h1 className="text-center mt-2 font-semibold md:text-xl">
          @danielOsariemen
        </h1>

        <p className="text-center mt-2 text-slate-200 md:text-md text-xs">
          Full Stack Software Engineer | Nodejs | React Developer | Docker |
          Nestjs | Express | Django | JavaScript | TypeScript | Solidity
        </p>

        <h1 className="text-center mt-2 font-semibold  md:text-xl">
          connect with me @
        </h1>
        {/* socials */}
        <div className="w-full px-2 md:px-4 mt-2 space-y-3 ">
          <a
            href="https://twitter.com/thexovc"
            target="_blank"
            className="flex hover:bg-gray-400 cursor-pointer gap-2 md:gap-4 items-center justify-center text-neutral-800 bg-neutral-200 w-full md:w-4/5 mx-auto md:p-2 p-1 rounded-lg"
          >
            <FaSquareXTwitter class="text-2xl" />
            <p className="text-center font-semibold ">@thexovc</p>
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-osariemen-095772210/"
            target="_blank"
            className="flex hover:bg-gray-400 cursor-pointer gap-2 md:gap-4 items-center justify-center text-neutral-800 bg-neutral-200 w-full md:w-4/5 mx-auto md:p-2 p-1 rounded-lg"
          >
            <FaLinkedin class="text-2xl" />
            <p className="text-center font-semibold ">@danielOsariemen</p>
          </a>
          <a
            href="https://github.com/thexovc"
            target="_blank"
            className="flex hover:bg-gray-400 cursor-pointer gap-2 md:gap-4 items-center justify-center text-neutral-800 bg-neutral-200 w-full md:w-4/5 mx-auto md:p-2 p-1 rounded-lg"
          >
            <FaGithub class="text-2xl" />
            <p className="text-center font-semibold ">@thexovc</p>
          </a>
          <a
            href="https://wa.me/2348103312533"
            target="_blank"
            className="flex hover:bg-gray-400 cursor-pointer gap-2 md:gap-4 items-center justify-center text-neutral-800 bg-neutral-200 w-full md:w-4/5 mx-auto md:p-2 p-1 rounded-lg"
          >
            <IoLogoWhatsapp class="text-2xl" />
            <p className="text-center font-semibold">+2348103312533</p>
          </a>
          <a
            href="mailto:osazeepeter79@gmail.com"
            target="_blank"
            className="flex hover:bg-gray-400 cursor-pointer gap-2 md:gap-4 items-center justify-center text-neutral-800 bg-neutral-200 w-full md:w-4/5 mx-auto md:p-2 p-1 rounded-lg"
          >
            <MdEmail class="text-2xl" />
            <p className="text-center font-semibold">osazeepeter79@gmail.com</p>
          </a>
        </div>
        {/* socials */}
      </div>
    </div>
  );
}
