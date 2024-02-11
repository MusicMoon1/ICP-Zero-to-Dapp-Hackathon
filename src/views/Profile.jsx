import React, { useState,useEffect } from "react";
import { Icon } from "@iconify/react";
import ReactWaves from "@dschoon/react-waves";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import datas from "./utils/users.json"
import Card from "../components/Search/Card";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  getFirestore,
  addDoc,
  orderBy,
  query,
  orderByChild,
  Timestamp,
  getDoc
} from "firebase/firestore";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";
import { app } from "./utils/config";
const Profile = () => {
  const db = getFirestore(app);
  const storage = getStorage(app);
  const [userData, setUserData] = useState(null);
  const walletAddress = window.localStorage.getItem('userDatas'); // Get wallet address

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDocRef = doc(db, 'users', walletAddress);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          // Document with wallet address exists
          setUserData(userDocSnapshot.data());
        } else {
          // Document does not exist
          console.log('User not found.');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (walletAddress) {
      fetchUserData();
    }
  }, [walletAddress]);

  return (
    <>
      <main className=" min-h-screen">
        <div className='h-80 overflow-hidden flex justify-end items-end ' style={{
        backgroundImage: `url(${userData?.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
          <div className=" w-[50%] md:w-[30%] mb-5 flex justify-start items-center space-x-4">
            {/* <button
              className=" text-sm flex justify-between items-center lg:space-x-2 bg-black text-white px-4 py-1.5 rounded-full border-2 border-light-neutral hover:bg-light-neutral/10
            "
            >
              <span className=" hidden lg:block">Edit cover photo</span>
              <p className=" lg:ml-2">
                <Icon icon="basil:image-outline" fontSize={20} />
              </p>
            </button> */}
            {/* <button className=" text-sm flex justify-between items-center lg:space-x-2 bg-black text-white px-4 py-1.5 rounded-full border-2 border-light-neutral hover:bg-light-neutral/10">
              <span className=" hidden lg:block">Edit profile</span>
              <p className=" lg:ml-2">
                <Icon icon="ic:outline-mode-edit" fontSize={20} />
              </p>
            </button> */}
          </div>
        </div>
        <div className=" container mx-auto">
          <div className="grid grid-cols-4 gap-4">
            <div className=" w-full p-10 relative hidden lg:-top-36 bg-secondary rounded-2xl lg:flex flex-col justify-center items-center border border-neutral">
              <img
                src={userData?.profile}
                alt=""
                className=" w-48 h-48 rounded-full object-cover"
              />
              <h2 className=" mt-3 font-bold text-white text-2xl">{userData?.name}</h2>
              <div className=" font-semibold flex justify-center items-center space-x-2 text-white">
                <p>
                {userData?.walletAddress.substring(0, 6)}...
                {userData?.walletAddress.substring(userData?.walletAddress.length - 5)}
                  </p>
                <Icon
                  icon="material-symbols:circles"
                  className=" text-primary"
                />
              </div>
              <div className=" mt-5">
                <p className=" text-light-neutral text-center">
                  {userData?.description}
                </p>
              </div>
              <div className=" mt-4 flex justify-center items-center space-x-2">
                <Icon
                  icon="radix-icons:globe"
                  fontSize={25}
                  className=" text-light-neutral"
                />
                <p className=" text-white font-semibold">{userData?.email}</p>
              </div>
              <div className=" mt-7 flex justify-center items-center space-x-3">
                <button className=" bg-primary text-black px-4 py-2 rounded-full font-semibold">
                  Follow
                </button>
                <button className=" p-2 border-2 border-neutral rounded-full">
                  <Icon
                    icon="solar:upload-outline"
                    fontSize={20}
                    className=" text-light-neutral"
                  />
                </button>
                <button className=" p-2 border-2 border-neutral rounded-full">
                  <Icon
                    icon="ic:outline-more-horiz"
                    fontSize={20}
                    className=" text-light-neutral"
                  />
                </button>
              </div>
              <div className=" py-10 flex justify-center items-center space-x-5">
                <button>
                <a href={'twitter.com/'+userData?.twitter} target="_blank" rel="noopener noreferrer">
                  <Icon
                    icon="circum:twitter"
                    fontSize={30}
                    className=" text-light-neutral"
                  />
                  </a>
                </button>
               
                <button>
                <a href={'facebook.com/'+userData?.facebook} target="_blank" rel="noopener noreferrer">
                  <Icon
                    icon="ri:facebook-circle-line"
                    fontSize={30}
                    className=" text-light-neutral"
                  />
                   </a>
                </button>
               
              </div>
              <div className=" h-[1px] bg-neutral w-full" />
              {/* <div className=" pt-10 text-light-neutral text-sm">
                Member since Mar 15, 2023
              </div> */}
            </div>
            <div className=" col-span-4 lg:col-span-3 py-3 lg:p-10">
          
              <Card wallet={userData?.walletAddress} />
             
            
            </div>
          </div>
        </div>
      </main>
    </>
  );
};


export default Profile;
