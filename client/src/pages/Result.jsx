import React, { useState, useContext } from "react";

import { assets } from "../assets/assets";
import { motion } from "motion/react";
import { AppContext } from "../utils/AppContext";
import toast from "react-hot-toast";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const { generateImage } = useContext(AppContext);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      if (input) {
        const image = await generateImage(input);
        if (image) {
          setIsImageLoaded(true);
          setImage(image);
        }
      }
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <motion.form
      action=""
      className=" flex flex-col items-center justify-center"
      onSubmit={onSubmitHandler}
      initial={{ opacity: 0.2, y: 100 }}
      transititon={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div>
        <div className="relative">
          <img src={image} alt="" className="max-w-sm rounded-lg" />
          <span
            className={`absolute bottom-0 left-0 h-1 bg-blue-500  ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            }`}
          ></span>
        </div>

        <p className={!loading ? "hidden" : ""}> Loading ....</p>
      </div>
      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 mt-10 rounded-full  text-sm p-0.5  placeholder-color">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Describe what you want to generate "
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20"
          />
          <button className="flex items-center gap-2 bg-zinc-900 px-10 py-3 rounded-full text-white cursor-pointer hover:scale-105 transition-all sm:px-16">
            Generate
          </button>
        </div>
      )}
      {isImageLoaded && (
        <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
          <p
            onClick={() => setIsImageLoaded(false)}
            className=" bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer"
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
};

export default Result;
