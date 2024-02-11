import { Icon } from "@iconify/react";
import React, { useState } from "react";
import RangeSlider from "../components/RangeSlider";
import Cards from "../components/Search/Cards";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
  Slider,
  Tooltip,
} from "@material-tailwind/react";
import SelectBox from "../components/SelectBox";
const Search = () => {
  const [open, setOpen] = useState(0);
  const [sliderValue, setSliderValue] = useState(1);
  const [timeFilter, setTimeFilter] = useState(false);
  const [likeFilter, setLikeFilter] = useState(false);
  const [instrumentFilter, setInstrumentFilter] = useState(false);
  const [creatorFilter, setCreatorFilter] = useState(false);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <main className=" min-h-screen mx-auto container">
        <div className="py-14 px-1">
          <div className=" flex justify-between items-center">
            <h1 className=" text-xl sm:text-3xl font-light text-white">
              Type your keywords
            </h1>
            <button className=" bg-primary p-3 rounded-full">
              <Icon icon="ic:outline-search" fontSize={25} />
            </button>
          </div>
          <div className=" mt-10">
            <input
              type="text"
              className=" w-full text-xl text-white outline-0 bg-transparent border-b border-neutral"
            />
          </div>
        </div>
        <div className="px-1 lg:hidden">
          <Accordion open={open === 1}>
            <AccordionHeader
              className=" text-white py-5 lg:text-lg hover:text-white text-sm border-0 uppercase flex justify-between items-center w-full"
              onClick={() => handleOpen(1)}
            >
              Filter
              <div className=" w-full flex justify-end items-center">
                <Icon icon="eva:arrow-ios-downward-outline" />
              </div>
            </AccordionHeader>
            <AccordionBody>
              <div className=" hidden">
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
                  <h1 className=" font-bold text-white pb-3 uppercase">
                    Price Range
                  </h1>
                  <RangeSlider />
                </div>
                <div className="h-[1px] bg-neutral" />
                <div className=" py-5">
                  <h1 className=" font-bold text-white pb-3 uppercase">
                    Likes
                  </h1>
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
                  <h1 className=" font-bold text-white pb-3 uppercase">
                    Creator
                  </h1>
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
                <div className=" h-[1px] bg-neutral" />
                <div className=" py-5 text-white">
                  <div className=" flex justify-start items-center space-x-4">
                    <Icon icon="mdi:close-circle" fontSize={25} />
                    <div className=" font-medium text-lg">Reset filter</div>
                  </div>
                </div>
              </div>
              <div className=" relative z-40">
                <SelectBox
                  items={["Recently Added", "Most Popular", "Most Viewed"]}
                />
              </div>
              <div className=" py-5">
                <h1 className=" font-bold text-white pb-3 uppercase">
                  Price Range
                </h1>
                {/* <RangeSlider /> */}
                <Tooltip
                  content={(sliderValue / 10).toFixed(2)}
                  className="bg-white text-black"
                >
                  <Slider
                    defaultValue={sliderValue}
                    min={0.1}
                    onChange={(e) => setSliderValue(e.target.value)}
                    className="text-[#2ec947]"
                    barClassName="rounded-none bg-[#2ec946]"
                    thumbClassName="[&::-moz-range-thumb]:rounded-none [&::-webkit-slider-thumb]:rounded-none [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
                    trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-none !bg-[#2ec946]/10 border border-[#2ec946]/20"
                  />
                </Tooltip>
                <div className="flex justify-between items-center py-3 font-medium text-white">
                  <h1>0.01 ETH</h1>
                  <h1>10 ETH</h1>
                </div>
              </div>
              <div className="h-[1px] bg-neutral" />
              <div className=" py-5">
                <h1 className=" font-bold text-white pb-3 uppercase">Likes</h1>
                <div className=" relative z-30">
                  <SelectBox items={["Most liked", "Least liked"]} />
                </div>
              </div>
              <div className=" py-5">
                <h1 className=" font-bold text-white pb-3 uppercase">Open</h1>
                <div className=" relative z-20">
                  <SelectBox
                    items={[
                      "Type of instruments",
                      "Most Popular",
                      "Most Viewed",
                    ]}
                  />
                </div>
              </div>
              <div className=" py-5">
                <h1 className=" font-bold text-white pb-3 uppercase">
                  Creator
                </h1>
                <SelectBox items={["Verified Only", "All"]} />
              </div>

              <div className=" h-[1px] bg-neutral" />
              <div className=" py-5 text-white">
                <div className=" flex justify-start items-center space-x-4">
                  <Icon icon="mdi:close-circle" fontSize={25} />
                  <div className=" font-medium text-lg">Reset filter</div>
                </div>
              </div>
            </AccordionBody>
          </Accordion>
        </div>
        <div className=" grid grid-cols-4 gap-4">
          <div className=" hidden lg:block">
            <div className=" relative z-40">
              <SelectBox
                items={["Recently Added", "Most Popular", "Most Viewed"]}
              />
            </div>
            <div className=" py-5">
              <h1 className=" font-bold text-white pb-3 uppercase">
                Price Range
              </h1>
              {/* <RangeSlider /> */}
              <Tooltip
                content={(sliderValue / 10).toFixed(2)}
                className="bg-white text-black"
              >
                <Slider
                  defaultValue={sliderValue}
                  min={0.1}
                  onChange={(e) => setSliderValue(e.target.value)}
                  className="text-[#2ec947]"
                  barClassName="rounded-none bg-[#2ec946]"
                  thumbClassName="[&::-moz-range-thumb]:rounded-none [&::-webkit-slider-thumb]:rounded-none [&::-moz-range-thumb]:-mt-[4px] [&::-webkit-slider-thumb]:-mt-[4px]"
                  trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent rounded-none !bg-[#2ec946]/10 border border-[#2ec946]/20"
                />
              </Tooltip>
              <div className="flex justify-between items-center py-3 font-medium text-white">
                <h1>0.01 ETH</h1>
                <h1>10 ETH</h1>
              </div>
            </div>
            <div className="h-[1px] bg-neutral" />
            <div className=" py-5">
              <h1 className=" font-bold text-white pb-3 uppercase">Likes</h1>
              <div className=" relative z-30">
                <SelectBox items={["Most liked", "Least liked"]} />
              </div>
            </div>
            <div className=" py-5">
              <h1 className=" font-bold text-white pb-3 uppercase">Open</h1>
              <div className=" relative z-20">
                <SelectBox
                  items={["Type of instruments", "Most Popular", "Most Viewed"]}
                />
              </div>
            </div>
            <div className=" py-5">
              <h1 className=" font-bold text-white pb-3 uppercase">Creator</h1>
              <SelectBox items={["Verified Only", "All"]} />
            </div>

            <div className=" h-[1px] bg-neutral" />
            <div className=" py-5 text-white">
              <div className=" flex justify-start items-center space-x-4">
                <Icon icon="mdi:close-circle" fontSize={25} />
                <div className=" font-medium text-lg">Reset filter</div>
              </div>
            </div>
          </div>
          <div className=" col-span-4 lg:col-span-3">
            <Cards />
          </div>
        </div>
      </main>
    </>
  );
};

export default Search;
