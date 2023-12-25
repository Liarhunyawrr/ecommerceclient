import React, { useRef, useState } from "react";
import css from "./Filter.module.css";
const Filter = () => {
  const bor = useRef(null);
  const [active, setactive] = useState("");
  const hello = () => {
    setactive(active === "" ? css.active : "");
    bor.current.style.border = active === "" ? " 1px solid #422800" : "";
  };
  return (
    <>
      <div className={`${css.icon} px-4 py-3  red`}>
        <i ref={bor} onClick={hello} className="ri-equalizer-line p-1"></i>
        <div className={`${css.filter} ${active} p-2 containet red`}>
          <h4 className="text-center">Categories</h4>
          <div className={`${css.inps} my-4`}>
            <div className={`${css.inp}  px-2 my-2`}>
              <input type="checkbox" id="men" />
              <label htmlFor="men" className="mx-2">
                {" "}
                <h6>men's</h6>
              </label>
            </div>
            <div className={`${css.inp}  px-2 my-2`}>
              <input type="checkbox" id="women" />
              <label htmlFor="women" className="mx-2">
                {" "}
                <h6>women's</h6>
              </label>
            </div>
            <div className={`${css.inp}  px-2 my-2`}>
              <input type="checkbox" id="electronics" />
              <label htmlFor="electronics" className="mx-2">
                {" "}
                <h6>electronics</h6>
              </label>
            </div>
            <div className={`${css.inp}  px-2 my-2`}>
              <input type="checkbox" id="accessories" />
              <label htmlFor="accessories" className="mx-2">
                {" "}
                <h6>accessories</h6>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
