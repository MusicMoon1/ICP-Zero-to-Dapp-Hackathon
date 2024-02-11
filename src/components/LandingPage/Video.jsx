import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { Gradient } from "whatamesh";
import ReactPlayer from "react-player";
import thumbnailUrl from "../../assets/thumb1.jpg"
const Video = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);
  
  return (
    <div className=" mx-auto container min-h-screen mt-10 bg-[#000] px-2">
   <div className=" flex justify-center items-center">
          <h1 className=" text-2xl sm:text-3xl md:text-5xl pb-10 font-semibold text-white text-center max-w-3xl">
          See LoopNFT demo
          </h1>
        </div>
             
      <div className="relative flex justify-between flex-col items-center rounded-xl lg:h-[90vh] w-full lg:py-20 overflow-hidden">
      
      <ReactPlayer
            url="https://vimeo.com/866359588"
            width="100%"
            height="100%"
            controls={true}
            light={thumbnailUrl} // Show video controls (play, pause, etc.)
          />
        </div>
    </div>
  );
};

export default Video;
