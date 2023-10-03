import React, { useState } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div className="the-div">
          <a className="the-a" id="a2" href="#image1">
            Technologies
          </a>
          //
          <a className="the-a" id="a3" href="#projects-h2">
            Portfolio
          </a>
          //
          <a className="the-a" id="a4" href="#experience-header">
            Experience
          </a>
          //
          <a className="the-a" id="a5" href="#email">
            Contact
          </a>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
