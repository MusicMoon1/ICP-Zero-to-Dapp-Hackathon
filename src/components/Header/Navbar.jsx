import React, { useState,useEffect } from "react";
import { Icon } from "@iconify/react";
import logo from "../../assets/logo.svg";
import { Link } from "wouter";
import Notifications from "../Notifications";
import datas from "../../views/utils/users.json"
const Navbar = () => {
  const [wallet,setWallet] = useState()
  const [showNoti, setShowNoti] = useState(false);
  const [data,setData] = useState()
  const [users,setUser] = useState(datas)
useEffect(()=>{
  const a = window.localStorage.getItem('userData');
  console.log(a)

  setWallet(a)
},[])

async function logout(){
  try {
    window.localStorage.removeItem("nftdata");
    window.localStorage.removeItem("userData");

    window.location.href = "/wallet"
  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
getData();
},[])


async function getData(){
  try {
  const datas =  window.localStorage.getItem('userData');
 
  const dat = JSON.parse(datas);
  console.log(dat.walletAddress)
  // const user = users.find(u => u.wallet === datas );
  // console.log(user)
  setData(dat)
  } catch (error) {
    
  }
}

  return (
    <>
      <div className=" w-full bg-black">
        <nav className=" container mx-auto py-5 flex justify-start items-center">
          {/* left side */}
          <div className=" w-[40%] flex justify-between items-center">
            <Link
              href="/"
              className=" cursor-pointer border-r-2 w-[30%] border-neutral"
            >
              <img src={logo} className=" cursor-pointer" alt="" />
            </Link>
            <div className=" ml-7 w-[70%]">
              <ul className=" flex justify-start items-center space-x-7 text-light-neutral">
                <Link
                  href="/search"
                  className=" hover:text-white/70 duration-300 ease-in-out transition-all"
                >
                  Discover
                </Link>
                <Link
                  href="/"
                  className=" cursor-pointer hover:text-white/70 duration-300 ease-in-out transition-all"
                >
                  How it works
                </Link>
                {
                data?.walletAddress ? 
                <Link
                  href="/profile"
                  className=" cursor-pointer hover:text-white/70 duration-300 ease-in-out transition-all"
                >
                 Profile
                </Link>
                :
                <></>
}
              </ul>
            </div>
          </div>
          {/* right side */}
          <div className="w-[55%] flex justify-evenly items-center">
            <div>
              <div className="relative mx-auto text-gray-600">
                <input
                  className="border-2 border-secondary bg-black h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Search"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-3 mr-4"
                >
                  <Icon icon="carbon:search" />
                </button>
              </div>
            </div>
            <div className="text-light-neutral relative">
              <Notifications />
              <div className=" absolute -top-2 -right-2 w-3 h-3 rounded-full bg-primary text-xs text-center font-semibold"></div>
            </div>
            {
                data?.walletAddress ? 
            <Link href="/create" className="text-light-neutral">
              <button className="btn-primary">Upload</button>
            </Link>
            :
            <></>
}
            <div className="text-light-neutral">
              {
                data?.walletAddress ? 
<>
<div 
              onClick={logout}
              className=" border-2 border-neutral flex justify-center items-center space-x-2 rounded-full p-1">
                <img
                  src={data?.profile}
                  className=" w-7 h-7 rounded-full"
                />

                <p className=" text-white font-semibold">
                {data?.walletAddress.substring(0, 6)}...
                {data?.walletAddress.substring(data?.walletAddress.length - 5)}
                </p>
              </div>
</> :
<div 
              
              className=" border-2 border-neutral flex justify-center items-center space-x-2 rounded-full p-1">
               

               <Link href="/wallet" className="text-light-neutral">
              <button className="btn-primary">Login</button>
            </Link>
              </div>
              }
             
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
