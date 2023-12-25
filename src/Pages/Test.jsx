import React, { useEffect, useState } from "react";
import testcss from "./Test.module.css";
import axios from "axios";
const Test = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/products").then((e) => {
      console.log(e.data);
      setdata(e.data);
    });
  }, []);

  return (
    <>
      <div className={`${testcss.borred} container  `}>
        <div>
          {data.map((e, i) => {
            return (
              <div className="  my-5">
                <img src={e.img} alt="" />
                <h4 className={`${testcss.res} `}>
                  {" "}
                  {i} {e.title}
                </h4>
                <h6 className={`${testcss.resw} `}>{e.rating.rate}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Test;
