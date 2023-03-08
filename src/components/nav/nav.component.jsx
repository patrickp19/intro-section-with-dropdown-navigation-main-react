import { Component } from "react";
import { Outlet } from "react-router-dom";

import downArrow from "../../images/icon-arrow-down.svg";
import upArrow from "../../images/icon-arrow-up.svg";
import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-menu.svg";

import "./nav.styles.css";

class Nav extends Component {
  hamburgerEvent = (e) => {
    e.target.closest("nav").classList.toggle("hide-mobile-nav");
  };

  dropDownEvent = (e) => {
    // console.log(e.target);
    const info = e.target.parentNode;
    const visibility = info.getAttribute("data-visible");
    // imgSrc = info.children[0].children[1];
    const imgSrc = info.querySelector(".drop-down-arrow");

    if (visibility === "false") {
      info.setAttribute("data-visible", true);
      imgSrc.setAttribute("src", upArrow);
    } else if (visibility === "true") {
      info.setAttribute("data-visible", false);
      imgSrc.setAttribute("src", downArrow);
    }
  };

  render() {
    return (
      <div>
        <nav className="hide-mobile-nav">
          <a className="logo-container" href="/">
            <img className="logo" src={logo} alt="" />
          </a>
          <div className="hamburger-container">
            <img
              className="hamburger"
              src={hamburger}
              alt=""
              onClick={this.hamburgerEvent}
            />
            <div className="darken"></div>
          </div>
          <ul className="nav">
            <div className="nav-list left-nav  flex">
              <li
                className="nav-item-list-container"
                data-visible="false"
                // onClick={this.dropDownEvent}
              >
                <ul className="drop-down-btn" onClick={this.dropDownEvent}>
                  <span>Features</span>

                  <img
                    className="drop-down-arrow"
                    src={downArrow}
                    alt="drop-down"
                    role="button"
                  />
                  <div className="pseudo"></div>
                </ul>
                <ul className="drop-down-list features">
                  <li>
                    <img src="../../images/icon-todo.svg" alt="" />
                    <p>Todo List</p>
                  </li>
                  <li>
                    <img src="../../images/icon-calendar.svg" alt="" />
                    <p>Calendar</p>
                  </li>
                  <li>
                    <img src="../../images/icon-reminders.svg" alt="" />
                    <p>Reminders</p>
                  </li>
                  <li>
                    <img src="../../images/icon-planning.svg" alt="" />
                    <p>Planning</p>
                  </li>
                </ul>
              </li>

              <li className="nav-item-list-container" data-visible="false">
                <ul className="drop-down-btn" onClick={this.dropDownEvent}>
                  <span>Company</span>
                  <img
                    className="drop-down-arrow"
                    src={downArrow}
                    alt="drop-down"
                    role="button"
                  />
                </ul>

                <ul className="drop-down-list company">
                  <li>
                    <p>History</p>
                  </li>
                  <li>
                    <p>Our Team</p>
                  </li>
                  <li>
                    <p>Blog</p>
                  </li>
                </ul>
              </li>
              <li>Careers</li>
              <li>About</li>
            </div>
            <div className="nav-list right-nav flex">
              <li>Login</li>
              <li>
                <a className="btn btn--secondary" href="/login">
                  Register
                </a>
              </li>
            </div>
          </ul>
        </nav>
        <Outlet />
      </div>
    );
  }
}

export default Nav;
