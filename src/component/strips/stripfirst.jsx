import React from 'react';
import { motion } from 'framer-motion';
import star from '../../assets/staticstar.png'

const ScrollingText = () => {
  const texts = [
    'UI/UX Design', 'Artworks', 'Product Design', 'Web Development', 
    'App Development'
  ];

  const repeatedTexts = [...texts, ...texts];

  return (
    <div className='overflow-hidden  whitespace-nowrap w-full relative bg-black' >
      <motion.div
        className='translate-x-1/2  h-20 items-center flex '
        animate={{ x: ["0%", "-40%"] }}
        transition={{ ease: "linear", duration: 10,  repeatType: 'loop', repeat: Infinity }}
      >
        {repeatedTexts.map((text, index) => (
          <React.Fragment  >
          <span className='text-5xl font-[tanker] text-white flex justify-center' key={index} style={{ marginRight: "50px" }}>{text}</span>
          <img className='h-20 mr-8' src={star}  />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingText;
