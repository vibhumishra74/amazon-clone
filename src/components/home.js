import React from "react";
import "./home.css";
import Product from "./Product";

const homeImage = window.location.origin + "/images/amazon__home.jpg";
function Home() {
  let mouse = window.location.origin + "/images/mouse.jpg";
  let mic = window.location.origin + "/images/mic.jpg";
  let react = window.location.origin + "/images/react.jpg";
  let monitor = window.location.origin + "/images/monitore.jpg";
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={homeImage} alt="homeImage" />
        <div className="home__row">
          <Product
            idd="1"
            id="12321341"
            title="React js: Hands-On full stack web development using React js , 2nd Edition"
            price={11.96}
            rating={5}
            image={react}
          />
          <Product
            idd="2"
            id="49538094"
            title="All-new Fire TV Stick Lite with Alexa Voice Remote Lite | Stream HD Quality Video | No power and volume buttons | 2020 release"
            price={39.0}
            rating={4}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsw22RcNj-zuYL_T25sCgTIaKjhiYRrwRBW8NWr06oiKFGFq728IdcCkrlD6luf7yOwI&usqp=CAU"
          />
        </div>
        <div className="home__row">
          <Product
            idd="3"
            id="4903850"
            title="Samsung smart watch"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            idd="4"
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            idd="5"
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          {" "}
          <Product
            idd="6"
            id="90829332"
            title="Samsung just unveiled the widest computer monitor you can buy - here's how it looks in person"
            price={1094.98}
            rating={4}
            image={monitor}
          />
        </div>
        <div className="home__row">
          {" "}
          <Product
            idd="7"
            id="90829335"
            title="Blue Yeti USB Mic for Recording and Streaming on PC and Mac,3 Condenser Capsules,4 Pickup Patterns,Headphone Output & Volume Control,Mic Gain Control, Plug & Play (Midnight Blue)"
            price={44.98}
            rating={4}
            image={mic}
          />
          <Product
            idd="8"
            id="90829435"
            title=" Logitech M337 Bluetooth Compact Mouse (Blue)"
            price={14.98}
            rating={4}
            image={mouse}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
