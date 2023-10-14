import React, { useState, useRef, useEffect } from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/HomePage/Footer";
import Images from "../Images";
import SubVideoContainer from "../Components/HomePage/SubVideoContainer";
import HomeTopbar from "../Components/HomePage/HomeTopbar";
import ReactPlayer from "react-player";
import HomeTopbarNew from "../Components/HomePage/HomeTopbarNew";
import { HiPlay } from "react-icons/hi";
import { BiTime } from "react-icons/bi";
import { BsShareFill } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { Link } from "react-router-dom";

const Detail = () => {
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
    // { id: 7, name: "poster8", img: Images.Poster8},
    // { id: 8, name: "Russian", img: Images.Poster1},
    // { id: 9, name: "Nutrition", img: Images.Poster1},
  ];

  return (
    <Container>
      <HomeTopbarNew />
      <Group>
        {/* <img src={Images.Movie1 } alt="movie"/> */}
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=d46Azg3Pm4c"
            width="100%"
            height="80%"
          />
        </div>
      </Group>

      <Title>Video Title</Title>
      <Zoner>Geners</Zoner>
      <Description>
        Black Adam is a 2022 American superhero film starring Dwayne Johnson as
        the titular DC Comics character.
      </Description>
      <Share>
        <div>
          <BsShareFill className="text-gray-400 text-lg ml-2 " />
          Share
        </div>
        <div className="ml-6">
          <Link to="/watchlist">
            <BsPlusLg className="text-gray-400 text-lg ml-4  " />
            Watchlist
          </Link>
        </div>
      </Share>
      <Line />

      <SubVideoContainer
        data={socialData}
        title="Social & Experiment"
        viewAllLink="/list"
      />
      <SubVideoContainer
        data={socialData}
        title="Experiment"
        viewAllLink="/list"
      />
      <Footer />
    </Container>
  );
};
// const Group = tw.div`    overflow-hidden mt-8 w-100 max-w-5xl mx-auto  md:w-4/6 md:h-full     `;
const Group = tw.div`    overflow-hidden mt-8 w-100  mx-auto  md:w-3/5 md:h-3/5     `;
const Container = tw.section`bg-secondaryBg-blue shadow-lg px-4 md:px-6 relative shadow-md h-screen overflow-y-auto  overflow-x-hidden `;
// const Container = tw.section`bg-secondaryBg-blue    `;
const Title = tw.div`text-white font-bold text-xl mx-auto`;
const Zoner = tw.div`text-md text-cyan-500 mx-auto mt-2`;
const Description = tw.div`text-md text-gray-400 mx-auto mt-2`;
const Share = tw.div`text-white my-4 text-sm flex flex-row  `;
const Line = tw.div`w-100 h-0.5 mx-auto bg-gray-400`;
export default Detail;
