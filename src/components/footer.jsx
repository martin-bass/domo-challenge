import React from "react";
import "../App.css";

//Icons
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer() {
  return (
    <div className="footer-custom d-flex flex-row">
      <div className="w-50 footer-custom-container">
        <h6 className="text-white">compleet labs</h6>
        <p className="w-50 mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ad
          explicabo. At quaerat atque vitae!
        </p>
        <div class="footer-custom-container-icons">
          <div class="row">
            <div class="col">
              <i class="bi bi-twitter fs-6"></i>
            </div>
            <div class="col">
              <i class="bi bi-instagram fs-6"></i>
            </div>
            <div class="col">
              <i class="bi bi-facebook fs-6"></i>
            </div>
            <div class="col">
              <i class="bi bi-whatsapp fs-6"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="w-50 row fs-6 footer-custom-container">
        <div className="col ">
          <p className="text-white text-uppercase mb-1">sitemap</p>
          <p  className="mb-0">Home</p>
          <p className="mb-0">Technoligy</p>
          <p className="mb-0">Services</p>
          <p className="mb-0">About</p>
        </div>
        <div className="col">
          <p className="text-white text-uppercase mb-1">case studies</p>
          <p className="mb-0">Swiss Airlines</p>
          <p className="mb-0">Google</p>
          <p className="mb-0">Apple</p>
          <p className="mb-0">Nike</p>
        </div>
        <div className="col">
          <p className="text-white text-uppercase mb-1">contact</p>
          <p className="mb-0">Jobs</p>
          <p className="mb-0">Hire us</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
