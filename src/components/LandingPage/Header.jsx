import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { MouseParallax, ScrollParallax } from "react-just-parallax";
import { Gradient } from "whatamesh";
const Header = () => {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);
  return (
    <div className=" mx-auto container min-h-screen mt-10 bg-[#000] px-2">
      <div className="relative flex justify-between flex-col items-center rounded-xl lg:h-[90vh] w-full lg:py-20 overflow-hidden">
        <canvas
          id="gradient-canvas"
          data-transition-in
          className="absolute top-0 z-0 left-0 w-full h-full"
        ></canvas>
        <div className=" relative z-[50] w-full flex flex-col lg:flex-row justify-between items-center py-10">
          <div className=" px-4 w-full lg:w-[60%] flex flex-col justify-center items-center lg:px-24">
            <div className="flex flex-col justify-center items-center">
              <h1 className=" text-2xl sm:text-3xl md:text-5xl font-semibold text-center text-white md:max-w-md">
              Mint Your Melody, Own Your Legacy.
              </h1>
              <p className=" text-white text-3xl max-w-md text-center ">
                Create, Mint, Sell and Earn Royalties, All In One Place.
              </p>
              <div className=" mt-5 flex space-x-3 ">
                <a
                  href="https://liveloop.gumroad.com/l/LiveLoopLite_v4/NFT"
                  target="_blank"
                >
                  <button className=" border border-primary text-white px-5 py-3 hover:bg-primary hover:text-black duration-300 ease-in-out transition-all flex justify-center items-center space-x-3">
                    <div>Be the first to access it</div>
                    <Icon icon="ic:twotone-arrow-right-alt" fontSize={25} />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className=" px-4 w-full lg:w-[40%] mt-5 lg:mt-0">
            <div className="flex flex-col justify-center items-center">
              <h1 className="font-normal text-white md:max-w-md text-center">
              LoopNFT stands unrivaled as the most intuitive and superior
                software for live looping. Its functionality has truly
                revolutionized my experience, eliminating the need for multiple
                pieces of equipment. Now, I solely rely on a single device
                equipped with LoopNFT, making my creative process more
                efficient and enjoyable than ever.
              </h1>
              <div className=" flex -space-x-2 mt-10">
                <img
                  src="https://plus.unsplash.com/premium_photo-1678115323020-27c62b5dcb61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  className=" w-10 h-10 rounded-full"
                />
                <img
                  src="https://plus.unsplash.com/premium_photo-1678115323020-27c62b5dcb61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  className=" w-10 h-10 rounded-full"
                />
                <img
                  src="https://plus.unsplash.com/premium_photo-1678115323020-27c62b5dcb61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  className=" w-10 h-10 rounded-full"
                />
                <img
                  src="https://plus.unsplash.com/premium_photo-1678115323020-27c62b5dcb61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  className=" w-10 h-10 rounded-full"
                />
              </div>
              <div className=" font-medium text-white mt-4">2k+ loopers</div>
            </div>
          </div>
        </div>

        <div className=" mt-10 px-3 lg:px-20">
          <ScrollParallax>
            <div className=" flex justify-normal items-center flex-col">
              <img
                src="https://www.liveloop.live/wp-content/uploads/2023/07/Profile-heder-transparent.png"
                alt=""
                className=" w-full rounded-t-xl bg-white/5 backdrop-blur-sm"
              />
              <img
                src="https://www.liveloop.live/wp-content/uploads/2023/07/Profile-shortissimo.png"
                alt=""
                className=" w-full"
              />
            </div>
          </ScrollParallax>
        </div>
      </div>
    </div>
  );
};

export default Header;
