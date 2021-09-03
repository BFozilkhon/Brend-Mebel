import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer from "./footer/footer";
//css
import "./TabletNav.css";

export default class TabletNav extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="bg-box">
          <Link className="bg-item" to="/">
            Bosh sahifa
          </Link>
          <Link className="bg-item" to="/kontakt">
            Kontakt
          </Link>
          <Link className="bg-item" to="/galareya">
            Galareya
          </Link>
          <Link className="bg-item" to="/addres">
            Addres
          </Link>
          <Link to="/login">
            <button className="bg-btn">Login</button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}
