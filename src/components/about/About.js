import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutimg from "../../assets/img/aboutimg.png";

import aboutimg1 from "../../assets/img/card1.svg";
import aboutimg2 from "../../assets/img/card2.svg";
import aboutimg3 from "../../assets/img/card3.svg";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <div className="container">
        <div className="py-10">
          <div className="text-center text-white">
            <h1 className="text-9xl ">TEMIR STORE</h1>
            <h3 className="text-3xl mt-6">
              Temir card-new generation smart business card with <br /> more
              advanced options.
            </h3>
          </div>
          <div className="flex justify-center py-10">
            <img src={aboutimg} alt="" />
          </div>
          <div className="">
            <p className="text-3xl mt-6 text-white text-center">
              You can add your contact details, social media <br /> accounts,
              pictures and <br /> more other details and you can update at any
              time. <br /> No more messing around with a paper business <br />{" "}
              cards. One card for life time.
            </p>
          </div>
        </div>
      </div>
      <div className="ee py-10">
        <div className="blockabout2">
          <div className="blockabout">
            <div className="about">
              <div className="aboutimg">
                <img className="aboutimgg" src={aboutimg1} alt="" />

                <h3>
                  Digital business cards are the modern way to share contact
                  information. They are more interactive, cost effective, and
                  sustainable than their physical counterparts.{" "}
                </h3>
              </div>
              <div className="abouth1">
                <h2>01</h2>
                <h1>SMART CARDS</h1>
              </div>
            </div>

            <div className="about1">
              <div className="aboutimg">
                <img className="aboutimgg" src={aboutimg2} alt="" />

                <h3>
                  Digital business cards are the modern way to share contact
                  information. They are more interactive, cost effective, and
                  sustainable than their physical counterparts.{" "}
                </h3>
              </div>
              <div className="abouth1">
                <h2>02</h2>
                <h1>SMART TAGS</h1>
              </div>
            </div>

            <div className="about">
              <div className="aboutimg">
                <img className="aboutimgg" src={aboutimg3} alt="" />

                <h3>
                  Digital business cards are the modern way to share contact
                  information. They are more interactive, cost effective, and
                  sustainable than their physical counterparts.{" "}
                </h3>
              </div>
              <div className="abouth1">
                <h2>03</h2>
                <h1>SMART KEYCHAIN</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
