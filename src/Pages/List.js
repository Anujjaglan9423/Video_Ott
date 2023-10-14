import React, { useState, useRef, useEffect } from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/HomePage/Footer";
import Images from "../Images";
import HomeTopbarNew from "../Components/HomePage/HomeTopbarNew";
import SubVideoContainer from "../Components/HomePage/SubVideoContainer";
import { HiPlay } from "react-icons/hi";
import { BiTime } from "react-icons/bi";
import HorizontalCard from "../Components/HorizontalCard";

const List = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      name: "CAPTAIN AMERICA",
      img: Images.Movie20,
      time: "3hr 5min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
    {
      id: 2,
      name: "GRAVITY",
      img: Images.Movie21,
      time: "2hr 10min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
    {
      id: 3,
      name: "X-MEN APOCALYPSE",
      img: Images.Movie22,
      time: "1hr 50min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
    {
      id: 4,
      name: "Pride Prejudice Zombies",
      img: Images.Movie23,
      time: "2hr 23min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
    {
      id: 5,
      name: "ENDER'S GAME",
      img: Images.Movie24,
      time: "2hr 47min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
    {
      id: 6,
      name: "THE LORDS OF THE RING",
      img: Images.Movie6,
      time: "2hr 33min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
    {
      id: 7,
      name: "NIGHTMARE ALLEY",
      img: Images.Movie19,
      time: "3h 5min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
    {
      id: 8,
      name: "TIME IS THE ENEMY",
      img: Images.Movie8,
      time: "2hr 10min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
    {
      id: 9,
      name: "AVATAR",
      img: Images.Movie9,
      time: "1hr 50min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
    {
      id: 10,
      name: "MOANA",
      img: Images.Movie10,
      time: "2hr 23min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
    {
      id: 11,
      name: "STOP THE WAR",
      img: Images.Movie11,
      time: "2hr 47min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
    {
      id: 12,
      name: "TRANSQUILITY of BLOOD",
      img: Images.Movie12,
      time: "2hr 33min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
    {
      id: 13,
      name: "LET ME IN",
      img: Images.Movie13,
      time: "3h 5min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
    {
      id: 14,
      name: "THE REVEREND",
      img: Images.Movie14,
      time: "2hr 10min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
    {
      id: 15,
      name: "OBLIVION",
      img: Images.Movie15,
      time: "1hr 50min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
    {
      id: 16,
      name: "TITANIC",
      img: Images.Movie16,
      time: "2hr 23min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
    {
      id: 17,
      name: "ACTION",
      img: Images.Movie17,
      time: "2hr 47min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
    {
      id: 18,
      name: "THE IMPOSSIBLE",
      img: Images.Movie18,
      time: "2hr 33min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
      eligible: true,
    },
  ];

  return (
    <Container>
      <HomeTopbarNew />

      {/* <h3 className="text-white font-md text-2xl font-semibold  max-w-7xl md:mx-auto mt-8 mb-6 ml-2 mr-2"> */}
      <h3 className="text-white font-md text-2xl font-semibold   md:mx-auto mt-8 mb-6 ml-2 mr-2">
        Similar Videos
      </h3>
      <CardContainer>
        {data.map((item) => (
          <HorizontalCard key={item.id} {...item} navigate={navigate} />
        ))}
      </CardContainer>

      <Footer />
    </Container>
  );
};

// const Container = tw.section`bg-secondaryBg-blue overflow-y-auto  overflow-x-hidden  `;
const Container = tw.section`bg-secondaryBg-blue justify-between mx-auto  text-white  font-medium  px-4 md:px-6 mx-auto  sm:items-center     `;
// const CardGroup = tw.div`relative middle-carousel h-40 w-100  m-4  md:h-40 md:w-40  overflow-hidden  `;
const CardGroup = tw.div`bg-secondaryBg-blue `;
const CardContainer = tw.div`grid  grid-cols-2  sm:grid-cols-3 md:grid-cols-5 gap-x-5 gap-y-8   md:mx-auto mt-4   ml-2 mr-2 cursor-pointer `;
// const CardContainer = tw.div`grid  grid-cols-2  sm:grid-cols-3 md:grid-cols-5 gap-x-5 gap-y-8 max-w-7xl  md:mx-auto mt-4   ml-2 mr-2 cursor-pointer `;
const ImgGroup = tw.div`bg-gradient-to-b from-black to to-grey-500 transition duration-500 ease-in-out transform hover:-translate-y-1 cursor-pointer hover:scale-110 w-full h-full opacity-80 backdrop-brightness-50 backdrop-contrast-120`;
const Icon = tw.div`  text-sm  text-white md:text-xl  `;
const Name = tw.div` text-sm text-white   md:text-sm  `;
const Time = tw.div` text-xs text-white  md:text-md `;
const TimeIcon = tw.div` text-xs text-white  md:text-md `;
const TimeGroup = tw.div`absolute flex top-1 right-2 w-full justify-end items-center`;
const NameGroup = tw.div`absolute flex left-0 bottom-3 w-full justify-center pl-1.5 items-center`;
export default List;
