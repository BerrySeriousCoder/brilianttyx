import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Import required Swiper modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Import images
import Image1 from '../../assets/ProductDesign/Image1.png';
import Image2 from '../../assets/ProductDesign/Image2.png';
import Image3 from '../../assets/ProductDesign/Image3.png';
import Image4 from '../../assets/ProductDesign/Image4.png';
import Image5 from '../../assets/ProductDesign/Image5.png';
import Image6 from '../../assets/ProductDesign/Image6.png';
import Image7 from '../../assets/ProductDesign/Image7.png';
import Image8 from '../../assets/ProductDesign/Image8.png';
import Image9 from '../../assets/ProductDesign/Image9.png';
import Image10 from '../../assets/ProductDesign/Image10.png';
import Image11 from '../../assets/ProductDesign/Image11.png';
import Image12 from '../../assets/ProductDesign/Image12.png';
import Image13 from '../../assets/ProductDesign/Image13.png';
import Image14 from '../../assets/ProductDesign/Image14.png';
import Image15 from '../../assets/ProductDesign/Image15.png';

import './Swiper.css';

// Array of image paths
const images = [
  Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8,
  Image9, Image10, Image11, Image12, Image13, Image14, Image15
];

const SwiperComponent = () => {
  return (
    <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 300,  // Adjust depth to make center slide appear farther
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        loop={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Product Design ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperComponent;
