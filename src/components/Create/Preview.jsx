import { Icon } from "@iconify/react";
import React, { useState } from "react";
import ReactWaves from "@dschoon/react-waves";

const Preview = ({ audio, image, duration, setDuration, name, price }) => {
  const [play, setPlay] = useState(false);
  const [position, setPosition] = useState(10);
  const [muted, setMuted] = useState(false);
  return (
    <>
      <div className="p-5 w-full rounded-xl border-2 border-neutral bg-black">
        <h1 className=" text-2xl font-medium text-white">Preview</h1>
        <div className=" bg-[#2c2c2c] rounded-3xl">
          <div className=" mt-5 bg-[#000] rounded-3xl pb-10 flex flex-col justify-center">
            {image ? (
              <img
                className="h-56 object-cover rounded-3xl"
                src={image}
                alt=""
              />
            ) : (
              <div className="h-56 border border-neutral object-cover rounded-3xl bg-[#000]"></div>
            )}
            <div className=" flex flex-col justify-center items-center">
              <h1 className=" text-white font-medium text-lg">
               {name}
              </h1>
              
              <button className="bg-primary p-2 rounded-full mt-4">
                {play ? (
                  <Icon
                    onClick={() => {
                      if (audio) setPlay(!play);
                    }}
                    icon="material-symbols:pause-circle-rounded"
                    fontSize={30}
                    className=" text-black  "
                  />
                ) : (
                  <Icon
                    icon="material-symbols:play-arrow"
                    onClick={() => {
                      if (audio) setPlay(!play);
                    }}
                    fontSize={30}
                    className=" text-black"
                  />
                )}
              </button>
              <div className=" mt-2 w-full flex justify-center items-center">
                <div className=" w-[80%]">
                  <ReactWaves
                    audioFile={audio}
                    className={"react-waves"}
                    options={{
                      barHeight: 2,
                      cursorWidth: 0,
                      barGap: 2,
                      barWidth: 3,
                      height: 50,
                      hideScrollbar: true,
                      progressColor: "#ff00c8",
                      responsive: true,
                      waveColor: "#9bff00",
                    }}
                    onFinish={() => {
                      setPlay(false);
                    }}
                    volume={1}
                    zoom={1}
                    playing={play}
                  />
                  <div className=" flex justify-end items-center py-3 text-light-neutral">
                    {duration ? (
                      <p className=" text-xs">
                        {Math.floor(duration / 60)}:
                        {Math.floor(duration % 60) > 9
                          ? Math.floor(duration % 60)
                          : `0${Math.floor(duration % 60)}`}
                      </p>
                    ) : (
                      <p className=" text-xs">Select Audio</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-2 mt-3">
            <div className=" flex justify-between items-center">
              <h1 className=" text-white font-medium text-base">{name}</h1>
              <button className=" p-1 font-medium text-sm border-2 border-primary text-primary rounded-md">
                {price}
              </button>
            </div>
            <div className=" flex justify-between items-center text-white py-4">
              {/* <div className="flex -space-x-2">
                {[1, 2, 3].map((item) => (
                  <img
                    className="w-7 h-7 border-2 border-white rounded-full dark:border-gray-800"
                    src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                ))}
              </div>
              <div className="text-sm font-light">43 in stock</div> */}
            </div>
          <div className=" h-[1px] bg-neutral" />
            {/* <div className=" mt-4 flex justify-between items-center text-sm pb-5">
              <div className=" text-sm text-light-neutral flex justify-start items-center space-x-1">
                <Icon
                  icon="material-symbols:candlestick-chart-outline-rounded"
                  fontSize={20}
                />
                <p className=" text-xs">Highest Bid</p>
                <p className=" text-white font-semibold text-xs">0.35 ETH</p>
              </div>
              <div className=" text-light-neutral text-xs">New bid 🔥</div>
            </div> */}
          </div>
        </div>
        {/* <div>
          <button className="px-4 py-2 rounded-full border-2 border-neutral text-white font-medium mt-5 flex justify-center items-center space-x-2 hover:bg-white/5">
            <Icon icon="ic:sharp-clear" fontSize={20} />
            Clear all
          </button>
        </div> */}
      </div>
    </>
  );
};

export default Preview;
