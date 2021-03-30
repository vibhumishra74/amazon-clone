import React, { forwardRef } from "react";
import FlipMove from "react-flip-move";
import { useDispatch, useSelector } from "react-redux";
import {
  decremented,
  selectbasket,
  value,
  selectuser,
} from "../redux/appSlice";
import "./checkout.css";
import Checkoutproduct from "./Checkoutproduct";
import Subtotal from "./subtotal";
let images = window.location.origin + "/images/amazon_ad.jpg";
function Checkout() {
  let basket = useSelector(selectbasket);
  let user = useSelector(selectuser);
  let values = useSelector(value);

  return (
    // forwardRef((props,ref)=>(

    // ))
    <div className="checkout">
      {/* {console.log("valuess>>>>", values?.length)} */}
      <div className="checkout_left">
        <img src={images} alt="checkout_ad" className="checkout_ad" />
        <h3> {!user ? "" : `hello, ${user?.email}`} </h3>
        <h2 className="checkout_title">your shopping basket</h2>
        <FlipMove>
          {basket?.map((items) => {
            return (
              <Checkoutproduct
                key={items.idd}
                idd={items.idd}
                id={items.id}
                price={items.price}
                rating={items.rating}
                image={items.image}
                title={items.title}
              />
            );
          })}
        </FlipMove>
      </div>
      <div className="checkout_right">
        <Subtotal total={basket} />
      </div>
    </div>
  );
}

export default Checkout;
