import React, { useRef, useState } from "react";
import css from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const [activee, setactivee] = useState(false);
  const active = useRef(null);
  const act = () => {
    setactivee(!activee);
  };

  const navigate = useNavigate();
  const reg = () => {
    navigate("/login");
  };
  const hello = () => {
    localStorage.setItem("login", false);
    axios.get("http://localhost:4000/logout").then((e) => {
      navigate("/");
    });
  };
  return (
    <>
      <div className={`${css.log}  px-2 py-2  `}>
        <h1 className="heading-font">{activee ? "" : "LioStore"}</h1>
      </div>
      <div
        ref={active}
        className={`${css.nav} ${activee ? css.active : ""} navbar px-3 `}
      >
        <div className="logo ">
          <h1>LioStore</h1>
        </div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/contact">Contact</Link>
        </ul>

        <div className="btns">
          {localStorage.getItem("login") === "true" ? (
            <div
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="btn button my-3 btn-dark"
            >
              Logout
            </div>
          ) : (
            <div onClick={reg} className="btn button my-3 btn-dark">
              Join Now
            </div>
          )}

          <div className={`${css.icon}  p-1 `}>
            {activee ? (
              <i onClick={act} class="ri-close-circle-line"></i>
            ) : (
              <i onClick={act} class="ri-menu-line"></i>
            )}
          </div>
        </div>
      </div>
      <div className={`${css.fixed}`}></div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <h6>Wanna Logout..?</h6>
            </div>
            <div class="modal-footer">
              <button
                onClick={hello}
                type="button"
                class="btn btn-dark"
                data-bs-dismiss="modal"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
