"use client";
import React, { useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.goToPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.goToNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canGoToPrev());
    setNextBtnDisabled(!emblaApi.canGoToNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reinit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props) => {
  const { children, disabled, ...restProps } = props;

  return (
    <button
      className={`w-9 h-9 rounded-full flex cursor-pointer items-center justify-center bg-[#1E1F1E] outline-1 outline-[#3D3D3C]   text-[#fcfafa] shadow-sm transition-all
    ${
      disabled
        ? "opacity-40 cursor-not-allowed bg-gray-50 text-gray-400"
        : "active:scale-95"
    }`}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      <svg className="w-4 h-4" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
        />
      </svg>
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, disabled, ...restProps } = props;

  return (
    <button
      className={`w-9 h-9 rounded-full flex items-center cursor-pointer justify-center bg-[#1E1F1E] outline-1 outline-[#3D3D3C]  text-[#fcfcfa] shadow-sm transition-all
    ${
      disabled
        ? "opacity-40 cursor-not-allowed bg-gray-50 text-gray-400"
        : " active:scale-95"
    }`}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      <svg className="w-4 h-4" viewBox="0 0 532 532">
        <path
          fill="currentColor"
          d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
        />
      </svg>
      {children}
    </button>
  );
};
