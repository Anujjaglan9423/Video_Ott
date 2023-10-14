import tw from "tailwind-styled-components";
const ListCard = ({ id, name, img, bgColor, navigate }) => {
  return (
    <CardWrapper>
      {/* <BackGround>{bgColor}</BackGround> */}
      {/* <BackGround $gradient={bgColor}> */}
      <img
        src={img}
        alt={name}
        onClick={() => navigate("/detail")}
        className="w-full h-full object-cover rounded-lg cursor-pointer"
      />
      <Overlay />

      <NameGroup>
        <Name>{name}</Name>
      </NameGroup>
      {/* </BackGround> */}
    </CardWrapper>
  );
};

const CardWrapper = tw.div`relative max-w-xs h-28 md:h-36 hover:scale-110 transform transition duration-200 hover:shadow-lg rounded-md  `;
const BackGround = tw.div`${(p) => p.$gradient || "bg-red-900"}
max-w-xs h-28 md:h-36
   
`;
const Overlay = tw.div`absolute left-0 bottom-0 right-0 top-50 w-full h-full bg-gradient-to-r from-black to-transparent   opacity-70`;
const Name = tw.div`  text-white md:text-2xl  text-lg `;
const NameGroup = tw.div`absolute flex   left-0 bottom-0 right-0 top-50 w-full h-full justify-center  items-center`;
export default ListCard;
