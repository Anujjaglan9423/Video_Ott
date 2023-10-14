import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import tw from "tailwind-styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import axios from "axios";
import Config from "../Config";
import { useSelector } from "react-redux";
import Images from "../Images";

Modal.setAppElement("#root");

const DeleteReplyModal = ({
  showModal,
  setShowModal,
  Loading,
  deleteReply,
}) => {
  const { t, i18n } = useTranslation();

  const style = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },
    content: {
      position: "absolute",
      width: "90%",
      inset: "auto",
      maxWidth: 400,
      // height: 530,
      margin: "0 auto",
      border: "1px solid #ccc",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "30px 20px",
    },
  };

  const submitHandler = () => {
    deleteReply();
  };
  return (
    <>
      <Modal
        style={style}
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <AiOutlineClose
          className="absolute top-2.5 right-2.5 w-5 h-5 cursor-pointer"
          onClick={() => setShowModal(false)}
        />
        <h1 className="text-xl font-medium">{t("Delete_Reply")}</h1>

        <div className="flex items-center space-x-5">
          <Btn
            type="submit"
            onClick={submitHandler}
            className="bg-gray-100 text-gray-700"
          >
            {!Loading && t("Yes")}
            <LoadingComp loading={Loading} />
          </Btn>
          <Btn onClick={() => setShowModal(false)} className="text-white">
            {t("No")}
          </Btn>
        </div>
      </Modal>
    </>
  );
};

const LoadingComp = ({ loading }) => (
  <div className={`w-full ${loading && "h-6"} grid place-items-center`}>
    <img
      src={Images.GreenLoader}
      alt="loading..."
      className={` w-10 mx-auto -mt-2 ${loading ? "" : "hidden"}`}
    />
  </div>
);

const Form = tw.form`mt-8`;
const InputGroup = tw.div`mt-5`;
const Label = tw.label`text-sm text-gray-700 mb-1`;
const Input = tw.input`w-full outline-none  border-b border-gray-700 p-2 pl-0  focus:border-custom-blue`;
const Select = tw.select`w-full bg-white outline-none  border-b border-gray-700 p-2 pl-0  focus:border-custom-blue`;
const Btn = tw.button`w-full mt-10 mx-auto bg-custom-orange py-2 rounded-md justify-center items-center `;

export default DeleteReplyModal;
