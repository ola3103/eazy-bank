const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-side-1">
          <img src="/logo.png" />
        </div>
        <ul className="footer-side-2">
          <li className="footer-side-title-link">Products</li>
          <li className="footer-link">Credit Card</li>
          <li className="footer-link">Investment</li>
          <li className="footer-link">Qiuck Loan</li>
        </ul>
        <ul className="footer-side-3">
          <li className="footer-side-title-link">Comapany</li>
          <li className="footer-link">About</li>
          <li className="footer-link">Career</li>
          <li className="footer-link">Terms</li>
          <li className="footer-link">Privacy & Policy</li>
        </ul>
        <ul className="footer-side-4">
          <li className="footer-side-title-link">Support</li>
          <li className="footer-link">Get Help</li>
          <li className="footer-link">FAQ</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
