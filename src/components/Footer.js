import React from "react";
import { Link } from "react-router-dom";
import { BsTiktok, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="../images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">
                  Đăng ký để nhận những thông tin ưu đãi mới nhất
                </h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Địa chỉ Email"
                  aria-label="Địa chỉ Email"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Đăng ký
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Liên hệ</h4>
              <div>
                <address className="text-white fs-6">
                  HCM : xxx xxx xxx, <br /> xxx, xxx
                </address>
                <a
                  href="tel :+84 948813064"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +84 948813064
                </a>
                <a
                  href="mailto:vopvipbmt@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  vopvipbmt@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a
                    className="text-white"
                    href="https://www.tiktok.com/@2hand_clothes"
                  >
                    <BsTiktok className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://www.facebook.com/profile.php?id=100093256322263"
                  >
                    <BsFacebook className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://www.instagram.com/waybackbackway/?fbclid=IwAR26EorVxoNS6vzbMfG8pBmDahtLJjQMW9xGoo42RgGDFGSj65RkZBS5Rvw"
                  >
                    <BsInstagram className="fs-4" />
                  </a>
                  <a
                    className="text-white"
                    href="https://www.youtube.com/channel/UCuXge5Qgyi5heYU37Y2Y4Zw"
                  >
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Thông tin</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Chính sách bảo mật
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Chính sách hoàn trả
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Chính sách giao hàng
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Các điều khoản và điểu kiện
                </Link>
                <Link to="/blogs" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Tài khoản</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Về chúng tôi</Link>
                <Link className="text-white py-2 mb-1">Câu hỏi thường gặp</Link>
                <Link className="text-white py-2 mb-1">Liên hệ</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Liên kết nhanh</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Áo</Link>
                <Link className="text-white py-2 mb-1">Quần</Link>
                <Link className="text-white py-2 mb-1">Thắt lưng</Link>
                <Link className="text-white py-2 mb-1">Túi</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Developer's
                NNguyen1202
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
