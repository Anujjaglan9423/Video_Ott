import React from "react";
import Model from "./Model";
import tw from "tailwind-styled-components";
import { useDispatch } from "react-redux";
import { Remove_User } from "../Redux/actions";
import { useTranslation } from "react-i18next";

const InfoModel = ({ setOpenModel }) => {
  const data = [
    {
      id: 1,
      title: "You want to purchase cedi 149 plan?",
    },

    {
      id: 2,
      title: "You want to purchase cedi 499 plan?",
    },

    {
      id: 3,
      title: "You want to purchase cedi 599 plan?",
    },
  ];

  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const closeModelFunc = () => setOpenModel(false);
  return (
    <Model width={"w-11/12 max-w-sm"} setOpenModel={setOpenModel}>
      <Title>{t("Purchase")}</Title>
      {/* <Plan data={data} /> */}
      <BtnWrapper>
        {/* <Confirm onClick={() => dispatch(Remove_User())}>Confirm</Confirm> */}
        <Confirm onClick={closeModelFunc}>{t("Confirm")}</Confirm>
        <Confirm onClick={closeModelFunc}>{t("Cancel")}</Confirm>
      </BtnWrapper>
    </Model>
  );
};

const Plan = ({ data }) => {
  return data.map((value) => {
    const { id, title } = value;
    return <Title>{title}</Title>;
  });
};

const Title = tw.h2`text-gray-800 font-medium text-center mt-8`;
const BtnWrapper = tw.div` flex items-center space-x-3 justify-center mt-5`;
const Confirm = tw.button`text-white  text-sm bg-custom-blue w-20 h-10 rounded-md flex justify-center items-center`;
const Cancel = tw.button`text-gray-700  text-sm bg-gray-100 w-20 h-10 rounded-md flex justify-center items-center`;

export default InfoModel;
