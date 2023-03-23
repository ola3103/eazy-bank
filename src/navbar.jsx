const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-container">
        <a href="" className="logo">
          <img src="/logo.png" alt="logo" />
        </a>
        <ul className="nav-item">
          <li className="nav-link">
            <a href="">Products</a>
            <div className="drop-down-content">
              <p className="drop-down-content-title">Products</p>
              <a href="" className="drop-down-content-link">
                Consulting
              </a>
              <a href="" className="drop-down-content-link">
                Quick Loan
              </a>
              <a href="" className="drop-down-content-link">
                Investment
              </a>
              <a href="" className="drop-down-content-link">
                Credit Card
              </a>
            </div>
          </li>
          <li className="nav-link">
            <a href="">Company</a>
            <div className="drop-down-content">
              <p className="drop-down-content-title">Company</p>
              <a href="" className="drop-down-content-link">
                About
              </a>
              <a href="" className="drop-down-content-link">
                Career
              </a>
              <a href="" className="drop-down-content-link">
                Terms
              </a>
              <a href="" className="drop-down-content-link">
                Privacy & Policy
              </a>
            </div>
          </li>
          <li className="nav-link">
            <a href="">Support</a>
            <div className="drop-down-content">
              <p className="drop-down-content-title">Support</p>
              <a href="" className="drop-down-content-link">
                Get Help
              </a>
              <a href="" className="drop-down-content-link">
                FAQ
              </a>
            </div>
          </li>
        </ul>
        <div className="log-sign-up">
          <a className="log-in-btn" href="">
            log In
          </a>
          <a className="sign-up-btn" href="">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
