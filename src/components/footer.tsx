import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoFooter from "../assets/images/logoFooter.png";
import logoTrescon from "../assets/images/logoTrescon.png";

const Footer = () => {
  return (
    <div className="container-fluid bg-startista p-3 p-lg-5">
      <div className="row d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <div className="col-10 col-lg-4 d-flex flex-column justify-content-center align-items-center">
          <img src={logoFooter} alt="" className="mb-3 w-100 w-md-50 px-4 px-lg-0" />
          <div className="d-flex justify-content-center mb-5">
            <Link to="https://www.facebook.com/StartistaOficial" className="text-decoration-none fa-brands fa-facebook fa-lg rounded-circle text-startista btn-hover bg-white mx-1"></Link>
            <Link to="https://www.instagram.com/startistaoficial/" className="text-decoration-none fa-brands fa-instagram fa-lg rounded-circle text-startista btn-hover bg-white mx-1"></Link>
            <Link to="https://www.linkedin.com/company/startista/" className="text-decoration-none fa-brands fa-linkedin fa-lg rounded-circle text-startista btn-hover bg-white mx-1"></Link>
          </div>
        </div>
        <div className="col-10 col-lg-8 d-flex flex-column justify-content-center">
          <h1 className="fw-bold fs-4 text-center text-lg-start mb-4">
            O Startista é um projeto social sem fins lucrativos com a finalidade de ser uma ponte entre os autistas e o mercado de trabalho.
          </h1>
          <p className="text-center text-lg-start">
            Um ambiente onde você pode expor seu portfólio, suas habilidades e seus interesses, sendo capaz de encontrar ofertas e demandas das empresas que se encaixam com o seu perfil.
          </p>
        </div>
      </div>
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-around">
        <p className="text-center text-lg-start">&copy; 2022 - Todos os direitos reservados</p>
        <NavLink to="/privacy" id="privacy-link" className="text-decoration-none text-dark d-inline-block align-middle h-100 mb-3">
          Política de Privacidade
        </NavLink>
        <div className="d-flex">
          <p className="me-2">Desenvolvido por</p>
          <Link to="https://www.trescon.com.br/">
            <img src={logoTrescon} alt="" width="80" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
