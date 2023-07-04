import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Helmet } from "react-helmet";
import CustomerInput from "../components/CustomerInput";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { registerUser } from "../features/user/userSlice";

const signUpSchema = yup.object({
  name: yup.string().required("* Họ và tên là bắt buộc"),
  mobile: yup.string().required("* Số điện thoại là bắt buộc"),
  address: yup.string().required("* Địa chỉ là bắt buộc"),
  email: yup
    .string()
    .email("* Email nên được điền đúng")
    .required("* Địa chỉ email là bắt buộc"),
  password: yup.string().required("* Mật khẩu là bắt buộc"),
});

const Signup = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      address: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });
  return (
    <>
      <Helmet>
        <Meta charSet="utf-8" />
        <title>Đăng ký</title>
      </Helmet>
      <BreadCrumb title="Đăng ký" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Đăng ký</h3>
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomerInput
                  type="text"
                  name="name"
                  placeholder="Họ và Tên"
                  value={formik.values.name}
                  onChange={formik.handleChange("name")}
                  onBlur={formik.handleBlur("name")}
                />
                <div className="error">
                  {formik.touched.name && formik.errors.name}
                </div>
                <CustomerInput
                  type="tel"
                  name="mobile"
                  placeholder="Số điện thoại"
                  value={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                />
                <div className="error">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
                <CustomerInput
                  type="text"
                  name="address"
                  placeholder="Địa chỉ"
                  value={formik.values.address}
                  onChange={formik.handleChange("address")}
                  onBlur={formik.handleBlur("address")}
                />
                <div className="error">
                  {formik.touched.address && formik.errors.address}
                </div>
                <CustomerInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomerInput
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password}
                </div>
                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button
                      className="button border-0 text-center"
                      type="submit"
                    >
                      Đăng ký
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

export default Signup;
