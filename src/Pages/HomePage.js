import React, { useState, Component } from "react";
import tw from "tailwind-styled-components";
import Footer from "../Components/HomePage/Footer";
import HomeTopbar from "../Components/HomePage/HomeTopbar";
import { useTranslation } from "react-i18next";
import Images from "../Images";
import { HiPlay } from "react-icons/hi";
import { BiTime } from "react-icons/bi";
import HomeTopbarNew from "../Components/HomePage/HomeTopbarNew";

import { GiWeightScale } from "react-icons/gi";
import { MdKeyboardArrowUp, MdOutlineMonitorWeight } from "react-icons/md";
import { AiOutlineFire, AiOutlineLock, AiOutlineTrophy } from "react-icons/ai";
import BeginnerDetail from "../Components/HomePage/BeginnerDetail";
import { useNavigate } from "react-router-dom";
import InfoModel from "../Components/InfoModel";
import InfoModels from "../Components/InfoModels";
import InfoModelss from "../Components/InfoModelss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SubVideoContainer from "../Components/HomePage/SubVideoContainer";
import "swiper/css/bundle";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const HomePage = () => {
  const data = [
    {
      id: 1,
      name: "BLACK ADAM",
      img: Images.Movie1,
      zoner: "Action",
      description:
        "Black Adam is a 2022 American superhero film starring Dwayne Johnson as the titular DC Comics character. ",
    },
    {
      id: 2,
      name: "ENEMY",
      img: Images.Movie3,
      zoner: "Action",
      description:
        "It's the story of two childhood friends and their escalating competitive nature. To what extent are they ready to go?",
    },
    {
      id: 3,
      name: "MASTER",
      img: Images.Movie4,
      zoner: "Action",
      description:
        "An alcoholic professor is sent to a juvenile school, where he clashes with a gangster who uses the school children for criminal activities",
    },
    {
      id: 4,
      name: "FRANKENSTEIN",
      img: Images.Movie5,
      zoner: "Action",
      description:
        "When a detective begins investigating a series of horrific murders, she is lead to a mad doctor who has sustained his creature and himself for over 200 years through genetic experimentation.",
    },
  ];

  const socialData = [
    {
      id: 1,
      name: "AVENGERS ENDGAME",
      img: Images.Poster1,
      time: "3hr 5min",
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
      time: "3hr 5min",
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
  ];

  const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(1);

  const toggleTabHandler = (tabNum) => {
    setActiveTab((prev) => {
      if (prev == tabNum) return 0;
      else return tabNum;
    });
  };

  return (
    <Container>
      {/* <HomeTopbar/> */}
      <HomeTopbarNew />

      <CarouselContainer data={data} />

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
      <SubVideoContainer data={socialData} title="Sports" viewAllLink="/list" />
      <SubVideoContainer
        data={socialData}
        title="Similar Videos"
        viewAllLink="/list"
      />
      <Footer />
    </Container>
  );
};

const CarouselContainer = ({ data }) => {
  return (
    <SwiperGroup>
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        // navigation
        loop={{ clickable: true }}
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        // breakpoints={{

        //   1024: {
        //     slidesPerView: 1,
        //     spaceBetween: 50,

        //   },
        // }}
      >
        {data.map((value) => {
          const { id, name, img, zoner, description } = value;
          return (
            <SwiperSlide key={id}>
              <img src={img} alt={name} className="cursor-pointer" />
              <div className="md:block hidden">
                <Overlays />
                {/* <div className=" absolute top-50 left-0 bottom-0 right-50 bg-gradient-to-r from-black to-cyan-900 opacity-90"></div> */}

                <p className="absolute top-0 left-0 text-sm top-5 text-white font-bold md:text-2xl md:left-20  ">
                  {name}
                </p>
                <p className="absolute top-0 left-0 text-sm top-16 text-white  md:text-sm md:left-20 md:top-16">
                  {zoner}
                </p>
                <p className="absolute top-0 left-0 text-sm text-white top-20  md:text-sm md:left-20 md:top-24 w-80">
                  {description}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperGroup>
  );
};
const SingleUpperTabComp = ({ icon, title, subTitle, onClick }) => {
  return (
    <SingleUpperTabWrapper onClick={onClick}>
      {icon}
      <SingleUpperTabTitle>{title}</SingleUpperTabTitle>
      <SingleUpperTabSubTitle>{subTitle}</SingleUpperTabSubTitle>
    </SingleUpperTabWrapper>
  );
};

const SingleTab = ({ title, img, onClick }) => {
  return (
    <SingleTabWrapper onClick={onClick}>
      <SingleTabImage src={img} />
      <Overlay />
      <SingleTabTitle>{title}</SingleTabTitle>
    </SingleTabWrapper>
  );
};

const SingleUpperTabWrapper = tw.div`w-full p-4 border bg-white rounded-md`;
const SingleUpperTabTitle = tw.h2`font-bold text-xs text-gray-600 text-center `;
// const SingleUpperTabSubTitle = tw.h4`text-cyan-500 text-sm text-center`;
const SingleUpperTabSubTitle = tw.h4`text-custom-blue text-sm text-center`;

const SingleTabWrapper = tw.div`w-full mt-5 h-40 rounded-md overflow-hidden relative`;
const SingleTabImage = tw.img`w-full h-full object-cover z-0`;
const Overlay = tw.div` absolute left-0 right-0 top-0 bottom-0 object-cover z-10 bg-gradient-to-r from-black to  transparent`;
const SingleTabTitle = tw.h2`font-bold text-xl text-white absolute top-16 left-6 z-20  `;

// const Container = tw.section`bg-secondaryBg-blue shadow-lg border relative shadow-md h-screen overflow-y-auto  overflow-x-hidden bg-custom-bg`;
const UpperWrapper = tw.div`w-full mt-10  flex space-x-4 px-4 justify-between`;
const TabsWrapper = tw.div`w-full mt-7 px-4`;
const SwiperGroup = tw.div`home-carousel h-40   overflow-hidden m-4 shadow-xl  w-100  mx-auto  md:w-full md:h-80  opacity-100 rounded-lg `;
// const SwiperGroup = tw.div`home-carousel h-40   overflow-hidden m-4 shadow-xl  w-100 max-w-7xl mx-auto  md:w-full md:h-80  opacity-100 rounded-lg `;
// const SwiperGroup = tw.div`home-carousel h-40   overflow-hidden m-4 shadow-xl  w-100 max-w-7xl mx-auto  md:w-full md:h-80  opacity-100  `;
const Container = tw.section`bg-secondaryBg-blue overflow-y-auto  overflow-x-hidden px-4 md:px-6`;
const Overlays = tw.div`absolute left-0 bottom-0 right-0 top-50 w-1/2 h-full   bg-gradient-to-r from-black via-black to-transparent opacity-90`;
export default HomePage;
