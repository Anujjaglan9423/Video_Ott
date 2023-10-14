import React from "react";
import tw from "tailwind-styled-components";
import { useTranslation } from "react-i18next";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <Wrapper>
      <div className="w-full text-center ">
        {/* <h3 className="text-2xl text-white font-normal font_f">
          Sevo Plus
          
        </h3> */}
        <Link className="z-20 " to="/">
          {/* <Sevo>Sevo Plus</Sevo> */}
          <Logo>
            <Sevo>Sevo</Sevo>
            <Plus>Plus</Plus>
          </Logo>
        </Link>
        <p className="text-sm text-gray-400">
          Watch unlimited movies, series & TV shows anywhere anytime
        </p>
        <div className=" flex justify-center my-7 text-sm ">
          <BsFacebook className="w-5 h-5 mr-1.5 text-cyan-400" />
          <span>
            <BsTwitter className="w-5 h-5 mr-1.5 text-cyan-400" />
          </span>
        </div>

        <Line />

        <p className="mt-7 mb-4 flex flex-row justify-center text-gray-400">
          <p className=" cursor-pointer text-sm hover:underline">
            {" "}
            Privacy Policy
          </p>
          <span className="ml-14 text-sm cursor-pointer hover:underline">
            Terms & Conditions
          </span>
        </p>
      </div>

      <Row>
        <p className="w-full text-center text-gray-400">
          Copyright &copy; {new Date().getFullYear()} SevoPlus
        </p>
      </Row>
    </Wrapper>
  );
};

// const Wrapper = tw.footer`
// bg-custom-blue text-white p-4 mt-8`;

const Wrapper = tw.footer`
bg-secondaryBg-blue text-white p-4 `;
const Logo = tw.div`flex flex-row font-bold text-xl justify-center `;
const Sevo = tw.div`text-white rounded-md uppercase`;
const Plus = tw.div`text-secondaryfont-blue uppercase`;

const LinkItem = tw.p`text-gray-100 hover:underline cursor-pointer hover:text-white`;

const Row = tw.div`flex items-center space-x-3 justify-between text-sm `;

const Line = tw.div` h-0.5 mx-auto bg-gray-400`;

export default Footer;
