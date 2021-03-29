import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectuser, selectbasket } from "../redux/appSlice";
import Checkoutproduct from "./Checkoutproduct";
import "./payment.css";

function Payment() {
  let basket = useSelector(selectbasket);
  let email = useSelector(selectuser);
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          {" "}
          Checkout (<Link to="/checkout"> {basket.length} Items </Link>){" "}
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>delivery address</h3>
          </div>
          <div className="payment__address">
            <p> {email?.email} </p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((items) => (
              <Checkoutproduct
                id={items.id}
                price={items.price}
                rating={items.rating}
                image={items.image}
                title={items.title}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>payment Method</h3>
          </div>
          <div className="payment__details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
