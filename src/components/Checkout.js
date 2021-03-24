import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decremented, selectbasket, value } from "../redux/appSlice";
import "./checkout.css";
import Subtotal from "./subtotal";
let images = window.location.origin + "/images/amazon_ad.jpg";
function Checkout() {
  let basket = useSelector(selectbasket);
  let values = useSelector(value);
  let dispatch = useDispatch();
  let remove = () => {
    dispatch(decremented(basket));
  };
  return (
    <div className="checkout">
      {console.log("valuess>>>>", values?.length)}
      <div className="checkout_left">
        <img src={images} alt="checkout_ad" className="checkout_ad" />
        <h2 className="checkout_title">your shopping basket</h2>
        {console.log("basket from checkout >>>", basket)}
        {basket.map(({ image, id, title, price, rating }) => {
          return (
            <div className="checkout__product" key={id}>
              <p key={id}>{title} </p>
              <p>
                <small>$</small>
                <strong> {price} </strong>
              </p>
              <div className="checkout__productrtaing">
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <p>🌟</p>
                  ))}
              </div>

              <img src={image} alt="items" />
              <button onClick={remove}> remove </button>
              <hr></hr>
            </div>
          );
        })}
      </div>
      <div className="checkout_right">
        <Subtotal total={basket} />
      </div>
    </div>
  );
}

export default Checkout;
