"use client";

import React, { useState, useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { selectMissions } from "../../../redux/selector";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import useMisison from "../../../../hooks/useMisison";
import CurrentVideo from "./CurrentVideo";
import ProgressMission from "./ProgressMission";

const MissionVideo = () => {
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  const missions = useSelector(selectMissions);
  const router = useRouter();
  const pathname = usePathname();
  const { getMissionDatas } = useMisison();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user === null && pathname !== "/") {
        router.push("/");
      }
    } catch (error) {
      console.log("Error parsing user from local storage:", error);
    }
  }, [pathname]);

  useEffect(() => {
    getMissionDatas();
  }, []);

  const id = +pathname.split("-").pop();
  const [newMission, setNewMission] = useState(null);

  useEffect(() => {
    const mission = missions.data?.find((item) => item.Id === id);
    setNewMission(mission);
  }, [missions, id]);

  return (
    <div
      className={`grid ${
        isMatchMD ? "grid-cols-1" : "grid-cols-2"
      } gap-4 text-white px-[10vw] py-[5vh]`}
    >
      <div className="flex flex-col [&>*]:mb-4">
        <h1 className="text-[30px] font-reggaeone">{newMission?.Title}</h1>
        <p>
          Sed do.Lorem ipsum dolor sit amet, consectetur Nulla fringilla purus
          Lorem ipsum dosectetur adipisicing elit at leo dignissim congue.
          Mauris elementum accumsan leo vel tempor. Aliquam et elit eu nunc
          rhoncus viverra quis at felis et netus et malesuada fames ac turpis
          egestas. Aenean commodo ligula eget dolor
        </p>
      </div>
      <div className="flex flex-col w-full">
        <ProgressMission isPaused={isPaused} newMission={newMission} />
        <CurrentVideo newMission={newMission} setIsPaused={setIsPaused} />
      </div>
    </div>
  );
};

export default MissionVideo;
