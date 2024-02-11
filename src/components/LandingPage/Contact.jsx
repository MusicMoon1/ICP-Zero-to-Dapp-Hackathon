import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Contact = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".foot", {
      scrollTrigger: {
        trigger: ".footer",
        start: "top 80%",
        end: "top 0%",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });
  }, []);

  return (
    <div className="footer grid grid-cols-1 lg:grid-cols-2 gap-5 px-4 md:px-14 lg:px-44 py-24">
      <div>
        <h1 className=" text-4xl font-bold text-white">
          Secure your spot at the forefront of our launch. Enjoy exclusive
          benefits by being among the first to explore our platform.
        </h1>
        <button className=" bg-primary mt-10  px-5 py-3">
          Join our waitlist
        </button>
      </div>
      <div className=" grid grid-cols-1 gap-5 lg:pl-24 items-center">
        <div className="foot grid grid-cols-2 gap-5 items-center">
          <div >
            <h1 className=" text-white text-lg">Connect</h1>
            <button className=" underline text-white  text-xl font-bold">
            LoopNFT
            </button>
          </div>
          <div>
            <h1 className=" text-white text-lg">Contact Us</h1>
            <button className=" underline text-white  text-xl font-bold">
            hello@LoopNFT.Live
            </button>
          </div>
        </div>
        <div className="foot text-white text-sm space-y-3">
          <p>© 2023 LoopNFT. All right reserved.</p>
          <p>Crafted with love by Cultural Design Berlin.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
