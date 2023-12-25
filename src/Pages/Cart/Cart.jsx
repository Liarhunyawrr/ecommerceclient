import axios from "axios";
import css from "./Cart.module.css";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const del = async (cartId) => {
    try {
      await axios.delete(`http://localhost:4000/api/cart/${cartId}`);
      setproitem((prevItems) => prevItems.filter((item) => item._id !== cartId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const del2 = async (cartId) => {
    try {
      await axios.delete(`http://localhost:4000/api/cart/${cartId}`);
      setproitem((prevItems) => prevItems.filter((item) => item._id !== cartId));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  const [proitem, setproitem] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/api/cart").then((e) => {
      setproitem(e.data);
    });
  }, []);

  return (
    <>
      <h1 className="heading-font  mx-3 my-5">Your Cart Items:</h1>
      <hr />

      {proitem.length === 0 || localStorage.getItem("login") === "false" ? (
        <div className={`${css.emp}`}>
          <h6>Your Cart Is Empty...</h6>
        </div>
      ) : (
        proitem.map((e) => (
          <>
            {e.items.map((f) => (
              <div className={`${css.cart}  p-2 container my-3`} key={f._id}>
                <span onClick={() => del2(e._id)} className={`${css.del2}`}>
                  <i className=" ri-delete-bin-line p-1"></i>
                </span>
                <div className={`${css.circ} mx-3 container`}>
                  <img src={f.img} alt="" />
                </div>
                <div className={`${css.dets} px-2 my-3  mx-2`}>
                  <div className={`${css.int}`}>
                    <h6 className={`${css.tit}`}>{f.title}</h6>

                    <p className={`${css.tit}`}>${f.price}</p>
                  </div>
                  <div className={`${css.quan}`}>
                    <h6 className={`${css.tit}`}>quantity:</h6>
                    <p className={`${css.tit}`}>{e.num}</p>
                  </div>
                  <div className={`${css.sub}`}>
                    <h6 className={`${css.tit}`}>subtotal:</h6>
                    <p className={`${css.tit}`}>
                      ${(f.price * e.num).toFixed(2)}
                    </p>
                  </div>
                </div>
                <span onClick={() => del(e._id)} className={`${css.del}`}>
                  <i className=" ri-delete-bin-line p-1"></i>
                </span>
              </div>
            ))}
          </>
        ))
      )}
    </>
  );
};

export default Cart;
