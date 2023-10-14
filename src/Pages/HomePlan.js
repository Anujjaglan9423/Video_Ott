import React, { useState, Component } from "react";
import tw from "tailwind-styled-components";
import Footer from "../Components/HomePage/Footer";
import PlanNewBar from "../Components/HomePage/PlanNewBar";
import PlanCard from "../Components/PlanCard";
import { Link } from "react-router-dom";

import Images from "../Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCediSign } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineCloseCircle, AiOutlineCheck } from "react-icons/ai";
import InfoModel from "../Components/InfoModel";
const HomePlan = () => {
  const data = [
    {
      id: 1,
      heading: "Sevo Plus",
      subheading: "Cedi 149 / 30 Days",
      gradientColor: "from-cyan-600",
      btnColor: "bg-cyan-600",
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
      gradientColor: "from-teal-600",
      btnColor: "bg-teal-600",

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
      gradientColor: "from-amber-600",
      btnColor: "bg-amber-600",
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
  const [clickTab, setClickTab] = useState(false);
  const closeModelFunc = () => setClickTab(false);
  const setOpenModel = () => setClickTab(false);
  return (
    <Container>
      <Padding>
        <PlanNewBar />
      </Padding>
      {/* <img src={Images.PlanImgBg} /> */}
      {/* <div className="text-center mb-10">
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
      </CardContainer> */}

      {clickTab && (
        <InfoModel
          setOpenModel={setOpenModel}
          closeModelFunc={closeModelFunc}
        />
      )}

      <Bg>
        <Overlay />
        <MainHeading>
          <Title>Choose the plan that’s right for you</Title>
          <SubTitle>
            <SubHeading>
              <AiOutlineCheck className="mt-1 mr-1 text-green-400" />
              All content.
            </SubHeading>
            <SubHeading>
              <AiOutlineCheck className="mt-1 mr-1 text-green-400" />
              Recommendations just for you.
            </SubHeading>
            <SubHeading>
              <AiOutlineCheck className="mt-1 mr-1 text-green-400" />
              Ads free movies and shows.
            </SubHeading>
          </SubTitle>
        </MainHeading>

        <div className="flex flex-col pb-10">
          <div className="overflow-x-auto">
            <div className="p-1.5 max-w-3xl mx-auto align-middle">
              <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th>
                        <Th>Plan Description</Th>
                      </th>

                      <th>
                        <Th>Mobile</Th>
                      </th>
                      <th>
                        <Th>Standard</Th>
                      </th>
                      <th>
                        <Th>Premium</Th>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td>
                        <Td> Monthly Price</Td>
                      </td>
                      <td>
                        <Td>
                          {" "}
                          <FontAwesomeIcon icon={faCediSign} /> 149
                        </Td>
                      </td>
                      <td>
                        <Td>
                          {" "}
                          <FontAwesomeIcon icon={faCediSign} /> 499
                        </Td>
                      </td>
                      <td>
                        <Td>
                          <FontAwesomeIcon icon={faCediSign} /> 599
                        </Td>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Td> Video Quality</Td>
                      </td>
                      <td>
                        <Td> Good</Td>
                      </td>
                      <td>
                        <Td> Better</Td>
                      </td>
                      <td>
                        <Td> Best</Td>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Td> </Td>
                      </td>
                      <td>
                        <Td>
                          <BuyBtn
                            className="text-pink-600"
                            onClick={() => setClickTab(true)}
                          >
                            {" "}
                            Buy Now
                          </BuyBtn>
                        </Td>
                      </td>
                      <td>
                        <Td>
                          <BuyBtn
                            className="text-violet-600"
                            onClick={() => setClickTab(true)}
                          >
                            {" "}
                            Buy Now
                          </BuyBtn>
                        </Td>
                      </td>
                      <td>
                        <Td>
                          <BuyBtn
                            className="text-fuchsia-600"
                            onClick={() => setClickTab(true)}
                          >
                            {" "}
                            Buy Now
                          </BuyBtn>
                        </Td>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Note>
          <Note>
            Watch on 4 different devices at the same time with Premium, 2 with
            Standard, and 1 with Mobile.
          </Note>
          <Note>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions. See our{" "}
            <Btn>Terms of Use</Btn> for more details.
          </Note>
        </Note>
      </Bg>

      {/* <Link to="/home">
        <Btn>Skip for Now</Btn>
      </Link> */}
      <Padding>
        <Footer />
      </Padding>
    </Container>
  );
};
const Padding = tw.div`px-4 md:px-6`;
const Container = tw.section`bg-secondaryBg-blue justify-between mx-auto  text-white  font-medium   mx-auto  sm:items-center   `;
// const Container = tw.section`bg-secondaryBg-blue  justify-between mx-auto  text-white  font-medium  sm:items-center   px-4 md:px-6  `;
const CardContainer = tw.div`md:mx-auto mt-4  ml-2 mr-2 md:max-w-7xl `;
const MobilePlan = tw.div` grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10`;
const Btn = tw.button` text-secondaryfont-blue hover:underline `;
const BuyBtn = tw.button`cursor-pointer font-bold text-center bg-white rounded-md text-center p-1 md:p-2  md:text-md sm:text-sm text-sm`;
// const Bg = tw.div`log-bg flex justify-center items-center bg-gradient-to-b from-custom-black to-secondaryBg-blue h-screen w-full bg-left-bottom`;
const Overlay = tw.div`absolute left-0 bottom-0 right-50 top-50 w-full  bg-gradient-to-r from-black to-transparent    opacity-90`;
const Note = tw.div`text-gray-400 max-w-3xl mx-auto mb-2 text-sm md:text-md`;
const Title = tw.div`lg:text-3xl md:text-2xl sm:text-xl   text-lg font-normal text-white font-bold  pb-5 `;
const SubTitle = tw.div`lg:text-2xl md:text-xl sm:text-lg   text-md font-normal`;
const SubHeading = tw.div`flex flex-row text-gray-300 font-semibold `;
const MainHeading = tw.div` max-w-3xl mx-auto pb-10`;
const Th = tw.div` py-3 lg:text-xl md:text-lg sm:text-md text-sm  text-left text-secondaryfont-blue `;
const Td = tw.div`py-4 lg:text-xl md:text-lg sm:text-md text-sm text-white text-left `;
const Bg = tw.div`plan-bg  items-center   w-full py-28 px-5 `;
export default HomePlan;
