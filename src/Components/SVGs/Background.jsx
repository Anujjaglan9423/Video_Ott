import React from "react";
import Images from "../../Images";

const Background = () => {
  return (
    <div className="w-full h-screen bg-fixed   " style={{ backgroundImage:`url(${Images.Background})` }}>
        
    </div>
  );
};

export default Background;