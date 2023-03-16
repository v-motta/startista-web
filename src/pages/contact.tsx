import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import SectionSignup from "../components/sectionSignup";
import TitlePage from "../components/titlePage";

interface FormData {
  name: string;
  email: string;
  tel: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => {
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/QuestionsPublicExtern/InsertQuestionsPublicExtern`, data)
      .then((res) => console.log(res))
      .catch(() => alert("Erro ao enviar o formulário. Tente novamente."));
  });

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      alert("O formulário foi enviado com sucesso!");
      window.location.reload();
    }
  });

  return (
    <>
      <Navbar />
      {/* título com background */}
      <TitlePage page="contact" title="Fale conosco" />
      <div className="container-fluid p-lg-5">
        <div className="row justify-content-center w-100 m-0">
          <div className="col-12 col-lg-5 my-5">
            <h1 className="fw-900 fs-2 text-center text-lg-start">
              <span className="text-startista">Dúvidas?</span> Entre em Contato
            </h1>
            <p className=" text-center text-lg-start">Preencha seus dados abaixo e a Startista entrará em contato com você:</p>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nome <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" id="name" {...register("name", { required: true })} />
                {errors.name?.type === "required" && (
                  <p role="alert" className="text-danger">
                    Este campo é obrigatório.
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  E-mail <span className="text-danger">*</span>
                </label>
                <input type="email" className="form-control" id="email" {...register("email", { required: true })} />
                {errors.email?.type === "required" && (
                  <p role="alert" className="text-danger">
                    Este campo é obrigatório.
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="tel" className="form-label">
                  Telefone <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" id="tel" {...register("tel", { required: true })} />
                {errors.tel?.type === "required" && (
                  <p role="alert" className="text-danger">
                    Este campo é obrigatório.
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Assunto <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" id="subject" {...register("subject", { required: true })} />
                {errors.subject?.type === "required" && (
                  <p role="alert" className="text-danger">
                    Este campo é obrigatório.
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Mensagem <span className="text-danger">*</span>
                </label>
                <textarea className="form-control" id="message" {...register("message", { required: true })}></textarea>
                {errors.message?.type === "required" && (
                  <p role="alert" className="text-danger">
                    Este campo é obrigatório.
                  </p>
                )}
              </div>
              <div className="w-100 d-flex justify-content-center">
                <button type="submit" className="btn bg-startista rounded-pill fw-900 text-white btn-hover py-2 w-100">
                  Enviar mensagem
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 col-lg-5 d-flex flex-column justify-content-center p-0">
            <SectionSignup textCenter={true} />
            <h1 className="fw-900 fs-2 text-center text-dark">
              Siga o <span className="text-startista">STARTISTA</span> nas redes sociais!
            </h1>
            <div className="d-flex justify-content-center mb-3 mb-lg-0">
              <Link to="https://www.facebook.com/StartistaOficial" className="text-decoration-none fa-brands fa-facebook fa-lg rounded-circle text-white bg-startista btn-hover mx-1"></Link>
              <Link to="https://www.instagram.com/startistaoficial/" className="text-decoration-none fa-brands fa-instagram fa-lg rounded-circle text-white bg-startista btn-hover mx-1"></Link>
              <Link to="https://www.linkedin.com/company/startista/" className="text-decoration-none fa-brands fa-linkedin fa-lg rounded-circle text-white bg-startista btn-hover mx-1"></Link>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Contact;
