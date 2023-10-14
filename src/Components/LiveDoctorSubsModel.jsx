import React from "react";
import Model from "./Model";
import tw from "tailwind-styled-components";
import { useDispatch } from "react-redux";
import { Remove_User } from "../Redux/actions";
import { useTranslation } from "react-i18next";

const LiveDoctorSubsModel = ({
  setOpenModel,
  closeModelFunc,
  registerHandler,
  isLoading,
}) => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  return (
    <Model width={"w-11/12 max-w-sm"} setOpenModel={setOpenModel}>
      <Title>{t("ConsultWithDoctor")}</Title>
      <SubTitle>{t("ConsultWithDoctorSubTitle")}</SubTitle>
      <BtnWrapper>
        {/* <Confirm onClick={() => dispatch(Remove_User())}>Confirm</Confirm> */}
        <Confirm disabled={isLoading} onClick={() => registerHandler()}>
          {t("Confirm")}
        </Confirm>
        <Cancel onClick={closeModelFunc}>{t("Cancel")}</Cancel>
      </BtnWrapper>
    </Model>
  );
};

const Title = tw.h2`text-lg text-gray-800 font-medium text-center mt-2`;
const SubTitle = tw.h3`text-sm text-gray-800 font-medium text-center mt-2`;
const BtnWrapper = tw.div` flex items-center space-x-3 justify-center mt-5`;
const Confirm = tw.button`text-white  text-sm bg-custom-blue w-20 h-10 rounded-md flex justify-center items-center`;
const Cancel = tw.button`text-gray-700  text-sm bg-gray-100 w-20 h-10 rounded-md flex justify-center items-center`;

export default LiveDoctorSubsModel;
