import React from "react";
import tw from "tailwind-styled-components";

const BeginnerDetail = () => {
  return (
    <Wrapper>
      <SingleItem
        img="http://coach.devel.via-mobi.com/95/static/media/95/1.jpg"
        title="Cubes (twisting)"
        desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas possimus mollitia veniam obcaecati fugit vero harum laborum voluptates alias beatae, libero quae? Inventore, soluta asperiores."
      />
    </Wrapper>
  );
};

const SingleItem = ({ img, title, desc }) => {
  return (
    <SingItemWrapper>
      <img src={img} className="w-full mb-4 h-44 object-cover rounded-md" />
      <SingItemTitle>{title}</SingItemTitle>
      <SingItemSubTitle>{desc}</SingItemSubTitle>
    </SingItemWrapper>
  );
};

const Wrapper = tw.div`w-full`;
const SingItemWrapper = tw.div`w-full p-4 pt-2  bg-white rounded-b-md`;
const SingItemTitle = tw.h2`font-bold text-lg text-gray-600  `;
const SingItemSubTitle = tw.h4`text-gray-500 text-sm `;

export default BeginnerDetail;
