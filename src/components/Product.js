import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incremented, selectbasket, value } from "../redux/appSlice";
import "./product.css";

function Product({ id, title, image, price, rating }) {
  let dispatch = useDispatch();
  // console.log("selectbasket", selectbasket);
  // let basketvalues = useSelector(selectbasket);
  let values = useSelector(value);
  let addtostore = () => {
    dispatch(incremented({ id, title, image, price, rating }));
  };

  return (
    <div className="product">
      {/* {console.log("valuess>>>>", values)} */}
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {/* //making Array */}
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addtostore}>Add to Basket</button>
    </div>
  );
}

export default Product;
