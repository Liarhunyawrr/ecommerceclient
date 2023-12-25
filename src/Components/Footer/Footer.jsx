import React from "react";
import css from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className={`${css.div}  mt-5`}>
        <div className="container  ">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <Link to="/" className="nav-link px-2 text-body-secondary">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/products"
                  className="nav-link px-2 text-body-secondary"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link px-2 text-body-secondary"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <hr />
            <p className="text-center text-body-secondary ">
              © All Rights Reserved.{" "}
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Footer;
