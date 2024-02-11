import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { mnemonicGenerate } from "@polkadot/util-crypto";
import {
    web3Accounts,
    web3Enable,
    web3FromSource,
  } from "@polkadot/extension-dapp";
  import datas from "./utils/users.json";
  import { ethers } from "ethers";
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
const Wallet = () => {
  const db = getFirestore(app);
  const storage = getStorage(app);
    async function mint() {
        try {
      
          await window.ethereum.request({ method: "eth_requestAccounts" });
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          const signer = provider.getSigner();
          const address = await signer.getAddress();
 console.log(address)
            const user = address;
            // console.log(user, "login");
      
            if (user) {
              try {
                const userDocRef = doc(db, 'users', user);
                const userDocSnapshot = await getDoc(userDocRef);
        
                if (userDocSnapshot.exists()) {
                  const userData = userDocSnapshot.data();
                  console.log(userData)
                  // Document with wallet address exists
                  localStorage.setItem('userData',JSON.stringify(userData));
                   window.location.href = "/profile";
                } else {
                  // Document does not exist
                  console.log('User not found.');
                  window.localStorage.setItem("userDatas", user);
                  window.location.href = "/connect-wallet";
                }
              } catch (error) {
                console.error('Error fetching user data:', error);
              }
            
             
              // setMessage(`Welcome, ${user.name}`);
            } else {
              // setMessage('Invalid credentials');
            }
            // if(response.data){
            //   console.log("User data saved:", response.data);
            //   window.localStorage.setItem("userData", address);
            //   window.localStorage.setItem("mneData", mne);
            // window.location.href = "/profile"
            // }else{
      
            // }
          } catch (error) {
            console.log(error);
          }
      }
      async function minted() {
        try {
           
           
            const user = datas[1];
            console.log(user, "login");
      
            if (user) {
              window.localStorage.setItem("userDatas", user.wallet);
              window.location.href = "/connect-wallet";
              // setMessage(`Welcome, ${user.name}`);
            } else {
              // setMessage('Invalid credentials');
            }
            // if(response.data){
            //   console.log("User data saved:", response.data);
            //   window.localStorage.setItem("userData", address);
            //   window.localStorage.setItem("mneData", mne);
            // window.location.href = "/profile"
            // }else{
      
            // }
          } catch (error) {
            console.log(error);
          }
      }


  let [methods, setMethods] = useState([
    {
      name: "Connect With ICP",
      icon: "bi:qr-code",
      selected: false,
      func:mint
    }
    // {
    //   name: "Interlay Coming Soon",
    //   icon: "bi:qr-code",
    //   selected: false,
    // },
    // {
    //   name: "Coinbase",
    //   icon: "tabler:brand-coinbase",
    //   selected: false,
    // },
    // {
    //   name: "Fortmatic",
    //   icon: "fa6-brands:fort-awesome-alt",
    //   selected: false,
    // },
  ]);
  return (
    <div className=" mx-auto container py-10">
      <h1 className=" text-xl sm:text-2xl md:text-4xl font-semibold py-10 text-white flex justify-start items-center">
        <Icon icon="ic:baseline-keyboard-backspace" className=" mr-2 md:mr-5" />
        Connect your wallet
      </h1>
      <hr className="  border-neutral" />
      <main className=" pt-5 md:pt-20 flex flex-col md:flex-row justify-between items-center">
        <div className=" w-full md:w-[50%]">
          {methods.map((item, index) => (
            <div className=" flex flex-col justify-center items-center px-1">
              <div
                onClick={() => {
                  // select only one method
                  let newMethods = methods.map((item) => {
                    return {
                      ...item,
                      selected: false,
                    };
                  });
                  newMethods[index].selected = true;
                  setMethods(newMethods);
                }}
                className=" w-full lg:w-[80%] cursor-pointer"
              >
                <div className=" flex justify-between items-center group border border-transparent hover:border-neutral p-5 rounded-2xl" onClick={mint}>
                  <div className=" flex justify-start items-center space-x-10">
                    {!item.selected && (
                      <div className="bg-white rounded-full p-4">
                        <Icon icon={item.icon} fontSize={25} />
                      </div>
                    )}
                    {item.selected && (
                      <div>
                        <Icon
                          icon="simple-line-icons:check"
                          className=" text-primary"
                          fontSize={57}
                        />
                      </div>
                    )}
                    <div>
                      <h1 className=" text-white  text-base lg:text-2xl font-medium">
                        {item.name}
                      </h1>
                    </div>
                  </div>
                  <div className=" hidden group-hover:block">
                    <Icon
                      icon="ic:baseline-keyboard-backspace"
                      className=" rotate-180 text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className=" flex flex-col justify-center items-center px-1">
              <div
                
                className=" w-full lg:w-[80%] cursor-pointer"
              >
                <div className=" flex justify-between items-center group border border-transparent hover:border-neutral p-5 rounded-2xl" onClick={mint}>
                  <div className=" flex justify-start items-center space-x-10">
                    
                      {/* <div className="bg-white rounded-full p-4">
                        <Icon icon="bi:qr-code" fontSize={25} />
                      </div> */}
                    
                  
                      {/* <div>
                        <Icon
                          icon="simple-line-icons:check"
                          className=" text-primary"
                          fontSize={57}
                        />
                      </div> */}
                    
                    <div>
                      {/* <h1 className=" text-white  text-base lg:text-2xl font-medium">
                      Interlay Coming Soon
                      </h1> */}
                    </div>
                  </div>
                  <div className=" hidden group-hover:block">
                    <Icon
                      icon="ic:baseline-keyboard-backspace"
                      className=" rotate-180 text-white"
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="w-full md:w-[50%] text-white md:pl-5 px-1 mt-5 md:mt-0">
          <h1 className=" text-2xl md:text-4xl font-semibold">
            Scan to connect
          </h1>
          <p className=" mb-5 md:mb-0 text-xs lg:text-base text-light-neutral">
            Powered by Wallet Connect
          </p>
          <div className=" bg-neutral p-16 rounded-xl max-w-md flex justify-center items-center">
            <div className=" bg-black rounded-xl p-16 max-w-xs flex justify-center items-center">
              <Icon icon="bi:qr-code" fontSize={100} />
            </div>
          </div>
          <div className=" pt-5">
            <span
              className=" border border-neutral rounded-full px-5 py-2 font-medium hover:bg-neutral/40 hover:text-white cursor-pointer
            "
            >
              Don't have a wallet?
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wallet;
