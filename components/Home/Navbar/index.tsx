import React from "react";
import { FaLink } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";

export default function index() {
  return (
    <div className="w-[90%] h-20 flex items-center justify-between mx-auto">
      <div className="text-white flex gap-2 items-center">
        <FaLink className="text-3xl" />
        <h1 className=" text-3xl font-semibold">LinkBud</h1>
      </div>

      <div className="text-[#C9CED6]">
        <BiSolidContact className="text-3xl" />
      </div>
    </div>
  );
}
