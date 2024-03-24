import React from "react";
import "../App.css";

//Icons
import "bootstrap-icons/font/bootstrap-icons.css";

function Cards() {
  return (
    <div className="d-flex flex-lg-row flex-column container justify-content-center p-4 gap-5 z-2">
      <div className="card-responsive border border-white bg-white text-center rounded p-4 col-6 h-100">
        <div className="icon-container d-flex justify-content-center align-items-center m-auto">
          <i class="bi bi-file-earmark-text text-white fs-2"></i>
        </div>
        <h6 className="fs-6 mt-3">Business & Product Concept</h6>
        <p className="mt-3">
          Analyse businnes and prodcut concepts at Start-up Workshops or Ongoing
          Projects Audits and prepare a viable and sensible product roadmap for
          achieving a perfect market fit.
        </p>
        <button
          type="button"
          className="btn btn-outline-secondary my-4 btn-ventana2 px-4"
        >
          Learn more
        </button>
      </div>
      <div className="card-responsive border border-white bg-white text-center rounded p-4 col-6 h-100">
        <div className="icon-container d-flex justify-content-center align-items-center m-auto">
        <i class="bi bi-pc-display-horizontal text-white fs-2"></i>
        </div>
        <h6 className="fs-6 mt-3">Web & Mobile Development</h6>
        <p className="mt-3">
          Plan, develop and test high-quality web-applications using AngularJS,
          NodeJS, JavaScript, Typescript, HTML5 and SASS/CSS3 frameworks and
          antive mobile languages.
        </p>
        <button
          type="button"
          className="btn btn-outline-secondary my-4 btn-ventana2 px-4"
        >
          Learn more
        </button>
      </div>
      <div className="card-responsive border border-white bg-white text-center rounded p-4 col-6 h-100">
        <div className="icon-container d-flex justify-content-center align-items-center m-auto">
        <i class="bi bi-pencil-square text-white fs-2"></i>
        </div>
        <h6 className="fs-6 mt-3">UX & UI Design</h6>
        <p className="mt-3">
          Sketch information architecture and simple mock-ups convert them into
          clickable prototypes and finish with usable interface designs to
          deliver a good and reliable user experience.
        </p>
        <button
          type="button"
          className="btn btn-outline-secondary my-4 btn-ventana2 px-4"
        >
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Cards;
