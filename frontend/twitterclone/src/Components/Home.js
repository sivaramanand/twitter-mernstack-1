import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Feed from "./Feed";
const Home = () => {
  return (
    <div className="flex justify-between w-[80%] mx-auto ">
      <LeftSide />
      <Feed />
      <RightSide />
    </div>
  );
};

export default Home;
