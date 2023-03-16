import React from "react";

interface TitlePageProps {
  page: string;
  title: string;
}

const TitlePage = ({ page, title }: TitlePageProps) => {
  return (
    <div className={`container-fluid" ${page}-title d-flex justify-content-center justify-content-lg-start align-items-end`}>
      <h1 className="fw-900 text-startista title-shadow ms-0 ms-lg-5 mb-4 ps-0 ps-lg-2">{title}</h1>
    </div>
  );
};

export default TitlePage;
