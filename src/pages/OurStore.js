import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const productState = useSelector((state) => state.product.product);
  console.log(productState);
  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);
  const getProducts = () => {
    dispatch(getAllProducts());
  };
  return (
    <>
      <Helmet>
        <Meta charSet="utf-8" />
        <title>Cửa hàng</title>
      </Helmet>
      <BreadCrumb title="Cửa Hàng" />
      <Container class1="store-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Mua sắm theo danh mục</h3>
              <div>
                <ul className="ps-0">
                  <li>Áo</li>
                  <li>Quần</li>
                  <li>Nón</li>
                  <li>Túi</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Sắp xếp theo</h3>
              <div>
                <h5 className="sub-title">Khả dụng</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Còn hàng (2)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Hết hàng (0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Giá</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="Từ"
                    />
                    <label htmlFor="floatingInput">Từ</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="Đến"
                    />
                    <label htmlFor="floatingInput1">Đến</label>
                  </div>
                </div>
                <h5 className="sub-title">Màu</h5>
                <div>
                  <Color />
                </div>
                <h5 className="sub-title">Kích cỡ</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      S (3)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      M (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-3"
                    />
                    <label className="form-check-label" htmlFor="color-3">
                      L (6)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-4"
                    />
                    <label className="form-check-label" htmlFor="color-4">
                      XL (3)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-5"
                    />
                    <label className="form-check-label" htmlFor="color-5">
                      XXL (5)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Thẻ sản phẩm</h3>
              <div>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Hoodie
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Blazer
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Polo
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Somi
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                    Short
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Sản phẩm ngẫu nhiên</h3>
              <div>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/hoodie-1.jpg"
                      className="img-fluid"
                      alt="hoodie"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Áo hoodie thu kiểu dáng nữ tính</h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>130.000đ</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/hoodie-2.jpg"
                      className="img-fluid"
                      alt="hoodie"
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Áo hoodie hình họa tiết nữ siêu cưng, vải lót nỉ mỏng
                    </h5>
                    <ReactStars
                      count={5}
                      size={24}
                      value={5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b>130.000đ</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-frid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block " style={{ width: "200px" }}>
                    Sắp xếp theo:
                  </p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Trạng thái</option>
                    <option value="best-selling">Bán chạy nhất</option>
                    <option value="title-ascending">A-Z</option>
                    <option value="title-descending">Z-A</option>
                    <option value="price-ascending">Giá từ thấp đến cao</option>
                    <option value="price-descending">
                      Giá từ cao đến thấp
                    </option>
                    <option value="create-ascending">Ngày từ cũ đến mới</option>
                    <option value="create-descending">
                      Ngày từ mới đến cũ
                    </option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="../images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="../images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="../images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="../images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                <ProductCard data={productState} grid={grid} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
