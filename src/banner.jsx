import "boxicons";
import { useState } from "react";

const Banner = () => {
  const [bannerState, setBannerState] = useState(true);

  const toggleBanner = () => {
    setBannerState(false);
    console.log(bannerState);
  };

  return (
    <section className="banner">
      {bannerState ? (
        <div className="banner-box-container">
          <a className="banner-name" href="">
            **Earn up to $100 for getting started
          </a>
          <button className="banner-close-btn" onClick={toggleBanner}>
            <span>
              <i className="bx bx-x"></i>
            </span>
          </button>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Banner;
