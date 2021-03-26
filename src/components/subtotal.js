import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { selectbasket } from "../redux/appSlice";
import "./subtotal.css";
function Subtotal() {
  let basket = useSelector(selectbasket);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              SubTotal ({basket?.length}:items):
              {/* <strong>{basket.map((price) => price.price)}</strong> */}
              {/* <strong>
                ${basket?.reduce((amount, items) => items.price + amount, 0)}
              </strong> */}
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={basket?.reduce((amount, items) => items.price + amount, 0)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
