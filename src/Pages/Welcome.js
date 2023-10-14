import React, { useState, useRef, useEffect } from "react";
import tw from "tailwind-styled-components";
import Logo from "../Components/SVGs/Logo";
import Config from "../Config";
import axios from "axios";
import Alert from "../Components/Alert";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { Save_User_Data } from "../Redux/actions";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
// import Background from "../Components/SVGs/Background";

const Welcome = () => {
  const { t, i18n } = useTranslation();
  const [isOtpVisible, setIsOtpVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const FirstOTPRef = useRef(null);
  const SecondOTPRef = useRef(null);
  const ThirdOTPRef = useRef(null);
  const FourthOTPRef = useRef(null);
  const verifyOtpButton = useRef(null);
  const navigate = useNavigate();

  const [activeLang, setActiveLang] = useState(i18n.language || "");

  const dispatch = useDispatch();

  const [firstName, setName] = useState("");

  const [mobile, setMobile] = useState("");
  const [plan, setPlan] = useState("");
  const [otp, setOtp] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });

  const [alert, setAlert] = useState({
    show: false,
    color: "",
    msg: "",
  });

  const clearAlert = () =>
    setTimeout(() => setAlert({ show: false, color: "", msg: "" }), 10000);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const OTPChangeHandler = (e) => {
    const { name, value } = e.target;
    if (value.length <= 1) {
      setOtp((prev) => ({ ...prev, [name]: value }));
      if (value.length === 1) {
        if (name === "first") SecondOTPRef.current.focus();
        else if (name === "second") ThirdOTPRef.current.focus();
        else if (name === "third") FourthOTPRef.current.focus();
        // else if (name === "fourth") FifthOTPRef.current.focus();
      }
    }
  };

  const onSuccess = (data, values) => {
    if (data.data.status == "OK") {
      setIsOtpVisible(true);
    } else {
      setAlert({
        msg: data.data.msg || "An Error Occured",
        show: true,
        color: "red",
      });
    }
    clearAlert();
  };

  const onError = (data) => {
    console.log("error", data);
    setAlert({ msg: data.msg, show: true, color: "red" });
    clearAlert();
  };

  const onVerifyOtpSuccess = (data, values) => {
    // console.log(data.data);
    // window.location.replace(`/`);
    // clearAlert();
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isOtpVisible) {
      verifyOtp(e);
      window.location.replace(`/home`);
      //verifyOtpApi();
    } else {
      //setIsOtpVisible(true);
      registerUser(e);
    }
  };

  const registerUserApi = async () => {
    const body = new FormData();
    body.append("mobile", mobile);
    body.append("plan", plan);
    body.append("language", activeLang);
    //body.append("name", firstName);

    return await axios.post(Config.RegisterApi, body, {
      headers: {
        authorization: Config.AxiosConfig.headers.authorization,
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    });
  };

  const { mutate: registerUser, isLoading } = useMutation(registerUserApi, {
    onSuccess,
    onError,
  });

  const verifyOtpApi = async () => {
    const body = new FormData();
    body.append("mobile", mobile);
    body.append("otp", otp.first + otp.second + otp.third + otp.fourth);
    body.append("language", activeLang);
    const resp = await axios.post(Config.VerifyOtpApi, body, {
      headers: {
        authorization: Config.AxiosConfig.headers.authorization,
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    });
    //console.log(resp);
    if (resp.data.status === "OK") {
      // window.location.replace(`/`);
      // clearAlert();
      console.log("getting data", resp.data);
      if (resp.data.name == "") {
        var name = resp.data.name;
        var gender = resp.data.gender;
        dispatch(Save_User_Data({ ...resp.data, mobile, name, gender }));
        navigate("/profile", { mobile: mobile });
        // window.location.replace(`/profile`);
      } else {
        var name = resp.data.name;
        var gender = resp.data.gender;
        dispatch(Save_User_Data({ ...resp.data, mobile, name, gender }));
      }
    } else {
      setAlert({ msg: resp.data.msg, show: true, color: "red" });
      clearAlert();
    }
  };

  const { mutate: verifyOtp, isOtpVerifyLoading } = useMutation(verifyOtpApi, {
    onVerifyOtpSuccess,
    onError,
  });

  useEffect(() => {
    setActiveLang(i18n.language);
  }, [i18n]);

  const languageChangeHandler = (value) => {
    setActiveLang(value);
    i18n.changeLanguage(value);
  };

  return (
    <div className=" flex grow backdrop-brightness-50 backdrop-contrast-120   ">
      <BgImage />

      <Bg>
        <Overlay />

        <Wrapper>
          {/* <Title>
            <>
              <span>{t("AwccVideo")}</span>
              <br />
            </>
          </Title> */}
          <LogoN>
            <Sevo>Sevo</Sevo>
            <Plus>Plus</Plus>
          </LogoN>
          <SubTitl>{t("OTT")}</SubTitl>
          <Line />

          <SubTitle>{t("Premium")}</SubTitle>
          <SubTit>{t("PremiumTag")}</SubTit>
          <div className="flex justify-center items-center">
            <SubBtn type="submit" onClick={() => navigate("/newlogin")}>
              {t("LoginText")}
            </SubBtn>
          </div>
        </Wrapper>
      </Bg>
    </div>
  );
};

const ErrorMessage = (msg) => <ErrorText>{msg}</ErrorText>;

const Container = tw.section` shadow-lg md:border relative bg-white shadow-md min-h-screen overflow-y-auto  overflow-x-hidden bg-gradient-to-b from-custom-black to-blue-800 `;
// const Container = tw.section`Container shadow-lg md:border relative bg-white shadow-md min-h-screen overflow-y-auto  overflow-x-hidden bg-gradient-to-b from-custom-black to-blue-800 `;
// const Wrapper = tw.div`w-full pt-8 px-10 pb-10  h-full max-w-lg  backdrop-brightness-50 backdrop-contrast-120   `;
const Wrapper = tw.div`  w-full z-10 px-10    max-w-lg    font-normal  `;
// const Wrapper = tw.div` pt-8 px-4 pb-10 h-full  backdrop-brightness-50 backdrop-contrast-120 `;
const LogoN = tw.div`flex flex-row font-bold text-xl justify-center mb-4`;
const Sevo = tw.div`text-white rounded-md uppercase`;
const Plus = tw.div`text-secondaryfont-blue uppercase`;
const Title = tw.h3`font_f text-secondaryfont-blue md:text-2xl text-lg    mb-2  leading-8   text-center`;
const SubTitl = tw.h3`font_f text-white text-xl md:text-3xl  mt-0 mb-6 mt-8 leading-8   text-center`;
const SubTitle = tw.h3`w-full text-white mt-2  text-lg text-center font-medium`;
const SubTit = tw.h3`w-full text-white mt-2  text-sm text-center`;

const Footer = tw.h3`w-full text-white text-md font-extralight text-center margin-auto mt-20`;

const InputGroup = tw.div`relative mt-9    `;
const OTPInputGroup = tw.div`mt-8 flex items-center space-x-5 justify-between    `;

const Label = tw.label`absolute top-0 left-0 bottom-0 w-12 flex justify-center items-center text-lg md:text-base font-normal text-white `;

const Input = tw.input`w-full border-b border-gray-200 focus:outline-0 pl-12 text-lg md:text-base bg-transparent  text-white font-normal px-2 py-3 `;

const Select = tw.select`options w-full border-b border-gray-200 focus:outline-0 text-xl md:text-base bg-transparent  text-white font-normal px-2 py-3`;

const OTPInput = tw.input`w-full focus:outline-0 border-b text-white border-white h-16 w-16 lg:h-12 lg:w-12   font-medium  bg-transparent  text-center text-xl `;

const SubmitBtn = tw.button`w-full bg-custom-blue text-white text-center py-3 rounded-md mt-10 tracking-wider uppercase font-medium hover:bg-custom-blue transition duration-300 hover:shadow-lg shadow-md`;

const ErrorText = tw.p` text-red-700 text-sm my-1`;

const BgImage = tw.div` login-bg h-screen w-full  opacity-95 overflow-y-auto flex justify-center items-center  `;

const LangBtn = tw.button`bg-white hover:bg-custom-blue  text-black   px-2 py-1  ml-2 rounded-full `;

const SubBtn = tw.button`w-80 bg-secondaryfont-blue text-sm text-white text-center py-4  mt-10 tracking-wider uppercase font_f font-medium hover:bg-secondaryfont-blue transition duration-300 hover:shadow-lg shadow-md rounded-full`;

const Bg = tw.div`ln-bg flex justify-center items-center  overflow-y-auto bg-gradient-to-b from-custom-black to-secondaryBg-blue h-screen w-full `;
const Line = tw.div`w-52 h-0.5 mx-auto bg-gray-400 rounded-md`;
const Overlay = tw.div` absolute left-0 bottom-0 right-0 top-0 flex justify-center items-center h-screen w-full bg-gradient-to-r from-from-black to-gray-700  opacity-50 sm:opacity-0`;
export default Welcome;
