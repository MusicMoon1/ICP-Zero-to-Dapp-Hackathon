import { Icon } from "@iconify/react";
import React, { useState } from "react";
import Sdk, { Options } from "@unique-nft/sdk";
import { KeyringProvider } from "@unique-nft/accounts/keyring";
import {
  generateAccount,
  getAccountFromMnemonic,
  SignatureType,
} from "@unique-nft/accounts";
import {
  web3Accounts,
  web3Enable,
  web3FromSource,
} from "@polkadot/extension-dapp";
import Wallet from "./wallet";
import axios from "axios";
import datas from "./utils/users.json";
import { mnemonicGenerate } from "@polkadot/util-crypto";

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
} from "firebase/firestore";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";
import { app } from "./utils/config";




const ConnectWallet = () => {
  const db = getFirestore(app);
  const storage = getStorage(app);
  const [data, setData] = useState([]);
  const [users, setUser] = useState(datas);
  const [isSelected, setIsSelected] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [emailed, setEmailed] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [description, setDes] = useState();
  const [profile, setProfile] = useState();
  const [cover, setCover] = useState();
  const [websiteLink, setWebsite] = useState();
  const [facebook, setFacebook] = useState();
  const [twitter, setTwitter] = useState();
  const [wallet, setWallet] = useState();
  const [purl,setPurl] = useState()
  const [mne, setMne] = useState();
  const handleProfileImageChange = (event) => {
    
  
      setProfile(event.target.files[0]);
    
  };

  const handleCoverImageChange = (event) => {
    
      setCover(event.target.files[0]);
    
  };
  function createSdk(account) {
    const options = {
      baseUrl: "https://rest.unique.network/opal/v1",
      signer: account,
    };
    return new Sdk(options);
  }
  const genrateMenmonicPhases = async () => {
    // ----------------------------------------
    //  if you have not nemonics then use
    const mnemonicPhrase = mnemonicGenerate();
    const account = await getAccountFromMnemonic({
      mnemonic: mnemonicPhrase,
    });
    return account;
    // ------------------------------------
  };

  async function login() {
    try {
      let profiles ;
      let covers ;

      const profileImageRef = ref(storage, `images/${profile.name}`);
      const profileUploadTask = uploadBytesResumable(profileImageRef, profile);

      const coverImageRef = ref(storage, `images/${cover.name}`);
      const coverUploadTask = uploadBytesResumable(coverImageRef, cover);

      const [profileDownloadURL, coverDownloadURL] = await Promise.all([
        getDownloadURL(profileUploadTask.snapshot.ref),
        getDownloadURL(coverUploadTask.snapshot.ref)
      ]);
     // Get download URL
   
 
      const walletAddress = window.localStorage.getItem('userDatas');
  

try {

 const data =  await setDoc(doc(db, "users", walletAddress), {
    name:name,
          email:email,
          phone:phone,
          walletAddress:walletAddress,
          profile:profileDownloadURL,
          password:password,
          description:description,
          websiteLink:websiteLink,
          facebook:facebook,
          twitter:twitter,
          cover:coverDownloadURL
  });
  console.log(data);
  const userData = {
    email: email,
    phone: phone,
    walletAddress: walletAddress,
    profile: profileDownloadURL,
    password: password,
    description: description,
    websiteLink: websiteLink,
    facebook: facebook,
    twitter: twitter,
    cover: coverDownloadURL
  };
  
  localStorage.setItem('userData', JSON.stringify(userData));
      window.location.href = "/profile";

} catch (error) {
  console.log(error)
}


      // try {
      //   await db.collection('users').doc(walletAddress).set({
      //     name,
      //     email,
      //     phone,
      //     walletAddress,
      //     purl,
      //     password,
      //     description,
      //     websiteLink,
      //     facebook,
      //     twitter,
      //     purl
      //   });
      //   console.log('User data and images added to Firestore.');
      // } catch (error) {
      //   console.error('Error adding user data:', error);
      // }


        // window.localStorage.setItem("userData",  window.localStorage.getItem("userDatas"));
        // window.location.href = "/profile";
        // setMessage(`Welcome, ${user.name}`);
     
        // setMessage('Invalid credentials');
      
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

  async function minnt() {
    try {
      window.location.href = "/profile";
    } catch (error) {}
  }

  return (
    <div className=" mx-auto container py-10">
      <h1 className=" text-xl sm:text-2xl md:text-4xl font-semibold py-10 text-white flex justify-start items-center">
        <Icon icon="ic:baseline-keyboard-backspace" className=" mr-2 md:mr-5" />
        Create Your Profile
      </h1>
      <hr className="  border-neutral" />
      <main className="pt-5 md:pt-20 flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-[100%]">
          <form>
            <h1 className=" text-xl sm:text-2xl md:text-4xl font-semibold py-10 text-white flex justify-start items-center">
              Signup
            </h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Name"
                style={{ backgroundColor: "black", color: "white" }}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
                style={{ backgroundColor: "black", color: "white" }}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                name="passowrd"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Password"
                style={{ backgroundColor: "black", color: "white" }}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Phone"
                style={{ backgroundColor: "black", color: "white" }}
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Description
              </label>
              <textarea
                name="description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Description"
                style={{ backgroundColor: "black", color: "white" }}
                required
                onChange={(e) => setDes(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Profile Image
              </label>
              <input
                type="file"
                name="profile"
                accept="image/*"
                className="py-2"
                onChange={handleProfileImageChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Cover Image
              </label>
              <input
                type="file"
                name="cover"
                accept="image/*"
                className="py-2"
                onChange={handleCoverImageChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Website Link
              </label>
              <input
                type="text"
                name="websitelink"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Website Link"
                onChange={(e) => setWebsite(e.target.value)}
                style={{ backgroundColor: "black", color: "white" }}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Facebook Link
              </label>
              <input
                type="text"
                name="facebook"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Facebook Link"
                style={{ backgroundColor: "black", color: "white" }}
                onChange={(e) => setFacebook(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Twitter Link
              </label>
              <input
                type="text"
                name="twitter"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Twitter Link"
                onChange={(e) => setTwitter(e.target.value)}
                style={{ backgroundColor: "black", color: "white" }}
              />
            </div>

            <button
              type="button"
              onClick={login}
              className="text-primary border border-neutral rounded-full px-5 py-2 font-medium hover:bg-neutral/40 hover:text-white cursor-pointer"
            >
              Submit
            </button>
            <br />

            <p style={{ color: "red" }}> {wallet?.wallet} </p>
          </form>
        </div>
        {/* <div className="w-full md:w-[50%] te text-white md:pl-5 px-1 mt-5 md:mt-0">
          <div className="mb-4">
            <h1 className=" text-xl sm:text-2xl md:text-4xl font-semibold py-10 text-white flex justify-start items-center">
              Login
            </h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Email"
                style={{ backgroundColor: "black", color: "white" }}
                required
                onChange={(e) => setEmailed(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                name="passowrd"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Password"
                style={{ backgroundColor: "black", color: "white" }}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={login}
              className="text-primary border border-neutral rounded-full px-5 py-2 font-medium hover:bg-neutral/40 hover:text-white cursor-pointer"
            >
              Submit
            </button>
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default ConnectWallet;
