import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { Icon } from "@iconify/react";
import Notifications from "../Notifications";
import { Link } from "wouter";
const SmallNavbar = () => {
  const [showNoti, setShowNoti] = useState(false);
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <div className=" hidden py-5 px-2 bg-black w-full">
        <div className="container mx-auto flex justify-between items-center w-full">
          <div className=" w-[50%] sm:w-[70%]">
            <img src={logo} />
          </div>
          <div className=" w-[50%] sm:w-[30%] text-light-neutral flex justify-end space-x-5 items-center">
            <Notifications />
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
              className=" w-8 h-8 rounded-full"
            />
            <Icon
              className=" cursor-pointer "
              onClick={() => setShowNav(!showNav)}
              icon="solar:hamburger-menu-broken"
              fontSize={25}
            />
          </div>
          {/* mobile nav */}
          {showNav && (
            <>
              <div className=" fixed z-[999999] w-full bg-black rounded-xl p-3 top-10 max-w-sm">
                <ul className=" text-light-neutral">
                  <li className=" py-3 cursor-pointer ">
                    <Link
                      href="/search"
                      className="text-light-neutral hover:text-primary"
                    >
                      Discover
                    </Link>
                  </li>
                  <li className=" py-3 ">
                    <Link
                      href="/connect-wallet"
                      className="text-light-neutral cursor-pointer hover:text-primary"
                    >
                      How it works
                    </Link>
                  </li>
                  <li className=" w-full">
                    <Link href="/create" className="text-light-neutral">
                      <button className="btn-primary  w-full">Upload</button>
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>

      <nav className="sticky z-[9999] w-full bg-black md:absolute md:bg-transparent">
        <div className="container m-auto px-2 pt-4 md:px-12 lg:px-7">
          <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
            <input
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="peer hidden"
            />
            <div className="w-full px-6 flex justify-between lg:w-max md:px-0 z-30">
              <Link
                href="/profile"
                aria-label="logo"
                onClick={() => setShowNav(!showNav)}
                className="flex space-x-2 items-center"
              >
                <img src={logo} />
              </Link>

              <div className=" flex justify-between items-center space-x-5">
                <Notifications />
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
                  className=" w-8 h-8 rounded-full"
                />
                <div className="flex items-center lg:hidden max-h-10">
                  <label
                    role="button"
                    htmlFor="toggle_nav"
                    aria-label="humburger"
                    id="hamburger"
                    className="relative w-10 h-auto p-2"
                  >
                    <div
                      id="line"
                      className="m-auto h-0.5 w-6 rounded bg-light-neutral transition duration-300"
                    ></div>
                    <div
                      id="line2"
                      className="m-auto mt-2 h-0.5 w-6 rounded bg-light-neutral transition duration-300"
                    ></div>
                  </label>
                </div>
              </div>
            </div>

            <label
              role="button"
              htmlFor="toggle_nav"
              className="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-zinc-200 dark:bg-black dark:bg-opacity-80 bg-opacity-30 backdrop-blur backdrop-filter"
            ></label>
            <div className="hidden peer-checked:flex w-full flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-xl bg-black border border-neutral lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent lg:w-7/12">
              <div className="text-gray-600 lg:pr-4 w-full">
                <ul
                  className="tracking-wide font-medium  text-sm 
                        flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full"
                >
                  <li className=" cursor-pointer hover:text-primary">
                    <Link
                      onClick={() => setShowNav(!showNav)}
                      href="/search"
                      className="block md:px-4 transition "
                    >
                      <span>Discover</span>
                    </Link>
                  </li>
                  <li className=" cursor-pointer hover:text-primary">
                    <Link
                      onClick={() => setShowNav(!showNav)}
                      href="/connect-wallet"
                      className="block md:px-4 transition "
                    >
                      <span>How it works</span>
                    </Link>
                  </li>
                  <li className=" flex justify-between items-center">
                    <Link href="/create" onClick={() => setShowNav(!showNav)}>
                      <button className=" btn-primary">Upload</button>
                    </Link>
                    <div className="text-light-neutral">
                      <div className=" border-2 border-neutral flex justify-center items-center space-x-2 rounded-full p-1">
                        <img
                          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
                          className=" w-7 h-7 rounded-full"
                        />
                        <p className=" text-white font-semibold">
                          17.50032
                          <span className=" text-primary mx-2">ETH</span>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SmallNavbar;
