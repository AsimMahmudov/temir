import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section>
        <div className=" bg-black py-8 sticky top-0 z-[99] ">
          <div className="container">
            <div className="">
              <div className="foot">
                <Link
                  to={"/"}
                  className="text-white text-2xl tracking-wider hover:duration-[0.5s] hover:border-b-[1px] hover:border-solid hover:border-inherit"
                >
                  Home
                </Link>

                <Link
                  to={"/product"}
                  className="text-white text-2xl tracking-wider hover:duration-[0.5s] hover:border-b-[1px] hover:border-solid hover:border-inherit"
                >
                  products
                </Link>

                <h1 className="text-white text-[30px]">TEMIR LLC</h1>
                <Link
                  to={"/about"}
                  className="text-white text-2xl tracking-wider hover:duration-[0.5s] hover:border-b-[1px] hover:border-solid hover:border-inherit"
                >
                  about
                </Link>

                <Link
                  to={"/contact"}
                  className="text-white text-2xl tracking-wider hover:duration-[0.5s] hover:border-b-[1px] hover:border-solid hover:border-inherit"
                >
                  Contact US
                </Link>
              </div>
              {/* <Link to={"/"} className="text-white text-4xl ">
                <ion-icon name="bag-add-outline"></ion-icon>
              </Link> */}
            </div>
          </div>
        </div>
      </section>
      <section id="footer">
        <div className="container">
          <div className="footer">
            <div className="footer-p">
              <p>
                Mall Of Emirates. G-floor. <br /> Near: Rado, Pandora, Steve{" "}
                <br /> Madden{" "}
              </p>
            </div>
            <div className="footer-logo">
              <Link
                to={
                  "https://api.whatsapp.com/send/?phone=%2B996559692626&text&type=phone_number&app_absent=0"
                }
              >
                <ion-icon name="logo-whatsapp"></ion-icon>
              </Link>

              <Link to={"https://www.facebook.com/motionwebllc2021/"}>
                <ion-icon name="logo-facebook"></ion-icon>
              </Link>

              <Link to={"https://www.youtube.com/@motionwebllc683"}>
                <ion-icon name="logo-youtube"></ion-icon>
              </Link>

              <Link to={"https://www.instagram.com/motionweb.kg/"}>
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>

              <Link to={""}>
                <ion-icon name="mail-outline"></ion-icon>
              </Link>
            </div>
            <div className="motion-web">
              <h1>Developed by</h1>
              <Link to={"https://motion.kg/"}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/ceec/ac96/dd5e8fd29a66de0e383d3c84799aa59d?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UhylS6YAT92Q2TNcHHF0NrjAiXdp8hZH8Z~xgDeFr0tMRtnIX5L~ZYR0m849QFgTHbxauvsq0xejQPOewjThw5l4kFL2BElwD-ia2ShYFhKNk361Y5sKYmDtoGsg6lXx815zMD~HxBJ7VoFMaOVvY-S6j4iHBT-ATxYEWG3j72k1pyDIB4OgOPyfo4TlLPQmwggqrm0IwYkRsN6CcXFnHVuSx4JDdF7USoMluGVy1NbcX90qWbjONqOyMFCqNoAANdlKssa-C9r68CguMceiETkA9AgGDS1Vrm7fGFmFsA5frGeq00fNpGUSE8dNn-PaygHOZGiZU7Xn~pFkDKA7eg__"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
