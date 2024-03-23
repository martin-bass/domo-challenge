import React from "react";
import "../App.css";

//Image
import watch from "../assets/0c5206302972d0c8cf24358a66b8e5641.png";

function Cards2() {
  return (
    <div className="container d-flex flex-row mt-5 ps-5 pe-5 z-1 ">
      <div className="container w-50 m-3 bg-custom-card2 p-4 rounded-1 ">
        <h3 className="text-white fw-light mb-4">Get in touch with us</h3>
        <p className="text-white-50">
          Lorem ipsum dolor sit amet dolorem quos quod.
          <br />
          dolorem quos quod.
        </p>
        <button
          type="button"
          className="btn btn-outline-primary my-4 btn-ventana-cards2 px-4"
        >
          Hire us
        </button>
      </div>
      <div className="container w-50 m-3 bg-custom-card2 ps-4 pe-4 pt-4 pb-0 rounded-1 d-flex flex-row ">
        <div className="">
          <h3 className="text-white fw-light mb-4">Our Projects</h3>
          <p className="text-white-50">
            Lorem ipsum dolor sit amet dolorem quos quod.
            <br />
            dolorem quos quod.
          </p>
          <button
            type="button"
            className="btn btn-outline-primary my-4 btn-ventana-cards2 px-4"
          >
            See Projects
          </button>
        </div>
        <div className="relative-container">
          <img src={watch} alt="watch" className="watch" />
        </div>
      </div>
    </div>
  );
}

export default Cards2;
