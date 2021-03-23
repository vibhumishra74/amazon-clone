import React from "react";
import { useSelector } from "react-redux";
import { selectbasket, value } from "../redux/appSlice";
import "./checkout.css";
import Subtotal from "./subtotal";
let images = window.location.origin + "/images/amazon_ad.jpg";
function Checkout() {
  let basket = useSelector(selectbasket);
  let values = useSelector(value);
  return (
    <div className="checkout">
      {console.log("valuess>>>>", values?.length)}
      <div className="checkout_left">
        <img src={images} alt="checkout_ad" className="checkout_ad" />
        <h2 className="checkout_title">your shopping basket</h2>
        {console.log("basket from checkout >>>", basket)}
        {basket}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
