import React from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const DetailNavbar = ({ title, route }) => {
  const navigate = useNavigate();

  const backFunction = () => {
    if (route) return navigate(route);
    return navigate("/");
  };

  return (
    // <div className="bg-cyan-600 w-full">
      <div className="bg-custom-blue w-full">
      <Wrapper>
        <LogoMenuWrapper>
          <div className="cursor-pointer mt-1" onClick={backFunction}>
            <MdOutlineArrowBackIosNew className="w-5 h-5 text-white" />
          </div>
          <Title>{title}</Title>
        </LogoMenuWrapper>
      </Wrapper>
    </div>
  );
};

const Wrapper = tw.nav`h-20  flex items-center justify-between px-4 z-50 w-full max-w-5xl mx-auto `;
const LogoMenuWrapper = tw.div`flex items-center space-x-3`;
const Title = tw.h2`text-xl font-medium text-white capitalize`;

export default DetailNavbar;
