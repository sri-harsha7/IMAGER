import React from "react";
import { assets, testimonialsData } from "../assets/assets";
import { motion } from "motion/react";

const Testimonial = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center my-20 py-12"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl  font-semibold sm:text-4xl">
        Customer Testimonials
      </h1>
      <p className="text-lg text-gray-500 mb-12">What our Users Are Saying</p>
      <div className="flex flex-wrap gap-6">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/20 p-12 rounded-lg shadow-md border w-90 m-auto cursor-pointer hover:scale-[1.02] transition-all duration-200"
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt=""
                className="rounded-full w-14"
              />
              <h2 className="text-lg font-medium mt-3">{testimonial.name}</h2>
              <p className="text-gray-600 mb-4">{testimonial.role}</p>
              <div className="flex mb-4">
                {Array(testimonial.stars)
                  .fill("")
                  .map((item, index) => (
                    <img
                      key={index}
                      src={assets.rating_star}
                      alt=""
                      className="w-5"
                    />
                  ))}
              </div>
              <p className="text-center text-sm text-gray-600">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonial;
