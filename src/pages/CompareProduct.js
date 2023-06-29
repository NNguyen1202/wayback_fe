import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Helmet } from "react-helmet";

const CompareProduct = () => {
  return (
    <>
      <Helmet>
        <Meta charSet="utf-8" />
        <title>So sánh sản phẩm</title>
      </Helmet>
      <BreadCrumb title="Compare Products" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/blazar-1.jpg" alt="blazar" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Áo blazer form suông cơ bản</h5>
                <h6 className="price mb-3 mt-3">259.000đ</h6>
                <div>
                  <div className="product-detail">
                    <h5>Thương hiệu:</h5>
                    <p>Uniqlo</p>
                  </div>
                  <div className="product-detail">
                    <h5>Loại:</h5>
                    <p>Blazer</p>
                  </div>
                  <div className="product-detail">
                    <h5>SKU:</h5>
                    <p>SKU033</p>
                  </div>
                  <div className="product-detail">
                    <h5>Khả dụng:</h5>
                    <p>Còn hàng</p>
                  </div>
                  <div className="product-detail">
                    <h5>Màu:</h5>
                    <ul className="colors ps-0">
                      <li style={{ backgroundColor: "black" }}></li>
                      <li style={{ backgroundColor: "tomato" }}></li>
                      <li style={{ backgroundColor: "Orange" }}></li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <h5>Kích thước:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/blazar-1.jpg" alt="blazar" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">Áo blazer form suông cơ bản</h5>
                <h6 className="price mb-3 mt-3">259.000đ</h6>
                <div>
                  <div className="product-detail">
                    <h5>Thương hiệu:</h5>
                    <p>Uniqlo</p>
                  </div>
                  <div className="product-detail">
                    <h5>Loại:</h5>
                    <p>Blazer</p>
                  </div>
                  <div className="product-detail">
                    <h5>SKU:</h5>
                    <p>SKU033</p>
                  </div>
                  <div className="product-detail">
                    <h5>Khả dụng:</h5>
                    <p>Còn hàng</p>
                  </div>
                  <div className="product-detail">
                    <h5>Màu:</h5>
                    <ul className="colors ps-0">
                      <li style={{ backgroundColor: "black" }}></li>
                      <li style={{ backgroundColor: "tomato" }}></li>
                      <li style={{ backgroundColor: "Orange" }}></li>
                    </ul>
                  </div>
                  <div className="product-detail">
                    <h5>Kích thước:</h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                      <p>L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
