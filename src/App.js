import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home.jsx/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart/Cart";
import Products from "./Pages/Products/Products";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Single from "./Pages/Single/Single";
import Login from "./Pages/Register/Login";
import Signup from "./Pages/Register/Signup";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/single/:id" element={<Single />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
