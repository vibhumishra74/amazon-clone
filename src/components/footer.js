import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  let image = window.location.origin + "/images/amazon_logo.png";
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <img className="footer__logo" src={image} alt="amazon_logo" />{" "}
          <p class="footer-links">
            <Link to="/" class="link-1">
              Home
            </Link>

            <Link to="/payment">Pricing</Link>

            <Link to="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">
              About
            </Link>

            <Link to="/">Faq</Link>

            <Link to="/">Contact</Link>
          </p>
          <p class="footer-company-name">Amazon India © 2021</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>444 S.Hyderabad</span> Solana Beach, India
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+91 8888-888-888</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <Link to="mailto:support@company.com">support@amazon.com</Link>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            Amazon India has turned, the world's fastest-growing market for
            internet users. And it has picked Hyderabad, a city of nearly 10
            million in India's south, as its base of operations there
          </p>

          <div class="footer-icons">
            <Link to="#">
              <i class="fa fa-facebook"></i>
            </Link>
            <Link to="#">
              <i class="fa fa-twitter"></i>
            </Link>
            <Link to="#">
              <i class="fa fa-linkedin"></i>
            </Link>
            <a target="blank" href="https://github.com/vibhumishra74">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
