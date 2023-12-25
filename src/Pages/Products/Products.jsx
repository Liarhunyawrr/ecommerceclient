import React, { useEffect, useRef, useState } from "react";
import css from "./Products.module.css";
import axios from "axios";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const [check, setcheck] = useState([]);
  const [loading, setLoading] = useState(true);

  const bor = useRef(null);
  const men = useRef(null);
  const women = useRef(null);
  const accessories = useRef(null);
  const electronics = useRef(null);
  const [active, setactive] = useState("");
  const hello = () => {
    setactive(active === "" ? css.active : "");
    bor.current.style.border = active === "" ? " 1px solid #422800" : "";
  };

  const [daat, setdaat] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:4000/api/products").then((e) => {
      const shuffledData = shuffleArray(e.data);
      setdaat(shuffledData);
     setInterval(() => {
       setLoading(false);
    }, 1000);
    });
  }, []);

  const show = (inputRef) => {
    const isChecked = inputRef.current.checked;
    const itemId = inputRef.current.id;

    if (isChecked) {
      setcheck((prevCheckedItems) => [...prevCheckedItems, itemId]);
    } else {
      setcheck((prevCheckedItems) =>
        prevCheckedItems.filter((item) => item !== itemId)
      );
    }
  };
  const letsgo = (id) => {
    navigate(`/single/${id}`);
  };
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  return (
    <>
      <div className={`${css.icon} px-4 py-3  `}>
        <i ref={bor} onClick={hello} className="ri-equalizer-line p-1"></i>
        <hr />
        <div className={`${css.filter} ${active} p-2 containet `}>
          <h4 className="text-center">Categories</h4>
          <div className={`${css.inps} my-4`}>
            <div className={`${css.inp}  px-2 my-2`}>
              <input
                ref={men}
                type="checkbox"
                id="men's clothing"
                checked={check.includes("men's clothing")}
                onChange={() => show(men)}
              />
              <label htmlFor="men's clothing" className="mx-2">
                {" "}
                <h6>men's</h6>
              </label>
            </div>
            <div className={`${css.inp}  px-2 my-2`}>
              <input
                type="checkbox"
                ref={women}
                checked={check.includes("women's clothing")}
                onChange={() => show(women)}
                id="women's clothing"
              />

              <label htmlFor="women's clothing" className="mx-2">
                {" "}
                <h6>women's</h6>
              </label>
            </div>
            <div className={`${css.inp}  px-2 my-2`}>
              <input
                type="checkbox"
                ref={electronics}
                checked={check.includes("electronics")}
                onChange={() => show(electronics)}
                id="electronics"
              />
              <label htmlFor="electronics" className="mx-2">
                {" "}
                <h6>electronics</h6>
              </label>
            </div>
            <div className={`${css.inp}  px-2 my-2`}>
              <input
                type="checkbox"
                ref={accessories}
                checked={check.includes("jewelery")}
                onChange={() => show(accessories)}
                id="jewelery"
              />
              <label htmlFor="jewelery" className="mx-2">
                {" "}
                <h6>accessories</h6>
              </label>
            </div>
          </div>
        </div>
      </div>

      {loading ? (
        <div className={`${css.load} my-3`}>
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <>
          {check.includes("men's clothing") ||
          check.includes("women's clothing") ||
          check.includes("electronics") ||
          check.includes("jewelery") ? (
            <div className={`${css.products}  p-2 my-5`}>
                <div className={`${css.products}  my-3 p-2`}>
                  {daat
                    .filter((e) => check.includes(e.category))
                    .map((e, i) => (
                      <div key={e.id} className={`${css.box} mx-1 my-2 `}>
                        <div className={`${css.img} `}>
                          <img src={e.img} alt="" />
                        </div>
                        <div className={`${css.cont}  p-2  `}>
                          <h6 className="mt-2">{e.title}</h6>
                          <p>${e.price}</p>
                        </div>
                      </div>
                    ))}
                </div>
            </div>
          ) : (
            <div className={`${css.products}  my-3 p-2 `}>
              {daat.map((e) => (
                <div
                  key={e.id}
                  onClick={() => letsgo(e._id)}
                  className={`${css.box} mx-1 my-4 `}
                >
                  <div className={`${css.img} `}>
                    <img src={e.img} alt="" />
                  </div>
                  <div className={`${css.cont} p-2 `}>
                    <h6 className=" para-font mt-2">{e.title}</h6>
                    <p className={`${css.tprice}`}> ${e.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Products;
