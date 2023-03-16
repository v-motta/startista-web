import React from "react";
import aboutImg1 from "../assets/images/about1.png";
import aboutImg2 from "../assets/images/about2.png";
import lampImg from "../assets/images/lamp.png";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SectionSignup from "../components/sectionSignup";
import TitlePage from "../components/titlePage";

const About = () => {
  return (
    <>
      <Navbar />
      {/* título com background */}
      <TitlePage page="about" title="Quem somos" />

      {/* primeiro texto e imagem */}
      <div className="container-fluid p-2">
        <div className="row flex-column flex-lg-row justify-content-center w-100 m-0">
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-center">
            <p className="fs-5 text-center text-lg-start">
              A Organização Mundial da Saúde (OMS) estima que existam 70 milhões de pessoas com Transtorno do Espectro Autista (TEA) em todo o mundo, sendo que 2 milhões delas no Brasil.
            </p>
            <p className="fs-5 text-center text-lg-start">Dados do IBGE dão conta de que 85% dos autistas brasileiros estão fora do mercado de trabalho.</p>
            <p className="fs-5 text-center text-lg-start">
              Pensando nisso, o Startista foi criado com o intuito de ser uma ponte entre os autistas e o mercado de trabalho. Um ambiente onde você pode expor seu portfólio, suas habilidades e seus
              interesses, sendo capaz de encontrar ofertas e demandas das empresas que se encaixam com o seu perfil.
            </p>
          </div>
          <div className="col-12 col-lg-4 d-flex align-items-center">
            <img src={aboutImg1} alt="" width="100%" />
          </div>
        </div>
      </div>

      {/* div lamp */}
      <div className="container-fluid bg-startista py-4 p-lg-4">
        <div className="row flex-column flex-lg-row justify-content-center align-items-center w-100 m-0">
          <div className="col-12 col-lg-2 d-flex justify-content-center mb-4 mb-lg-0">
            <img src={lampImg} alt="" width={100} />
          </div>
          <div className="col-12 col-lg-5 d-flex align-items-center">
            <p className="fw-900 fs-4 text-center m-0" style={{ color: "#484d53" }}>
              Cada indivíduo possui características únicas, tem interesses, habilidades, criatividade, sonhos e competências extraordinárias.
            </p>
          </div>
        </div>
      </div>

      {/* segundo texto e imagem */}
      <div className="container-fluid p-2">
        <div className="row d-flex justify-content-center w-100 m-0">
          <div className="col-12 col-lg-4">
            <img src={aboutImg2} alt="" width="100%" />
          </div>
          <div className="col-12 col-lg-4 d-flex jusitfyy-content-center align-items-center">
            <p className="fs-5 text-center text-lg-start">
              Nosso principal objetivo é oferecer um ambiente de visibilidade onde, você autista, possa evoluir nas mais diversas áreas de trabalho seguindo seus sonhos, habilidades e desejos.
              Conectando com oportunidades que façam sentido para cada proposito e que se adequem a cada individualidade.
            </p>
          </div>
        </div>
      </div>

      <SectionSignup textCenter={false} />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
