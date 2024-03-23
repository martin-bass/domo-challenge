import React from "react";
import "../App.css";

//Images
import html from "../assets/icons8-html5-250.png";
import css from "../assets/icons8-css3-250.png";
import sass from "../assets/icons8-hablar-con-descaro-a-250.png";
import js from "../assets/icons8-nodo-js-250.png";
import angular from "../assets/icons8-angular-250.png";
import python from "../assets/icons8-python-250.png";

function Technologies() {
  return (
    <div className="container d-flex flex-row">
      <div className="container technologies-custom">
        <h3 className="text-white fw-light mb-4">
          We use cutting edge technology
        </h3>
        <p className="text-white-50">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem natus
          illum explicabo, veritatis dolore voluptatibus error blanditiis
          tempore omnis, iste a sequi tenetur nemo id eligendi cum placeat hic
          et quas minima unde nostrum repudiandae. Aperiam veritatis qui non
          autem labore explicabo. Excepturi dolor voluptate incidunt suscipit ab
          necessitatibus perferendis?
        </p>
      </div>
      <div className="container w-25 d-grid gap-1 technologies-custom">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center  p-1">
            <img src={html} alt="html" className="w-50" />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center  p-1 ">
            <img src={css} alt="css" className="w-50" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center  p-1">
            <img src={sass} alt="sass" className="w-50" />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center  p-1">
            <img src={js} alt="js" className="w-50" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center  p-1 ">
            <img src={angular} alt="angular" className="w-50" />
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center  p-1 ">
            <img src={python} alt="python" className="w-50" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
