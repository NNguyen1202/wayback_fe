import { Helmet } from "react-helmet";
import React from "react";

const Meta = (props) => {
  <Helmet>
    <meta charSet="utf-8" />
    <title>{props.title}</title>
  </Helmet>;
};

export default Meta;
