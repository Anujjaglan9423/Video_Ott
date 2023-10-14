import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import { FiRadio } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { BsSearch } from "react-icons/bs";
import {
  AiFillHome,
  AiFillMedicineBox,
  AiFillBook,
  AiOutlineFundView,
} from "react-icons/ai";
import Images from "../../Images";

const HomeTopbarNew = () => {
  const { t, i18n } = useTranslation();
  const [navbar, setNavbar] = useState(false);
  const [user, setUser] = useState(false);

  return (
    <Nav>
      <Container>
        <div>
          <MenuBtn>
            <div className="md:hidden z-20">
              <Btn onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </Btn>
            </div>

            <Link className="z-20 " to="/">
              {/* <Sevo>Sevo Plus</Sevo> */}
              <Logo>
                <Sevo>Sevo</Sevo>
                <Plus>Plus</Plus>
              </Logo>
            </Link>

            <div>
              <MenuWrapper $isNavbar={navbar}>
                <UnorderedList>
                  <Link to="/home">
                    <List>Home</List>
                  </Link>

                  <List>
                    <Link to="/home"> Comedy</Link>
                  </List>

                  <List>
                    <Link to="/home"> TV Shows </Link>
                  </List>

                  <List>
                    <Link to="/home"> Thriller </Link>
                  </List>

                  <List>
                    <Link to="/home"> Trending</Link>
                  </List>

                  <List>
                    <Link to="/search">
                      {/* {" "}
                      <BsSearch /> */}
                      Search
                    </Link>
                  </List>
                </UnorderedList>
              </MenuWrapper>
            </div>

            <UserWrapper>
              <UserBtn onClick={() => setUser(!user)} type="button">
                {user && (
                  <>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src={Images.SevoLogo}
                      alt="user photo"
                    />
                  </>
                )}

                {!user && (
                  <>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src={Images.SevoLogo}
                      alt="user photo"
                    />
                  </>
                )}
              </UserBtn>

              <div>
                <UserOption $isUser={user}>
                  <div className=" z-10 w-44  ">
                    <div className="py-3 px-4 text-md text-white ">
                      <div>Hi, User</div>
                    </div>
                    <ul className="py-1 text-sm text-white">
                      <OrderedList>
                        <Link to="/watchlist">Watchlist</Link>
                      </OrderedList>

                      <OrderedList>
                        <Link to="/account">My Account</Link>
                      </OrderedList>
                      <OrderedList>
                        <Link to="/radio">Radio</Link>
                      </OrderedList>
                      {/* <OrderedList>
                        <Link to="/geners">Geners</Link>
                      </OrderedList> */}
                      <OrderedList>
                        <Link className="text-red-500" to="/">
                          Log Out
                        </Link>
                      </OrderedList>
                    </ul>
                  </div>
                </UserOption>
              </div>
            </UserWrapper>
          </MenuBtn>
        </div>
      </Container>
    </Nav>
  );
};

const UnorderedList = tw.div`items-center justify-center  space-y-1 md:flex md:space-x-6 md:space-y-0`;
const List = tw.div`text-sm font_f flex items-center p-2 cursor-pointer text-gray-300 hover:text-white`;
const OrderedList = tw.div`block py-2 px-4 text-gray-300 hover:text-white`;
const Btn = tw.div`p-2 text-white rounded-md outline-none focus:border-white`;
const UserBtn = tw.div`flex  text-sm  rounded-full md:mr-0 justify-end cursor-pointer`;
const Nav = tw.div` bg-secondaryBg-blue shadow `;
const Container = tw.div`items-center    md:items-center  `;
const MenuBtn = tw.div`flex items-center justify-between py-3 md:py-5  `;
const Logo = tw.div`flex flex-row font-bold text-xl `;
const Sevo = tw.div`text-white rounded-md uppercase`;
const Plus = tw.div`text-secondaryfont-blue uppercase`;
// const Sevo = tw.div`text-2xl font-bold text-white     `;
const MenuWrapper = tw.div`
${(p) => (p.$isNavbar ? "block" : "hidden")}
flex justify-self-center pb-4 absolute top-0 left-0 z-10 rounded-md shadow-xl md:shadow-none md:block md:pb-0 md:mt-0 bg-planBg pt-14 pl-4 md:pt-0 md:relative md:bg-transparent -translate-y-100% w-full cursor-pointer`;
const UserOption = tw.div`
${(p) => (p.$isUser ? "block" : "hidden")}
flex-1 justify-self-center pb-3 mt-2  md:pb-0 md:mt-0 absolute top-10 bg-planBg rounded-md right-4 z-10 shadow-lg 
`;
const UserWrapper = tw.div`relative z-10`;
export default HomeTopbarNew;
