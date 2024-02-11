import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Modal from "../Modal";

const SaveSection = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [collection, setCollection] = useState([
    {
      name: "Loop Coll 2023",
      color: "pink",
    },
    {
      name: "Loop Coll 2022",
      color: "green",
    },
    {
      name: "Loop Coll 2021",
      color: "purple",
    },
  ]);
  return (
    <>
      <div className=" py-5 text-white  w-full">
        <div>
          <h1 className=" text-base sm:text-xl">Choose collection</h1>
          <p className=" text-light-neutral text-xs sm:text-sm">
            Choose an exiting collection or create a new one
          </p>
        </div>
        <div className=" mt-5 flex justify-start items-center space-x-4 overflow-x-auto w-full">
          <div
            onClick={() => setIsOpen(true)}
            className=" w-full cursor-pointer bg-secondary rounded-2xl p-4 font-medium flex flex-col justify-start items-start"
          >
            <div className=" p-2 bg-white rounded-full">
              <Icon
                icon="material-symbols:add-rounded"
                fontSize={25}
                className=" text-light-neutral"
              />
            </div>
            <h1 className="text-xl py-4 whitespace-nowrap">
              Create collection
            </h1>
          </div>
          <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            collection={collection}
            setCollection={setCollection}
          />
          {collection.map((item, index) => (
            <div className=" w-full bg-secondary rounded-2xl p-4 font-medium flex flex-col justify-start items-start">
              <div
                style={{ backgroundColor: item.color }}
                className=" p-2 rounded-full"
              >
                <div className=" w-7 h-7"></div>
              </div>
              <h1 className=" text-xl py-4 whitespace-nowrap">{item.name}</h1>
            </div>
          ))}
        </div>
        <div className="mt-5 flex justify-between items-center">
          <button className=" bg-primary text-black rounded-full font-medium py-3 px-5 flex space-x-3 items-center">
            <div>Create item</div>
            <Icon icon="akar-icons:arrow-right" />
          </button>
          <button className="flex font-medium justify-between items-center space-x-3">
            <div>Auto Saving</div>
            <Icon icon="ph:spinner" fontSize={25} />
          </button>
        </div>
      </div>
    </>
  );
};

export default SaveSection;
