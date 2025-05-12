import React from "react";
import { assets, plans } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../utils/AppContext";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
const BuyCredit = () => {
  const { user, backendUrl, loadCreditsData, token, setShowLogin } =
    useContext(AppContext);
  const navigate = useNavigate();
  const initPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response);
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
        return;
      }
      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razorpay",
        { planId },
        {
          headers: {
            token,
          },
        }
      );
      if (data.success) {
        initPay(data.order);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  return (
    <motion.div
      className="min-h-[80vh] text-center pt-14 mb-10 "
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6">
        Our Plans
      </button>
      <h1 className="text-center text-3xl font-medium mb-6 sm:mb-10">
        Choose the plan
      </h1>
      <div className="flex flex-wrap gap-6 text-left items-center justify-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500"
          >
            <img src={assets.lock_icon} alt="" width={40} />
            <p className="mt-3 mb-1 font-semibold ">{plan.id}</p>
            <p className="text-sm">{plan.desc}</p>
            <p className="mt-6 ">
              <span className="text-3xl font-semibold">{plan.price}$</span> /
              {plan.credits} Credits
            </p>
            <button
              onClick={() => paymentRazorpay(plan.id)}
              className="w-full bg-gray-800 text-white mt-8 text-sm rounded-lg py-2.5 min-w-52"
            >
              {user ? "Get Credits" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
