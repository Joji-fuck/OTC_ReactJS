import React from "react";
import { motion } from "framer-motion";
import "./HomePage.css";
import OsuButton from "../../assets/images/OsuButton.png";
import Stesha from "../../assets/images/Stesha.png";

const HomePage = () => {
  return (
    <motion.section
      className="registration"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <motion.a
        className="registration-btn"
        href="#"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <img src={OsuButton} alt="Запись" />
      </motion.a>
      <motion.div
        className="registration-right"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <img className="registration-stesha" src={Stesha} alt="Маскот" />
      </motion.div>
    </motion.section>
  );
};

export default HomePage;
