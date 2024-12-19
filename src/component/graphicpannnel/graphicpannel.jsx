import { Button } from "@mui/material";
import Masonry from "react-masonry-css";
import imageone from "../../assets/graphic-designs/fatality.jpg";
import imagetwo from "../../assets/graphic-designs/enemy.jpg";
import imagethree from "../../assets/graphic-designs/galatic.jpg";
import imagefour from "../../assets/graphic-designs/cover.png";
import imagefive from "../../assets/graphic-designs/pegasus.jpg";
import imagesix from "../../assets/graphic-designs/poster.jpg";
import imageseven from "../../assets/graphic-designs/book.png";
import imageeight from "../../assets/graphic-designs/core.jpg";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function GraphicPannel() {
  const images = [
    imageone,
    imagetwo,
    imagethree,
    imagefour,
    imagefive,
    imagesix,
    imageseven,
    imageeight,
  ];
  return (
    <div>
      <div className="text-white bg-black py-10 px-6 md:py-14 md:px-20 flex flex-col md:flex-row justify-between items-center">
        <div className="cinzel-bold-header text-2xl md:text-5xl text-center md:text-left mb-6 md:mb-0">
          <span className="text-sky-400">Take</span> a look at our <br />
          graphic <span className="text-sky-400">designer</span> work
        </div>
        <div>
          <Button variant="outlined" className="text-sm md:text-base">
            View more designs
          </Button>
        </div>
      </div>

      <div className="bg-black">
        <MasonryImageCollage images={images} />
      </div>
    </div>
  );
}

const MasonryImageCollage = ({ images }) => {
  const breakpointColumnsObj = {
    default: 4, // 4 columns for large screens
    1100: 3, // 3 columns for screens above 1100px
    700: 2, // 2 columns for screens above 700px
    500: 2, // 1 column for screens above 500px
  };

  const variants = {
    visible: { opacity: 1, y: 0, transition: { ease: "easeInOut", duration: 1 } },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="flex w-auto gap-3 md:gap-5 px-4 md:px-24"
      columnClassName="bg-clip-padding"
    >
      {images.map((image, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true, // Triggers animation only once when the element comes into view
          threshold: 0.1, // Trigger when 10% of the element is in view
        });

        return (
          <motion.div
            key={index}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
          >
            <img
              src={image}
              alt={`collage-${index}`}
              className="w-full h-auto object-cover mb-4"
              loading="lazy"
            />
          </motion.div>
        );
      })}
    </Masonry>
  );
};
