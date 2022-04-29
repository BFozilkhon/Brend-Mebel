import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer from "./footer/footer";
import Market from "./market/market";
import Aos from "aos";
import "aos/dist/aos.css";
//img
import rasm1 from "./img/5.jpg";
import rasm2 from "./img/6.jpg";
import rasm3 from "./img/7.jpg";
import rasm4 from "./img/8.jpg";
import rasm5 from "./img/9.jpg";
import rasm6 from "./img/10.jpg";
import rasm7 from "./img/11.jpg";
import rasm8 from "./img/13.jpg";
import rasm9 from "./img/14.jpg";
import rasm10 from "./img/15.jpg";
import rasm11 from "./img/16.jpg";
import rasm12 from "./img/17.jpg";
import rasm13 from "./img/18.jpg";
import "./galareya/galareya.css";
import "./galareya/galareyaResponsive.css";
// import { useEffect } from "react";

const Galareya = () => {
  // render() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 600 },
      items: 1,
      slidesToSlide: 1,
    },
    // tablet: {
    //   breakpoint: { max: 1024, min: 600 },
    //   items: 1,
    //   slidesToSlide: 1
    // },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="gal-container">
      <center>
        <h1 className="gal-header">
          Brend Mebel Galareyasiga hush kelibsiz!!!
        </h1>
        <p className="gal-item">
          Bizning Galareyamizda juda ko`p turdagi mebellar bor.Siz ulardan
          birini tanlab qo`ng`iroq orqali yoki bizning rasmiy do`konimzga kelib
          mebellarni harid qilishingiz mumkin.
        </p>
      </center>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={100}
        keyBoardControl={true}
        customTransition="all 2s"
        transitionDuration={100}
        containerClass="carousel-container"
        // removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-20-px"
      >
        <img className="corousel-img" alt="imgs" src={rasm1} />
        <img className="corousel-img" alt="imgs" src={rasm2} />
        <img className="corousel-img" alt="imgs" src={rasm3} />
        <img className="corousel-img" alt="imgs" src={rasm4} />
        <img className="corousel-img" alt="imgs" src={rasm5} />
        <img className="corousel-img" alt="imgs" src={rasm6} />
        <img className="corousel-img" alt="imgs" src={rasm7} />
        <img className="corousel-img" alt="imgs" src={rasm8} />
        <img className="corousel-img" alt="imgs" src={rasm9} />
        <img className="corousel-img" alt="imgs" src={rasm10} />
        <img className="corousel-img" alt="imgs" src={rasm11} />
        <img className="corousel-img" alt="imgs" src={rasm12} />
        <img className="corousel-img" alt="imgs" src={rasm13} />
      </Carousel>

      <div className="gal-box">
        <Market
          aos="flip-left"
          aos_offset="300"
          img={rasm1}
          name="Divan"
          turi="Zal mebeli"
          narx="Narxi:34.6$"
        />
        <Market
          aos="flip-up"
          aos_offset="300"
          img={rasm2}
          name="Stul"
          turi="Uy mebeli"
          narx="Narxi:7.31$"
        />
        <Market
          aos="flip-right"
          aos_offset="300"
          img={rasm3}
          name="Divan"
          turi="Bolalar spalniy mebeli"
          narx="Narxi:5.89$"
        />
        <Market
          aos="flip-left"
          aos_offset="300"
          img={rasm4}
          name="Stul va Stol"
          turi="Zal mebeli"
          narx="Narxi:89.2$"
        />
        <Market
          aos="flip-down"
          aos_offset="300"
          img={rasm5}
          name="Kerslo"
          turi="Yumshoq mebel"
          narx="Narxi:109.2$"
        />
        <Market
          aos="flip-right"
          aos_offset="300"
          img={rasm6}
          name="Stul masajni"
          turi="Uy mebeli"
          narx="Narxi:22.2$"
        />
        <Market
          aos="flip-left"
          aos_offset="300"
          img={rasm7}
          name="Spalniy"
          turi="Uy mebili"
          narx="Narxi:178.2$"
        />
        <Market
          aos="fade-zoom-in"
          aos_offset="300"
          img={rasm8}
          name="Kamod"
          turi="Spalniy mebeli"
          narx="Narxi:89.62$"
        />
        <Market
          aos="flip-right"
          aos_offset="300"
          img={rasm9}
          name="Stul"
          turi="Zal mebeli"
          narx="Narxi:12.9$"
        />
        <Market
          aos="flip-left"
          aos_offset="300"
          img={rasm10}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:897.3$"
        />
        <Market
          aos="flip-up"
          aos_offset="300"
          img={rasm11}
          name="Divan"
          turi="Zal mebeli"
          narx="Narxi:90.7$"
        />
        <Market
          aos="flip-right"
          aos_offset="300"
          img={rasm12}
          name="Stol"
          turi="Zal mebeli"
          narx="Narxi:808.6$"
        />
        <Market
          aos="flip-left"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="flip-down"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="flip-right"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="flip-left"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="fade-zoom-in"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="flip-right"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="flip-left"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="flip-up"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="flip-right"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="flip-left"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="flip-down"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="flip-right"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="flip-left"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="fade-zoom-in"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="flip-left"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="flip-up"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="flip-right"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
        <Market
          aos="flip-up"
          aos_offset="300"
          img={rasm13}
          name="Spalniy"
          turi="Uy mebeli"
          narx="Narxi:32.8$"
        />
      </div>

      <Footer />
    </div>
  );
  // }
};

export default Galareya;
