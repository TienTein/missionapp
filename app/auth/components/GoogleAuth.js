"use client";

import React from "react";
import { useSession, signIn } from "next-auth/react";
import Image from "next/image";
import GoogleIcon from "../../../public/images/google-icon.png";

const GoogleAuth = () => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <>
        <button
          onClick={() => signIn()}
          className="flex items-center font-bold justify-center border-2 border-black rounded-md px-4 py-2 hover:bg-black hover:text-white"
        >
          <Image src={GoogleIcon} alt="" className="h-full w-5 mr-2" />
          Đăng nhập bằng Google
        </button>
      </>
    );
  }
};

export default GoogleAuth;
