import React from "react";
import css from "./Rating.module.css";

const Rating = ({ rating }) => {
  const filledStars = Math.round(rating);
  const emptyStars = 5 - filledStars;

  const starArray = Array.from({ length: filledStars }, (_, index) => (
    <span key={index} className={`${css.starrating}`}>
      &#9733;
    </span>
  )).concat(
    Array.from({ length: emptyStars }, (_, index) => (
      <span key={index} className={`${css.starempty}`}>
        &#9734;
      </span>
    ))
  );

  return <div className={`${css.starrating}`}>{starArray}</div>;
};

export default Rating;
