import SectionSeven from "./section-7";
import Footer from "./section-8-footer";

const SectionSix = () => {
  return (
    <section className="section-6">
      <div className="section-6-container">
        <div className="section-6-side-1">
          <img src="/section-6.png" className="section-6-side-1-img" />
          <h2 className="section-6-side-1-text">INSURED</h2>
          <h2 className="section-6-side-1-text">SECURED</h2>
          <p className="section-6-side-1-text-1">
            Your deposits are FDIC insured up to $250,000 through Blue Ridge
            Bank.
          </p>
        </div>
        <div className="section-6-side-2">
          <div className="section-6-side-2-img-box">
            <img src="/section-6-1.png" className="section-6-side-2-img" />
          </div>
          <p className="section-6-side-2-text-1">Chat</p>
          <p className="section-6-side-2-text-2">Support 24/7</p>
          <p className="section-6-side-2-text-3">
            Reach out to us whenever you have questions, concerns, or feedback.
            Our team will be there for you.
          </p>
          <a href="" className="section-6-side-2-text-4">
            Get Help
          </a>
        </div>
      </div>
      <SectionSeven />
      <Footer />
      <p className="copyright">&#169; 2023 Ola</p>
    </section>
  );
};

export default SectionSix;
