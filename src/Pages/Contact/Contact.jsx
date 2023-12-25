import React, { useEffect, useState } from "react";
import css from "./Contact.module.css";
import { Link } from "react-router-dom";
const Contact = () => {
  const [loggedin, setLoggedin] = useState(false);

  useEffect(() => {
    const storedLogin = localStorage.getItem("login");

    setLoggedin(storedLogin === "true");
  }, []);

  return (
    <>
      {loggedin ? (
        <>
          <p className=" my-3 para-font text-center"> This  is just a demo form. </p>
        <div class={`${css.cont} m-5   `}>
          <div class={` mb-3`}>
            <label for="exampleFormControlInput1" class="form-label">
              Enter Username:
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Username"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Enter Message Here:
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="button px-3 py-2"> Send</div>
        </div>
        </>
      ) : (
        <div className={`${css.ltv} red`}>
          <Link to="/signup">Register To View This Page....</Link>
        </div>
      )}
    </>
  );
};

export default Contact;
