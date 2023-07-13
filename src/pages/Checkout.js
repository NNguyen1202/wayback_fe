import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

const shippingSchema = yup.object({
  firstName: yup.string().required("* Tên là bắt buộc"),
  lastName: yup.string().required("* Họ là bắt buộc"),
  address: yup.string().required("* Địa chỉ là bắt buộc"),
  ward: yup.string().required("* Phường là bắt buộc"),
  district: yup.string().required("* Quận là bắt buộc"),
  city: yup.string().required("* Thành phố là bắt buộc"),
});

const Checkout = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.auth.cartProducts);
  const [totalAmount, setTotalAmount] = useState(null);
  const [shippingInfo, setShippingInfo] = useState(null);
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState?.length; index++) {
      sum = sum + Number(cartState[index].quantity) * cartState[index].price;
      setTotalAmount(sum);
    }
  }, [cartState]);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      ward: "",
      district: "",
      city: "",
    },
    validationSchema: shippingSchema,
    onSubmit: (values) => {
      
      setShippingInfo(values);
    },
  });
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Way Back</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Giỏ hàng
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Thông tin
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active">
                    Giao hàng
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Thanh toán
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Thông tin liên hệ</h4>
              <p className="user-details total">
                Nguyên Nguyễn (nguyennhse150329@fpt.edu.vn)
              </p>
              <h4 className="mb-3">Địa chỉ giao hàng</h4>
              <form
                onSubmit={formik.handleSubmit}
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                {/* <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      chọn quốc gia
                    </option>
                  </select>
                </div> */}
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Tên"
                    className="form-control"
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange("firstName")}
                    onBlur={formik.handleBlur("firstName")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.firstName && formik.errors.firstName}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Họ"
                    className="form-control"
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange("lastName")}
                    onBlur={formik.handleBlur("lastName")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.lastName && formik.errors.lastName}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Địa chỉ"
                    className="form-control"
                    name="address"
                    value={formik.values.address}
                    onChange={formik.handleChange("address")}
                    onBlur={formik.handleBlur("address")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.address && formik.errors.address}
                  </div>
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Phường"
                    className="form-control"
                    name="ward"
                    value={formik.values.ward}
                    onChange={formik.handleChange("ward")}
                    onBlur={formik.handleBlur("ward")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.ward && formik.errors.ward}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Thành phố"
                    className="form-control"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange("city")}
                    onBlur={formik.handleBlur("city")}
                  />
                  <div className="error ms-2 my-1">
                    {formik.touched.city && formik.errors.city}
                  </div>
                </div>
                <div className="flex-grow-1">
                  <select
                    name="district"
                    value={formik.values.district}
                    onChange={formik.handleChange("district")}
                    onBlur={formik.handleBlur("district")}
                    className="form-control form-select"
                    id=""
                  >
                    <option value="" selected disabled>
                      Chọn quận
                    </option>
                    <option value="thành phố Thủ Đức">thành phố Thủ Đức</option>
                    <option value="quận Gò Vấp">quận Gò Vấp</option>
                    <option value="quận Tân Bình">quận Tân Bình</option>
                    <option value="quận Bình Thạnh">quận Bình Thạnh</option>
                    <option value="quận 1">quận 1</option>
                    <option value="quận 2">quận 2</option>
                    <option value="quận 3">quận 3</option>
                    <option value="quận 4">quận 4</option>
                    <option value="quận 5">quận 5</option>
                    <option value="quận 6">quận 6</option>
                    <option value="quận 7">quận 7</option>
                    <option value="quận 8">quận 8</option>
                    <option value="quận 10">quận 10</option>
                    <option value="quận 11">quận 11</option>
                    <option value="quận 12">quận 12</option>
                  </select>
                  <div className="error ms-2 my-1">
                    {formik.touched.district && formik.errors.district}
                  </div>
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Quay lại giỏ hàng
                    </Link>
                    <Link to="/cart" className="button">
                      Tiếp tục
                    </Link>
                    <button className="button" type="submit">
                      Đặt hàng
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              {cartState &&
                cartState?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="d-flex gap-10 mb-2 align-items-center"
                    >
                      <div className="w-75 d-flex gap-10">
                        <div className="w-25 position-relative">
                          <span
                            style={{ top: "-10px", right: "2px" }}
                            className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                          >
                            {item?.quantity}
                          </span>
                          <img
                            width={100}
                            height={100}
                            src={
                              item?.productId?.images &&
                              item?.productId?.images[0]
                            }
                            alt="product"
                          />
                        </div>
                        <div>
                          <h5 className="total-price">
                            {item?.productId?.title}
                          </h5>
                          <p className="total-price">{item?.color?.title}</p>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="total">
                          {item?.price * item?.quantity}đ
                        </h5>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-align-items-center">
                <p className="total">Tổng tiền (chưa tính phí)</p>
                <h5 className="total-price">
                  {totalAmount ? totalAmount : "0"}đ
                </h5>
              </div>
              <div className="d-flex justify-content-between align-align-items-center">
                <p className="mb-0 total">Phí giao hàng</p>
                <h5 className="mb-0 total-price">30000đ</h5>
              </div>
            </div>
            <div className="d-flex justify-content-between align-align-items-center border-bottom py-4">
              <h4 className="total">Tổng cộng</h4>
              <h5 className="total-price">
                {totalAmount ? totalAmount + 30000 : "0"}đ
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
