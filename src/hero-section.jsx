const HeroSection = () => {
  return (
    <section className="hero-section">
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
          <p>
            Sign up today and earn up to $200. Certain terms and conditions may
            apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
