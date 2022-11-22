import { Fragment } from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.png";
import NavItem, { NavItemDropDown } from "../NavItem/NavItem";

const Header = () => {
  return (
    <Fragment>
      <div className="navbar navbar-expand-md bg-dark navbar-dark">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img src={Logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainmenu"
            aria-expanded="false"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="mainmenu" style={{}}>
            <ul className="navbar-nav ms-auto">
              <NavItem>
                <a href="#hero" className="nav-link">
                  Home
                </a>
              </NavItem>
              <NavItem>
                <a href="#features" className="nav-link">
                  Browse
                </a>
              </NavItem>
              <NavItemDropDown>
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Learn
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#learn" className="dropdown-item">
                      Learn Bootstrap
                    </a>
                  </li>
                  <li>
                    <a href="#next" className="dropdown-item">
                      Where to go next
                    </a>
                  </li>
                </ul>
              </NavItemDropDown>
              <li className="nav-item">
                <a href="#faq" className="nav-link">
                  Ask Me
                </a>
              </li>
              <li className="nav-item">
                <a href="./index-ar.html" className="nav-link">
                  عربي
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
