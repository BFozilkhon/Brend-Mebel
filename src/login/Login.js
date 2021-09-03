import React, { Component } from "react";
import loginImg from "../img/5.jpg";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import BrendMebel from "../img/HaqiqiyBrend.png";
import Footer from "../footer/footer";
import "./login.css";
import "./loginResponsive.css";
export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id2: "",
      name2: "",
      surname2: "",
      status2: "",
      age2: "",
      email2: "",
      password2: "",
      adress2: "",
      img2: "",
      view: true,
      page: true,
      yes: true,
    };
  }

  render() {
    const Name = (e) => {
      this.setState({ name2: e.target.value });
    };

    const Surname = (e) => {
      this.setState({ surname2: e.target.value });
    };

    const Age = (e) => {
      this.setState({ age2: e.target.value });
    };

    const Password = (e) => {
      this.setState({ password2: e.target.value });
    };

    const Email = (e) => {
      this.setState({ email2: e.target.value });
    };

    const Status = (e) => {
      this.setState({ status2: e.target.value });
    };

    const Adress = (e) => {
      this.setState({ adress2: e.target.value });
    };

    const Page = () => {
      this.setState({ page: !this.state.page });
    };

    const isDefault = () => {
      this.setState({ yes: !this.state.yes });
    };

    const View = () => {
      this.setState({ view: !this.state.view });
    };

    const Img = (e) => {
      this.setState({ img2: e.target.value });
    };

    return (
      <div>
        <div className={this.state.page ? "yoq" : "pageing"}>
          <div className="login-title">
            <p className="login-hi">Salom {this.state.name2} !!!</p>
            <p className="login-header">Brend Mebel saytiga hush kelibsiz,</p>
            <p className="login-header">
              Sayt logindan muvafaqiyatli o`tidingiz.
            </p>
            <img src={BrendMebel} className="login-head-img" />
          </div>
          <div className="log-dis">
            <h1 className="login-acc">Sizning Akkountingiz</h1>
            <img className="login-img" src={this.state.img} />
            <p className="login-item">
              {this.state.name2} {this.state.surname2}
            </p>
          </div>

          <div className="taklif">
            <p className="tab-taklif">
              Hurmatli{" "}
              <strong>
                {this.state.name2} {this.state.surname2}
              </strong>
              .Login sahifamizdan muvafaqiyatli o`tganingiz uchun sizga mebel
              tanlashga yordam beramiz.Sizga qanday mebel kerak.{" "}
            </p>
            <Link to="/galareya" className="link">
              __Biz galareyamizga o`ting.
            </Link>
            <Link to="/kontakt" className="link">
              __Biz bilan bog`laning
            </Link>
          </div>

          <div className="login-table">
            <table>
              <thead>
                <tr>
                  <th>Ism</th>
                  <th>Familya</th>
                  <th>Yosh</th>
                  <th>Gmail</th>
                  <th>Password</th>
                  <th>Status</th>
                  <th>Shahri</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>{this.state.name2}</td>
                  <td>{this.state.surname2}</td>
                  <td>{this.state.age2}</td>
                  <td>{this.state.email2}</td>
                  <td>{this.state.password2}</td>
                  <td>{this.state.status2}</td>
                  <td>{this.state.adress2}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="box-table">
            <table className="table2">
              <thead>
                <tr>
                  <th>Ism:</th>
                  <td>{this.state.name2}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Familya:</th>
                  <td>{this.state.surname2}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Age:</th>
                  <td>{this.state.age2}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Email:</th>
                  <td>{this.state.email2}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Status:</th>
                  <td>{this.state.status2}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Password:</th>
                  <td>{this.state.password2}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Adres:</th>
                  <td>{this.state.adress2}</td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Ism:</th>
                  <td>{this.state.name2}</td>
                </tr>
              </thead>
            </table>
          </div>

          <Footer />
        </div>

        <div className={this.state.page ? "log-position" : "yoq"}>
          <div className="page-two">
            <img className="logo-login" src={logo} />
            <h1 className="login-wrapp">Brend Mebel</h1>
          </div>

          <div className="inputs-btn">
            <input
              className={
                this.state.yes
                  ? this.state.name2 == ""
                    ? "input"
                    : "input"
                  : this.state.name2 == ""
                  ? "hato"
                  : "input"
              }
              onChange={Name}
              type="text"
              placeholder="name"
            />
            <input
              className={
                this.state.yes
                  ? this.state.surname2 == ""
                    ? "input"
                    : "input"
                  : this.state.surname2 == ""
                  ? "hato"
                  : "input"
              }
              onChange={Surname}
              type="text"
              placeholder="surname"
            />
            <input
              className={
                this.state.yes
                  ? this.state.age2 == ""
                    ? "input"
                    : "input"
                  : this.state.age2 == ""
                  ? "hato"
                  : "input"
              }
              onChange={Age}
              type="text"
              placeholder="age"
            />

            <div
              className={
                this.state.yes
                  ? this.state.adress2 == ""
                    ? "view-two"
                    : "view-two"
                  : this.state.adress2 == ""
                  ? "view-hato"
                  : "view-two"
              }
            >
              <input
                className="input"
                onChange={Password}
                type={this.state.view ? "password" : "text"}
                placeholder="password"
              />
              <i
                onClick={View}
                className={
                  this.state.view ? "fa fa-eye-slash eye" : "fa fa-eye eye"
                }
              />
            </div>
            <input
              className={
                this.state.yes
                  ? this.state.img2 == ""
                    ? "input"
                    : "input"
                  : this.state.img2 == ""
                  ? "hato"
                  : "input"
              }
              onChange={Img}
              type="text"
              placeholder="rasm link joylash"
            />
            <input
              className={
                this.state.yes
                  ? this.state.status2 == ""
                    ? "input"
                    : "input"
                  : this.state.status2 == ""
                  ? "hato"
                  : "input"
              }
              onChange={Status}
              type="text"
              placeholder="status"
            />
            <input
              className={
                this.state.yes
                  ? this.state.email2 == ""
                    ? "input"
                    : "input"
                  : this.state.email2 == ""
                  ? "hato"
                  : "input"
              }
              onChange={Email}
              type="email"
              placeholder="email"
            />
            <input
              className={
                this.state.yes
                  ? this.state.adress2 == ""
                    ? "input"
                    : "input"
                  : this.state.adress2 == ""
                  ? "hato"
                  : "input"
              }
              onChange={Adress}
              type="text"
              placeholder="adress"
            />
            <button
              className="login-btn"
              onClick={
                (this.state.name2,
                this.state.surname2,
                this.state.password2,
                this.state.email2,
                this.state.status2,
                this.state.age2,
                this.state.img2,
                this.state.adress2 == "" ? isDefault : Page)
              }
            >
              Login
            </button>
            <p className="forgot">
              Forgot Passwor? <a href="#">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
