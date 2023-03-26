// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const SectionThree = function App() {
  return (
    <section className="section-3">
      <Swiper
        className="swiper"
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className="slider">Slide 1</SwiperSlide>
        <SwiperSlide className="slider">Slide 2</SwiperSlide>
        <SwiperSlide className="slider">Slide 3</SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SectionThree;
