import React, { useState } from "react";
import { HiMenuAlt4, HiX, Hix } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { images } from "../../constants";

const Navbar = () => {
  //   creating the settoggle methode
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {/* here we are creating a array of the li elements for the navbar and
        passing them one by one in a a tag as item by mapping */}
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div></div>

            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      {/* side navbar */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          //motion is package by framer we want a div so motion.div
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            {["home", "about", "work", "skills", "contact"].map((item) => (
              <li key={item}>
                <a href={`#${item}`} onClick={() => setToggle(true)}>
                  {item}
                </a>
              </li>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
