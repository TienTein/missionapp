"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import misionitem1 from "@/public/images/missionitem1.png";
import misionitem2 from "@/public/images/missionitem2.jpg";
import misionitem3 from "@/public/images/missionitem3.jpg";

export default function MissionItems() {
  const router = useRouter();
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchLG = useMediaQuery(theme.breakpoints.down("lg"));

  const misssionItems = [
    {
      image: misionitem1,
      title: "3 Bí Ẩn Về Omen Zanis bạn không muốn biết",
      point: "1000 Fpoint",
      slug: "3-Bí-Ẩn-Về-Omen-Zanis-bạn-không-muốn-biết",
    },
    {
      image: misionitem2,
      title: "Zanis Omen | Những kỹ năng khó lãng quên",
      point: "1000 Fpoint",
      slug: "Zanis-Omen-Những-kỹ-năng-khó-lãng-quên",
    },
    {
      image: misionitem3,
      title: "Lật tẩy kỹ năng của Zanis Violet",
      point: "1000 Fpoint",
      slug: "Lật-tẩy-kỹ-năng-của-Zanis-Violet",
    },
    {
      image: misionitem2,
      title: "Zanis Omen | Những kỹ năng khó lãng quên",
      point: "1000 Fpoint",
      slug: "Zanis-Omen-Những-kỹ-năng-khó-lãng-quên",
    },
    {
      image: misionitem3,
      title: "Lật tẩy kỹ năng của Zanis Violet",
      point: "1000 Fpoint",
      slug: "Lật-tẩy-kỹ-năng-của-Zanis-Violet",
    },
  ];

  const handleClick = (slug) => {
    const user = localStorage.getItem("user");
    if (user === null) {
      router.push("/auth");
    } else {
      router.push(`/video/${slug}`);
    }
  };

  return (
    <div className="w-[80vw] mx-auto py-[10vh]">
      <div
        className={`grid gap-6 ${!isMatchMD ? "grid-cols-3" : "grid-cols-1"}`}
      >
        {misssionItems &&
          misssionItems.map((item, idx) => (
            <div
              className={`flex flex-col font-bold justify-between h-[250px] ${
                !isMatchLG && "text-[18px]"
              } ${isMatchMD && "w-[80%] mx-auto mb-4"} `}
              key={idx}
            >
              <div
                className={`w-full h-[70%] ${
                  isMatchMD ? "h-[100%]" : "h-[70%]"
                }`}
              >
                <Image src={item.image} alt="" className="w-full h-[80%]" />
                <p className="font-reggaeone my-4">{item.title}</p>
              </div>
              <div
                className={`flex justify-between items-end ${
                  isMatchMD && "mt-4"
                }`}
              >
                <span className="text-[#E88F08]">{item.point}</span>
                <button
                  className="text-black p-[1px] rounded-md border border-[#FFBD59] hover:text-white hover:bg-[#E88F08]"
                  onClick={() => handleClick(item.slug)}
                >
                  <div className="bg-[#FFBD59] rounded-md border border-black px-4 py-1 hover:bg-[#E88F08] w-full h-full">
                    Xem video
                  </div>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
