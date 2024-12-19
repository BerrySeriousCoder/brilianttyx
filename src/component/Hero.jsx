import React from 'react';
import ContainerScroll from './ui/container-scroll-animation';
import image from "../assets/hero.png";
import vid from '../assets/herosection.mp4'
import { FlipWords } from './ui/flip-words';
import '../App.css';

function Hero() {
  return (
    <>
      <div className="h-full w-full bg-black relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <div className="flex flex-col overflow-hidden bg-transparent mt-0 relative">
          <ContainerScroll
            titleComponent={
              <>
                <FlipWordsDemo />
                <h1 className="cinzel-bold-header mt-16 text-white text-center px-4">
                  Unleash the power of <br />
                  <span className="text-3xl sm:text-5xl md:text-[4rem] lg:text-[6rem] font-bold mt-1 leading-tight">
                    Ideas to Take Shape
                  </span>
                </h1>
              </>
            }
          >
            {/* <img
              src={image}
              alt="hero"
              className="mx-auto rounded-2xl object-cover h-[50vh] md:h-[70vh] lg:h-full object-center"
              draggable={false}
            /> */} 
            

           
             <video
            src={vid}
            muted
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          />
           
          </ContainerScroll>
        </div>
      </div>
    </>
  );
}

export function FlipWordsDemo() {
  const words = [
    "Ui/Ux",
    "Mern-Stack-Website",
    "Poster_Design",
    "Graphic_Design",
    "Game_Development"
  ];

  return (
    <div className="h-[10rem] flex flex-col justify-center items-center px-4 relative">
      <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl mx-auto cinzel-bold-header text-white text-center">
        We Build
        <FlipWords words={words} /> <br />
        One place for all services
      </div>
      <div className="flex gap-4 sm:gap-6 mt-6 sm:mt-8">
        <button className="inline-flex h-10 sm:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 sm:px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-black">
          Login
        </button>
        <button className="inline-flex h-10 sm:h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 sm:px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-black">
          Explore
        </button>
      </div>
    </div>
  );
}

export default Hero;
