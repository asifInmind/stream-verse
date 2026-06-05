"use client";
import React, { useCallback, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Card from "./Card";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

const TWEEN_FACTOR_BASE = 0.84;

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = (props) => {
  const { slides, options } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    ...options,
  });
  const tweenFactor = useRef(0);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.snapList().length;
  }, []);

  const tweenOpacity = useCallback((emblaApi, event) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = event?.type === "scroll";

    emblaApi.snapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.scrollSnapList.slidesBySnap[snapIndex];

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);

              if (sign === -1) {
                diffToTarget = scrollSnap - (1 + scrollProgress);
              }
              if (sign === 1) {
                diffToTarget = scrollSnap + (1 - scrollProgress);
              }
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const opacity = numberWithinRange(tweenValue, 0, 1).toString();
        emblaApi.slideNodes()[slideIndex].style.opacity = opacity;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenFactor(emblaApi);
    tweenOpacity(emblaApi);

    emblaApi
      .on("reinit", setTweenFactor)
      .on("reinit", tweenOpacity)
      .on("scroll", tweenOpacity)
      .on("slidefocus", tweenOpacity);
  }, [emblaApi, tweenOpacity]);

  return (
    <>
      <div>
        <h1 className="font-semibold text-[40px] text-[#fcfcfa] text-center leading-14 pt-5">
          Words of Appreciation
        </h1>
        <p className="font-normal text-[18px] leading-8 text-center text-[#fcfcfa] pb-3">
          Hear what our creators have to say about their experience using
          StreamVerse to go live across multiple platforms.
        </p>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex touch-pan-y backface-hidden items-center -ml-2 py-6">
            {slides.map((index) => {
              const isSelected = index === selectedIndex;

              return (
                <div
                  className={`flex-[0_0_80%] md:flex-[0_0_45%] min-w-0 pl-2 
                    ${isSelected ? "scale-105 opacity-100 z-10" : "scale-95 opacity-50"}`}
                  key={index}
                >
                  <Card />
                </div>
              );
            })}
          </div>
        </div>

        <div className=" gap-3 mt-4">
          <div className="flex justify-center gap-3 items-center">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
