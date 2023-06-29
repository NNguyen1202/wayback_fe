import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "../components/Container";
import { Helmet } from "react-helmet";

const SingleBlog = () => {
  return (
    <>
      <Helmet>
        <Meta charSet="utf-8" />
        <title>Blogs</title>
      </Helmet>
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" />
                Quay lại trang Blog
              </Link>
              <h3 className="title">Em của ngày hôm qua</h3>
              <img
                src="../images/blog-2.jpg"
                className="img-fluid w-100 my-4"
                alt="blog"
              />
              <p>
                Nhắm mắt lại hãy nghĩ đi (nghĩ đi), Lâu nay em sống cho mình em
                mà, Phải không em hỡi người (phải không em hỡi người), Tìm lại
                thời gian của riêng đôi ta, Nhưng sao trong anh đã quá tuyệt
                vọng, Sự thật đang bủa vây nơi anh anh, Forget baby
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
