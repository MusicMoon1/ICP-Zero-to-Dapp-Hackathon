import React from "react";
import logo from "../assets/logo.svg";
import { Icon } from "@iconify/react";
import FooterAccordion from "./Footer/FooterAccordion";
import { Link } from "wouter";
const Footer = () => {
  return (
    <div>
      <hr className=" border-neutral" />
      <div className="dark:bg-black pt-8 md:pt-20">
        <div className="container m-auto space-y-8 text-gray-600 dark:text-gray-300 ">
          <div className=" px-2">
            <div className="grid grid-cols-2 gap-6 pb-5 md:pb-16 sm:grid-cols-3 md:grid-cols-5">
              <div className=" col-span-2 lg:col-span-1 px-1">
                <img
                  width="100"
                  height="42"
                  src={logo}
                  alt="logo"
                  className="w-32"
                />
                <p className=" text-xl font-light pt-5 lg:pt-12">
                  Part of LoopNFT Platform 2023
                </p>
              </div>
              <div className=" hidden md:block">
                <h6 className="text-lg font-semibold ">Stacks</h6>
                <ul className="mt-4 list-inside space-y-4 text-light-neutral">
                  <li>
                    <Link
                      href="/search"
                      className="transition hover:text-primary"
                    >
                      Discover
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/connect-wallet"
                      className="transition hover:text-primary"
                    >
                      Connect Wallet
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/create"
                      className="transition hover:text-primary"
                    >
                      Create item
                    </Link>
                  </li>
                </ul>
              </div>
              <div className=" hidden md:block">
                <h6 className="text-lg font-semibold ">Info</h6>
                <ul className="mt-4 list-inside space-y-4 text-light-neutral">
                  <li>
                    <a href="#" className="transition hover:text-primary">
                      Download
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:text-primary">
                      Demo
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:text-primary">
                      Support
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" col-span-2 sm:col-span-3 md:hidden">
                <FooterAccordion />
              </div>
              <div className="col-span-2 sm:col-span-3 md:col-span-2 px-1">
                <h6 className="text-lg font-semibold ">Join Newsletter</h6>
                <ul className="mt-4 list-inside space-y-4">
                  <li>
                    <label htmlFor="Search" className=" text-sm lg:text-base">
                      Subscribe our newsletter to get more free music loop
                      goodies and resources
                    </label>
                    <div className="relative mt-4">
                      <input
                        type="text"
                        id="Search"
                        placeholder="Search for..."
                        className="w-full  pl-4 bg-black border-2 outline-0 border-neutral rounded-full py-3.5 pe-10 shadow-sm sm:text-sm"
                      />

                      <span className="absolute inset-y-0 end-1.5 grid w-10 place-content-center">
                        <button
                          type="button"
                          className="text-black bg-primary rounded-full p-3"
                        >
                          <Icon icon="bi:arrow-right" />
                        </button>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between border-t border-neutral py-8 text-gray-200">
              <span className=" text-xs text-light-neutral">
                Copyright © 2023 LoopNFT Software. All rights reserved
              </span>
              <div className=" flex justify-between items-center pt-4 space-x-2">
                <span className=" font-light text-sm lg:text-base">
                  We use cookies for better service.
                </span>
                <button>
                  <span className=" text-primary font-medium px-3">Accept</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
