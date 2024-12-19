import React from 'react'
import ContainerScroll from './ui/container-scroll-animation'
import image from "../assets/hero.png"

function Hero() {
  return (
    <>
      <div className="flex flex-col overflow-hidden bg-black mt-0">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Scroll Animations
                </span>
              </h1>
            </>
          }
        >
          <img
            src={image}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </>
  )
}

export default Hero
