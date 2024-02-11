import React from "react";

const UnusedSelectBox = () => {
  return (
    <div>
      <div className=" relative z-40 text-white border-2 p-3 rounded-xl border-neutral ">
        <div
          onClick={() => setTimeFilter(!timeFilter)}
          className=" cursor-pointer flex justify-between items-center"
        >
          <h1 className=" font-medium">Recently added</h1>
          <Icon
            icon="ph:caret-circle-down-light"
            className=" leading-[0] text-light-neutral cursor-pointer"
            fontSize={30}
          />
        </div>
        <div
          className={` w-full absolute top-16 left-0 rounded-xl p-4 border-2 border-neutral bg-secondary flex justify-start items-start flex-col ${
            timeFilter ? "" : "hidden"
          }`}
        >
          <div className="font-medium text-white p-2 py-3 hover:bg-black rounded-lg w-full flex justify-start items-center">
            Recently added
          </div>
          <div className="font-medium text-white p-2 py-3 hover:bg-black rounded-lg w-full flex justify-start items-center">
            Recently added
          </div>
          <div className="font-medium text-white p-2 py-3 hover:bg-black rounded-lg w-full flex justify-start items-center">
            Recently added
          </div>
        </div>
      </div>
      <div className=" py-5">
        <h1 className=" font-bold text-white pb-3 uppercase">Price Range</h1>
        <RangeSlider />
      </div>
      <div className="h-[1px] bg-neutral" />
      <div className=" py-5">
        <h1 className=" font-bold text-white pb-3 uppercase">Likes</h1>
        <div className=" relative z-50 text-white border-2 p-3 rounded-xl border-neutral ">
          <div
            onClick={() => setLikeFilter(!likeFilter)}
            className=" cursor-pointer flex justify-between items-center"
          >
            <h1 className=" font-medium">Most liked</h1>
            <Icon
              icon="ph:caret-circle-down-light"
              className=" leading-[0] text-light-neutral cursor-pointer"
              fontSize={30}
            />
          </div>
          <div
            className={` w-full absolute top-16 left-0 rounded-xl p-4 border-2 border-neutral bg-secondary flex justify-start items-start flex-col ${
              likeFilter ? "" : "hidden"
            }`}
          >
            <div className="font-medium text-white p-2 py-3 hover:bg-black rounded-lg w-full flex justify-start items-center">
              Least liked
            </div>
            <div className="font-medium text-white p-2 py-3 hover:bg-black rounded-lg w-full flex justify-start items-center">
              Most liked
            </div>
          </div>
        </div>
      </div>
      <div className=" py-5">
        <h1 className=" font-bold text-white pb-3 uppercase">Open</h1>
        <div className=" relative z-50 text-white border-2 p-3 rounded-xl border-neutral ">
          <div
            onClick={() => setInstrumentFilter(!instrumentFilter)}
            className=" cursor-pointer flex justify-between items-center"
          >
            <h1 className=" font-medium">Type of instruments</h1>
            <Icon
              icon="ph:caret-circle-down-light"
              className=" leading-[0] text-light-neutral cursor-pointer"
              fontSize={30}
            />
          </div>
          <div
            className={` w-full absolute top-16 left-0 rounded-xl p-4 border-2 border-neutral bg-secondary flex justify-start items-start flex-col ${
              instrumentFilter ? "" : "hidden"
            }`}
          >
            <div className="font-medium text-white p-2 py-3 hover:bg-black rounded-lg w-full flex justify-start items-center space-x-4">
              <Icon icon="fa6-solid:drum" />
              <div>Drum</div>
            </div>
            <div className="font-medium text-white p-2 py-3 hover:bg-black rounded-lg w-full flex justify-start items-center space-x-4">
              <Icon icon="ph:guitar-light" />
              <div>Guitar</div>
            </div>
            <div className="font-medium text-white p-2 py-3 hover:bg-black rounded-lg w-full flex justify-start items-center space-x-4">
              <Icon icon="mdi:violin" />
              <div>Drum</div>
            </div>
          </div>
        </div>
      </div>
      <div className=" py-5">
        <h1 className=" font-bold text-white pb-3 uppercase">Creator</h1>
        <div className=" relative text-white border-2 p-3 rounded-xl border-neutral ">
          <div
            onClick={() => setCreatorFilter(!creatorFilter)}
            className=" cursor-pointer flex justify-between items-center"
          >
            <h1 className=" font-medium">Creator</h1>
            <Icon
              icon="ph:caret-circle-down-light"
              className=" leading-[0] text-light-neutral cursor-pointer"
              fontSize={30}
            />
          </div>
          <div
            className={` w-full absolute top-16 left-0 rounded-xl p-4 border-2 border-neutral bg-secondary flex justify-start items-start flex-col ${
              creatorFilter ? "" : "hidden"
            }`}
          >
            <div className="font-medium text-white p-2 py-3 hover:bg-black rounded-lg w-full flex justify-start items-center space-x-4">
              <Icon icon="ic:baseline-verified" />
              <div>Verified Only</div>
            </div>
            <div className="font-medium text-white p-2 py-3 hover:bg-black rounded-lg w-full flex justify-start items-center space-x-4">
              <Icon icon="octicon:unverified" />
              <div>All</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnusedSelectBox;
