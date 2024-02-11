import { Icon } from "@iconify/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState,useEffect } from "react";
import ReactWaves from "@dschoon/react-waves";
import nftData from "../../views/utils/nfts.json"
import { stringToHex } from "@polkadot/util";
import {
  web3Accounts,
  web3Enable,
  web3FromSource,
} from "@polkadot/extension-dapp";
import { getDocs, collection,getFirestore,query,where,updateDoc,doc,addDoc } from "firebase/firestore";
import { app } from "../../views/utils/config";
import { contract } from "../../views/utils/contract";
import { abi } from "../../views/utils/abi";
import { ethers } from "ethers";

const Cards = ({wallet}) => {
  const db = getFirestore(app);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedPrice, setSubmittedPrice] = useState(null);
  const [biddingList, setBiddingList] = useState([]);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const [activeTab, setActiveTab] = useState("all");
  const data = [
    {
      label: "All Items",
      value: "all",
    },
    {
      label: "POP",
      value: "pop",
    },
    {
      label: "ROCK",
      value: "rock",
    },
    {
      label: "TECHNO",
      value: "techno",
    },
    {
      label: "JAZZ",
      value: "jazz",
    },
    {
      label: "TRADITIONAL",
      value: "traditional",
    },
  ];
  const [cards, setCards] = useState(nftData);
  const [documentList, setDocumentList] = useState([]);
  const playAudio = (id) => {
    setDocumentList((prev) =>
      prev.map((document) => ({
        ...document,
        playing: document.id === id ? !document.playing : false,
      }))
    );
  };
async function buy(id,price,owner){
  try {
    const datas =  window.localStorage.getItem('userData');
 
const dat = JSON.parse(datas);

    const TransferNftID = id
    const Recipient = dat.walletAddress
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
      value: ethers.utils.parseEther('0.01'),
    };
 
    const hz = await router.buyNFT(0, options);
    console.log(hz);

console.log(TransferNftID,Recipient)
const nftCollectionRef = collection(db, 'nft');
const queryRef = query(nftCollectionRef, where('tokenId', '==', TransferNftID));

// Get the documents that match the query
const querySnapshot = await getDocs(queryRef);

// Loop through the matching documents and update the walletAddress field
querySnapshot.forEach(async (documentSnapshot) => {
  const docRef = doc(db, 'nft', documentSnapshot.id); // Create a reference to the document
 console.log(docRef,'docrefff')
  const updatedData = { walletAddress: Recipient }; // Define the updated data
  await updateDoc(docRef, updatedData); // Update the document
});
alert('Transfer Transaction in Process');
  } catch (error) {
    
  }
}

const fetchDocuments = async () => {
  console.log(wallet)
  if(!wallet){
    const collectionRef = collection(db, "nft");
    const querySnapshot = await getDocs(collectionRef);
    const documents = [];
  
    querySnapshot.forEach((doc) => {
      documents.push(doc.data());
    });
  
    return documents;
  }else{
   const q = query(collection(db, "nft"), where("walletAddress", "==", wallet));
   const documents = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      documents.push(doc.data());
    });
    return documents;
  }
 
};

async function getAllBids() {
  try {
    const biddingCollectionRef = collection(db, 'bidding'); // Replace 'bidding' with your collection name

    const querySnapshot = await getDocs(biddingCollectionRef);

    const bids = [];

    querySnapshot.forEach((doc) => {
      // Access the data for each document
      const bidData = doc.data();
      bids.push(bidData);
    });

    return bids;
  } catch (error) {
    console.error('Error retrieving bidding data: ', error);
    return []; // Return an empty array or handle the error as needed
  }
}


  useEffect(() => {
    const fetchData = async () => {
      const documents = await fetchDocuments();
      console.log(documents)
      setDocumentList(documents);
      const biddingData = await getAllBids();
      setBiddingList(biddingData)
    };

    fetchData();
  }, []);






  return (
    <>
      <main>
        {/* <div className="px-1 flex justify-start items-center space-x-4 overflow-x-auto">
          <button className="bg-white whitespace-nowrap  text-black rounded-full px-4 py-2">
            All Items
          </button>
          <button className="text-light-neutral hover:bg-white/5 focus:bg-white focus:text-black rounded-full px-4 py-2">
            POP
          </button>
          <button className="text-light-neutral hover:bg-white/5 focus:bg-white focus:text-black rounded-full px-4 py-2">
            ROCK
          </button>
          <button className="text-light-neutral hover:bg-white/5 focus:bg-white focus:text-black rounded-full px-4 py-2">
            TECHNO
          </button>
          <button className="text-light-neutral hover:bg-white/5 focus:bg-white focus:text-black rounded-full px-4 py-2">
            JAZZ
          </button>
          <button className="text-light-neutral hover:bg-white/5 focus:bg-white focus:text-black rounded-full px-4 py-2">
            TRADITIONAL
          </button>
        </div> */}
        <Tabs value="all">
          <TabsHeader
            className="bg-transparent max-w-lg overflow-x-auto"
            indicatorProps={{
              className: "rounded-full",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                onClick={() => setActiveTab(value)}
                className={`${
                  activeTab === value ? "text-black" : " text-light-neutral"
                }  rounded-full whitespace-nowrap
                  `}
                key={value}
                value={value}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 md:mt-10 px-1">
                {documentList.map((document, index) => (
                    <div
                      key={index}
                      className=" hover:bg-white/5 p-2 rounded-xl"
                    >
                      <div className=" flex justify-between items-center mb-5 relative h-20 rounded-xl bg-no-repeat bg-center "
                       style={{
                        backgroundImage: `url(${document?.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                      >
                        <div className="w-[20%] flex justify-center items-center">
                          <button className="bg-primary p-2 rounded-full">
                            {document.playing ? (
                              <Icon
                                onClick={() => playAudio(document.id)}
                                icon="material-symbols:pause-circle-rounded"
                                fontSize={30}
                                className=" text-black  "
                              />
                            ) : (
                              <Icon
                                icon="material-symbols:play-arrow"
                                onClick={() => playAudio(document.id)}
                                fontSize={30}
                                className=" text-black"
                              />
                            )}
                          </button>
                        </div>
                        <div className=" w-[80%] flex justify-start items-center">
                          <ReactWaves
                            audioFile={document.audio}
                            className={"react-waves"}
                            options={{
                              barHeight: 2,
                              cursorWidth: 0,
                              barGap: 2,
                              barWidth: 3,
                              height: 50,
                              hideScrollbar: true,
                              progressColor: "#ff00c8",
                              responsive: true,
                              waveColor: "#9bff00",
                            }}
                            volume={1}
                            zoom={1}
                            playing={document.playing}
                          />
                        </div>
                        <div className=" flex justify-center items-center text-white font-medium w-[20%]">
                          2:34
                        </div>
                      </div>
                      <div className=" flex justify-between items-center">
                        <h1 className=" text-white font-semibold text-lg">
                          {document.name}
                     
                          <p className=" text-white font-semibold">
                {document?.walletAddress.substring(0, 6)}...
                {document?.walletAddress.substring(document?.walletAddress.length - 5)}
                </p>
                        </h1>
                        <br/>
                        <h1 className=" text-white font-semibold text-lg">
                        {document.instrument}
                        <p>
                        {document.style}
                        </p>
                          </h1>
                          {document.method == "fixed" ? 
                        <button className=" p-1 font-semibold border-2 border-primary text-primary rounded-md" onClick={ ()=> buy(document.id,document.price,document?.walletAddress)}>
                        Buy with  {document.price}
                        </button>
                        :
                        <button className=" p-1 font-semibold border-2 border-primary text-primary rounded-md" onClick={ ()=> buy(document.id,document.price,document?.walletAddress)}>
                        Buy with  {document.price}
                        </button>
}
                      </div>
                      
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
        <div className="my-5 flex justify-center items-center w-full">
          <button
            onClick={() => setCards((prev) => [...prev, 1, 2, 3, 4, 5, 6])}
            className="border-2 border-neutral text-white px-4 py-2 rounded-full hover:bg-white/10 flex justify-center items-center space-x-2"
          >
            <Icon
              icon="streamline:interface-page-controller-loading-1-progress-loading-load-wait-waiting"
              fontSize={15}
              className=" mr-3"
            />
            Load more
          </button>
        </div>
      </main>
     
      {/* <BiddingTable 
         isOpen={isModalOpens}
         onClose={closeModals}
      datas={biddingList} /> */}
    </>
  );
};

export default Cards;
