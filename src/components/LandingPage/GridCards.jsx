import React from "react";

const GridCards = () => {
  return (
    <>
      <div className=" grid  lg:grid-cols-2 gap-5 py-12 px-4 md:px-14 lg:px-44">
        <div className=" bg-primary p-10 rounded-xl text-black flex justify-center items-center flex-col">
          <h1 className=" text-xl font-semibold">
            NFT, forever rights and royalties
          </h1>
          <p className=" text-center text-sm">
            You can create original audio loops and sell your work on our
            platform
          </p>
          <img
            src="https://www.liveloop.live/wp-content/uploads/2023/07/Card-Detail.png"
            alt=""
          />
        </div>
        <div className=" grid grid-cols-1 gap-3">
          <h1 className=" text-3xl font-bold text-white">
            Join us in this crazy adventure
          </h1>
          <div className="bg-[#c4f6d7] rounded-xl p-10 grid grid-cols-2">
            <div className=" ">
              <h1 className="text-xl font-semibold">
                Bid your favourite Loops
              </h1>
              <p>
                you can also browse and buy the rights for your favourite beats,
                created by your favourite artists
              </p>
            </div>
            <div>
              <img
                src="https://www.liveloop.live/wp-content/uploads/2023/07/Card.png"
                alt=""
              />
            </div>
          </div>
          <div className="bg-[#ffffff] p-10 rounded-xl">
            <h1 className=" text-xl font-semibold">Blazing Performance</h1>
            <p>
              While we're not rewriting the rules, we are empowering you to
              disseminate your craft. With our platform, your exceptional beats
              can effortlessly reach global audiences.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GridCards;
