import { Metadata } from "next";
import Navbar from "@/components/Home/Navbar";
import Main from "@/components/Home/Main";

export const metadata: Metadata = {
  title: "LinkBud",
};

export default function Home() {
  return (
    <div className="w-full bg-[#0B101B] min-h-screen">
      <Navbar />
      <Main />
    </div>
  );
}
