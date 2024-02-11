import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import step1 from "../../assets/step1.png"
import step2 from "../../assets/step2.png"
import step3 from "../../assets/step3.png"
import step4 from "../../assets/step4.png"
const Cards = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".card", {
      scrollTrigger: {
        trigger: "#box",
        start: "top 80%",
        end: "top 0%",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });
  }, []);

  const cards = [
    {
      title: "CRAFT YOUR UNIQUE SOUND",
      description:
        "Use LoopNFT or any other music software and create the best piece",
        image: step1,
    },
    {
      title: "MINT MUSIC NFTS",
      description:
        "Connect you wallet, and mint your music piece.",
      image: step2,
    },
    {
      title: "Sell your creations",
      description:
        "Retain your rights and have your personal tokens listen on our marketplace.",
        image: step3,
    },
    {
      title: "Retain rights",
      description:
        "Get your royalties directly into your wallet and make more music!",
        image: step4,
    },
  ];
  return (
    <>
      <div id="box" className="box py-14 lg:py-44">
        <div className=" flex justify-center items-center">
          <h1 className=" text-2xl sm:text-3xl md:text-5xl pb-10 font-semibold text-white text-center max-w-3xl">
            From Loop Creation to Royalty Earning Discover the Power of
            LoopNFT's Audio Platform.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-4 md:px-14 lg:px-44 mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card flex flex-col justify-start items-start space-y-5 px-7"
            >
              <div className=" p-5 ">
              <img
            src={card?.image}
            alt=""
            className=" w-full"
          />
              </div>
              <h1 className=" text-2xl sm:text-3xl font-semibold text-white ">
                {index + 1 <= 4 ? index + 1 : "+"}
              </h1>
              <h1 className=" text-2xl sm:text-3xl font-semibold text-white">
                {card.title}
              </h1>
              <p className=" text-white">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
