import tw from "tailwind-styled-components";
import React, { useState, useRef, useEffect } from "react";
import audio from "../Song/faded.mp3";
import { HiPlay, HiPause } from "react-icons/hi";

const RowCard = ({ id, name, icon, icon2, img, navigate }) => {
  const [isPlay, setIsPlay] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    audioRef.current.onended = () => {
      setIsPlay(false);
    };
  });

  // const handleAudioPress = () => {
  //   if (isPlay) {
  //     audioRef.current.pause();
  //     setIsPlay(false);
  //   } else {
  //     audioRef.current.play();
  //     setIsPlay(true);
  //   }
  // };
  return (
    <Wrapper>
      <CardWrapper>
        <ImgWidth>
          <img
            src={img}
            alt={name}
            // onClick={() => navigate("/detail")}
            className=" h-16 w-28 cursor-pointer rounded-lg"
          />
        </ImgWidth>
        <Border>
          <Name>
            Song Name<Album>Album</Album>
          </Name>

          {/* <FmListen> */}
          <Listen>
            <audio src={audio} ref={audioRef} />
            {isPlay ? (
              <>
                <Icon onClick={() => setIsPlay(false)}>{icon2}</Icon>
                <Play onClick={() => setIsPlay(false)}>Pause</Play>
              </>
            ) : (
              <>
                <Icon onClick={() => setIsPlay(true)}>{icon}</Icon>
                <Play onClick={() => setIsPlay(true)}>Play</Play>
              </>
            )}
            {/* 
            <audio src={audio} ref={audioRef} />
            <button onClick={() => setIsPlay(!isPlay)}>
              {isPlay ? "Pause" : "Play"}
            </button> */}

            {/* <audio src={audio} controls /> */}
          </Listen>

          <FM>Apply</FM>
          {/* </FmListen> */}
        </Border>
      </CardWrapper>
    </Wrapper>
  );
};
const Wrapper = tw.div` flex justify-center `;
const CardWrapper = tw.div`flex border border-gray-400 shadow-lg rounded-lg md:w-5/6 w-full`;
const ImgWidth = tw.div`w-28`;
const Border = tw.div` w-full flex flex-row items-center`;
const Name = tw.div` md:text-lg text-md text-white ml-2 mr-auto`;
const Album = tw.div`text-gray-400 text-sm`;
const FmListen = tw.div` flex mx-auto`;
const FM = tw.button`text-red-400 flex mr-2`;
const Listen = tw.button`text-secondaryfont-blue flex flex-row mr-4`;
const Icon = tw.button`mt-1 mr-1`;
const Play = tw.button``;

export default RowCard;
