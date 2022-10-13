import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Arigatools
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/callout2">
                  Callout2
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/googlepro">
                  GooglePro
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/imgtotext">
                  Image2Text
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/pdftotext">
                  Pdf2Text
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/mp4tomp3">
                  Mp4ToMp3
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/movie">
                  Movie
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;