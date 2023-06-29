import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Helmet } from "react-helmet";

const ShippingPolicy = () => {
  return (
    <>
      <Helmet>
        <Meta charSet="utf-8" />
        <title>Chính sách giao hàng</title>
      </Helmet>
      <BreadCrumb title="Chính sách giao hàng" />
    </>
  );
};

export default ShippingPolicy;
