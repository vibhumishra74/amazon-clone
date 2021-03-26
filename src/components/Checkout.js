import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decremented, selectbasket, value } from "../redux/appSlice";
import "./checkout.css";
import Checkoutproduct from "./Checkoutproduct";
import Subtotal from "./subtotal";
let images = window.location.origin + "/images/amazon_ad.jpg";
function Checkout() {
  let basket = useSelector(selectbasket);
  let values = useSelector(value);

  return (
    <div className="checkout">
      {/* {console.log("valuess>>>>", values?.length)} */}
      <div className="checkout_left">
        <img src={images} alt="checkout_ad" className="checkout_ad" />
        <h2 className="checkout_title">your shopping basket</h2>
        {basket?.map((items) => {
          return (
            <Checkoutproduct
              id={items.id}
              price={items.price}
              rating={items.rating}
              image={items.image}
              title={items.title}
            />
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
