// import tw from "tailwind-styled-components";
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import { RiCheckboxCircleLine } from "react-icons/ri";

// const PlanPage = ({ id, heading, subheading, points }) => {
//   return (
// <div>
//   <Heading>{heading}</Heading>
//   <SubHeading>{subheading}</SubHeading>

//   {points.map((item) => (
//     <div>
//       {item.isAvailable ? (
//         <AiOutlineCloseCircle />
//       ) : (
//         <RiCheckboxCircleLine />
//       )}
//       {item.point}
//     </div>
//   ))}
// </div>
//   );
// };

// const Heading = tw.div``;
// const SubHeading = tw.div``;

// export default PlanPage;

import React, { useState, Component } from "react";
import tw from "tailwind-styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { RiCheckboxCircleLine } from "react-icons/ri";
import PlanPage from "../Pages/PlanPage";
import InfoModel from "./InfoModel";

const PlanCard = ({
  id,
  heading,
  subheading,
  points,
  gradientColor,
  btnColor,
}) => {
  const [clickTab, setClickTab] = useState(false);
  const closeModelFunc = () => setClickTab(false);
  const setOpenModel = () => setClickTab(false);

  return (
    <CardContainer>
      <BackGround $gradient={gradientColor}>
        <Heading>{heading}</Heading>
        <SubHeading>{subheading}</SubHeading>
      </BackGround>

      {clickTab && (
        <InfoModel
          setOpenModel={setOpenModel}
          closeModelFunc={closeModelFunc}
        />
      )}

      {points.map((item) => (
        <Icon>
          <Icon1>
            {item.isAvailable ? (
              <RiCheckboxCircleLine />
            ) : (
              <AiOutlineCloseCircle className="text-red-500" />
            )}
          </Icon1>
          <Line1>{item.point}</Line1>
        </Icon>
      ))}

      <div className="flex justify-center">
        <BuyBtn $gradient={btnColor} onClick={() => setClickTab(true)}>
          Buy Now
        </BuyBtn>
      </div>
    </CardContainer>
  );
};
const Heading = tw.div`text-white font-semibold text-md text-center `;
const SubHeading = tw.div`text-white text-lg font-semibold text-center `;
const Icon = tw.div`flex flex-row mt-6 mb-4 ml-4`;
const Icon1 = tw.div`text-green-500  mt-1 `;
const Icon2 = tw.div`text-red-500  mt-1`;
const Line1 = tw.div`text-white ml-4`;
const BuyBtn = tw.button`
${(p) => p.$gradient || "bg-custom-blue"}
w-60   text-white text-center py-3 rounded-md my-10  uppercase font-medium cursor-pointer   `;
const BackGround = tw.div`
${(p) => p.$gradient || "from-cyan-900"}
py-8 bg-gradient-to-b  to-transparent`;
const CardContainer = tw.div`  border border-gray-400 `;
export default PlanCard;
