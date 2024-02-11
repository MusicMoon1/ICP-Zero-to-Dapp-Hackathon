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
import { getDocs, collection,getFirestore,query,where } from "firebase/firestore";
import { app } from "../../views/utils/config";

const Card = () => {
  const db = getFirestore(app);
 
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
  const [datas,setData] = useState()
  const [documentList, setDocumentList] = useState([]);
  const playAudio = (id) => {
    setDocumentList((prev) =>
      prev.map((document) => ({
        ...document,
        playing: document.id === id ? !document.playing : false,
      }))
    );
  };
async function buy(){
  try {
    alert('Transact')
//     window.localStorage.setItem('nftdata',true)
//     const extensions = await web3Enable("my cool dapp");

//     if (extensions.length === 0) {
//       // no extension installed, or the user did not accept the authorization
//       // in this case we should inform the use and give a link to the extension
//       return;
//     }

//     // we are now informed that the user has at least one extension and that we
//     // will be able to show and use accounts
//     const allAccounts = await web3Accounts();
//     const account = allAccounts[0];

// // to be able to retrieve the signer interface from this account
// // we can use web3FromSource which will return an InjectedExtension type
// const injector = await web3FromSource(account.meta.source);


// // this injector object has a signer and a signRaw method
// // to be able to sign raw bytes
// const signRaw = injector?.signer?.signRaw;

// if (!!signRaw) {
//     // after making sure that signRaw is defined
//     // we can use it to sign our message
//     const { signature } = await signRaw({
//         address: account.address,
//         data: stringToHex('message to sign'),
//         type: 'bytes'
//     });
//   }
  } catch (error) {
    
  }
}

const fetchDocuments = async () => {
  try {
    const datas =  window.localStorage.getItem('userData');
     
    const dat = JSON.parse(datas);
    const q = query(collection(db, "nft"), where("walletAddress", "==", dat.walletAddress));
    const documents = [];
     const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
       // doc.data() is never undefined for query doc snapshots
       documents.push(doc.data());
     });
     return documents;
  } catch (error) {
    
  }
 
 
 
};
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


  useEffect(() => {
    const fetchData = async () => {
      const documents = await fetchDocuments();
      console.log(documents)
      setDocumentList(documents);
    };

    fetchData();
  }, [datas]);






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
                        {/* <button className=" p-1 font-semibold border-2 border-primary text-primary rounded-md" onClick={buy}>
                        Buy with  {document.price}
                        </button> */}
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
    </>
  );
};

export default Card;
