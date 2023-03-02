import React from "react";

const SectionSignup = () => {
  return (
    <div className="container-fluid d-flex flex-column align-items-center mb-5">
      <h1 className="fw-900 lh-base text-center text-lg-start">
        Encontre a <span className="text-startista">vaga ideal</span> para seu perfil.{" "}
      </h1>
      <h1 className="fw-900 mb-4 lh-base text-center text-lg-start">
        Encontre o <span className="text-startista">profissional perfeito</span> para sua empresa.
      </h1>
      <div className="divider w-25 bg-startista py-1 mb-5"></div>
      <p className="fs-5 text-center text-lg-start">Não perca a chance de ter o MATCH PERFEITO!</p>
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
  );
};

export default SectionSignup;
