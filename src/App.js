import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Checkout from "./components/Checkout";
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/Login";
import Payment from "./components/Payment";
import { auth } from "./firebase";
import { user } from "./redux/appSlice";
import Footer from "./components/footer";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      // console.log("app.js authuser is>>", authuser);
      if (authuser) {
        dispatch(user(authuser));
        // console.log("userdispatch if frpm app.js", authuser);
      } else {
        dispatch(user(null));
        // console.log("userdispatch else frpm app.js");
      }
    });
  }, []);
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
