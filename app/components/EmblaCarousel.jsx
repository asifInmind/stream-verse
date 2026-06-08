"use client";
import React, { useCallback, useEffect, useRef } from "react";
import user1 from "../../public/images/user1.png";
import user2 from "../../public/images/user2.png";
import user3 from "../../public/images/user3.png";
import user4 from "../../public/images/user4.png";
import user5 from "../../public/images/user6.png";
import user6 from "../../public/images/Rectangle 44.png";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import Card from "./Card";
const TWEEN_FACTOR_BASE = 0.15;
const testimonialsData = [
  {
    id: 1,
    image: user1,
    name: "Sarah Mitchell",
    role: "HR Executive at TechCorp",
    rating: 5,
    quote:
      "As a fitness coach, I need reliable streaming quality. FLOWLIVE delivers that and more with the ability to interact with comments from all platforms in one dashboard.",
  },
  {
    id: 2,
    image: user2,
    name: "David Chen",
    role: "Gaming Creator",
    rating: 5,
    quote:
      "The low latency on this platform is a game-changer. My viewers notice the speed difference instantly, and chat engagement has skyrocketed.",
  },
  {
    id: 3,
    image: user3,
    name: "Elena Rostova",
    role: "Digital Educator",
    rating: 5,
    quote:
      "Hosting live webinars used to be incredibly stressful. This dashboard simplifies everything so I can focus entirely on teaching my students.",
  },
  {
    id: 4,
    image: user4,
    name: "Marcus Brody",
    role: "Independent Musician",
    rating: 5,
    quote:
      "Streaming my live sets across multiple platforms simultaneously without dropping frames has helped me double my active listener base this month.",
  },
  {
    id: 5,
    image: user5,
    name: "Aisha Rahman",
    role: "Culinary Content Creator",
    rating: 5,
    quote:
      "The multi-platform chat overlay is beautiful. I can see Twitch, YouTube, and Facebook comments perfectly aligned while cooking live.",
  },
  {
    id: 6,
    image: user6,
    name: "James Gallagher",
    role: "Tech Podcaster",
    rating: 5,
    quote:
      "Setup took less than five minutes. The analytics dashboard gives me precise data on exactly where my audience is watching from.",
  },
];

const numberWithinRange = (number, min, max) =>
  Math.min(Math.max(number, min), max);

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".slide-number-node");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.snapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi, event) => {
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
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = numberWithinRange(tweenValue, 0, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        if (tweenNode) tweenNode.style.transform = `scale(${scale})`;
      });
    });
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on("reinit", setTweenNodes)
      .on("reinit", setTweenFactor)
      .on("reinit", tweenScale)
      .on("scroll", tweenScale)
      .on("slidefocus", tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <>
      <div className="mt-4 ms-auto me-auto w-full">
        <h1 className="font-semibold text-[40px] text-center text-[#fcfafa] leading-15">
          Words of Appreciation
        </h1>
        <p className="text-center text-[#fcfafa] text-sm sm:text-base mt-3 max-w-xl mx-auto leading-relaxed">
          Hear what our creators have to say about their experience using
          StreamVerse to go live across multiple platforms.
        </p>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex items-center touch-pan-y touch-pinch-zoom py-15">
            {testimonialsData.map((item, index) => (
              <div
                className="flex-[0_0_100%] sm:flex-[0_0_60%] md:flex-[0_0_48%] pl-0 min-w-0"
                key={index}
              >
                <div className="slide-number-node will-change-transform">
                  <Card data={item} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex  justify-center items-center gap-3 mt-6 ">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
