import React from "react";
import "../App.css";

function navbar() {
  return (
    // <nav classNameName="navbar-custom navbar-expand-lg p-2 d-none d-lg-block">
    //   <div classNameName="collapse navbar-collapse d-flex justify-content-between px-5">
    //     <div classNameName="p-5 fw-bold">
    //       <a classNameName="nav-link " href="#">
    //         compleet labs
    //       </a>
    //     </div>
    //     <div>
    // <ul classNameName="navbar-nav p-3">
    //   <li classNameName="nav-item active py-2 px-3">
    //     <a classNameName="nav-link" href="#">
    //       Home
    //     </a>
    //   </li>
    //   <li classNameName="nav-item active py-2 px-3 opacity-50 ">
    //     <a classNameName="nav-link" href="#">
    //       Services
    //     </a>
    //   </li>
    //   <li classNameName="nav-item active py-2 px-3 opacity-50">
    //     <a classNameName="nav-link" href="#">
    //       Technology
    //     </a>
    //   </li>
    //   <li classNameName="nav-item active py-2 px-3 opacity-50">
    //     <a classNameName="nav-link" href="#">
    //       Case studies
    //     </a>
    //   </li>
    //   <li classNameName="nav-item active py-2 px-3 opacity-50">
    //     <a classNameName="nav-link" href="#">
    //       About
    //     </a>
    //   </li>
    //   <li classNameName="nav-item active py-2 px-3 d-flex align-items-center">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="16"
    //       height="16"
    //       fill="currentColor"
    //       className="bi bi-card-heading"
    //       viewBox="0 0 16 16"
    //     >
    //       <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
    //       <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
    //     </svg>
    //     <a classNameName="nav-link" style={{ marginLeft: "4px" }} href="#">
    //       Hire us
    //     </a>
    //   </li>
    // </ul>
    //     </div>
    //   </div>
    // </nav>
    <nav className="navbar navbar-expand-lg p-0">
      <div className="container-fluid navbar-custom px-5">
        <a className="navbar-brand text-white px-5 fs-6 fw-bold" href="#">
          compleet labs
        </a>
        <button
          className="navbar-toggler boton-colapse"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ position: "absolute", top: "10px", right: "10px", backgroundColor: "grey", color: "white", border: "white" }}

        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse w-100" id="navbarNavAltMarkup">
          <ul className="navbar-nav p-3 ms-auto">
            <li className="nav-item active py-2 px-3 ">
              <a className="nav-link text-white" href="#">
                Home
              </a>
            </li>
            <li className="nav-item active py-2 px-3">
              <a className="nav-link text-white-50 " href="#">
                Services
              </a>
            </li>
            <li className="nav-item active py-2 px-3">
              <a className="nav-link text-white-50 " href="#">
                Tecnology
              </a>
            </li>
            <li className="nav-item active py-2 px-3">
              <a className="nav-link text-white-50 " href="#">
                Case Studios
              </a>
            </li>
            <li className="nav-item active py-2 px-3">
              <a className="nav-link text-white-50 " href="#">
                About
              </a>
            </li>
            <li className="nav-item active py-2 px-3 d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-card-heading"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
              </svg>
              <a
                className="nav-link text-white"
                style={{ marginLeft: "4px" }}
                href="#"
              >
                Hire us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navbar;
