import React from "react";
import Model from "./Models";
import tw from "tailwind-styled-components";
import { useDispatch } from "react-redux";
import { Remove_User } from "../Redux/actions";
import { useTranslation } from "react-i18next";

const InfoModels = ({ setOpenModels, closeModelFuncs,}) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  return (
    <Model width={"w-11/12 max-w-sm"} setOpenModels={setOpenModels}>
      <Title>{t("ConsultWithDoctor")}</Title>
      <BtnWrapper>
        {/* <Confirm onClick={() => dispatch(Remove_User())}>Confirm</Confirm> */}
        <Confirm onClick={closeModelFuncs}>{t("Cancel")}</Confirm>
      </BtnWrapper>
    </Model>
  );
};

const Title = tw.h2`text-gray-800 font-medium text-center mt-8`;
const BtnWrapper = tw.div` flex items-center space-x-3 justify-center mt-5`;
const Confirm = tw.button`text-white  text-sm bg-custom-blue w-20 h-10 rounded-md flex justify-center items-center`;
const Cancel = tw.button`text-gray-700  text-sm bg-gray-100 w-20 h-10 rounded-md flex justify-center items-center`;

export default InfoModels;