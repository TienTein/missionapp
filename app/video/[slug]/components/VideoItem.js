"use client";

import React from "react";
import { useMediaQuery, useTheme } from "@mui/material";

const VideoItem = () => {
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div
      className={`grid ${
        isMatchMD ? "grid-cols-1" : "grid-cols-2"
      } gap-4 text-white px-[10vw] py-[5vh]`}
    >
      <div className="flex flex-col [&>*]:mb-4">
        <h1 className="text-[40px] text-center font-reggaeone">
          OUR STORY TASTY TREAT
        </h1>
        <p>
          Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus
          Lorem ipsum dosectetur adipisicing elit at leo dignissim congue.
          Mauris elementum accumsan leo vel tempor. Aliquam et elit eu nunc
          rhoncus viverra quis at felis et netus et malesuada fames ac turpis
          egestas. Aenean commodo ligula eget dolor
        </p>
      </div>
      <iframe
        className="w-full h-[400px] rounded-xl"
        src="https://www.youtube.com/embed/sk1Z-Hqwwog"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoItem;
