import React, { useState, Component } from "react";
import tw from "tailwind-styled-components";
import { useTranslation } from "react-i18next";
import Images from "../../Images";
import { useNavigate } from "react-router-dom";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { HiPlay } from "react-icons/hi";
import { BiTime } from "react-icons/bi";
import { Link } from "react-router-dom";
import Card from "../Card";

const SubVideoContainer = ({ data, title, viewAllLink }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <TitleWrapper>
        <h3>{title}</h3>

        <ReBtn>
          <Link to={viewAllLink}>View All</Link>
        </ReBtn>
      </TitleWrapper>
      <SwiperGroup>
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Autoplay,
            Scrollbar,
            Mousewheel,
            A11y,
          ]}
          keyboard={{
            enabled: true,
          }}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          mousewheel={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          breakpoints={{
            640: {
              slidesPerView: 4,
              spaceBetween: 15,
            },

            940: {
              slidesPerView: 5,
              spaceBetween: 18,
            },
            1140: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {data.map((value) => {
            const { id, name, img, time, icon, timeicon } = value;
            return (
              <SwiperSlide
                key={id}
                className="hover:scale-110 transform transition duration-200 hover:shadow-lg"
              >
                <Card {...value} navigate={navigate} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SwiperGroup>
    </Container>
  );
};

const Container = tw.section`justify-between mx-auto  text-white  font-medium sm:items-center    `;
// const Container = tw.section`justify-between mx-auto  text-white  font-medium    md:max-w-7xl sm:items-center    `;
const TitleWrapper = tw.div`mb-3 ml-2 mr-2 mt-6 md:mt-12 md:mb-4 w-full flex justify-between items-center text-md md:text-lg  md:ml-0`;
const SwiperGroup = tw.div` relative middle-carousel h-44 w-100  ml-2 mr-2 md:ml-0 md:mr-0 md:h-64 md:w-100 overflow-hidden py-3  `;
// const Container = tw.section`bg-secondaryBg-blue w-100 max-w-7xl mx-auto md:w-full text-white  font-medium     bg-custom-bg`;

const ReBtn = tw.button` text-secondaryfont-blue mr-4 md:mr-0  text-sm    `;
export default SubVideoContainer;
