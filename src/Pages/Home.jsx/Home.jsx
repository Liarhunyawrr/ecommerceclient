import React, { useState } from "react";
import css from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  const [featItem, setfeatItem] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/products").then((e) => {
      return setfeatItem(e.data);
    });
  }, []);
  const letsgo = (id) => {
    navigate(`/single/${id}`);
  };
  return (
    <>
      <div className="home">
        <div className={`${css.div} `}>
          <div className="container text-center">
            <div className="row">
              <div className={`${css.left} my-3  col-12 col-lg-6 `}>
                <div className={`${css.img}  mt-2 `}>
                  <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzfGVufDB8fDB8fHww"
                    alt=""
                  />
                </div>
                <div className={`${css.img}  mt-2`}>
                  <img
                    src="https://media.istockphoto.com/id/1218963447/photo/fashion-portrait-of-woman-in-leopard-print-dress.webp?b=1&s=170667a&w=0&k=20&c=cfMS8NYGH9fE9iMhMqPDf_AdheH6IeaDA3XT8ZaxHFs="
                    alt=""
                  />
                </div>
                <div className={`${css.img}  mt-2`}>
                  <img
                    src="https://media.istockphoto.com/id/1061226004/photo/photo-of-young-beautiful-happy-smiling-woman.webp?b=1&s=170667a&w=0&k=20&c=QvajvSkDAfcZbWM83zx1VwTb4xtI81nbGdq2MCIXfjo="
                    alt=""
                  />
                </div>
              </div>
              <div className={`${css.right} my-5  col-12 col-lg-6 `}>
                <h1 className="my-4">Welcome To LioStore</h1>
                <p className="para-font">
                  <span> Where style meets convenience!</span> We're dedicated
                  to bringing you a curated selection of high-quality products
                  that seamlessly blend fashion, functionality, and
                  affordability. <br />
                  <br />
                  Discover the latest trends in fashion, from chic apparel to
                  stylish accessories that will elevate your wardrobe. Our
                  commitment to quality ensures that each item you find here not
                  only looks great but also stands the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${css.why} container  my-4 p-2 `}>
          <div className={`${css.ques} my-5  heading-font `}>
            <h1 className="my-4">Why shop with us?</h1>
            <p className="para-font">
              <span> Quality Assurance:</span> We handpick every product to
              ensure it meets our high standards of quality, craftsmanship, and
              style.
            </p>
            <p className="para-font">
              <span className=""> Affordability:</span> We believe that looking
              and feeling good should be accessible to everyone. Enjoy great
              prices without compromising on style.
            </p>
            <p className="para-font">
              <span>Exceptional Service</span>: Our customer service team is
              here to assist you every step of the way. Your satisfaction is our
              priority.
            </p>
          </div>
        </div>

        <div className={`${css.feat}  p-2`}>
          <h1 className="text-center heading-font my-4">
            Our Feature Products:
          </h1>
          <div className={`${css.products} `}>
            {featItem
              .filter((e) => e.feature === true)
              .slice(0, 3)
              .map((e) => (
                <div
                  onClick={() => letsgo(e._id)}
                  key={e.id}
                  className={`${css.box} mx-1 my-3 `}
                >
                  <div className={`${css.imgg} `}>
                    <img src={e.img} alt="" />
                  </div>
                  <div className={`${css.cont}  `}>
                    <h5 className={`${css.title} mx-3 mt-3`}>{e.title}</h5>
                    <h6 className={`${css.price} mx-3`}>${e.price}</h6>{" "}
                  </div>
                </div>
              ))}
          </div>
          <hr />
          <h6 id="vap" className={`${css.vap} para-font mt-3 text-center`}>
            <Link to="products ">View All Products... </Link>{" "}
          </h6>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Home;
