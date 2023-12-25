import React, { useState } from "react";
import axios from "axios";

import css from "./Reg.module.css";
import { Link, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [inpdata, setinpdata] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/register", inpdata)
      .then((e) => {
        localStorage.setItem("login", true);
        navigate("/");
        alert("helo");
      })
      .catch((e) => {
        alert("login failed due to network erro");
      });
  };

  return (
    <>
      <div>
        <div className={`${css.login}   container`}>
          <div className={`${css.form} my-3  `}>
            <form onSubmit={submit}>
              <h2 className="text-center my-3 heading-font">Register Here :</h2>
              <div className={`${css.inps} p-2 `}>
                <label className="mt-3" htmlFor="fullname">
                  {" "}
                  <h6> fullname:</h6>
                </label>

                <input
                  required
                  className=""
                  name="fullname"
                  value={inpdata.fullname}
                  type="text"
                  onChange={(e) => {
                    setinpdata({ ...inpdata, fullname: e.target.value });
                  }}
                  placeholder="Enter Fullname..."
                />
                <label className="mt-3" htmlFor="username">
                  {" "}
                  <h6> Username:</h6>
                </label>

                <input
                  required
                  className=""
                  type="text"
                  name="username"
                  value={inpdata.username}
                  onChange={(e) => {
                    setinpdata({ ...inpdata, username: e.target.value });
                  }}
                  placeholder="Enter Username..."
                />
                <label className="mt-3" htmlFor="email">
                  {" "}
                  <h6> email:</h6>
                </label>

                <input
                  required
                  name="email"
                  className=""
                  value={inpdata.email}
                  onChange={(e) => {
                    setinpdata({ ...inpdata, email: e.target.value });
                  }}
                  type="email"
                  placeholder="Enter E-mail..."
                />
                <label className="mt-3" htmlFor="password">
                  {" "}
                  <h6>Password:</h6>
                </label>

                <input
                  required
                  className=""
                  name="password"
                  value={inpdata.password}
                  onChange={(e) => {
                    setinpdata({ ...inpdata, password: e.target.value });
                  }}
                  placeholder="Enter Password..."
                  type="password"
                />
                <input type="submit" className="button mt-4" value="SignUp" />
              </div>
            </form>
            <Link className="mx-3 my-3" to="/login">
              Already Registered...?{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
