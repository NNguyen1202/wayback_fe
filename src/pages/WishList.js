import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";

const WishList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishListFromDb();
    // eslint-disable-next-line
  }, []);
  const getWishListFromDb = () => {
    dispatch(getUserProductWishlist());
  };
  const wishlistState = useSelector((state) => state.auth.wishlist);
  return (
    <>
      <Helmet>
        <Meta charSet="utf-8" />
        <title>Danh sách yêu thích</title>
      </Helmet>
      <BreadCrumb title="Danh sách yêu thích" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/blazar-1.jpg"
                  className="img-fluid w-100"
                  alt="blazar"
                />
              </div>
              <div>
                <div className="py-3 px-3">
                  <h5 className="title">Áo blazer form suông cơ bản</h5>
                  <h6 className="price">259.000đ</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/blazar-1.jpg"
                  className="img-fluid w-100"
                  alt="blazar"
                />
              </div>
              <div>
                <div className="py-3 px-3">
                  <h5 className="title">Áo blazer form suông cơ bản</h5>
                  <h6 className="price">259.000đ</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/blazar-1.jpg"
                  className="img-fluid w-100"
                  alt="blazar"
                />
              </div>
              <div>
                <div className="py-3 px-3">
                  <h5 className="title">Áo blazer form suông cơ bản</h5>
                  <h6 className="price">259.000đ</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WishList;
