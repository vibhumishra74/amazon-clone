import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
      <h1>hello world</h1>
    </div>
  );
}

export default App;
