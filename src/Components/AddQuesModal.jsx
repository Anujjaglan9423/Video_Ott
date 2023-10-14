import React, { useState } from "react";
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

const AddQuesModal = ({
  showAddModal,
  setShowAddModal,
  addLoading,
  addQuestion,
}) => {
  const { t, i18n } = useTranslation();
  const user = useSelector((state) => state.UserReducer.user);

  const [formVal, setFormVal] = useState({
    mobile: "",
    question: "",
    name: "",
    gender: "",
    age: "",
  });

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

  const InputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormVal((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addQuestion(formVal, setFormVal);
  };
  return (
    <>
      <Modal
        style={style}
        isOpen={showAddModal}
        onRequestClose={() => setShowAddModal(false)}
      >
        <AiOutlineClose
          className="absolute top-2.5 right-2.5 w-5 h-5 cursor-pointer"
          onClick={() => setShowAddModal(false)}
        />
        <h1 className="text-xl font-medium">{t("Add_Ques_Title")}</h1>
        <Form onSubmit={submitHandler}>
          <InputGroup>
            <Label>{t("YourQuestion")}</Label>
            <Input
              type="text"
              placeholder={t("WriteYourQuestion")}
              required
              value={formVal.question}
              name="question"
              onChange={InputChangeHandler}
            />
          </InputGroup>
          {/* <InputGroup>
            <Label>{t("YourName")}</Label>
            <Input
              type="text"
              placeholder={t("EnterYourName")}
              required
              value={formVal.name}
              name="name"
              onChange={InputChangeHandler}
            />
          </InputGroup> */}
          <InputGroup>
            <Label>{t("YourGender")}</Label>
            <Select
              required
              value={formVal.gender}
              name="gender"
              onChange={InputChangeHandler}
            >
              <option value="">{t("SelectGender")}</option>
              <option value="Male">{t("Male")}</option>
              <option value="Female">{t("Female")}</option>
            </Select>
          </InputGroup>
          <InputGroup>
            <Label>{t("YourAge")}</Label>
            <Input
              type="number"
              placeholder={t("EnterYourAge")}
              min="0"
              max="99"
              required
              value={formVal.age}
              name="age"
              onChange={InputChangeHandler}
            />
          </InputGroup>

          <Btn type="submit">
            {!addLoading && t("Submit")}
            <LoadingComp loading={addLoading} />
          </Btn>
        </Form>
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
const Btn = tw.button`w-full mt-10 mx-auto bg-custom-orange py-2 rounded-md justify-center items-center text-white`;

export default AddQuesModal;
