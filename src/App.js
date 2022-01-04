import React, { useState, useRef, useEffect } from "react";
import Logo from "./assets/images/logo.png";
import About from "./assets/images/about.png";
import Services from "./assets/images/services.png";
import Offers from "./assets/images/offers.png";
import Contact from "./assets/images/contact.png";
import "./App.css";

const arrayFeature = [
  {
    title: "Mission",
    desc: "Our main mission is to support our customers in the development of their IT systems",
  },
  {
    title: "Vision",
    desc: "Our vision is to create a better relationship between customers and IT services providers",
  },
  {
    title: "Values",
    desc: `We keep our promises and are committed to doing business the right way,      
  We provide quality products and services tham meet our customers needs
  and We encourage innovation to meet challenges`,
  },
];

const App = () => {
  const aboutUsRef = useRef(null);
  const offersRef = useRef(null);
  const servicesRef = useRef(null);
  const contactUsRef = useRef(null);
  const [scroll, setScroll] = useState(false);

  const [descIndex, setDescIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => setDescIndex((descIndex + 1) % 3), 5000);
  }, [descIndex]);

  const clickMenuHandler = (view) => {
    switch (view) {
      case "about":
        aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "offers":
        offersRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "services":
        servicesRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      case "contact":
        contactUsRef.current.scrollIntoView({ behavior: "smooth" });
        break;

      default:
        console.log("No view to scroll in!!");
    }
  };

  const scrollHandler = (event) => {
    console.log(event);
    if (event.target.scrollTop > 80) setScroll(true);
    else setScroll(false);
  };

  const [content, setContent] = useState({});
  const changeHandler = (name) => (e) => {
    setContent({ ...content, [name]: e.target.value });
  };

  return (
    <div className="root-container" onScroll={scrollHandler}>
      <header>
        <nav className={scroll ? "scrolling" : ""}>
          <ul>
            <li>
              <img src={Logo} alt="logo" />
            </li>

            <ul>
              <li onClick={() => clickMenuHandler("about")}>About us</li>
              <li onClick={() => clickMenuHandler("offers")}>Offers</li>
              <li onClick={() => clickMenuHandler("services")}>Services</li>
              <li onClick={() => clickMenuHandler("contact")}>Contact us</li>
            </ul>
          </ul>
        </nav>

        <div
          key={descIndex}
          className="w-25"
          style={{ color: "white", marginTop: "30vh", marginLeft: "10vw" }}
        >
          <h1 className="animate__animated animate__fadeInUp">
            {arrayFeature[descIndex].title}
          </h1>

          <h4 className="animate__animated animate__fadeInUp">
            {arrayFeature[descIndex].desc}{" "}
          </h4>
        </div>
      </header>
      <main>
        <section ref={aboutUsRef} className="row m-0">
          <div className="col-12">
            <h1>About us</h1>
          </div>

          <div className="col-md-6 background-black">
            <h2>
              Our main mission is to support Our customers in the development of
              their IT systems.
              <br />
              <br />
              Our vision is to create a better relationship between customers
              and IT services providers.
              <br />
              <br />
              We keep our promises and are committed to doing business the right
              way.
              <br />
              <br />
              We provide quality products and services that meet our customers
              needs and we encourage innovation to meet challenges.
            </h2>
          </div>

          <div className="col-md-6">
            <img src={About} alt="about" />
          </div>
        </section>
        <section ref={offersRef} className="background-primary row m-0">
          <div className="col-12">
            <h1>Offers</h1>
          </div>

          <div className="col-md-6">
            <img src={Offers} alt="offers" />
          </div>

          <div className="col-md-6 background-black">
            <h2>
              SM Tech Consulting has a good expertise in the domain of web
              development.
              <br />
              <br />
              We help you to transform your ideas and your needs into full web
              applications.
              <br />
              <br />
              Also we manage for you all of your on production softwares.
            </h2>
          </div>
        </section>
        <section ref={servicesRef} className="row m-0">
          <div className="col-12">
            <h1>Services</h1>
          </div>

          <div className="col-md-6 background-black">
            <h2>
              Our expertise allows to offer the best services related to web
              development.
              <br />
              <br />
              We can help you preparing fonctional requirements as well as to
              develop a full application.
              <br />
              <br />
              Our exprimented engineers will be delighted to provide you the
              best services and guide you to make your daily IT activities more
              comfortable.
            </h2>
          </div>

          <div className="col-md-6">
            <img src={Services} alt="services" />
          </div>
        </section>
        <section ref={contactUsRef} className="background-primary row m-0">
          <div className="col-12">
            <h1>Contact us</h1>
          </div>

          <div className="col-md-6">
            <img src={Contact} alt="contact" />
          </div>

          <div className="col-md-6 background-black">
            <div className="contact-form">
              <input
                onChange={changeHandler("name")}
                type="text"
                placeholder=" Your Full Name"
              />
              <input
                onChange={changeHandler("email")}
                type="email"
                placeholder=" Your Email"
              />
              <input
                onChange={changeHandler("subject")}
                type="text"
                placeholder="Object"
              />

              <textarea placeholder="Message..." />
              <button
                clickHandler={() =>
                  (window.location = `mailto:mahmoud.missawi@gmail.com?subject=${encodeURIComponent(
                    content.subject
                  )}&body=${encodeURIComponent(content.body)}`)
                }
              >
                Send message
              </button>
            </div>
          </div>
        </section>
      </main>
      <footer className="d-flex justify-content-center">
        <p>All right reserved SM Tech Consulting® {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default App;
