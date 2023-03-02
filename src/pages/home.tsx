import React from "react";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";
import icon5 from "../assets/images/icon5.png";
import celHome from "../assets/images/homeImg1.png";
import celCarousel from "../assets/images/Celular.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SectionSignup from "../components/sectionSignup";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row d-flex flex-column flex-lg-row justify-content-center align-items-center p-5 mb-3">
          {/* coluna da esquerda */}
          <div className="col-12 col-sm-10 col-md-8 col-xl-6 col-xxl-5 text-center text-xl-start mb-5 mb-xl-0">
            <h1 className="fw-900 mb-4 lh-base">
              Encontre a <span className="text-startista">vaga ideal</span> para seu perfil. Encontre o <span className="text-startista">profissional perfeito</span> para sua empresa.
            </h1>
            <p className="fs-5">Não perca a chance de ter o MATCH PERFEITO!</p>
            <p className="fs-5 mb-4">Cadastre-se Agora!</p>
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-xl-start">
              <button id="signup-user" className="btn bg-startista text-white rounded-4 py-3 px-4 fw-bold me-0 me-sm-4 mb-3 mb-sm-0">
                Cadastre seu currículo
              </button>
              <button id="signup-company" className="btn text-startista rounded-4 button-shadow py-3 px-4 fw-bold border border-opacity-10">
                Cadastre sua empresa
              </button>
            </div>
          </div>
          {/* coluna da direita */}
          <div className="col-12 col-md-10 col-xl-6 col-xxl-5">
            <img src={celHome} alt="" className="w-100" />
          </div>
        </div>
      </div>

      {/* seta para baixo */}
      <div className="container-fluid d-flex justify-content-center mb-5">
        <i className="bi bi-arrow-down-circle fs-3 text-primary"></i>
      </div>

      {/* título e divisória */}
      <div className="container-fluid d-flex flex-column align-items-center">
        <h1 className="fw-900 mb-4 text-center">Conheça detalhes desse projeto</h1>
        <div className="divider w-25 bg-startista py-1 mb-5"></div>
      </div>

      {/* container do video e o círculo azul */}
      <div className="container-fluid d-flex flex-column align-items-center mb-5">
        <div className="position-relative d-none d-lg-block">
          <iframe
            className="z-3"
            width="820"
            height="461"
            src="https://www.youtube.com/embed/O-cIENTUmy0"
            title="STARTISTA APP SÁBADO 17 09 2022"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="position-absolute bg-startista rounded-circle circle-video z-n1 top-100 start-0"></div>
        </div>
        <iframe
          className="d-block d-lg-none z-3 object-fit-cover w-100"
          height="400"
          src="https://www.youtube.com/embed/O-cIENTUmy0"
          title="STARTISTA APP SÁBADO 17 09 2022"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="container-fluid py-5 d-none d-lg-block"></div>
      </div>

      {/* título e divisória */}
      <div className="container-fluid d-flex flex-column align-items-center">
        <h1 className="fw-900 mb-4 text-center">
          Como o <span className="text-startista">Startista</span> funciona
        </h1>
        <div className="divider w-25 bg-startista py-1 mb-5"></div>
      </div>

      {/* carrossel */}
      <div className="container-fluid">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row p-5 justify-content-center align-items-center position-relative">
                <div className="col-10 col-lg-6">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src={icon1} alt="" width="150" className="mb-3 mb-lg-0" />
                    <h1 className="fw-900 text-black">Crie sua conta</h1>
                    <p className="text-black">Crie sua conta em minutos e tenha acesso as vagas ideais para seu perfil.</p>
                  </div>
                </div>
                <div className="col-6 d-none d-lg-block">
                  <div className="position-relative d-flex justify-content-center">
                    <img src={celCarousel} alt="" className="z-3" />
                    <div className="yellow-circle position-absolute top-50 start-50 translate-middle rounded-circle z-n1"></div>
                  </div>
                </div>
                <div className="carousel-bar w-100 position-absolute bottom-0 start-50 translate-middle-x"></div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row p-5 justify-content-center align-items-center position-relative">
                <div className="col-10 col-lg-6">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src={icon2} alt="" width="150" className="mb-3 mb-lg-0" />
                    <h1 className="fw-900 text-black">Cadastre seu currículo e portfólio</h1>
                    <p className="text-black">Cadastre todos os seus cursos, habilidades, experiências e anexe seu portfólio.</p>
                  </div>
                </div>
                <div className="col-6 d-none d-lg-block">
                  <div className="position-relative d-flex justify-content-center">
                    <img src={celCarousel} alt="" className="z-3" />
                    <div className="yellow-circle position-absolute top-50 start-50 translate-middle rounded-circle z-n1"></div>
                  </div>
                </div>
                <div className="carousel-bar w-100 position-absolute bottom-0 start-50 translate-middle-x"></div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row p-5 justify-content-center align-items-center position-relative">
                <div className="col-10 col-lg-6">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src={icon3} alt="" width="150" className="mb-3 mb-lg-0" />
                    <h1 className="fw-900 text-black">Procure as vagas ideais e se candidate a todas que desejar</h1>
                    <p className="text-black">Envie seu currículo e portfólio para todas as empresas que desejar com um clique.</p>
                  </div>
                </div>
                <div className="col-6 d-none d-lg-block">
                  <div className="position-relative d-flex justify-content-center">
                    <img src={celCarousel} alt="" className="z-3" />
                    <div className="yellow-circle position-absolute top-50 start-50 translate-middle rounded-circle z-n1"></div>
                  </div>
                </div>
                <div className="carousel-bar w-100 position-absolute bottom-0 start-50 translate-middle-x"></div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row p-5 justify-content-center align-items-center position-relative">
                <div className="col-10 col-lg-6">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src={icon4} alt="" width="150" className="mb-3 mb-lg-0" />
                    <h1 className="fw-900 text-black">Agora é só aguardar o retorno da empresa</h1>
                    <p className="text-black">A empresa entrará em contato com você caso seu perfil seja aderente a vaga.</p>
                  </div>
                </div>
                <div className="col-6 d-none d-lg-block">
                  <div className="position-relative d-flex justify-content-center">
                    <img src={celCarousel} alt="" className="z-3" />
                    <div className="yellow-circle position-absolute top-50 start-50 translate-middle rounded-circle z-n1"></div>
                  </div>
                </div>
                <div className="carousel-bar w-100 position-absolute bottom-0 start-50 translate-middle-x"></div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row p-5 justify-content-center align-items-center position-relative">
                <div className="col-10 col-lg-6">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src={icon5} alt="" width="150" className="mb-3 mb-lg-0" />
                    <h1 className="fw-900 text-black">E você empresa, tem acesso a profissionais ideais para suas vagas.</h1>
                    <p className="text-black">Faça a busca pelo candidato ideal, verifique suas habilidades, cursos e seu portfólio.</p>
                  </div>
                </div>
                <div className="col-6 d-none d-lg-block">
                  <div className="position-relative d-flex justify-content-center">
                    <img src={celCarousel} alt="" className="z-3" />
                    <div className="yellow-circle position-absolute top-50 start-50 translate-middle rounded-circle z-n1"></div>
                  </div>
                </div>
                <div className="carousel-bar w-100 position-absolute bottom-0 start-50 translate-middle-x"></div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* texto e botões de cadastre */}
      <SectionSignup />

      {/* footer */}
      <Footer />
    </>
  );
};

export default Home;
