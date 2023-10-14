import React, { useState, useRef } from "react";
import BackIcon from "./SVGs/BackIcon";
import tw from "tailwind-styled-components";
import SalaamLogo from "./SVGs/SalaamLogo";
import { useNavigate } from "react-router-dom";
import Images from "../Images";
import { useTranslation } from "react-i18next";

const Searchbar = ({ searchMedicineListHandler }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  //const [query, setQuery] = useState("");

  const setQuery = (query) => {
    if (query.length >= 3) {
      searchMedicineListHandler(query);
    }
  };

  // const backFunction = () => {
  //   if (route) return navigate(route);
  //   return navigate("/");
  // };

  return (
    <Wrapper>
      <InputGroup>
        <Input
          name="query"
          type="text"
          placeholder={t("SearchMedicine")}
          autoComplete="off"
          maxLength="9"
          onChange={(e) => setQuery(e.target.value)}
          //value={query}
          required
        />
        <Image
          src={Images.Search}
          widthalt="create icon"
          className="w-5  absolute top-1.5 lg:top-3 lg:right-4 right-2.5"
        />
      </InputGroup>
    </Wrapper>
  );
};

const Wrapper = tw.div`h-10 lg:h-16  bg-white flex items-center justify-between w-full  `;
const LogoMenuWrapper = tw.div`flex items-center space-x-5`;
const Title = tw.h2`text-xl font-medium text-custom-blue capitalize`;
const InputGroup = tw.div`w-full relative border border-custom-blue rounded-lg ml-4 mr-4`;

const Input = tw.input`ml-2 w-5/6 focus:outline-0 pl-2 text-lg text-gray-700 font-light py-1 lg:py-3 text-base inline-block border-0`;
const Image = tw.img`right-0 inline-block`;
export default Searchbar;
