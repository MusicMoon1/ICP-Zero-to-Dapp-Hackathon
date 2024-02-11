import React, { useState } from "react";

const RangeSlider = () => {
  const minETH = 0.01;
  const maxETH = 10;

  const [sliderValue, setSliderValue] = useState(minETH);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setSliderValue(newValue);
  };
  const handleThumbFocus = () => {
    setShowTooltip(true);
  };

  const handleThumbBlur = () => {
    setShowTooltip(false);
  };
  const getTooltipPosition = () => {
    const slider = document.getElementById("customRange");
    const percent = ((sliderValue - minETH) / (maxETH - minETH)) * 100;
    const thumbWidth = 20; // Adjust the width of the slider thumb
    const tooltipWidth = 60; // Adjust the width of the tooltip
    return `calc(${percent}% - ${tooltipWidth / 2}px)`;
  };

  return (
    <div className="range-slider relative">
      <input
        type="range"
        min={minETH}
        max={maxETH}
        step="any"
        value={sliderValue}
        onChange={handleChange}
        id="customRange"
        style={{ thumbWidth: 0 }}
        onFocus={handleThumbFocus}
        onBlur={handleThumbBlur}
        className="w-full h-2 appearance-none bg-gray-300 rounded-md "
      />
      {showTooltip && (
        <div
          className="absolute whitespace-nowrap -top-2 left-0 -mt-8 px-2 py-1 text-black font-semibold rounded-lg bg-white pointer-events-none"
          style={{ left: getTooltipPosition() }}
        >
          {sliderValue.toFixed(2)} ETH
        </div>
      )}
      <div className=" flex justify-between items-center mt-3">
        <h1 className=" text-white font-medium">0.01 ETH</h1>
        <h1 className=" text-white font-medium">10 ETH</h1>
      </div>
    </div>
  );
};

export default RangeSlider;
