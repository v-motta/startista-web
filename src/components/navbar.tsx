import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/LogoStartista.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand ms-0 ms-lg-5" to="/">
          <img src={logo} alt="Startista" width="90" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* Escondido em telas desktop */}
            <div className="d-lg-none">
              <NavLink className="nav-link text-uppercase" to="/about">
                Quem somos
              </NavLink>
              <NavLink className="nav-link text-uppercase" to="/contact">
                Fale conosco
              </NavLink>
            </div>
            {/* Escondido em telas mobile */}
            <div className="d-none d-lg-flex">
              <NavLink className="nav-link text-uppercase text-black fs-5 px-4" to="/about">
                Quem somos
              </NavLink>
              <NavLink className="nav-link text-uppercase text-black fs-5 px-4" to="/contact">
                Fale conosco
              </NavLink>
            </div>
            {/* Escondido em telas desktop */}
            <div className="d-block d-lg-none">
              <a className="nav-link text-uppercase" href={process.env.REACT_APP_LOGIN_E_BASE_URL}>
                Login Empresa
              </a>
              <a className="nav-link text-uppercase" href={process.env.REACT_APP_LOGIN_C_BASE_URL}>
                Login Usuário
              </a>
            </div>
          </div>
          {/* Escondido em telas mobile */}
          <div className="d-none d-lg-flex">
            <a className="btn btn-hover text-startista border border-startista border-2 rounded-pill px-4 me-0 me-lg-2 mb-2 mb-lg-0 mx-4" href={process.env.REACT_APP_LOGIN_E_BASE_URL}>
              Login Empresa
            </a>
            <a className="btn btn-hover text-white border border-startista border-2 bg-startista rounded-pill px-4 mx-4" href={process.env.REACT_APP_LOGIN_C_BASE_URL}>
              Login Usuário
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
