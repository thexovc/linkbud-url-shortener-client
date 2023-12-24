"use client";
import { Metadata } from "next";
import Navbar from "@/components/Home/Navbar";
import Main from "@/components/Home/Main";
import Footer from "@/components/Home/Footer";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full bg-[#0B101B] min-h-screen flex flex-col items-center">
      <title>LinkBud</title>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <Main />
      {/* <Footer /> */}
      <Toaster />
    </div>
  );
}
