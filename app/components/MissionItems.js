"use client";

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectMissions } from "../redux/selector";
import { useRouter } from "next/navigation";
import { useMediaQuery, useTheme } from "@mui/material";
import useMisison from "../../hooks/useMisison";
import Image from "next/image";

export default function MissionItems() {
  const router = useRouter();
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  const isMatchLG = useMediaQuery(theme.breakpoints.down("lg"));
  const missions = useSelector(selectMissions);
  const { getMissionDatas } = useMisison();

  useEffect(() => {
    getMissionDatas();
  }, []);

  const handleClick = (item) => {
    const user = localStorage.getItem("user");
    if (user === null) {
      router.push("/auth");
    } else {
      router.push(`/video/${item.TitleLink}-${item.Id}`);
    }
  };
  const newMissions = missions.data?.filter(
    (item) => item.CategoriesCampaignId === 4
  );

  return (
    <div className="px-[10vw] py-[10vh]">
      <div
        className={`grid gap-6 [&>*]:mb-4 ${
          isMatchMD ? "grid-cols-1" : isMatchLG ? "grid-cols-2" : "grid-cols-3"
        }`}
      >
        {newMissions &&
          newMissions.map((item) => (
            <div key={item.Id}>
              <div className={`h-[60%]`}>
                <Image
                  src={item?.ImagePath}
                  alt=""
                  className="h-full w-full"
                  width={500}
                  height={500}
                />
              </div>

              <div className={`flex flex-col justify-between h-[40%]`}>
                <p className="font-reggaeone pt-2 px-2">{item.Title}</p>

                <div className="flex justify-between items-end pb-2 px-2">
                  <span className="text-[#E88F08] font-bold">
                    {item.FpointValue} Fpoint
                  </span>
                  <button
                    className="text-black p-[1px] rounded-md border border-[#FFBD59] hover:text-white hover:bg-[#E88F08]"
                    onClick={() => handleClick(item)}
                  >
                    <div className="bg-[#FFBD59] rounded-md border border-black px-4 py-1 hover:bg-[#E88F08] w-full h-full">
                      Xem video
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
