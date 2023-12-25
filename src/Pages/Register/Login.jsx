import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import css from "./Reg.module.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const notify = () => {
    toast.error("Invalid Username Or Password");
  };
  const notifyt = () => {
    toast.success("Successfully Login");
  };
  const navigate = useNavigate();
  const [inpdata, setinpdata] = useState({
    username: "",
    password: "",
  });
  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/login", inpdata)
      .then((e) => {
        localStorage.setItem("login", true);

        notifyt();
        navigate("/");
      })
      .catch((e) => {
        notify();
      });
  };

  return (
    <>
      <div>
        <div className={`${css.login}   container`}>
          <div className={`${css.form} my-3  `}>
            <form onSubmit={submit}>
              <h1 className="text-center my-3 heading-font">Login Here :</h1>
              <div className={`${css.inps} p-2 `}>
                <label className="mt-3" htmlFor="username">
                  {" "}
                  <h6>Username:</h6>
                </label>

                <input
                  required
                  className=""
                  name="username"
                  value={inpdata.username}
                  onChange={(e) => {
                    setinpdata({ ...inpdata, username: e.target.value });
                  }}
                  type="text"
                  placeholder="Enter Username..."
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
                <input type="submit" className="button mt-4" value="Login" />
              </div>
            </form>
            <Link className="mx-3 my-3" to="/signup">
              New Here..?{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
