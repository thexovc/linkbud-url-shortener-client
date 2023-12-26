"use client";
import { BACKEND_URL } from "../../constants/config";
import axios from "axios";
import { useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function Page({ params }: { params: { slug: string } }) {
  const redirectUrl = async () => {
    const res = await axios.get(`${BACKEND_URL}/shortener/${params.slug}`);
    console.log(res);
    if (res.data) {
      window.location.href = res.data.url;
    }
  };

  useEffect(() => {
    redirectUrl();
  });

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <h1 className="flex gap-2 items-center text-4xl font-semibold">
        <span>
          {" "}
          <ThreeDots
            visible={true}
            height="60"
            width="60"
            color="#4B0082"
            radius="12"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </span>
      </h1>
    </div>
  );
}
