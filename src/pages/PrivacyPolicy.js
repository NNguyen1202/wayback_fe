import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Helmet } from "react-helmet";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <Meta charSet="utf-8" />
        <title>Chính sách bảo mật</title>
      </Helmet>
      <BreadCrumb title="Chính sách bảo mật" />
    </>
  );
};

export default PrivacyPolicy;
