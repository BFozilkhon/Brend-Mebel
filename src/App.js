import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Js fayllar
import Navbar from "./navbar/navbar";
import Body from "./body";
import Footer from "./footer/footer";
import Kontakt from "./kontakt/kontakt";
import Galareya from "./galareya";
import Addres from "./addres/addres";
import Login from "./login/Login";
import TabletNav from "./TabletNav";
//css
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Asosiy} />
            <Route path="/kontakt" component={Kontakt} />
            <Route path="/galareya" component={Galareya} />
            <Route path="/addres" component={Addres} />
            <Route path="/login" component={Login} />
            <Route path="/navbar" component={TabletNav} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const Asosiy = () => {
  return (
    <div>
      <Body />
      <Footer />
    </div>
  );
};

export default App;
