import React from "react";
import "../App.css";

function Title1() {
  return (
    <div className="d-flex flex-column  justify-content-center align-content-center p-5">
      <h1 className="text-white fw-semibold">
        We build beautiful and <br className="hide-br" />
        reliable web solutions
      </h1>
      <h6 className="opacity-50 fs-6 lh-base fw-light title1-responsive">
        We strongly belive that communication, trust and transparency,
        <br className="hide-br" />
        are the essential elements of succesful business relationship.
        <br className="hide-br" />
        Ready for the journey?
      </h6>
      <div className="d-flex flex-sm-row flex-column mt-3 p-2">
        <button
          type="button"
          class="btn btn-outline-secondary me-3 py-2 px-4 btn-ventana2"
        >
          Learn more
        </button>
        <button
          type="button"
          class="btn btn-primary py-2 px-4 mt-sm-0 mt-3 btn-ventana1"
        >
          Our Projects →
        </button>
      </div>
    </div>
  );
}

export default Title1;
