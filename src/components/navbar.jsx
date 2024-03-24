import React from "react";
import "../App.css";

function navbar() {
  return (
    <nav className="navbar-custom navbar-expand-lg p-2 d-none d-lg-block">
      <div className="collapse navbar-collapse d-flex justify-content-between px-5">
        <div className="p-5 fw-bold">
          <a className="nav-link " href="#">
            compleet labs
          </a>
        </div>
        <div>
          <ul className="navbar-nav p-3">
            <li className="nav-item active py-2 px-3">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item active py-2 px-3 opacity-50 ">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item active py-2 px-3 opacity-50">
              <a className="nav-link" href="#">
                Technology
              </a>
            </li>
            <li className="nav-item active py-2 px-3 opacity-50">
              <a className="nav-link" href="#">
                Case studies
              </a>
            </li>
            <li className="nav-item active py-2 px-3 opacity-50">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item active py-2 px-3 d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-card-heading"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
              </svg>
              <a className="nav-link" style={{ marginLeft: "4px" }} href="#">
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