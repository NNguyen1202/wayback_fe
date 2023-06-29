import React from "react";
import { Link } from "react-router-dom";

const BlogCart = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="../images/blog-2.jpg" className="img-fluid w-100" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">04 June, 2023</p>
        <h5 className="title">Em của ngày hôm qua</h5>
        <p className="desc">
          Nhắm mắt lại hãy nghĩ đi (nghĩ đi). Lâu nay em sống cho mình em mà.
          Phải không em hỡi người (phải không em hỡi người).
        </p>
        <Link to="/blog/:id" className="button">
          Đọc thêm
        </Link>
      </div>
    </div>
  );
};

export default BlogCart;
