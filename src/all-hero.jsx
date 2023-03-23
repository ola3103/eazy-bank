import Banner from "./banner";
import NavBar from "./navbar";
import HeroSection from "./hero-section";

const AllHero = () => {
  return (
    <section className="hero-body">
      <div className="lines">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Banner />
      <NavBar />
      <HeroSection />
    </section>
  );
};

export default AllHero;
