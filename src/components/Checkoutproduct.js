import React from "react";
import { useDispatch } from "react-redux";
import { decremented } from "../redux/appSlice";
import "./checkoutproduct.css";

function Checkoutproduct({ id, title, image, price, rating }) {
  let dispatch = useDispatch();
  let removefrombasket = () => {
    dispatch(decremented({ id }));
  };
  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct__image" src={image} alt="" />
      <div className="checkoutproduct__info">
        <p className="checkoutproduct__title">{title}</p>
        <p className="checkoutproduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutproduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removefrombasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default Checkoutproduct;
