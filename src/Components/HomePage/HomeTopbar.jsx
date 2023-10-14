import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import RightMenuIcon from "../SVGs/RightMenuIcon";
import { Link } from "react-router-dom";
import UnsubscribeModel from "../UnsubscribeModel";
import { useDispatch, useSelector } from "react-redux";
import Config from "../../Config";
import axios from "axios";
import { Remove_User } from "../../Redux/actions";
import { useTranslation } from "react-i18next";
import { AiFillHome, AiFillMedicineBox, AiFillBook, AiOutlineFundView } from "react-icons/ai";
import { IoMdCall,  } from "react-icons/io";
import { RiChatVoiceFill } from "react-icons/ri";
import { BiLogOut, BiUser, BiTrendingUp, BiCategory} from "react-icons/bi";
import { MdClose, MdOutlineLiveTv } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";
import { GrView } from "react-icons/gr";
import { GiNightVision} from "react-icons/gi";
import { FiRadio} from "react-icons/fi";



const HomeTopbar = () => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openModel, setOpenModel] = useState(false);

  const [activeLang, setActiveLang] = useState(i18n.language || "english");

  useEffect(() => {
    setActiveLang(i18n.language);
  }, [i18n]);

  const openSidebar = () => setIsMenuOpen(true);
  const closeSidebar = () => setIsMenuOpen(false);
  const openModelFunc = () => {
    setOpenModel(true);
    closeSidebar();
  };
  const closeModelFunc = () => setOpenModel(false);
  const user = useSelector((state) => state.UserReducer.user);

  const unsubscribeUserApi = async () => {
    const body = new FormData();
    body.append("mobile", user?.mobile);

    const resp = await axios.post(Config.UnsuscribeUser, body, {
      headers: {
        authorization: Config.AxiosConfig.headers.authorization,
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    });
    if (resp.data.status === "OK") {
      dispatch(Remove_User());
      window.location.replace(`/`);
    } else {
      //setAlert({ msg: resp.data.msg, show: true, color: "red" });
      //clearAlert();
    }
  };

  const languageChangeHandler = (e) => {
    const { value } = e.target;
    setActiveLang(value);
    i18n.changeLanguage(value);
  };

  return (
    // <div className="bg-custome-bg border-none border-gray-200 py-4 bg-cyan-600">
      <div className="bg-custom-darkBlue border-none border-gray-200 py-2 sticky w-full z-10 top-0 ">
      <SidebarComp
        isMenuOpen={isMenuOpen}
        closeSidebar={closeSidebar}
        openModelFunc={openModelFunc}
        activeLang={activeLang}
        languageChangeHandler={languageChangeHandler}
        t={t}
      />

      <Wrapper>
        {/* {openModel && (
          <UnsubscribeModel
            setOpenModel={setOpenModel}
            closeModelFunc={closeModelFunc}
            unsubHandler={unsubscribeUserApi}
          />
        )} */}

<div onClick={openSidebar}>
            <RightMenuIcon />
          </div>

        {/* <LogoMenuWrapper> */}
          {/* <div className="w-50 ">  */}
            <h3 className="text-2xl text-white font-normal font_f">
              <Link to="/home"> Sevo Plus</Link>
            {/* <span className="text-sm text-secondaryfont-blue font_f ">
            TV
            </span> */}
            </h3>
          {/* </div> */}
        {/* </LogoMenuWrapper> */}
            {/* <NavLinc> */}
              <NavItems>
        <Link to="/movies">Movie</Link>
        </NavItems>
        <NavItems>
          <Link to="/movies">TV</Link>
        </NavItems>
        <NavItems>
          <Link to="/movies">Sports</Link>
        </NavItems>
        <NavItems>
          <Link to="/movies">Sevo+</Link>
        </NavItems>
        <NavItems>
          <Link to="/movies">Kids</Link>
        </NavItems>
        {/* </NavLinc> */}

        {/* <div className="flex items-center space-x-3"> */}
          <span>
          <FiRadio className="w-7 h-7 text-white font-bold text-secondaryfont-blue " />
          <p className="text-white text-xs font_f ">Radio</p>
          </span>
          
        {/* </div> */}
      </Wrapper>
    </div>
  );
};





const SidebarComp = ({
  isMenuOpen,
  closeSidebar,
  openModelFunc,
  activeLang,
  languageChangeHandler,
  t,
}) => (
  <SidebarWrapper $isMenuOpen={isMenuOpen}>
    <Sidebar>
      <CloseBtn onClick={closeSidebar}>
        <MdClose className="w-6 h-6" />
      </CloseBtn>

      <List>
        <Link to="/">
          <MenuItem>
            <AiFillHome className="w-5 h-5 mr-2 text-gray-600  " />
            {t("Home")}
          </MenuItem>
        </Link>
        <Link to="/list">
          <MenuItem>
            <BiCategory className="w-5 h-5 mr-2 text-gray-600  " />
            {t("ConsultDoctor")}
          </MenuItem>
        </Link>

        <Link to="/list">
          <MenuItem>
            <MdOutlineLiveTv className="w-5 h-5 mr-2 text-gray-600  " />
            {t("MedicalCall")}
          </MenuItem>
        </Link>

       

        <Link to="/list">
          <MenuItem>
            <GiNightVision className="w-5 h-5 mr-2 text-gray-600  " />
            {t("DoctorAdvice")}
          </MenuItem>
        </Link>

        <Link to="/list">
          <MenuItem>
            <BiTrendingUp className="w-5 h-5 mr-2 text-gray-600  " />
            {t("Trending")}
          </MenuItem>
        </Link>

        <Link to="/list">
          <MenuItem>
            <AiOutlineFundView className="w-5 h-5 mr-2 text-gray-600  " />
            {t("Most Viewed")}
          </MenuItem>
        </Link>
        
      </List>
    </Sidebar>
    <BlackBg onClick={closeSidebar}></BlackBg>
  </SidebarWrapper>
);

// const Wrapper = tw.nav`h-16  flex mb-1  items-center justify-between px-4 z-50 max-w-5xl mx-auto `;
const Wrapper = tw.nav`h-16  flex mb-1  items-center justify-between md:justify-evenly px-4 z-50  md:mx-4 `;
// const Wrapper = tw.nav`h-16  flex mb-1  justify-between px-4 z-50  md:mx-4 `;
// const LogoMenuWrapper = tw.div`flex space-x-5 lg:space-x-8`;

const SidebarWrapper = tw.div`
${(p) => (p.$isMenuOpen ? " opacity-100" : " pointer-events-none opacity-0")}
  h-screen flex fixed top-0 w-full  transition duration-200 z-50`;
const Sidebar = tw.div`h-full bg-custom-darkBlue text-gray-600 w-8/12  lg:w-5/12 z-40 `;
// const Sidebar = tw.div`h-full bg-custom-darkBlue text-gray-600 w-8/12  lg:w-5/12 z-40 `;
const BlackBg = tw.div`bg-alpha-black w-4/12 lg:w-7/12 h-full`;
const CloseBtn = tw.div`w-full mt-2  py-2.5 flex justify-end items-center p-3 pointer-cursor`;
const Title = tw.h3`text-xl lg:text-2xl font-semibold text-custom-black`;
const SubTitle = tw.div`text-sm text-gray-500 lg:mt-1`;
const List = tw.ul``;
const MenuItem = tw.li` flex items-center p-3 cursor-pointer text-white hover:text-secondaryfont-blue border-b border-gray-300 text-lg`;
const NavItems= tw.div`text-white font-medium`;
export default HomeTopbar;
