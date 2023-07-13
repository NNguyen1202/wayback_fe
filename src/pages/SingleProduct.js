import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { Helmet } from "react-helmet";
import Container from "../components/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAProducts } from "../features/products/productSlice";
import Color from "../components/Color";
import { toast } from "react-toastify";
import { addProdToCart, getUserCart } from "../features/user/userSlice";

// import { Link } from "react-router-dom";
// import watch from "../images/watch.jpg";

const SingleProduct = () => {
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.singleproduct);
  const cartState = useSelector((state) => state.auth.cartProducts);
  console.log(productState);
  useEffect(() => {
    dispatch(getAProducts(getProductId));
    dispatch(getUserCart());
  }, []);
  useEffect(() => {
    for (let index = 0; index < cartState?.length; index++) {
      if (getProductId === cartState[index]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  }, []);
  const uploadCart = () => {
    if (color === null) {
      toast.error("Vui lòng chọn màu");
      return false;
    } else {
      dispatch(
        addProdToCart({
          productId: productState?._id,
          color,
          quantity,
          price: productState?.price,
        })
      );
      navigate("/cart");
    }
  };

  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: productState?.images && productState.images[0],
  };

  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  // const closeModal = () => {};
  return (
    <>
      <Helmet>
        <Meta charSet="utf-8" />
        <title>Sản phẩm</title>
      </Helmet>
      <BreadCrumb title="Tên sản phẩm" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                {props.img ? (
                  <ReactImageZoom {...props} />
                ) : (
                  <div>No image available</div>
                )}
              </div>
            </div>
            {/* <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://cf.shopee.vn/file/b2ec4b39f3de36ecaaf80578f43803ef"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://cf.shopee.vn/file/b2ec4b39f3de36ecaaf80578f43803ef"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://cf.shopee.vn/file/b2ec4b39f3de36ecaaf80578f43803ef"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://cf.shopee.vn/file/b2ec4b39f3de36ecaaf80578f43803ef"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div> */}
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">{productState?.price}đ</p>
                <div className="d-flex align-align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 phản hồi)</p>
                </div>
                <a className="review-btn" href="#review">
                  Viết một nhận xét
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Kiểu :</h3>
                  <p className="product-data">Áo khoác</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Thương hiệu :</h3>
                  <p className="product-data">{productState?.brand}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Loại :</h3>
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">{productState?.tags}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Khả dụng :</h3>
                  <p className="product-data">Còn hàng</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XXL
                    </span>
                  </div>
                </div>
                {alreadyAdded === false && (
                  <>
                    <div className="d-flex gap-10 flex-column mt-2 mb-3">
                      <h3 className="product-heading">Color :</h3>
                      <ul className="colors ps-0">
                        <Color
                          setColor={setColor}
                          colorData={productState?.color}
                        />
                      </ul>
                    </div>
                  </>
                )}
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  {alreadyAdded === false && (
                    <>
                      <h3 className="product-heading">Quantity :</h3>
                      <div className="">
                        <input
                          type="number"
                          name=""
                          min={1}
                          max={100}
                          className="form-control"
                          style={{ width: "70px" }}
                          id=""
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                      </div>
                    </>
                  )}
                  <div
                    className={
                      alreadyAdded
                        ? "ms-0"
                        : "ms-5" + "d-flex align-items-center gap-30 ms-5"
                    }
                  >
                    <button
                      className="button border-0 text-center"
                      type="button"
                      onClick={() => {
                        alreadyAdded ? navigate("/cart") : uploadCart();
                      }}
                    >
                      {alreadyAdded ? "Đến giỏ hàng" : "Thêm vào giỏ hàng"}
                    </button>
                    {/* <button className="button signup text-center">
                      Mua ngay
                    </button> */}
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="/">
                      <TbGitCompare className="fs-5 me-2" />
                      Thêm vào so sánh
                    </a>
                  </div>
                  <div>
                    <a href="/">
                      <AiOutlineHeart className="fs-5 me-2" />
                      Thêm vào danh sách yêu thích
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Vận chuyển & trả lại :</h3>
                  <p className="product-data">
                    Miễn phí giao hàng trong phạm đi bán kính 2km quanh đại học
                    FPT!
                    <br /> Chúng tôi giao hàng trong <b>1-2 ngày hành chính</b>!
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Đường dẫn sản phẩm :</h3>

                  <a
                    // eslint-disable-next-line
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(window.location.href);
                    }}
                  >
                    Sao chép đường dẫn sản phẩm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Mô tả</h4>
            <div className="bg-white p-3">
              <p>{productState?.description}</p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Các phản hồi</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Đánh giá chung</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Dựa trên 2 phản hồi</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="/">
                      Viết một phản hồi
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Viết một phản hồi</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      row="4"
                      placeholder="Ý kiến trao đổi"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Gửi phản hồi</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">Nawdeep</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Các mặt hàng phổ biến</h3>
          </div>
          {/* <div className="row">
            <ProductCard />
          </div> */}
        </div>
      </Container>
      {/* <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header py-0 border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body py-0">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 w-50">
                  <img src={watch} className="img-fluid" alt="product imgae" />
                </div>
                <div className="d-flex flex-column flex-grow-1 w-50">
                  <h6 className="mb-3">Apple Watch</h6>
                  <p className="mb-1">Quantity: asgfd</p>
                  <p className="mb-1">Color: asgfd</p>
                  <p className="mb-1">Size: asgfd</p>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 py-0 justify-content-center gap-30">
              <button type="button" className="button" data-bs-dismiss="modal">
                View My Cart
              </button>
              <button type="button" className="button signup">
                Checkout
              </button>
            </div>
            <div className="d-flex justify-content-center py-3">
              <Link
                className="text-dark"
                to="/product"
                onClick={() => {
                  closeModal();
                }}
              >
                Continue To Shopping
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default SingleProduct;
