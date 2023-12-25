import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import css from "./Single.module.css";
import Rating from "../../Components/Rating/Rating";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Single = () => {
  const notify = () => toast("Item Add To Cart");

  const navigate = useNavigate();
  const reg = (e) => {
    e.preventDefault();
    alert("first login");
    navigate("/login");
  };
  const [count, setcount] = useState(1);

  const dec = () => {
    if (count > 1) {
      setcount((prevCount) => prevCount - 1);
    }
  };

  const inc = () => {
    const maxValue = 5;

    if (count < maxValue) {
      setcount((prevCount) => prevCount + 1);
    }
  };

  const [daat, setdaat] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/products/${id}`).then((response) => {
      setdaat(response.data);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/api/cart/add", {
        items: daat,
        num: count,
      });

      if (response.status === 200) {
        notify();

        console.log("Product added to cart successfully");
      }
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <>
      <h6 className={`${css.cat} my-3 mx-3`}>
        {" "}
        <span>Category: </span>
        {daat.category}
      </h6>
      <div className={`${css.dets} my-3  p-2`}>
        <div className={`${css.left} my-4 mx-2`}>
          <div className={`${css.img} `}>
            <img src={daat.img} alt="" />
          </div>
        </div>

        <div className={`${css.line} `}></div>
        <form
          onSubmit={
            localStorage.getItem("login") === "true" ? handleSubmit : reg
          }
          className={`${css.right} p-2 my-4 mx-2`}
        >
          <div>
            <h5 className="heading-font my-2 ">{daat.title}</h5>
            <h6>${daat.price}</h6>
            <Rating rating={daat.rating?.rate} />
            <h6 className="">
              {daat.rating?.rate}/5 ({daat.rating?.count})
            </h6>

            <p className="para-font mt-5">{daat.description}</p>
            <div className="my-3">
              <p onClick={dec} className={`${css.sig} btn`}>
                -
              </p>{" "}
              <span className="mx-3 my-3"> {count} </span>{" "}
              <p onClick={inc} className={`${css.sig} btn`}>
                {" "}
                +
              </p>
            </div>
            <button
              onClick={notify}
              type="submit"
              className=" btn button  py-1 btn-dark px-2"
            >
              {" "}
              Add To Cart
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Single;
