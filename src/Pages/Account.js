import React, { useState, Component } from "react";
import tw from "tailwind-styled-components";
import Footer from "../Components/HomePage/Footer";
import { useTranslation } from "react-i18next";
import Images from "../Images";
import HomeTopbarNew from "../Components/HomePage/HomeTopbarNew";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HiPencil } from "react-icons/hi";

const Account = () => {
  const [nameChange, setNameChange] = useState(false);

  return (
    <Container>
      <HomeTopbarNew />
      <div className="flex justify-center ml-2 mr-2">
        <Wrapper>
          <img className="h-20 mb-2 cursor-pointer" src={Images.User} />
          <Bio>
            {nameChange ? (
              <>
                <Input name="name" type="text" placeholder="Change Name" />
                <SaveBtn onClick={() => setNameChange(false)}>Save</SaveBtn>
              </>
            ) : (
              <>
                {" "}
                User
                <InputBtn>
                  <HiPencil onClick={() => setNameChange(true)} />
                </InputBtn>
              </>
            )}
          </Bio>
          <Plan>
            <h3 className=" text-lg ">
              Sevo Plus Mobile for Cedi 149 per month
            </h3>
            <p className="text-gray-400">Valid till: </p>
            <Btn type="button">
              <Link to="/plansnew">Upgrade Plan</Link>
            </Btn>
          </Plan>
          <Row>
            <Link to="/watchlist">Watchlist</Link>
          </Row>
          <Row>
            <Link to="/list">Help Center</Link>
          </Row>
          <Row>
            <Link to="/list">Terms of Use</Link>
          </Row>
          <Row>
            <Link to="/list">Privacy Policy</Link>
          </Row>
          <Row>
            <Link to="/">Log Out</Link>
          </Row>
        </Wrapper>
      </div>
      <Footer />
    </Container>
  );
};

const Container = tw.section`bg-secondaryBg-blue px-6`;
const Wrapper = tw.div` flex flex-col items-center justify-center w-full max-w-sm text-white mt-8`;
const InputBtn = tw.button`mt-2 ml-2 cursor-pointer`;
const Bio = tw.div`font-bold text-xl flex flex-row`;
const Plan = tw.div`bg-planBg my-4 p-4 rounded-md w-full `;
const Input = tw.input` w-40 bg-secondaryBg-blue text-center  border-b border-gray-200  focus:outline-0   text-lg rounded-sm  py-2 px-4 text-black md:text-white leading-tight    `;
const Row = tw.div`bg-planBg w-full p-4 rounded-md mb-2 text-md font-semibold `;
const SaveBtn = tw.button`w-14  ml-2 mt-1 rounded-md  bg-secondaryfont-blue text-white text-center py-1   tracking-wider  text-sm  transition duration-300 hover:shadow-lg shadow-md`;
const Btn = tw.button`w-full   bg-secondaryfont-blue  text-sm text-white text-center py-4  mt-8 mb-4 uppercase font_f font-medium hover:bg-secondaryfont-blue   rounded-md`;
export default Account;
