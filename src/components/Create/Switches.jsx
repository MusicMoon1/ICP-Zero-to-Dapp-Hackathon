import React, { useState } from "react";
import SwitchButton from "../SwitchButton";

const Switches = () => {
  const [switchList, setSwitchList] = useState([
    {
      title: "Put on sale",
      desc: "You'll receive bids on this item",
      enabled: false, // Default value set to false
    },
    {
      title: "Instant sale price",
      desc: "Enter the price for which the item will be instantly sold",
      enabled: false, // Default value set to false
    },
    {
      title: "Unlock once purchased",
      desc: "Content will be unlocked after successful transaction",
      enabled: false, // Default value set to false
    },
  ]);
  const enableStatus = (index) => {
    const newList = [...switchList];
    newList[index].enabled = !newList[index].enabled;
    setSwitchList(newList);
  };
  return (
    <>
      <div className=" pt-10">
        {switchList.map((item, index) => (
          <div
            key={index}
            className=" py-5 flex justify-between items-center text-white"
          >
            <div>
              <h1 className=" text-base sm:text-xl">{item.title}</h1>
              <p className=" text-light-neutral text-xs sm:text-sm">
                {item.desc}
              </p>
            </div>
            <div>
              <SwitchButton
                enabled={item.enabled}
                setEnabled={() => {
                  enableStatus(index);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Switches;
