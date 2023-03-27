// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper";

const SectionThree = function App() {
  return (
    <section className="section-3">
      <div className="section-3-container">
        <div className="section-3-top-part">
          <Swiper
            className="swiper"
            direction={"vertical"}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 1000 }}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide className="slider">
              <div className="reward-box">
                <div className="reward-logo-box">
                  <img src="/logo.png" />
                  <div className="reward-text-box">
                    <p>5000 points</p>
                    <p>Added to your account</p>
                  </div>
                </div>
                <p className="reward-tag">Rewards</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slider">
              <div className="reward-box reward-box-2">
                <div className="reward-logo-box">
                  <img src="/logo.png" />
                  <div className="reward-text-box">
                    <p>Refer and win</p>
                    <p>1000 points</p>
                  </div>
                </div>
                <p className="reward-tag">Rewards</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slider">
              <div className="reward-box reward-box-3">
                <div className="reward-logo-box">
                  <img src="/logo.png" />
                  <div className="reward-text-box">
                    <p>20% cash back</p>
                    <p>On every credit card purchase</p>
                  </div>
                </div>
                <p className="reward-tag">Rewards</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="section-3-bottom-part">
          <p className="section-3-title">Unlimited</p>
          <p className="section-3-title-1">Rewards</p>
          <p className="section-3-title-2">
            Earn up to 5x points on every $1 spent
          </p>
          <p className="section-3-title-2">with your card.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
