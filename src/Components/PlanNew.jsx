import React, { useState, Component } from "react";
import tw from "tailwind-styled-components";
import { AiOutlineCloseCircle, AiOutlineCheck } from "react-icons/ai";
import { RiCheckboxCircleLine } from "react-icons/ri";
import PlanPageNew from "../Pages/PlanPageNew";
import InfoModel from "./InfoModel";

const PlanNew = ({
  id,
  heading,
  subheading,
  points,
  gradientColor,
  btnColor,
}) => {
  const [clickTab, setClickTab] = useState(false);
  const closeModelFunc = () => setClickTab(false);
  const setOpenModel = () => setClickTab(false);
  return (
    <Container>
      {clickTab && (
        <InfoModel
          setOpenModel={setOpenModel}
          closeModelFunc={closeModelFunc}
        />
      )}

      <div className="flex justify-center">
        <BuyBtn $gradient={btnColor} onClick={() => setClickTab(true)}>
          Buy Now
        </BuyBtn>
      </div>
    </Container>
  );
};
const Container = tw.div``;

const BuyBtn = tw.button`
${(p) => p.$gradient || "bg-custom-blue"}
w-60   text-white text-center py-3 rounded-md my-10  uppercase font-medium cursor-pointer   `;

export default PlanNew;
