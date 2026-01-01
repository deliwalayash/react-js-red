import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
   
             
             
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-end list-unstyled">
             <Link to='/' className="me-3">Home</Link>
            <Link to="/signup"  className="me-3">Sign Up</Link>
            <Link to="/login"  className="me-3">Login</Link>
            </ul>
          
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
