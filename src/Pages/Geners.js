import React, { useState, useRef, useEffect } from "react";
import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/HomePage/Footer";
import Images from "../Images";
import HomeTopbarNew from "../Components/HomePage/HomeTopbarNew";
import ListCard from "../Components/ListCard";
import Config from "../Config";
import axios from "axios";
import Alert from "../Components/Alert";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { Save_User_Data } from "../Redux/actions";
import { useTranslation } from "react-i18next";

const Geners = () => {
  const [mobile, setMobile] = useState("");
  const [alert, setAlert] = useState({
    show: false,
    color: "",
    msg: "",
  });

  const clearAlert = () =>
    setTimeout(() => setAlert({ show: false, color: "", msg: "" }), 10000);
  const data = [
    {
      id: 1,
      bgColor: "bg-cyan-900",
      name: "Sad",
      img: Images.Sad,
    },
    {
      id: 2,
      bgColor: "bg-cyan-400",
      name: "Romantic",
      img: Images.Romantic,
    },
    {
      id: 3,
      bgColor: "bg-gray-900",
      name: "Happy",
      img: Images.Happy,
    },

    {
      id: 4,
      bgColor: "bg-blue-400",
      name: "Podcast",
      img: Images.Talk,
    },
    {
      id: 5,
      bgColor: "bg-pink-400",
      name: "Party",
      img: Images.Party,
    },
    {
      id: 6,
      bgColor: "bg-indigo-900",
      name: "Workout",
      img: Images.Workout,
    },
    {
      id: 7,
      bgColor: "bg-black",
      name: "Devotional",
      img: Images.Devo,
    },
    {
      id: 8,
      bgColor: "bg-orange-400",
      name: "Indie",
      img: Images.Indie,
    },
  ];

  const categoryUserApi = async () => {
    const body = new FormData();
    body.append("mobile", mobile);
    // body.append("plan", plan);
    // body.append("language", activeLang);
    // body.append("name", name);

    return await axios.post(Config.CategoryApi, body, {
      headers: {
        authorization: Config.AxiosConfig.headers.authorization,
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    });
  };

  const { mutate: catUser, isCategory } = useMutation(categoryUserApi, {
    onSuccess: onCategorySuccess,
    onError: onCategoryError,
  });

  const onCategorySuccess = (data, values) => {
    if (data.data.status == "OK") {
      console.log(data.data);
      setAlert({ msg: data.data.msg, show: true, color: "green" });
      clearAlert();
    }
  };

  const onCategoryError = (data) => {
    console.log("error", data);
    setAlert({ msg: data.data.msg, show: true, color: "red" });
    clearAlert();
  };

  return (
    <Container>
      <HomeTopbarNew />
      <Title>Geners</Title>
      <CardContainer>
        {data.map((item) => (
          <ListCard
            type="mobile"
            onClick={() => catUser(mobile)}
            key={item.id}
            {...item}
          />
        ))}
      </CardContainer>
      <Footer />
    </Container>
  );
};

const Container = tw.section`bg-secondaryBg-blue justify-between mx-auto  text-white  font-medium  px-4 md:px-6 mx-auto  sm:items-center`;
const Title = tw.div`text-white text-2xl my-7 text-center`;
// const CardContainer = tw.div`grid  grid-cols-2  sm:grid-cols-3 md:grid-cols-5 gap-x-5 gap-y-8   mt-4 cursor-pointer mb-7 rounded-lg `;
const CardContainer = tw.div`grid  grid-cols-2  sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 lg:px-20 md:px-24 sm:px-10   mt-4  mb-7 rounded-lg `;
export default Geners;
