"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import useMisison from "@/hooks/useMisison";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useMediaQuery, useTheme } from "@mui/material";
import { selectMissions } from "../../../redux/selector";
import NextArrow from "@/public/images/NextArrrow.png";
import PrevArrow from "@/public/images/PreviosArrow.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/RelatedVideos.scss";

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow next-arrow" onClick={onClick}>
      <Image src={NextArrow} alt="" />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow prev-arrow" onClick={onClick}>
      <Image src={PrevArrow} alt="" />
    </div>
  );
}

const RelatedVideos = () => {
  const router = useRouter();
  const theme = useTheme();
  const isMatchMD = useMediaQuery(theme.breakpoints.down("md"));
  const missions = useSelector(selectMissions);
  const { getMissionDatas } = useMisison();
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    getMissionDatas();
  }, []);

  const newMissions = missions.data?.filter(
    (item) => item.CategoriesCampaignId === 4
  );

  const handleClick = (item) => {
    router.push(`/video/${item.TitleLink}-${item.Id}`);
  };

  const settings = {
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: isMatchMD ? 1 : 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSlideIndex(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-full">
      <div className="slider">
        <Slider {...settings}>
          {newMissions &&
            newMissions.map((mission) => (
              <div className="slide" key={mission.Id}>
                <Image
                  src={mission.ImagePath}
                  alt=""
                  className="hover:scale-105 transition duration-500 hover:transition hover:duration-500"
                  width={500}
                  height={0}
                  onClick={() => handleClick(mission)}
                />
                <p
                  className="text-white font-bold mt-4"
                  onClick={() => handleClick(mission)}
                >
                  {mission.Title}
                </p>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default RelatedVideos;
