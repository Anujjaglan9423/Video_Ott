import React, { useState, Component } from "react";
import tw from "tailwind-styled-components";
import Footer from "../Components/HomePage/Footer";
import { useTranslation } from "react-i18next";
import Images from "../Images";
import HomeTopbarNew from "../Components/HomePage/HomeTopbarNew";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiCheckboxCircleLine } from "react-icons/ri";
import PlanCard from "../Components/PlanCard";
const PlanPage = () => {
  const data = [
    {
      id: 1,
      heading: "Sevo Plus",
      subheading: "Cedi 149 / 30 Days",
      gradientColor: "from-indigo-600",
      btnColor: "bg-indigo-600",
      points: [
        {
          point: "All Content",
          isAvailable: true,
        },
        {
          point: "Watch on TV or Laptop",
          isAvailable: false,
        },
        {
          point: "Ads free movies & shows",
          isAvailable: false,
        },
        {
          point: "Number of devices that can be logged in at a time is 1",
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      heading: "Sevo Super",
      subheading: "Cedi 399 / 45Days",
      gradientColor: "from-violet-600",
      btnColor: "bg-violet-600",

      points: [
        {
          point: "All Content",
          isAvailable: true,
        },
        {
          point: "Watch on TV or Laptop",
          isAvailable: true,
        },
        {
          point: "Ads free movies & shows",
          isAvailable: false,
        },
        {
          point: "Number of devices that can be logged in at a time is 4",
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      heading: "Sevo Premium",
      subheading: "Cedi 799 / 60 Days",
      gradientColor: "from-fuchsia-600",
      btnColor: "bg-fuchsia-600",
      points: [
        {
          point: "All Content",
          isAvailable: true,
        },
        {
          point: "Watch on TV or Laptop",
          isAvailable: true,
        },
        {
          point: "Ads free movies & shows",
          isAvailable: true,
        },
        {
          point: "Number of devices that can be logged in at a time is 8",
          isAvailable: true,
        },
      ],
    },
  ];
  return (
    <Container>
      <HomeTopbarNew />

      <div className="text-center mb-10">
        <h1 className=" text-white font-bold text-2xl mt-10">
          Plans for Sevo Plus
        </h1>
        <p className="text-gray-400">Choose the plan that’s right for you</p>
      </div>

      <CardContainer>
        <MobilePlan>
          {data.map((item) => (
            <PlanCard key={item.id} {...item} />
          ))}
        </MobilePlan>
      </CardContainer>

      <Footer />
    </Container>
  );
};

// const Container = tw.section`bg-secondaryBg-blue `;
const Container = tw.section`bg-secondaryBg-blue justify-between mx-auto  text-white  font-medium  px-4 md:px-6 mx-auto  sm:items-center   `;
const CardContainer = tw.div` md:mx-auto mt-4  ml-2 mr-2  `;
const PlanHeading = tw.div`text-white font-semibold text-xl text-center mt-10 `;
const PlanPrize = tw.div`text-gray-400 text-sm text-center mb-10`;
const MobilePlan = tw.div` grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10`;
// const MobilePlan = tw.div`grid  grid-cols-1 sm:grid-cols-3 gap-10   md:mx-auto mt-4  ml-2 mr-2 `;
// const PlanBorder = tw.div`box-content h-12 w-32 p-4 border-2 `;
const PlanDescription = tw.div`mt-4 text-white text-md font-semibold  text-center ml-4`;
const BuyBtn = tw.button`w-40 md:w-60 bg-custom-blue text-white text-center py-3 rounded-md my-10  uppercase font-medium cursor-pointer `;
export default PlanPage;
