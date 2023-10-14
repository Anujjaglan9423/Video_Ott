import tw from "tailwind-styled-components";
const Card = ({ id, name, img, time, icon, timeicon, navigate }) => (
  <CardWrapper>
    {/* <ImgGroup> */}
    <img
      src={img}
      alt={name}
      onClick={() => navigate("/detail")}
      className="w-full h-full object-cover rounded-lg cursor-pointer"
    />
    <Overlay />
    {/* </ImgGroup> */}

    <NameGroup>
      <Icon>{icon}</Icon>

      <Name>{name}</Name>
    </NameGroup>

    <TimeGroup>
      {/* <TimeIcon style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.7)" }}>
        {timeicon}
      </TimeIcon> */}
      <Time style={{ textShadow: "1px 1px 1px rgba(0,0,0,0.5)" }}>{time}</Time>
    </TimeGroup>
  </CardWrapper>
);

const CardWrapper = tw.div`relative max-w-xs h-full`;
// const ImgGroup = tw.div`bg-gradient-to-b from-black to to-grey-500 transition duration-500 ease-in-out transform hover:-translate-y-1 cursor-pointer hover:scale-110 opacity-80 backdrop-brightness-50 backdrop-contrast-120`;
const Icon = tw.div`  text-xs mr-1  text-white md:text-xl  `;
const Name = tw.div` text-xs text-white    `;
const Time = tw.div` text-xs text-white  md:text-md `;
const TimeIcon = tw.div` text-xs text-white  md:text-md`;
const TimeGroup = tw.div`absolute flex top-0 right-2  justify-end items-center`;
const NameGroup = tw.div`absolute flex left-0 bottom-1 w-full justify-start pl-1.5 items-center`;
const Overlay = tw.div`absolute left-0 bottom-0 right-0 top-50 w-full h-1/2 bg-gradient-to-t from-secondaryBg-blue to-transparent   to-transparent opacity-90`;

// const SwiperGroup = tw.div` relative middle-carousel h-40 w-100  ml-4 mr-4   md:h-60 md:w-100  overflow-hidden  `;
export default Card;
