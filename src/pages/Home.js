import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCart from "../components/BlogCart";
import ProductCart from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/data";
import { Helmet } from "react-helmet";
import Meta from "../components/Meta";

const Home = () => {
  return (
    <>
      <Helmet>
        <Meta charSet="utf-8" />
        <title>Trang chủ</title>
      </Helmet>
      {/* banner */}
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="../images/banner-1.png"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>AN TOÀN - CHẤT LƯỢNG</h4>
                <h5>GIÁ CẢ HỢP LÝ</h5>
                <p>Chỉ từ 50.000đ</p>
                <Link to="/product" className="button">
                  MUA NGAY
                </Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="../images/mini-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content text-white position-absolute">
                  {/* <h4>AN TOÀN - CHẤT LƯỢNG</h4>
                    <h5>GIÁ CẢ HỢP LÝ</h5>
                    <p>Chỉ từ 50.000đ</p> */}
                </div>
              </div>
              <div className="small-banner text-white position-relative">
                <img
                  src="../images/mini-banner-2.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  {/* <h4>AN TOÀN - CHẤT LƯỢNG</h4>
                    <h5>GIÁ CẢ HỢP LÝ</h5>
                    <p>Chỉ từ 50.000đ</p> */}
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="../images/mini-banner-3.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  {/* <h4>AN TOÀN - CHẤT LƯỢNG</h4>
                    <h5>GIÁ CẢ HỢP LÝ</h5>
                    <p>Chỉ từ 50.000đ</p> */}
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="../images/mini-banner-4.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  {/* <h4>AN TOÀN - CHẤT LƯỢNG</h4>
                    <h5>GIÁ CẢ HỢP LÝ</h5>
                    <p>Chỉ từ 50.000đ</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* services */}
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      {/* categories */}
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Áo</h6>
                  <p>8 Items</p>
                </div>
                <img src="images/áo-category.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Quần</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/quần-category.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Nón</h6>
                  <p>12 Items</p>
                </div>
                <img src="images/áo-category.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Túi</h6>
                  <p>13 Items</p>
                </div>
                <img src="images/áo-category.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Áo</h6>
                  <p>4 Items</p>
                </div>
                <img src="images/áo-category.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Quần</h6>
                  <p>5 Items</p>
                </div>
                <img src="images/áo-category.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Nón</h6>
                  <p>8 Items</p>
                </div>
                <img src="images/áo-category.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Túi</h6>
                  <p>6 Items</p>
                </div>
                <img src="images/áo-category.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Áo</h6>
                  <p>15 Items</p>
                </div>
                <img src="images/áo-category.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Áo</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/áo-category.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* featured collection */}
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Bộ Sưu Tập Nổi Bật</h3>
          </div>
          <ProductCart />
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
      </Container>
      {/* famous collection */}
      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-1.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Kiểu dáng thời thượng</h5>
                <h6>Blazer Uniqlo</h6>
                <p>Chỉ từ 199.000đ - 299.000đ</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-2.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Trẻ trung</h5>
                <h6 className="text-dark">Áo khoác SLC</h6>
                <p className="text-dark">Chỉ từ 119.000đ - 199.999đ</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Cá tính</h5>
                <h6 className="text-dark">Áo hoodie</h6>
                <p className="text-dark">Chỉ từ 119.000đ - 159.999đ</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-4.webp"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Phong cách</h5>
                <h6 className="text-dark">Quần jean dài</h6>
                <p className="text-dark">Chỉ từ 119.000đ - 199.999đ</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* special products */}
      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Các sản phẩm đặc biệt</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>
      {/* popular products */}
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Các mặt hàng phổ biến</h3>
          </div>
          <div className="row">
            <ProductCart />
            <ProductCart />
            <ProductCart />
            <ProductCart />
          </div>
        </div>
      </Container>
      {/* marquee */}
      <Container class1="marquee-wrapper py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper cart-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/l1.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/l2_rm.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/l3.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/l4.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/l9.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/l6_rm.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/l7_rm.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/l10.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      {/* blog */}
      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Bản tin cũ</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCart />
            </div>
            <div className="col-3">
              <BlogCart />
            </div>
            <div className="col-3">
              <BlogCart />
            </div>
            <div className="col-3">
              <BlogCart />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
