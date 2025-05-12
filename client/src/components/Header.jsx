import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../utils/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const handleBtn = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };
  return (
    <motion.div
      className="flex  flex-col justify-center items-center text-center my-20"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex items-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p>Best Text to image generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>

      <motion.h1
        className="text-4xl max-w-[300px] sm:text-6xl sm:max-w-[600px] mx-auto mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Turn Text to <span className="text-blue-600">Image , in seconds</span>
      </motion.h1>

      <motion.p
        className="text-center max-w-xl mx-auto mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        unleash your creativity with AI .turn your imagination into visual art
        in seconds just type, and watch the magic
      </motion.p>

      <motion.button
        onClick={handleBtn}
        className="flex sm:text-lg items-center gap-2 bg-black px-6 py-2.5 rounded-full text-white mt-8"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
      >
        Generate Images
        <img src={assets.star_group} alt="" className="w-5" />
      </motion.button>

      <motion.div
        className="flex flex-wrap justify-center items-center gap-2 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        {Array(6)
          .fill("")
          .map((item, index) => (
            <motion.img
              className="rounded-10 hover:scale-105 transition-all duration-700 cursor-pointer max-sm:w-10"
              src={index % 2 == 0 ? assets.sample_img_2 : assets.sample_img_1}
              alt=""
              key={index}
              width={70}
              whileHover={{ scale: 1.1, duration: 0.2 }}
            />
          ))}
      </motion.div>
      <motion.p
        className="mt-2 text-neutral-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        Generated Images from Imager
      </motion.p>
    </motion.div>
  );
};

export default Header;
