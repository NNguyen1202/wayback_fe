import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { Helmet } from "react-helmet";
import CustomerInput from "../components/CustomerInput";

const ForgotPassword = () => {
  return (
    <>
      <Helmet>
        <Meta charSet="utf-8" />
        <title>Quên mật khẩu</title>
      </Helmet>
      <BreadCrumb title="Quên mật khẩu" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Quên mật khẩu</h3>
              <p className="text-center mt-2 mb-3">
                Chúng tôi sẽ gửi bạn một email để đổi lại mật khẩu của bạn
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <CustomerInput type="email" name="email" placeholder="Email" />
                <div>
                  <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                    <button
                      className="button border-0 text-center"
                      type="submit"
                    >
                      Xác nhận
                    </button>
                    <Link to="/login">Hủy bỏ</Link>
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

export default ForgotPassword;
