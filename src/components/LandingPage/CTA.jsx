import React from "react";


const CTA = () => {
  return (
    <>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 lg:px-44 py-14">
        <div className="flex flex-col justify-between items-center px-2 md:px-14 lg:px-20 lg:hidden">
          <h1 className=" text-white text-5xl font-semibold pb-10">
            Create an NFT with your best Loop. Get royalties forever.
          </h1>
          <img
            src="https://www.liveloop.live/wp-content/uploads/2023/07/Card.png"
            alt=""
            className=" w-full"
          />
          <p className=" text-white text-xl px-5 pb-10 lg:pb-0">
            This is our minted NFT, with your best work.
          </p>
        </div>
        <div className="flex flex-col justify-start items-center px-2 md:px-14 lg:px-20">
          <img
            src="https://www.liveloop.live/wp-content/uploads/2023/07/LiveLoop-GIF-250kb-1.gif"
            alt=""
            className=" w-full"
          />
          <p className=" text-white text-xl px-5">
            This is our platfrom, LoopNFT, where anybody can easily create a
            loop. to see more details, or to try our product, visit
            LoopNFT.live
          </p>
        </div>
        <div className="hidden lg:flex flex-col justify-between items-center px-20">
          <h1 className=" text-white text-5xl font-semibold pb-10">
            Create an NFT with your best Loop. Get royalties forever.
          </h1>
          <img
            src="https://www.liveloop.live/wp-content/uploads/2023/07/Card.png"
            alt=""
            className=" w-full"
          />
          <p className=" text-white text-xl px-5">
            This is our minted NFT, with your best work.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 lg:px-44 py-14 lg:py-44 bg-[#0a0a0a]">
        <div className="flex flex-col justify-center items-center px-20">
          <img
            src="https://www.liveloop.live/wp-content/uploads/2023/07/Profile-shorter.png"
            alt=""
            className=" w-full"
          />
        </div>
        <div className="flex flex-col justify-between items-center px-4 md:px-14 lg:px-20">
          <h1 className=" text-white text-4xl font-semibold pb-10">
            Create and mint music NFT with Looping Software.
          </h1>
          <p className=" text-white text-xl">
          LoopNFT is a music platform where you can make music, generate an
            NFT and sell it in the LoopNFT's Store, everything in one place
          </p>
        </div>
      </div>
    </>
  );
};

export default CTA;
