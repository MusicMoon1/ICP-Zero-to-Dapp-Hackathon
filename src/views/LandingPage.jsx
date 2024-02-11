import React,{useState} from "react";
import LpNavbar from "../components/LandingPage/LpNavbar";
import Header from "../components/LandingPage/Header";
import CTA from "../components/LandingPage/CTA";
import Cards from "../components/LandingPage/Cards";
import Marque from "../components/LandingPage/Marque";
import GridCards from "../components/LandingPage/GridCards";
import NewPlatform from "../components/LandingPage/NewPlatform";
import Contact from "../components/LandingPage/Contact";
import Footer from "../components/LandingPage/Footer";
import Modal from "../components/LandingPage/model";
import Video from "../components/LandingPage/Video";
const LandingPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div id="lp" className=" bg-[#000] w-full overflow-x-hidden">
      <LpNavbar openModal={openModal}/>
      <Header />
      <Video/>
     
      <CTA />
      <Cards />
      <Marque />
      <GridCards />
      <NewPlatform />
      <Contact />
      <Footer />
      <Modal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default LandingPage;
