import { FaLink } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";
import ContactModal from "../../Common/contactModal/Index";
import Link from "next/link";

export default function Index({ setToggle, toggle }: any) {
  return (
    <div className="w-[90%] h-20 flex items-center justify-between mx-auto">
      <Link href={"/"}>
        <div className="text-white flex gap-2 items-center">
          <FaLink className="text-3xl" />
          <h1 className=" text-3xl font-semibold">LinkBud</h1>
        </div>
      </Link>

      <div
        className="text-[#C9CED6] hover:text-indigo-400 cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <BiSolidContact className="text-3xl" />
      </div>

      {toggle && <ContactModal setToggle={setToggle} />}
    </div>
  );
}
