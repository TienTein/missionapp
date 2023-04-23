"use client";
import React, { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const CurrentVideo = ({ newMission, setIsPaused }) => {
  const playerRef = useRef(null);

  const handleReady = () => {
    const player = playerRef.current;
    if (player) {
      player.seekTo(0);
    }
  };

  const handlePause = () => {
    setIsPaused(true);
  };

  const handlePlaying = (playing) => {
    setIsPaused(!playing);
  };

  return (
    <div className="w-full">
      <ReactPlayer
        url={`https://www.youtube.com/embed/${newMission?.Link}`}
        width="100%"
        playing
        onReady={handleReady}
        onPause={handlePause}
        onPlay={() => handlePlaying(true)}
        onEnded={() => handlePlaying(false)}
        refs={playerRef}
        config={{
          youtube: {
            playerVars: {
              origin: "http://localhost:3000",
            },
          },
        }}
      />
    </div>
  );
};

export default CurrentVideo;
