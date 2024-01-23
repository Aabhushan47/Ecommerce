import React from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="py-2 bg-body-tertiary border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link link-body-emphasis px-2 active"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link link-body-emphasis px-2">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link link-body-emphasis px-2">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link link-body-emphasis px-2">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link link-body-emphasis px-2">
                About
              </Link>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <Link to="#" className="nav-link link-body-emphasis px-2">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="register" className="nav-link link-body-emphasis px-2">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="cart" className="nav-link link-body-emphasis px-2">
                <FaCartArrowDown />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
