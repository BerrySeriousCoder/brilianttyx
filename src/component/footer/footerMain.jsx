

import mainLogo from '../../assets/primarylogo.png'
import instaLogo from '../../assets/instagram.png'
import { useState } from "react";
import MeetingScheduler from "../meetingschedule/meetingschedule";
export const FooterMain = () => {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <div>
      <div className="flex flex-col justify-center   items-center bg-black">
        <div 
          className="lg:h-96 h-[300px]"
        >
          <div className="flex lg:mt-10 items-center relative flex-col text-center">
            <div className="lg:text-6xl text-xl font-antontwo bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            We Build Software That Works, Period.
            </div>
            <div className="lg:text-2xl text-sm lg:m-5 my-3 font-robotoCondensed text-white">
            We build robust, scalable, and innovative software solutions to ensure your business  <br className="hidden lg:block" />
            stays ahead in a fast-evolving digital landscape.
            </div>

            <div className="lg:m-10 flex flex-col items-center">
              <button onClick={() => {setIsOpen(true)}} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-black">
          Book
        </button> 
        <MeetingScheduler isOpen={isOpen} onClose={() => setIsOpen(false)} ></MeetingScheduler>
              <div className="text-cyan-300 text-sm lg:text-base mt-2 lg:mt-5 ">Request demo</div>
            </div>

          
          
          </div>
        </div>

        <div className="lg:h-96 flex  lg:flex-row justify-between pb-10 w-full text-white lg:px-16 px-3 py-8">
          <div className="flex flex-col justify-between  gap-5  lg:text-left">
            <div>
              <img className="lg:h-16 h-16 lg:mx-0" src={mainLogo} alt="logo" />
            </div>
            <div className="flex flex-col gap-3" >
            <div><img  className="h-7 text-white" src={instaLogo} alt="instaicon" /></div>
              <div className="lg:text-base text-xs" >@2024 All Rights reserved</div>
            </div>
          </div>
          <div className="gap-5 flex flex-col font-oswald lg:text-lg">
            <div className="text-center lg:text-left">COMPANY</div>
            <div className="flex flex-col gap-2 font-roboto text-xs lg:text-base text-center lg:text-left">
              <div>Expert Testimonials</div>
              <div>Customer Testimonials</div>
              <div>Twitter</div>
              <div>Email</div>
              <div>Support</div>
            </div>
          </div> 
          
          <div className="gap-5 flex flex-col font-oswald lg:text-lg">
            <div className="text-center lg:text-left">KNOW MORE</div>
            <div className="flex flex-col gap-2 font-roboto  text-xs lg:text-base text-center lg:text-left">
              <div>About us</div>
              <div>Terms and policies</div>
              <div>Pricing</div>
              <div className="lg:hidden block" >Demo</div>
            </div>
          </div>
          <div className=" hidden  gap-1 lg:gap-5 lg:flex flex-col font-oswald text-sm lg:text-lg">
            <div className="text-center  lg:text-left">GET STARTED</div>
            <div className="flex flex-col lg:h-full font-roboto text-sm lg:justify-between lg:text-base text-center lg:text-left">
              <div>Demo</div>
             
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
