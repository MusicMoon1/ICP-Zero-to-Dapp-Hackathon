import React from "react";

const ItemDetails = () => {
  return (
    <>
      <div className=" pt-10 text-white">
        <div>
          <h1 className=" text-sm pb-1 uppercase font-semibold">Item name</h1>
          <input
            type="text"
            placeholder='e. g. "New Loop "'
            className=" w-full p-3 rounded-xl text-white outline-0 bg-transparent border-2 border-neutral"
          />
        </div>
        <div className=" mt-3">
          <h1 className=" text-sm pb-1 uppercase font-semibold">
            Item description
          </h1>
          <textarea
            placeholder="e. g. “After purchasing you will able to recived the loop sound file...”"
            className=" w-full p-3 rounded-xl text-white outline-0 bg-transparent border-2 border-neutral"
          ></textarea>
        </div>
      </div>
      <div className=" pt-5 text-white grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <h1 className=" text-sm pb-3 uppercase font-semibold">Royalties</h1>
          <select className=" w-full p-3 rounded-xl text-white outline-0 bg-transparent border-2 border-neutral">
            <option defaultValue value="10">
              10%
            </option>
            <option value="20">20%</option>
            <option value="30">30%</option>
            <option value="40">40%</option>
            <option value="50">50%</option>
            <option value="60">60%</option>
            <option value="70">70%</option>
            <option value="80">80%</option>
            <option value="90">90%</option>
            <option value="100">100%</option>
          </select>
        </div>
        <div>
          <h1 className=" text-sm pb-3 uppercase font-semibold">Siza</h1>
          <input
            type="text"
            placeholder="e.g 2.45"
            className=" w-full p-3 rounded-xl text-white outline-0 bg-transparent border-2 border-neutral"
          />
        </div>
        <div>
          <h1 className=" text-sm pb-3 uppercase font-semibold">Style</h1>
          <input
            type="text"
            placeholder="e.g Hip Hop, Trap, etc."
            className=" w-full p-3 rounded-xl text-white outline-0 bg-transparent border-2 border-neutral"
          />
        </div>
        <div>
          <h1 className=" text-sm pb-3 uppercase font-semibold">Instrument</h1>
          <input
            type="text"
            placeholder="e.g Piano, Guitar, Drums, etc."
            className=" w-full p-3 rounded-xl text-white outline-0 bg-transparent border-2 border-neutral"
          />
        </div>
      </div>
    </>
  );
};

export default ItemDetails;
