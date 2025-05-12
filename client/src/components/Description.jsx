import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Description = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-24 p-6 md:px-28 font-semibold"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl  font-semibold sm:text-4xl">Create AI Images</h1>
      <p className="text-lg text-gray-600 mb-8">
        Turn your imagination into visuals
      </p>

      <div className="flex flex-col md:flex-row gap-5  md:gap-15 items-center">
        <img
          src={assets.sample_img_1}
          className="w-80 xl:w-96 rounded-lg"
          alt=""
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4 sm:text-5xl">
            Introducing the AI-Power Text to Image Generator
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Easily bring your ideas to life with our free AI image generator.
            whether you need stunning visuals or unique imaginary, our tool
            transform your text into a eye-catching images with just a few
            clicks, imagine it describe it and watch it come to life instantly
          </p>
          <p className="text-lg text-gray-600">
            Simply type in a text prompt, and our cutting edge AI will generate
            high quality images in seconds. from product visuals to character
            designs and portraits, even concepts that don't exist can be
            Visualized ffortlessly.Powered by advanced ai technology, the
            creative possible to the limitless!
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Description;
