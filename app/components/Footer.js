"use client";
import React from "react";
import Image from "next/image";
import footerBg from "@/public/images/missionbg.jpg";
import logo from "../../public/images/logo.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="w-full relative h-[50vh]">
      <Image src={footerBg} alt="" className="w-full h-full" />
      <div className="bg-black w-full h-full top-0 left-0 absolute bg-opacity-80 flex flex-col items-center justify-around pt-[2%] px-[3%]">
        <Image src={logo} alt="" className="h-20 w-[300px]" />
        <div className="flex [&>*]:bg-[#FEBD2E] [&>*]:p-2 [&>*]:rounded-full [&>*]:text-[40px] [&>*]:mx-2">
          <FacebookOutlinedIcon />
          <YouTubeIcon />
          <InstagramIcon />
        </div>
        <div className="font-reggaeone text-white">
          Copyright © 2023 Tasty Treat
        </div>
      </div>
    </div>
  );
};

export default Footer;
