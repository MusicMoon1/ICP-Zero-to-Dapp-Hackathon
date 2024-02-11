import React from "react";
import Marquee from "react-fast-marquee";
const Marque = () => {
  return (
    <div className=" h-[400px] relative overflow-hidden">
      <div className="absolute left-0 top-20 rotate-3 w-full">
        <Marquee speed={100} className="  w-full h-20  bg-primary">
          <h1 className=" text-2xl leading-[0] sm:text-3xl md:text-6xl whitespace-nowrap font-semibold text-white">
            CREATE A LoopNFT &nbsp; CREATE A LoopNFT &nbsp;
          </h1>
        </Marquee>
      </div>
      <div className="absolute w-full right-0 left-0 top-44 -rotate-3">
        <Marquee speed={200} className="  w-full h-24 bg-[#c3f7d7]">
          <h1 className=" text-2xl sm:text-3xl mt-5 md:text-6xl whitespace-nowrap font-semibold text-black md:max-w-md">
            CREATE NFT WITH YOUR LOOP
          </h1>
        </Marquee>
      </div>
    </div>
  );
};

export default Marque;
