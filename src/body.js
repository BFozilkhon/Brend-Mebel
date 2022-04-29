import React, { useEffect } from "react";
import Market from "./market/market";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
//rasmlar
import body3d from "./img/body3d.png";
import stul from "./img/stul.jpg";
import dostavka from "./img/dostavka-mashina.png";
import tab from "./img/14.jpg";
import stulStol from "./img/11.jpg";
import divanYotoq from "./img/19.jpg";
import myaxkiyKok from "./img/20.jpg";
import stulKok from "./img/10.jpg";
import kartaLogo from "./img/karta-logo2.png";
import karta from "./img/karta.jpg";
import divan from "./img/6.jpg";
import kamod1 from "./img/4jpg.jpg";
import spalniy1 from "./img/7.jpg";
import spalniy2 from "./img/8.jpg";
import spalniy3 from "./img/9.jpg";
import stul2 from "./img/13.jpg";
import divan2 from "./img/15.jpg";
import stol2 from "./img/16.jpg";
import divanIkki from "./img/17.jpg";
//css
import "./body/body.css";
import "./body/bodyResponsive.css";

const Body = () => {
  // render(){
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div id="id" className="body-img-header">
        <div className="body-header">
          <a href="#id">
            <div className="dumaloq1">Asosiy</div>
          </a>
          <Link to="/galareya">
            <div className="dumaloq2">Galareya</div>
          </Link>{" "}
          <Link to="/kontakt">
            <div className="dumaloq3">Kontakt</div>
          </Link>{" "}
          <Link to="/login">
            <div className="dumaloq4">Login</div>
          </Link>{" "}
          <Link to="/addres">
            <div className="dumaloq5">Adres</div>
          </Link>
          <div className="text-animation">
            <h1 className="body-world">Brend Mebel</h1>
            <h1 className="body-world">Tog`ri tanlov!!!</h1>
            <h1 className="body-world">Ko`p assortimentlar</h1>
            <h1 className="body-world">Faqat Brend Mebelda</h1>
          </div>
          <p className="body-wrapp">
            Bizning brend mebel rasmiy saytimizga hush kelibsiz.Biz sizlarga
            turli xildagi hamyonbop va sifatli Mebellarni Taqdim etamiz.Bizning
            mebel dokonimizda Spalniy,oshxona mebellari, stol-stular va turli
            ko`rinishdagi divanlarni topishingiz mumkin
          </p>
          <Link to="/kontakt">
            <button className="body-view">View</button>
          </Link>
        </div>
        <img alt="imgs" src={body3d} width="20px" className="body-img" />
      </div>

      <div className="dostavka">
        <img className="dostavka-img" alt="imgs" src={dostavka} />
        <div className="dostavka-2qism">
          <h1 className="dostavka-header">
            Ajoyib yangilik, Endi dostavka xizmatlari bepul.
          </h1>
          <p className="dostavka-item">
            Hali bunaqasi bolmagan Brend mebel sizlarga ajoyib bonus beradi
            10-Augustdan, 10-Oktabrgacha "Yetkazib berish xizmatlari
            bepul".Faqatgina o`zingizga yoqqan mebelni tanlang va uyda mazza
            qilib dam oling.Dostavka va qoyib berish xizmati bepul.
          </p>
          <Link to="/addres" className="dostavka-href" href="#">
            ...Batafsil
          </Link>
        </div>
      </div>

      <div className="karta">
        <div className="karta-box">
          <img className="karta-logo" alt="imgs" src={kartaLogo} />
          <h1 className="karta-header">Brend Mebel - Google Karta</h1>
        </div>
        <a
          target="blank"
          href="https://www.google.com/maps/place/%D0%9C%D0%B0%D0%BB%D0%B8%D0%BA%D0%B0+%D0%91%D0%BE%D0%BD%D1%83/@41.3483462,69.1728602,17z/data=!3m1!4b1!4m5!3m4!1s0x38ae8e946b73658b:0x12d6d8af3152166a!8m2!3d41.3483462!4d69.1728602"
        >
          <img alt="imgs" src={karta} className="karta-img" />
        </a>
      </div>

      <h1 className="body-title">Maxsus takliflar</h1>
      <div className="marketing">
        <Market
          aos="flip-left"
          aos_offset="300"
          img={stul}
          name="Shkaf"
          turi="Spalniy mebeli"
          narx="Narxi:4.21$"
        />
        <Market
          aos="fade-down"
          aos_offset="300"
          img={stulKok}
          name="Stul"
          turi="Uy mebeli"
          narx="Narxi:7.31$"
        />
        <Market
          aos="flip-right"
          aos_offset="300"
          img={divan}
          name="Divan"
          turi="Zal mebeli"
          narx="Narxi:34.6$"
        />
        <Market
          aos="fade-left"
          aos_offset="300"
          img={divanYotoq}
          name="Divan"
          turi="Bolalar spalniy mebeli"
          narx="Narxi:5.89$"
        />
        <Market
          aos="fade-zoom-in"
          aos_offset="300"
          img={stulStol}
          name="Stul va Stol"
          turi="Zal mebeli"
          narx="Narxi:89.2$"
        />
        <Market
          aos="fade-right"
          aos_offset="300"
          img={myaxkiyKok}
          name="Kerslo"
          turi="Yumshoq mebel"
          narx="Narxi:109.2$"
        />
        <Market
          aos="fade-left"
          aos_offset="300"
          img={tab}
          name="Stul masajni"
          turi="Uy mebeli"
          narx="Narxi:22.2$"
        />
        <Market
          aos="fade-up"
          aos_offset="300"
          img={spalniy1}
          name="Spalniy"
          turi="Uy mebili"
          narx="Narxi:178.2$"
        />
        <Market
          aos="fade-right"
          aos_offset="300"
          img={kamod1}
          name="Kamod"
          turi="Spalniy mebeli"
          narx="Narxi:89.62$"
        />
        <Market
          aos="fade-left"
          aos_offset="300"
          img={stul2}
          name="Stul"
          turi="Zal mebeli"
          narx="Narxi:12.9$"
        />
        <Market
          aos="fade-down"
          aos_offset="300"
          img={divan2}
          name="Divan"
          turi="Zal mebeli"
          narx="Narxi:90.7$"
        />
        <Market
          aos="fade-right"
          aos_offset="300"
          img={spalniy2}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:897.3$"
        />
        <Market
          aos="flip-left"
          aos_offset="300"
          img={stol2}
          name="Stol"
          turi="Zal mebeli"
          narx="Narxi:808.6$"
        />
        <Market
          aos="fade-up"
          aos_offset="300"
          img={spalniy3}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="flip-right"
          aos_offset="300"
          img={divanIkki}
          name="Divan"
          turi="Zal mebeli"
          narx="Narxi:100$"
        />
      </div>
    </div>
  );
  // }
};

export default Body;
