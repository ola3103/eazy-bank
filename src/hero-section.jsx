import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

const HeroSection = () => {
  const comp = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-header",
        { duration: 0, y: -1000 },
        { duration: 1.5, y: 0, ease: "elastic.out(1, 0.3)", delay: 1 }
      );
      gsap.fromTo(
        ".hero-header-title-box",
        { duration: 0, opacity: 0 },
        { duration: 1.5, opacity: 1, ease: "elastic.out(1, 0.3)", delay: 1.6 }
      );
    }, comp);

    return () => ctx.revert();
  }, []);
  return (
    <section className="hero-section" ref={comp}>
      <div className="hero-section-container">
        <h1 className="hero-header">Eazy Banking with</h1>
        <p className="hero-header-title-box">
          <span className="feature"></span>
        </p>
        <p className="hero-header-subtitle">
          Eazy Bank is the go-to financial institution for numerous
          entrepreneurs who rely on its services to launch or expand their
          businesses.
        </p>
        <p className="hero-header-subtitle-2">
          You can easily set up an account in less than three minutes.
        </p>
        <a href="" className="get-started-btn">
          Get Started
        </a>
        <div className="hero-header-subtitle-3">
          <img src="/logo.png" />
          <p className="hero-cta">
            Sign up today and earn up to $200. Certain terms and conditions may
            apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
