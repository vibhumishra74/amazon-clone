import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./stateProvider";
import reducer, { initialState } from "./reducer";
import { Provider } from "react-redux";
import store from "./redux/store";
import { createStore } from "redux";
import reducers from "./reduxs/index";
console.log("all store>>>", store);
// let store = createStore(reducers);
ReactDOM.render(
  <React.StrictMode>
    {/* <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
