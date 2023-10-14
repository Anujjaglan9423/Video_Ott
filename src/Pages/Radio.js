import React, { useState, useRef, useEffect } from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/HomePage/Footer";
import Images from "../Images";
import HomeTopbarNew from "../Components/HomePage/HomeTopbarNew";
import SubVideoContainer from "../Components/HomePage/SubVideoContainer";
import RowCard from "../Components/RowCard";
import { HiPlay, HiPause } from "react-icons/hi";

const Radio = () => {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      name: "Song Name",
      icon: <HiPlay />,
      icon2: <HiPause />,
      img: Images.Movie9,
    },
    {
      id: 2,
      name: "Song Name",
      icon: <HiPlay />,
      icon2: <HiPause />,
      img: Images.Movie10,
    },
    {
      id: 3,
      name: "Song Name",
      icon: <HiPlay />,
      icon2: <HiPause />,
      img: Images.Movie11,
    },
    {
      id: 4,
      name: "Song Name",
      icon: <HiPlay />,
      icon2: <HiPause />,
      img: Images.Movie12,
    },
    {
      id: 1,
      name: "Song Name",
      icon: <HiPlay />,
      icon2: <HiPause />,
      img: Images.Movie13,
    },
    {
      id: 2,
      name: "Song Name",
      icon: <HiPlay />,
      icon2: <HiPause />,
      img: Images.Movie14,
    },
    {
      id: 3,
      name: "Song Name",
      icon: <HiPlay />,
      icon2: <HiPause />,
      img: Images.Movie15,
    },
    {
      id: 4,
      name: "Song Name",
      icon: <HiPlay />,
      icon2: <HiPause />,
      img: Images.Movie16,
    },
    {
      id: 1,
      name: "Song Name",
      icon: <HiPlay />,
      icon2: <HiPause />,
      img: Images.Movie17,
    },
    {
      id: 2,
      name: "Song Name",
      icon: <HiPlay />,
      icon2: <HiPause />,
      img: Images.Movie18,
    },
    {
      id: 3,
      name: "Song Name",
      icon: <HiPlay />,
      icon2: <HiPause />,
      img: Images.Movie19,
    },
    {
      id: 4,
      name: "Song Name",
      icon: <HiPlay />,
      icon2: <HiPause />,
      img: Images.Movie20,
    },
    {
      id: 1,
      name: "Song Name",
      icon: <HiPlay />,
      icon2: <HiPause />,
      img: Images.Movie21,
    },
    {
      id: 2,
      name: "Song Name",
      icon: <HiPlay />,
      icon2: <HiPause />,
      img: Images.Movie22,
    },
    {
      id: 3,
      name: "Song Name",
      icon: <HiPlay />,
      icon2: <HiPause />,
      img: Images.Movie23,
    },
    {
      id: 4,
      name: "Song Name",
      icon: <HiPlay />,
      icon2: <HiPause />,
      img: Images.Movie24,
    },
  ];

  return (
    <Container>
      <HomeTopbarNew />
      <Title>HelloTunes</Title>
      <CardContainer>
        {data.map((item) => (
          <RowCard key={item.id} {...item} navigate={navigate} />
        ))}
      </CardContainer>
      <Footer />
    </Container>
  );
};

const Container = tw.section`bg-secondaryBg-blue justify-between mx-auto  text-white  font-medium  px-4 md:px-6 mx-auto  sm:items-center     `;
const Title = tw.div`text-white text-xl md:text-2xl lg:text-3xl flex justify-center my-10 shadow-lg`;
const CardContainer = tw.div`grid lg:grid-cols-2 grid-cols-1  gap-5 mb-10`;

export default Radio;
