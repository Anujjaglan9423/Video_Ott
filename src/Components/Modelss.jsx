import React from "react";
import tw from "tailwind-styled-components";
import Images from "../Images";

const Model = ({ width, setOpenModelss, children, BG }) => {
  const closeModel = () => setOpenModelss(false);

  const getCurrentTarget = (e) => {
    const targetClass = Array.from(e.target.classList);
    if (targetClass.includes("addCommentModel")) closeModel();
  };

  return (
    <Wrapper onClick={getCurrentTarget}>
      <Box $width={width} className={BG || "bg-white"}>
        <Cross src={Images.CrossBlack} alt="cross" onClick={closeModel} />
        {children}
      </Box>
    </Wrapper>
  );
};

const Wrapper = tw.div`
fixed top-0  higher-z-index right-0 bottom-0 left-0 BlackTransparentBg px-3 h-screen flex justify-center items-center  z-10 addCommentModel overflow-y-auto`;

const Box = tw.div`
${(p) => (p.$width ? ` ${p.$width} ` : " w-11/12 lg:w-3/5")}
 mx-auto h-auto  rounded-md p-6 lg:p-12 relative `;

const Cross = tw.img`
absolute top-5 right-5 w-3.5 z-10 cursor-pointer`;

export default Model;
