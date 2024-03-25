import React from "react";
import "../App.css";

//Images
import spotify from "../assets/icons8-spotify-250.png";
import adidas from "../assets/icons8-adidas-trebol-filled-250.png";
import nike from "../assets/icons8-nike-250.png";
import disney from "../assets/icons8-logo-disney-250.png";
import youtube from "../assets/icons8-youtube-250.png";

function Clients() {
  return (
    <div className="container d-flex flex-column align-items-center clients-custom">
      <div>
        <h6 className="text-uppercase fs-6">clients we worked with</h6>
      </div>
      <div class="container mt-4 ">
        <div class="row ">
          <div class="col-lg">
            <img
              src={spotify}
              alt="spotify"
              width={100}
              className="img-fluid mx-auto d-block"
            />
          </div>
          <div class="col-lg">
            <img
              src={adidas}
              alt="adidas"
              width={100}
              className="img-fluid mx-auto d-block"
            />
          </div>
          <div class="col-lg">
            <img
              src={nike}
              alt="nike"
              width={100}
              className="img-fluid mx-auto d-block"
            />
          </div>
          <div class="col-lg">
            <img
              src={disney}
              alt="disney"
              width={100}
              className="img-fluid mx-auto d-block"
            />
          </div>
          <div class="col-lg">
            <img
              src={youtube}
              alt="youtube"
              width={100}
              className="img-fluid mx-auto d-block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
