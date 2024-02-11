import React, { useEffect, useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
const NewPlatform = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const links = [
    "https://www.liveloop.live/wp-content/uploads/2023/07/e.png",
    "https://www.liveloop.live/wp-content/uploads/2023/07/a.png",
    "https://www.liveloop.live/wp-content/uploads/2023/07/b.png",
    "https://www.liveloop.live/wp-content/uploads/2023/07/c.png",
    "https://www.liveloop.live/wp-content/uploads/2023/07/d.png",
  ];
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <div className="py-24 px-4 md:px-14 lg:px-44">
        <h1 className="text-5xl text-white font-bold text-center">
          Our new platform is on the way
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          {links.map((link, index) => (
            <img
              key={index}
              src={link}
              alt="img"
              onClick={() => openImageViewer(index)}
              className="cursor-pointer hover:scale-110 duration-700 ease-in-out transition-all"
            />
          ))}
          {isViewerOpen && (
            <ImageViewer
              src={links}
              currentIndex={currentImage}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
      <div className=" hidden pb-24 lg:pl-44 flex justify-between items-center space-x-5 overflow-x-auto w-full">
        <div className=" cursor-pointer hover:scale-110 duration-700 ease-in-out transition-all">
          <img
            src="https://www.liveloop.live/wp-content/uploads/2023/07/e.png"
            alt=""
          />
        </div>
        <div className=" cursor-pointer hover:scale-110 duration-700 ease-in-out transition-all">
          <img
            src="https://www.liveloop.live/wp-content/uploads/2023/07/a.png"
            alt=""
          />
        </div>
        <div className=" cursor-pointer hover:scale-110 duration-700 ease-in-out transition-all">
          <img
            src="https://www.liveloop.live/wp-content/uploads/2023/07/b.png"
            alt=""
          />
        </div>
        <div className=" cursor-pointer hover:scale-110 duration-700 ease-in-out transition-all">
          <img
            src="https://www.liveloop.live/wp-content/uploads/2023/07/c.png"
            alt=""
          />
        </div>
        <div className=" cursor-pointer hover:scale-110 duration-700 ease-in-out transition-all">
          <img
            src="https://www.liveloop.live/wp-content/uploads/2023/07/d.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default NewPlatform;
