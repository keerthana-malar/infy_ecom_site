import './App.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


import slider1 from '../src/images/slider/slider1.webp';

function Slider() {
  return (
    <>
      <Swiper
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img className='slideimg' src={slider1} alt="slider1" /></SwiperSlide>
        ...
      </Swiper>
    </>
  );
}

export default Slider;
