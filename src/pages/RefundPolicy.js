import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Helmet } from "react-helmet";

const RefundPolicy = () => {
  return (
    <>
      <Helmet>
        <Meta charSet="utf-8" />
        <title>Chính sách hoàn trả</title>
      </Helmet>
      <BreadCrumb title="Chính sách hoàn trả" />
    </>
  );
};

export default RefundPolicy;
