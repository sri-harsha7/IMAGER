import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../utils/AppContext";
import { useNavigate } from "react-router-dom";

const GenerateBtn = () => {
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
      className="pb-16 text-center"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">
        See the Magic . Try Now
      </h1>
      <button
        onClick={handleBtn}
        className="inline-flex items-center gap-2 bg-black px-12 py-3 rounded-full text-white cursor-pointer hover:scale-105 transition-all duration-400"
      >
        Generate Images
        <img src={assets.star_group} alt="" className="h-6" />
      </button>
    </motion.div>
  );
};

export default GenerateBtn;
