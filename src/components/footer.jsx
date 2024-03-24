import React from "react";
import "../App.css";

//Icons
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <div className="footer-custom d-flex flex-lg-row flex-column ">
      <div className="w-lg-50 w-100 footer-custom-container footer-custom-container-responsive">
        <h6 className="text-white">compleet labs</h6>
        <p className="w-50 mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ad
          explicabo. At quaerat atque vitae!
        </p>
        <div class="footer-custom-container-icons">
          <div class="row">
            <div class="col">
              <a href="#" className="nav-link">
                <i class="bi bi-twitter fs-6"></i>
              </a>
            </div>
            <div class="col">
              <a href="#" className="nav-link">
                <i class="bi bi-instagram fs-6"></i>
              </a>
            </div>
            <div class="col">
              <a href="#" className="nav-link">
                <i class="bi bi-facebook fs-6"></i>
              </a>
            </div>
            <div class="col">
              <a href="#" className="nav-link">
                <i class="bi bi-whatsapp fs-6"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-lg-50 w-100 row fs-6 footer-custom-container">
        <div className="col ">
          <p className="text-white text-uppercase mb-1">sitemap</p>
          <a href="#" className="nav-link">
            <p className="mb-0">Home</p>
          </a>
          <a href="#" className="nav-link">
            <p className="mb-0">Technoligy</p>
          </a>
          <a href="#" className="nav-link">
            <p className="mb-0">Services</p>
          </a>
          <a href="#" className="nav-link">
            <p className="mb-0">About</p>
          </a>
        </div>
        <div className="col">
          <p className="text-white text-uppercase mb-1">case studies</p>
          <a href="#" className="nav-link">
            <p className="mb-0">Swiss Airlines</p>
          </a>
          <a href="#" className="nav-link">
            <p className="mb-0">Google</p>
          </a>
          <a href="#" className="nav-link">
            <p className="mb-0">Apple</p>
          </a>
          <a href="#" className="nav-link">
            <p className="mb-0">Nike</p>
          </a>
        </div>
        <div className="col">
          <p className="text-white text-uppercase mb-1">contact</p>
          <a href="#" className="nav-link">
            <p className="mb-0">Jobs</p>
          </a>
          <a href="#" className="nav-link">
            <p className="mb-0">Hire us</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
