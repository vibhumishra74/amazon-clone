import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { selectuser, selectbasket } from "../redux/appSlice";
import Checkoutproduct from "./Checkoutproduct";
import "./payment.css";

function Payment() {
  let basket = useSelector(selectbasket);
  let email = useSelector(selectuser);
  let history = useHistory();
  let confirm = () => {
    alert(
      `your order has been successfully confirm and thank you for chooseing cod product will be deliver to your address ${email?.email} in next 7 days`
    );
    window.location.reload(history.push("/"));
  };
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
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* <label for="cars">Choose a payment</label> */}

            <select
              style={{ border: 0, outline: 0 }}
              name="delivery"
              id="delivery"
              required
            >
              <option value="cod">cod</option>
              <option value="codd">cash on delivery</option>
            </select>
            <button className="payment__confirm" onClick={confirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
