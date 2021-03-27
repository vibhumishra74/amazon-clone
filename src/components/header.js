import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { basketvalue, selectbasket, user, selectuser } from "../redux/appSlice";
import { auth } from "../firebase";

let image = window.location.origin + "/images/amazon_logo.png";

function Header() {
  let basket = useSelector(selectbasket);
  // let name = useSelector(user);
  let name = useSelector(selectuser);
  let logout = () => {
    auth.signOut();
    console.log("logout click.............");
  };
  return (
    <div className="header">
      {/* {console.log("name from header", name?.email)}; */}
      {/* {console.log("name from header", name)}; */}
      <Link to="/">
        <img className="header__logo" src={image} alt="amazon_logo" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!name && "/login"}>
          <div onClick={logout} className="header__option">
            {/* <div className="header__option"> */}
            <span className="header__optionLineOne">
              {!name ? "hello" : "hi"} ,{/* from the payload */}
              {/* {name.payload.users?.email} */}
              {/* from user */}
              {name?.email ? name.email : "guest"}
            </span>
            <span className="header__optionLineTwo">
              {name?.email ? "logout" : "sign-in"}{" "}
              {/* {name.payload.users?.email ? "logout" : "sign-in"}{" "} */}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Return</span>
          <span className="header__optionLineTwo">& order</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
        <div className="header__optionBasket ">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">
            {console.log("basket>>>", { basket })}
            {basket?.length}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
