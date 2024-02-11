import { Icon } from "@iconify/react";
import { useCallback, useState } from "react";
import UploadAudio from "../components/Create/UploadAudio";
import ImageCover from "../components/Create/ImageCover";
import ItemDetails from "../components/Create/ItemDetails";
import Switches from "../components/Create/Switches";
import Preview from "../components/Create/Preview";
import SaveSection from "../components/Create/SaveSection";
import { ethers } from "ethers";
// import { TransferTokensArgs } from '@unique-nft/substrate-client/fungible';
import {
  web3Accounts,
  web3Enable,
  web3FromSource,
  web3FromAddress,
} from "@polkadot/extension-dapp";
import { ApiPromise, WsProvider } from "@polkadot/api";
import axios from "axios";
import { stringToHex } from "@polkadot/util";
import {
  generateAccount,
  getAccountFromMnemonic,
  SignatureType,
} from "@unique-nft/accounts";
import { KeyringProvider } from "@unique-nft/accounts/keyring";
import { KeyringOptions } from "@polkadot/keyring/types";
import Sdk, { Options } from "@unique-nft/sdk";

import { Account, Accounts, SdkSigner } from "@unique-nft/accounts";
import { KeyringLocalProvider } from "@unique-nft/accounts/keyring-local";
import { PolkadotProvider } from "@unique-nft/accounts/polkadot";
import { mnemonicGenerate } from "@polkadot/util-crypto";
import { tokenCreation } from "./utils/createtoken";
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
import { contract } from "./utils/contract";
import { abi } from "./utils/abi";

const Create = () => {
  const db = getFirestore(app);
  const storage = getStorage(app);
  const [image, setImage] = useState(null);
  const [images, setImages] = useState(null);
  const [audio, setAudio] = useState(null);
  const [audios, setAudios] = useState(null);
  const [duration, setDuration] = useState(null);
  const [status, setStatus] = useState(false);
  const [name, setName] = useState("");
  const [descrtion, setDes] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [style, setStyle] = useState("");
  const [method, setMethod] = useState("");
  const [instrument, setInstrument] = useState("");

  // console.log(images, audios, duration);

  const submitHandler = async () => {
    try {
      setStatus(true);
      console.log("call");

      try {
        const profileImageRef = ref(storage, `nft/${images?.name}`);
        const profileUploadTask = uploadBytesResumable(profileImageRef, images);

        const coverImageRef = ref(storage, `nft/${audios?.name}`);
        const coverUploadTask = uploadBytesResumable(coverImageRef, audios);

        const [profileDownloadURL, coverDownloadURL] = await Promise.all([
          getDownloadURL(profileUploadTask.snapshot.ref),
          getDownloadURL(coverUploadTask.snapshot.ref),
        ]);
        const datas = window.localStorage.getItem("userData");

        const dat = JSON.parse(datas);
        // Get download URL
        const contractAddress = contract;
        const contractABI = abi;
        console.log(contractABI, contractAddress);
        const provider = await new ethers.providers.Web3Provider(
          window.ethereum
        );
        const signer = await provider.getSigner();
        const router = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        const gasPrice = await provider.getGasPrice();
        console.log("Current Gas Price:", gasPrice.toString());
        const options = {
          gasLimit: 2300000,
        };
        const precision = 2;

        // Convert the decimal to an integer by multiplying with precision factor
        const integerValue = Math.round(price * 10 ** precision);

        const bigNumberValue = ethers.BigNumber.from(integerValue);
        console.log(dat.walletAddress, profileDownloadURL);
        const hz = await router.mintNFT( options);
        console.log(hz);
        // const walletAddress = window.localStorage.getItem('userDatas');

        console.log("firebase call");

        const collectionRef = collection(db, "nft");

        const data = await addDoc(collectionRef, {
          instrument: instrument,
          style: style,
          size: size,
          price: price,
          descrtion: descrtion,
          name: name,
          audio: coverDownloadURL,
          image: profileDownloadURL,
          walletAddress: dat.walletAddress,
          playing: false,
          id: Math.random(),
        });
        console.log(data);
        setStatus(false);
        // const userData = {
        //   email: email,
        //   phone: phone,
        //   walletAddress: walletAddress,
        //   profile: profileDownloadURL,
        //   password: password,
        //   description: description,
        //   websiteLink: websiteLink,
        //   facebook: facebook,
        //   twitter: twitter,
        //   cover: coverDownloadURL
        // };

        // localStorage.setItem('userData', JSON.stringify(userData));
        //     window.location.href = "/profile";
      } catch (error) {
        console.log(error);
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="container mx-auto min-h-screen py-5 md:py-16 lg:py-20 p-2">
        <div className="flex gap-5 flex-col-reverse lg:flex-row justify-center items-start">
          <div className=" w-full lg:w-[70%]">
            <div>
              <button className=" border-2 px-4 py-2 rounded-full border-neutral text-white flex justify-start items-center space-x-3 hover:bg-white/5">
                <Icon
                  icon="ic:baseline-keyboard-backspace"
                  className=" text-light-neutral"
                />
                <div>Switch to multiple</div>
              </button>
            </div>
            <div className=" pt-10">
              <h1 className=" text-2xl sm:text-3xl md:text-6xl font-semibold text-white md:max-w-md">
                Create single collectible
              </h1>
            </div>

            <ImageCover
              image={image}
              setImage={setImage}
              images={images}
              setImages={setImages}
            />
            <UploadAudio
              audio={audio}
              setAudio={setAudio}
              setAudios={setAudios}
              duration={duration}
              setDuration={setDuration}
            />
            <div className=" pt-10 text-white">
              <div>
                <h1 className=" text-sm pb-1 uppercase font-semibold">
                  Item name
                </h1>
                <input
                  type="text"
                  placeholder='e. g. "New Loop "'
                  className=" w-full p-3 rounded-xl text-white outline-0 bg-transparent border-2 border-neutral"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className=" mt-3">
                <h1 className=" text-sm pb-1 uppercase font-semibold">
                  Item description
                </h1>
                <textarea
                  placeholder="e. g. “After purchasing you will able to recived the loop sound file...”"
                  className=" w-full p-3 rounded-xl text-white outline-0 bg-transparent border-2 border-neutral"
                  onChange={(e) => setDes(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div className=" pt-5 text-white grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <h1 className=" text-sm pb-3 uppercase font-semibold">Price</h1>
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="text"
                  placeholder="e.g 2.45"
                  className=" w-full p-3 rounded-xl text-white outline-0 bg-transparent border-2 border-neutral"
                />
              </div>
              <div>
                <h1 className=" text-sm pb-3 uppercase font-semibold">Siza</h1>
                <input
                  onChange={(e) => setSize(e.target.value)}
                  type="text"
                  placeholder="e.g 2.45"
                  className=" w-full p-3 rounded-xl text-white outline-0 bg-transparent border-2 border-neutral"
                />
              </div>
              <div>
                <h1 className=" text-sm pb-3 uppercase font-semibold">Style</h1>
                <input
                  onChange={(e) => setStyle(e.target.value)}
                  type="text"
                  placeholder="e.g Hip Hop, Trap, etc."
                  className=" w-full p-3 rounded-xl text-white outline-0 bg-transparent border-2 border-neutral"
                />
              </div>
              <div>
                <h1 className=" text-sm pb-3 uppercase font-semibold">
                  Instrument
                </h1>
                <input
                  onChange={(e) => setInstrument(e.target.value)}
                  type="text"
                  placeholder="e.g Piano, Guitar, Drums, etc."
                  className=" w-full p-3 rounded-xl text-white outline-0 bg-transparent border-2 border-neutral"
                />
              </div>
              {!status ? (
                <button
                  type="button"
                  onClick={submitHandler}
                  className="text-primary border border-neutral rounded-full px-5 py-2 font-medium hover:bg-neutral/40 hover:text-white cursor-pointer"
                >
                  Upload
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submitHandler}
                  className="text-primary border border-neutral rounded-full px-5 py-2 font-medium hover:bg-neutral/40 hover:text-white cursor-pointer"
                >
                  Upload....
                </button>
              )}
            </div>
            {/* <Switches /> */}
            {/* <SaveSection /> */}
          </div>
          <div className=" w-full lg:w-[30%] flex justify-start items-start">
            <Preview
              image={image}
              audio={audio}
              duration={duration}
              name={name}
              price={price}
              setDuration={setDuration}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
