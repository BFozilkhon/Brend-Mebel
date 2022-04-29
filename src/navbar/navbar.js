import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "./navbar.css";
import "./navbarResponsive.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClick: "asosiy",
    };
  }
  render() {
    const Clicked = (name) => {
      this.setState({ isClick: name });
    };

    return (
      <div className="navbar">
        <div className="nav-logo-header">
          <img src={logo} className="nav-logo" alt="img" />
          <div className="nav-header">Brend Mebel</div>
        </div>

        <div className="nav-wrapp">
          <Link
            onClick={() => Clicked("asosiy")}
            className={this.state.isClick === "asosiy" ? "tab" : "item"}
            to="/"
          >
            Bosh sahifa
          </Link>
          <Link
            onClick={() => Clicked("kontakt")}
            className={this.state.isClick === "kontakt" ? "tab" : "item"}
            to="/kontakt"
          >
            Kontakt
          </Link>
          <Link
            onClick={() => Clicked("galareya")}
            className={this.state.isClick === "galareya" ? "tab" : "item"}
            to="/galareya"
          >
            Galareya
          </Link>
          <Link
            onClick={() => Clicked("adres")}
            className={this.state.isClick === "adres" ? "tab" : "item"}
            to="/addres"
          >
            Addres
          </Link>
          <Link to="/login">
            <button
              onClick={() => Clicked("login")}
              className={this.state.isClick === "login" ? "login" : "login"}
            >
              Login
            </button>
          </Link>
        </div>

        <Link className="link" to="./navbar">
          <i className="fa fa-navicon" />
        </Link>
      </div>
    );
  }
}
// navicon

export default Navbar;
