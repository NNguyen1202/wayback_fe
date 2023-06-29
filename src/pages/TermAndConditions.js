import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Helmet } from "react-helmet";

const TermAndConditions = () => {
  return (
    <>
      <Helmet>
        <Meta charSet="utf-8" />
        <title>Các điều khoản và điều kiện</title>
      </Helmet>
      <BreadCrumb title="Các điều khoản và điểu kiện" />
    </>
  );
};

export default TermAndConditions;
