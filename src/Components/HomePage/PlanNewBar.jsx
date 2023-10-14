import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import Images from "../../Images";

const PlanNewBar = () => {
  return (
    <Nav>
      <Container>
        <Wrapper>
          <Link to="/">
            {/* <Sevo>Sevo Plus</Sevo> */}
            <Logo>
              <Sevo>Sevo</Sevo>
              <Plus>Plus</Plus>
            </Logo>
            {/* <img src={Images.SevoLogo} className="w-32" /> */}
          </Link>
        </Wrapper>
        <EndSign>
          <Link to="/home">
            <Btn>Skip for Now</Btn>
          </Link>
        </EndSign>
      </Container>
    </Nav>
  );
};

const Nav = tw.div`bg-secondaryBg-blue shadow  `;
// const Container = tw.div`justify-between px-2 mx-auto md:max-w-7xl sm:items-center  sm:px-2 flex flex-row`;
const Container = tw.div`justify-between items-center px-2  mx-auto  md:items-center flex flex-row`;
// const Container = tw.div`justify-between bg-secondaryBg-blue px-2 mx-auto lg:max-w-7xl md:items-center  md:px-0 flex flex-row`;
const Wrapper = tw.div`flex items-center justify-between py-3 md:py-5`;
// const Sevo = tw.div`text-2xl font-bold text-white `;
const EndSign = tw.div`mt-3  `;
const Btn = tw.div`hover:underline py-2 text-gray-400 hover:text-white  "`;
const Logo = tw.div`flex flex-row font-bold text-xl`;
const Sevo = tw.div`text-white rounded-md uppercase`;
const Plus = tw.div`text-secondaryfont-blue uppercase`;

export default PlanNewBar;
