import React from "react";
import { stepsData } from "../assets/assets";
import { motion } from "motion/react";

const Steps = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-32"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      q
    >
      <h1 className="text-3xl font-semibold mb-2 sm:text-4xl ">How it Works</h1>
      <p className="text-lg text-gray-600 mb-8 ">
        Transform your text into stunning images
      </p>
      <div className="space-y-8 w-full  max-w-3xl text-sm">
        {stepsData.map((step, index) => {
          return (
            <div
              key={index}
              className="flex flex-wrap items-center gap-4 p-5 px-8 bg-white/20 shadow-md  border cursor-pointer hover:scale-105 transition-all duration-700 rounded-lg"
            >
              <img src={step.icon} width={"50px"} alt="" />
              <div>
                <h2 className="text-xl font-medium  sm:text-3xl">
                  {step.title}
                </h2>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Steps;
