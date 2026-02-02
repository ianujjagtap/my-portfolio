import { useRef } from "react";
import { FlashIcon } from "./svgs/flash";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// eslint-disable-next-line react/prop-types
export const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const whiteIconRef = useRef(null);
  const grayIconRef = useRef(null);
  const wrapperRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete && onComplete();
      },
    });

    // 1. fill animation (bottom to top)
    tl.to(whiteIconRef.current, {
      height: "100%",
      duration: 1.5,
      ease: "power2.inOut",
    })
    // 2. locate target and animate movement
    .call(() => {
      // find the header icon to move towards
      const target = document.getElementById("header-flash-icon");
      if (target) {
        const targetRect = target.getBoundingClientRect();
        // Unused variable removed: startRect

        // calculate deltas
        // center of screen to center of target
        // current wrapper is fixed center (50% 50%)
        // we need to move the icon wrapper to the target position
        
        const x = targetRect.left - (window.innerWidth / 2) + (targetRect.width / 2);
        const y = targetRect.top - (window.innerHeight / 2) + (targetRect.height / 2);
        
        // match size (preloader icon is large, header icon is 48px)
        // let's assume preloader icon is 120px
        const scale = 48 / 120; 

        // animate both icons together
        gsap.to(wrapperRef.current, {
          x: x,
          y: y,
          scale: scale,
          duration: 1,
          ease: "power3.inOut",
        });

        // fade out the blue background (container)
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          delay: 0.2, // start fading slightly after move starts
        });
        

      }
    })
    // add a buffer for the move animation
    .to({}, { duration: 1.2 }); 

  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950"
    >
      <div ref={wrapperRef} className="relative w-[120px] h-[120px] flex items-center justify-center">
        {/* gray background icon */}
        <FlashIcon
          ref={grayIconRef}
          height="120px"
          width="120px"
          className="text-gray-700 absolute"
        />

        {/* white foreground icon (filling) */}
        <div className="absolute bottom-0 overflow-hidden w-[120px] flex items-end justify-center h-0" ref={whiteIconRef}>
             <FlashIcon
                height="120px"
                width="120px"
                className="text-white"
             />
        </div>
      </div>
    </div>
  );
};
