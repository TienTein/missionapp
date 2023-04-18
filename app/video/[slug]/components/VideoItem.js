"use client";

import React, { useRef, useState, useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { selectMissions } from "../../../redux/selector";
import { usePathname } from "next/navigation";
import ReactPlayer from "react-player";
import useMisison from "../../../../hooks/useMisison";

const VideoItem = () => {
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  const missions = useSelector(selectMissions);
  const pathname = usePathname();
  const { getMissionDatas } = useMisison();

  useEffect(() => {
    getMissionDatas();
    handleReady;
  }, []);

  const id = +pathname.split("-").pop();
  const [newMission, setNewMission] = useState(null);

  useEffect(() => {
    const mission = missions.data?.find((item) => item.Id === id);
    setNewMission(mission);
  }, [missions, id]);

  const playerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const player = playerRef.current;
    if (player) {
      player.seekTo(0);
    }
  }, []);

  function handleReady() {
    setIsReady(true);
    const player = playerRef.current;
    if (player) {
      player.seekTo(0);
    }
  }

  const handleProgress = (state) => {
    if (currentTime < 15) {
      setCurrentTime(state.playedSeconds);
    }
  };

  const progressWidth = `${(currentTime / 15) * 100}%`;
  return (
    <div
      className={`grid ${
        isMatchMD ? "grid-cols-1" : "grid-cols-2"
      } gap-4 text-white px-[10vw] py-[5vh]`}
    >
      {newMission && (
        <>
          <div className="flex flex-col [&>*]:mb-4">
            <h1 className="text-[30px] font-reggaeone">{newMission?.Title}</h1>
            <p>
              Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla
              purus Lorem ipsum dosectetur adipisicing elit at leo dignissim
              congue. Mauris elementum accumsan leo vel tempor. Aliquam et elit
              eu nunc rhoncus viverra quis at felis et netus et malesuada fames
              ac turpis egestas. Aenean commodo ligula eget dolor
            </p>
          </div>
          <div className="flex flex-col w-full items-center">
            {currentTime < 15 ? (
              <div className="w-full h-5 bg-gray-500 rounded-lg">
                <div
                  className="h-full bg-[#FFBD59] max-w-full rounded-lg"
                  style={{
                    width: progressWidth,
                  }}
                ></div>
              </div>
            ) : (
              <button className="text-[#FFBD59] bg-green-200 my-2 font-bold">
                <div className="w-full h-full py-2 px-4 border border-black mt-2">
                  Nhận Fpoint
                </div>
              </button>
            )}
            <ReactPlayer
              url={`https://www.youtube.com/embed/${newMission?.Link}`}
              width="100%"
              onProgress={handleProgress}
              playing={isReady}
              onReady={handleReady}
              ref={playerRef}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default VideoItem;
