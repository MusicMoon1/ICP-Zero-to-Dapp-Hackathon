import { Icon } from "@iconify/react";
import React from "react";
import top from "../assets/top.svg";
const Notifications = () => {
  return (
    <div className=" max-w-xs md:max-w-sm bg-black border border-neutral w-full rounded-2xl p-5 max-h-96 overflow-auto relative">
      <div className=" flex justify-between items-center mb-2">
        <h1 className=" text-white text-xl sm:text-2xl font-semibold">
          Notifications
        </h1>
        <button className="btn-primary">See all</button>
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <div className=" flex justify-between items-center py-4 hover:bg-secondary px-2 rounded-2xl">
          <div className=" flex justify-start items-center space-x-4 ">
            <img
              src="https://images.unsplash.com/photo-1642388691919-231d16e51e7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80"
              alt=""
              className=" w-16 h-16 rounded-xl"
            />
            <div className=" flex justify-center flex-col items-start text-white">
              <p className=" font-semibold">ETH received</p>
              <p>0.0001 ETH received</p>
              <p className=" text-light-neutral text-sm">2 days ago</p>
            </div>
          </div>
          <div className=" h-4 w-4 bg-primary rounded-full"></div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;
