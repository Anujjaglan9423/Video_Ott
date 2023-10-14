import React, { useState, Component } from "react";
import tw from "tailwind-styled-components";
import Footer from "../Components/HomePage/Footer";
import { useTranslation } from "react-i18next";
import Images from "../Images";
import HomeTopbarNew from "../Components/HomePage/HomeTopbarNew";
import { useNavigate } from "react-router-dom";
import SubVideoContainer from "../Components/HomePage/SubVideoContainer";
import { HiPlay } from "react-icons/hi";
import { BiTime } from "react-icons/bi";

const Search = () => {
  const navigate = useNavigate();
  const socialData = [
    {
      id: 1,
      name: "AVENGERS ENDGAME",
      img: Images.Poster1,
      time: "3h 5min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
    {
      id: 2,
      name: "THE ASSASSIN",
      img: Images.Poster2,
      time: "2hr 10min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
    {
      id: 3,
      name: "SEVEN",
      img: Images.Poster3,
      time: "1hr 50min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
    {
      id: 4,
      name: "FREEDOM",
      img: Images.Poster5,
      time: "2hr 23min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
    {
      id: 5,
      name: "BLACK PANTHER",
      img: Images.Poster6,
      time: "2hr 47min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
    {
      id: 6,
      name: "ALADDIN",
      img: Images.Poster7,
      time: "2hr 33min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
    {
      id: 7,
      name: "AVENGERS ENDGAME",
      img: Images.Poster1,
      time: "3h 5min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
    {
      id: 8,
      name: "THE ASSASSIN",
      img: Images.Poster2,
      time: "2hr 10min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
    {
      id: 9,
      name: "SEVEN",
      img: Images.Poster3,
      time: "1hr 50min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
    {
      id: 10,
      name: "FREEDOM",
      img: Images.Poster5,
      time: "2hr 23min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
    {
      id: 11,
      name: "BLACK PANTHER",
      img: Images.Poster6,
      time: "2hr 47min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
    {
      id: 12,
      name: "ALADDIN",
      img: Images.Poster7,
      time: "2hr 33min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
    {
      id: 13,
      name: "AVENGERS ENDGAME",
      img: Images.Poster1,
      time: "3h 5min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
    {
      id: 14,
      name: "THE ASSASSIN",
      img: Images.Poster2,
      time: "2hr 10min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
    {
      id: 15,
      name: "SEVEN",
      img: Images.Poster3,
      time: "1hr 50min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
    {
      id: 16,
      name: "FREEDOM",
      img: Images.Poster5,
      time: "2hr 23min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
    {
      id: 17,
      name: "BLACK PANTHER",
      img: Images.Poster6,
      time: "2hr 47min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
    {
      id: 18,
      name: "ALADDIN",
      img: Images.Poster7,
      time: "2hr 33min",
      icon: <HiPlay />,
      timeicon: <BiTime />,
    },
  ];

  return (
    <Container>
      <HomeTopbarNew />

      <form className=" px-4">
        <div className="relative flex items-center justify-center mt-4  mx-auto  md:w-96">
          {/* <div className="relative flex items-center justify-center mt-4 max-w-7xl mx-auto  md:w-96"> */}
          {/* <div className="flex items-center justify-center"> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full py-3 pl-12 pr-4 text-gray-500 border-b   outline-none bg-secondaryBg-blue  focus:border-indigo-600"
          />
        </div>

        {/* </div> */}
      </form>
      <div className=" flex flex-col items-center justify-center h-96">
        <img className="h-24 w-24" src={Images.Nothing} />
        <h3 className="text-white text-center  font-medium">Type something </h3>
        <p className="text-gray-300  text-center text-xs px-4 mt-2 ">
          To search your favourite Web Series, TV shows, Videos etc..
        </p>
      </div>
      <SubVideoContainer
        data={socialData}
        title="Something You Might Like"
        viewAllLink="/list"
      />
      <Footer />
    </Container>
  );
};

const Container = tw.section`bg-secondaryBg-blue px-4 md:px-6  `;
const Line = tw.div`w-80 h-0.5 mx-auto bg-white`;
const Input = tw.input` flex items-center justify-center w-full    border-b border-gray-200  focus:outline-0   text-md   py-3 px-4 text-black md:text-white leading-tight    `;
const InputGroup = tw.div`relative mt-4  mx-auto w-96  `;
// const InputGroup = tw.div`relative mt-4 max-w-7xl mx-auto w-96  `;
export default Search;
