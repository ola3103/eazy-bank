import { useState } from "react";

const NavBar = () => {
  const [navState, setNavState] = useState(false);

  const toggleNav = () => {
    setNavState(!navState);
    console.log(navState);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-bar-container">
        <a href="" className="logo">
          <img src={navState ? "/logo-colored.png" : "logo.png"} alt="logo" />
        </a>
        <div className="nav-box" style={{ top: navState ? "0" : "-120%" }}>
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
        <button className="toggle-menu-box" onClick={toggleNav}>
          {navState ? (
            <span className="close-btn g-toggle-btn">
              <i className="bx bx-x"></i>
            </span>
          ) : (
            <span className="menu-btn g-toggle-btn">
              <i className="bx bx-menu"></i>
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
