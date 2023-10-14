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

const RegisterPage = () => {
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

  const [name, setName] = useState("");

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

  const onResendSuccess = (data, values) => {
    if (data.data.status == "OK") {
      console.log(data.data);
      setAlert({ msg: data.data.msg, show: true, color: "green" });
      clearAlert();
    }
  };

  const onResendError = (data) => {
    console.log("error", data);
    setAlert({ msg: data.data.msg, show: true, color: "red" });
    clearAlert();
  };

  const onError = (data) => {
    console.log("error", data);
    setAlert({ msg: data.msg, show: true, color: "red" });
    clearAlert();
  };

  const onVerifyOtpSuccess = (data, values) => {
    // console.log(data.data);
    // window.location.replace(`/homeplan`);
    // clearAlert();
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (isOtpVisible) {
      verifyOtp(e);
      // window.location.replace(`/homeplan`);
      // verifyOtpApi();
    } else {
      //setIsOtpVisible(true);
      registerUser(e);
    }
  };

  // const registerUserApi = async () => {
  //   const body = new FormData();
  //   body.append("mobile", mobile);
  //   body.append("plan", plan);
  //   body.append("language", activeLang);
  //   body.append("name", firstName);
  const registerUserApi = async () => {
    const body = new FormData();
    body.append("msisdn", mobile);
    body.append("name", name);

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

  const resendUserApi = async () => {
    const body = new FormData();
    body.append("msisdn", mobile);
    // body.append("plan", plan);
    // body.append("language", activeLang);
    // body.append("name", name);

    return await axios.post(Config.ResendApi, body, {
      headers: {
        authorization: Config.AxiosConfig.headers.authorization,
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
      },
    });
  };

  const { mutate: resendUser, isResend } = useMutation(resendUserApi, {
    onSuccess: onResendSuccess,
    onError: onResendError,
  });

  const verifyOtpApi = async () => {
    const body = new FormData();
    body.append("msisdn", mobile);
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
      window.location.replace(`/homeplan`);
      // clearAlert();
      console.log("getting data", resp.data);
      if (resp.data.name == "") {
        var name = resp.data.name;
        var gender = resp.data.gender;
        dispatch(Save_User_Data({ ...resp.data, mobile, name, gender }));
        // navigate("/profile", { mobile: mobile });
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
    onSuccess: onVerifyOtpSuccess,
    onError: onError,
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
          <LogoN>
            <Sevo>Sevo</Sevo>
            <Plus>Plus</Plus>
          </LogoN>
          <Title>
            {isOtpVisible ? (
              <>
                <h1 className="text-2xl">{t("OtpVerification")}</h1>
              </>
            ) : (
              <>
                <h1 className="text-2xl">{t("LetsGo")}</h1>
                <div className="flex justify-center">
                  <SubTit>{t("PremiumTag")}</SubTit>
                </div>
              </>
            )}
          </Title>
          <ErrorMsg>
            {alert.show && (
              <Alert msg={alert.msg} color={alert.color || "red"} />
            )}
          </ErrorMsg>
          {/* {isOtpVisible == false && <SubTitle>{t("LoginSubText")}</SubTitle>} */}
          {isOtpVisible && <SubTitle>{t("OtpSent")}</SubTitle>}

          <form onSubmit={submitHandler}>
            {!isOtpVisible && (
              <>
                <InputGroup>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Enter Your Name"
                    autoComplete="off"
                    maxLength="20"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                </InputGroup>
                {errorMessage && <ErrorMessage msg={errorMessage} />}

                <InputGroup>
                  <Input
                    name="msisdn"
                    type="number"
                    placeholder="Enter Your Number"
                    autoComplete="off"
                    maxLength="9"
                    onChange={(e) => setMobile(e.target.value)}
                    value={mobile}
                    required
                  />
                </InputGroup>
              </>
            )}

            {isOtpVisible && (
              <OTPInputGroup>
                <OTPInput
                  type="number"
                  autoComplete="off"
                  maxLength="1"
                  value={otp.first}
                  name="first"
                  ref={FirstOTPRef}
                  onChange={(e) => OTPChangeHandler(e)}
                />
                <OTPInput
                  type="number"
                  autoComplete="off"
                  maxLength="1"
                  value={otp.second}
                  name="second"
                  ref={SecondOTPRef}
                  onChange={(e) => OTPChangeHandler(e)}
                />
                <OTPInput
                  type="number"
                  autoComplete="off"
                  maxLength="1"
                  value={otp.third}
                  name="third"
                  ref={ThirdOTPRef}
                  onChange={(e) => OTPChangeHandler(e)}
                />
                <OTPInput
                  type="number"
                  autoComplete="off"
                  maxLength="1"
                  value={otp.fourth}
                  name="fourth"
                  ref={FourthOTPRef}
                  onChange={(e) => OTPChangeHandler(e)}
                />
              </OTPInputGroup>
            )}

            <div className="flex justify-center items-center">
              {isOtpVisible ? (
                <SubmitBtn type="submit" disabled={mobile ? false : true}>
                  {t("Verify")}
                </SubmitBtn>
              ) : (
                <SubmitBtn
                  type="submit"
                  disabled={mobile ? false : true}
                  // onClick={() => navigate("/newlogin")}
                >
                  {t("Join")}
                </SubmitBtn>
              )}
            </div>
          </form>

          {isOtpVisible == false && (
            <>
              <Member>
                {t("Already")} &nbsp;{" "}
                <RegisterBtn onClick={() => navigate("/")}>
                  {t("Loginnow")}
                </RegisterBtn>
              </Member>
              <Term>{t("Term")}</Term>
            </>
          )}

          {isOtpVisible && (
            <Resend>
              {t("NotOtp")}
              <ReBtn onClick={() => resendUser(mobile)}>{t("Resend")}</ReBtn>
            </Resend>
          )}

          {isOtpVisible == false && <Line />}
        </Wrapper>
      </Bg>
    </div>
  );
};
const ErrorMessage = (msg) => <ErrorText>{msg}</ErrorText>;

const Container = tw.section` shadow-lg md:border relative bg-white shadow-md min-h-screen overflow-y-auto  overflow-x-hidden bg-gradient-to-b from-custom-black to-blue-800 `;
// const Container = tw.section`Container shadow-lg md:border relative bg-white shadow-md min-h-screen overflow-y-auto  overflow-x-hidden bg-gradient-to-b from-custom-black to-blue-800 `;
// const Wrapper = tw.div`w-full pt-8 px-10 pb-10  h-full max-w-lg  backdrop-brightness-50 backdrop-contrast-120   `;
const Wrapper = tw.div`  w-full  px-8   max-w-lg  z-10  font-normal  `;
// const Wrapper = tw.div` pt-8 px-4 pb-10 h-full  backdrop-brightness-50 backdrop-contrast-120 `;

const Line = tw.div`w-20 h-0.5 mx-auto bg-secondaryfont-blue rounded-md`;
const Term = tw.button`w-full text-secondaryfont-blue  text-base text-center font-normal mt-2`;
const Resend = tw.h3`w-full text-white mt-8  text-base text-center font-normal`;
const Title = tw.h3`font_f  text-white md:text-xl  text-2xl  md:mb-8 mb-6 leading-8   text-center `;
const SubTitl = tw.h3`font_f text-white text-xl   mt-0 mb-6 mt-8 leading-8   text-center`;
const SubTitle = tw.h3`w-full text-gray-400    text-center font-normal`;
const SubTit = tw.h3`w-4/6 text-gray-400 mt-2  text-sm text-center`;
const LogoN = tw.div`flex flex-row font-bold text-xl justify-center mb-4`;
const Sevo = tw.div`text-white rounded-md uppercase`;
const Plus = tw.div`text-secondaryfont-blue uppercase`;
const RegisterBtn = tw.button`text-secondaryfont-blue hover:underline`;
const Member = tw.h3`w-full text-gray-400 mt-4  text-base justify-center font-normal flex flex-row`;

const Footer = tw.h3`w-full text-white text-md font-extralight text-center margin-auto mt-20`;

const InputGroup = tw.div`relative  mt-4 flex justify-center `;
// const OTPInputGroup = tw.div`mt-8 flex items-center space-x-4 justify-between`;
const OTPInputGroup = tw.div`flex flex-row justify-center text-center px-2 mt-5 `;
const ErrorMsg = tw.div`md:mb-8 mb-6  `;

const Label = tw.label`absolute top-0 left-0 bottom-0 w-12 flex justify-center items-center text-lg md:text-base font-normal text-white `;

// const Input = tw.input`text_padding w-full custom-input-bg text-center  border-b border-gray-200  focus:outline-0   text-lg rounded-full w-full py-3 px-4 text-black md:text-white leading-tight    `;
const Input = tw.input`text_padding w-full  custom-input-bg text-center  border-b border-gray-200  focus:outline-0  text-md md:text-lg rounded-full  py-3 px-4 text-black md:text-white leading-tight    `;
// const Input = tw.input`w-full border-b border-gray-200 focus:outline-0 pl-12 text-lg md:text-base bg-transparent  text-white font-normal px-2 py-3 `;
const Select = tw.select`options w-full border-b border-gray-200 focus:outline-0 text-xl md:text-base bg-transparent  text-white font-normal px-2 py-3`;

// const OTPInput = tw.input`w-full focus:outline-0 border-b text-white border-white h-16 w-16 lg:h-12 lg:w-12   font-medium  bg-transparent  text-center text-xl `;
const OTPInput = tw.input`  md:text-white m-2 border h-10 w-10 md:h-14 md:w-14 text-center form-control rounded bg-white custom-input-bg  text-black outline-none `;
// const OTPInput = tw.input`w-full text_color h-full custom-input-bg py-7 px-5 flex flex-col items-center justify-center text-center  outline-none rounded-md   text-lg bg-white text-white  `;
const SubmitBtn = tw.button`w-52    rounded-full bg-secondaryfont-blue text-white text-center py-3   mt-8 tracking-wider  font-medium hover:bg-secondaryfont-blue transition duration-300 hover:shadow-lg shadow-md`;
// const SubmitBtn = tw.button`w-60    rounded-full bg-secondaryfont-blue text-white text-center py-3  mt-6 tracking-wider uppercase font-medium hover:bg-secondaryfont-blue transition duration-300 hover:shadow-lg shadow-md`;
const ReBtn = tw.button` text-secondaryfont-blue text-center px-2 hover:underline   font-normal    `;
const ErrorText = tw.p` text-red-700 text-sm my-1`;

const BgImage = tw.div` login-bg h-screen w-full  opacity-95 overflow-y-auto flex justify-center items-center  `;

const LangBtn = tw.button`bg-white hover:bg-custom-blue  text-black   px-2 py-1  ml-2 rounded-full `;

const SubBtn = tw.button`w-full bg-secondaryfont-blue text-white text-center py-3  mt-10 tracking-wider uppercase font-sans font-medium hover:bg-secondaryfont-blue transition duration-300 hover:shadow-lg shadow-md rounded-full`;
const Overlay = tw.div` absolute left-0 bottom-0 right-0 top-0 flex justify-center items-center h-screen w-full bg-gradient-to-r from-from-black to-gray-700  opacity-50 md:opacity-0`;
const Bg = tw.div`log-bg flex justify-center items-center bg-gradient-to-b from-custom-black to-secondaryBg-blue h-screen w-full bg-left-bottom`;
export default RegisterPage;
