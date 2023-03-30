const SectionFour = () => {
  return (
    <section className="section-4">
      <div className="section-4-container">
        <div className="section-4-side-1">
          <p className="section-4-side-1-title-1">Zero</p>
          <p className="section-4-side-1-title-2">Fees</p>
          <p className="section-4-side-1-text">
            No hidden fees. No minimum balance.
          </p>
          <p className="section-4-side-1-text">
            No-cost premium balance account
          </p>
          <ul className="section-4-side-1-hidden-box">
            <li className="single-hidden-box">Minimum Balance Requirement</li>
            <li className="single-hidden-box">Account fees</li>
            <li className="single-hidden-box">Transaction fees</li>
            <li className="single-hidden-box">Minimum Balance Requirement</li>
          </ul>
        </div>
        <div className="section-4-side-2">
          <p className="section-4-side-2-title-1">Free</p>
          <p className="section-4-side-2-title-2">Transfers</p>
          <p className="section-4-side-2-title-3">Anywhere</p>
          <p className="section-4-side-2-text">
            Send money via ACH, Wire, or SWIFT in the US or around the world in
            a few clicks.
          </p>
          <a className="section-4-get-started-btn">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
