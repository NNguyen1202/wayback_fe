import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Helmet } from "react-helmet";
import CustomerInput from "../components/CustomerInput";

const ResetPassword = () => {
  return (
    <>
      <Helmet>
        <Meta charSet="utf-8" />
        <title>Thay đổi mật khẩu</title>
      </Helmet>
      <BreadCrumb title="Thay đổi mật khẩu" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Thay đổi mật khẩu</h3>
              <form action="" className="d-flex flex-column gap-15">
                <CustomerInput
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                />
                <CustomerInput
                  type="password"
                  name="password"
                  placeholder="Xác nhận mật khẩu"
                />
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button
                      className="button border-0 text-center"
                      type="submit"
                    >
                      Xác nhận
                    </button>
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

export default ResetPassword;
