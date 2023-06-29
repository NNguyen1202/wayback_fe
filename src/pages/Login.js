import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { Helmet } from "react-helmet";
import CustomerInput from "../components/CustomerInput";

const Login = () => {
  return (
    <>
      <Helmet>
        <Meta charSet="utf-8" />
        <title>Đăng nhập</title>
      </Helmet>
      <BreadCrumb title="Đăng nhập" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Đăng nhập</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomerInput type="email" name="email" placeholder="Email" />
                <CustomerInput
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                />
                <div>
                  <Link to="/forgot-password">Quên mật khẩu?</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button
                      className="button border-0 text-center"
                      type="submit"
                    >
                      Đăng nhập
                    </button>
                    <Link to="/singup" className="button signup text-center">
                      Đăng ký
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
