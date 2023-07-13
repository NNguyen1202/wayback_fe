import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import blazer from "../images/blazar-1.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  getUserCart,
  updateCartProduct,
} from "../features/user/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [productUpdateDetail, setProductUpdateDetail] = useState(null);
  const userCartState = useSelector((state) => state.auth.cartProducts);
  const [totalAmount, setTotalAmount] = useState(null);
  //const { data } = userCartState ? userCartState : [];
  useEffect(() => {
    dispatch(getUserCart());
  }, []);
  useEffect(() => {
    if (productUpdateDetail !== null) {
      dispatch(
        updateCartProduct({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity,
        })
      );
      setTimeout(() => {
        dispatch(getUserCart());
      }, 200);
    }
  }, [productUpdateDetail]);
  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  };
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum =
        sum +
        Number(userCartState[index].quantity) * userCartState[index].price;
      setTotalAmount(sum);
    }
  }, [userCartState]);
  return (
    <>
      <Helmet>
        <Meta charSet="utf-8" />
        <title>Giỏ hàng</title>
      </Helmet>
      <BreadCrumb title="Giỏ hàng" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Sản phẩm</h4>
              <h4 className="cart-col-2">Giá</h4>
              <h4 className="cart-col-3">Số lượng</h4>
              <h4 className="cart-col-4">Tổng cộng</h4>
            </div>
            {userCartState &&
              userCartState?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center"
                  >
                    <div className="cart-col-1 d-flex align-items-center">
                      <div className="w-25">
                        <img
                          src={
                            item?.productId?.images &&
                            item?.productId?.images[0]
                          }
                          className="img-fluid"
                          alt="product image"
                        />
                      </div>
                      <div className="w-75">
                        <p>{item?.productId.title}</p>
                        {/* <p>Size: L</p> */}
                        <p className="d-flex gap-3">
                          Color:
                          <ul className="colors ps-0">
                            <li
                              style={{ backgroundColor: item?.color.title }}
                            ></li>
                          </ul>
                        </p>
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="price">{item?.price}</h5>
                    </div>
                    <div className="cart-col-3 d-flex align-items-center gap-15">
                      <div>
                        <input
                          className="form-control"
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          id=""
                          value={
                            productUpdateDetail?.quantity
                              ? productUpdateDetail?.quantity
                              : item?.quantity
                          }
                          onChange={(e) => {
                            setProductUpdateDetail({
                              cartItemId: item?._id,
                              quantity: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div>
                        <AiFillDelete
                          onClick={() => {
                            deleteACartProduct(item?._id);
                          }}
                          className="text-danger"
                        />
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="price">{item?.price * item?.quantity}đ</h5>
                    </div>
                  </div>
                );
              })}

            {/* <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 d-flex align-items-center">
                <div className="w-25">
                  <img src={blazer} className="img-fluid" alt="product image" />
                </div>
                <div className="w-75">
                  <p>Kids headphone bulk 10 pack multi colored for students</p>
                  <p>Size: L</p>
                  <p>Color: #A85A5A</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">200.00đ</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    min={1}
                    max={10}
                    id=""
                  />
                </div>
                <div>
                  <AiFillDelete className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">200.00đ</h5>
              </div>
            </div> */}
          </div>
          <div className=" col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Tiếp tục mua hàng
              </Link>
              {(totalAmount !== null || totalAmount !== 0) && (
                <div className="d-flex flex-column align-items-end">
                  <h4>Tổng đơn hàng: {totalAmount}đ</h4>
                  <p>Phụ thu và phí giao hàng được tính tại mục thanh toán</p>
                  <Link to="/checkout" className="button">
                    Thanh toán
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
