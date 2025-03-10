import React from "react";
import "../styles/navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar container">
          <div className="nav-left">
            <div className="nav-img">
              <NavLink to={"/"}>
                <img src="/logo.jpeg" alt="logo" />
              </NavLink>
              <span>
                Formerly
                <br />
                <strong>Econfin Pvt Ltd</strong>
              </span>
            </div>
            <div className="nav-search">
              <AiOutlineSearch />
              <input type="text" placeholder="Search Opportunities" />
            </div>
          </div>
          <div className="nav-right">
            <div className="nav-tabs">
              <div className="learn-tab">
                <NavLink to={"/courses"}>
                  <span className="tab-icon"></span>
                  <span className="tab-name">learn</span>
                </NavLink>
              </div>
              <div className="practice-tab">
                <NavLink to={"/practice"}>
                  <span className="tab-icon"></span>
                  <span className="tab-name">practice</span>
                </NavLink>
              </div>
              <div className="compete-tab">
                <NavLink to={"/about"}> {/* Added About tab */}
                  <span className="tab-icon"></span>
                  <span className="tab-name">About</span>
                </NavLink>
              </div>
              <div className="mentorship-tab">
                <NavLink to={"/mentor"}>
                  <span className="tab-icon"></span>
                  <span className="tab-name">mentorship</span>
                </NavLink>
              </div>
              <div className="jobs-tab">
                <NavLink to={"/job-portal"}>
                  <span className="tab-icon"></span>
                  <span className="tab-name">jobs</span>
                </NavLink>
              </div>
            </div>
            <div className="nav-btns">
              <button className="btn login-btn">
                <span>Login</span>
                <img
                  src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/login_icon.svg"
                  alt="host btn"
                />
              </button>
              <button className="menu-btn">
                <img
                  src="https://cdn.unstop.com/uploads/images/unstop/menu_icons/hamburger_icon.svg"
                  alt="menu"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
