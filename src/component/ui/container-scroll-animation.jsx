"use client";
import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.8] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[48rem] md:h-[80rem] flex items-center justify-center relative  md:p-20"
      ref={containerRef}
    >
      <div
        className="py-0 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} isMobile={isMobile} />
        <Card 
          rotate={rotate} 
          translate={translate} 
          scale={scale} 
          isMobile={isMobile}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

const Header = ({ translate, titleComponent, isMobile }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className={`div max-w-5xl mx-auto text-center px-4 ${isMobile ? '-mt-12' : ''}`}
    >
      {titleComponent}
    </motion.div>
  );
};

const Card = ({ rotate, scale, translate, children, isMobile }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className={`
        max-w-5xl 
        mx-auto 
        ${isMobile 
          ? 'h-[20rem] w-[95%] -mt-2 p-1 border-2' 
          : 'h-[40rem] -mt-12 p-6 border-4'
        } 
        border-[#6C6C6C] 
        bg-[#222222] 
        rounded-[30px] 
        shadow-2xl
      `}
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
};

export default ContainerScroll;