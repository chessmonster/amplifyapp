import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          {/* <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div> */}
          <div class="col-lg-5">
            <h1 class="font-weight-light">Toolsuite</h1>
                <NavLink className="nav-link" to="/callout2">
                  Callout2
                </NavLink>
                <NavLink className="nav-link" to="/googlepro">
                  GooglePro
                </NavLink>
                <NavLink className="nav-link" to="/imgtotext">
                  Image2Text
                </NavLink>
                <NavLink className="nav-link" to="/pdftotext">
                  Pdf2Text
                </NavLink>
                <NavLink className="nav-link" to="/mp4tomp3">
                  Mp4ToMp3
                </NavLink>
                <NavLink className="nav-link" to="/movie">
                  MovieSearch
                </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;