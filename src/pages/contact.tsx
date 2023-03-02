import React from "react";
import Navbar from "../components/navbar";

const contact = () => {
  return (
    <>
      <Navbar />
      {/* título com background */}
      <div className="container-fluid contact-title d-flex align-items-end">
        <h1 className="fw-900 text-startista title-shadow ms-5 mb-4">Fale conosco</h1>
      </div>
    </>
  );
};

export default contact;
