import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../utils/AppContext";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [isLogin, setIsLogin] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (isLogin === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
          toast.success("Logged In Successfully");
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (data.success === true) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
          toast.success("Registered Successfully");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form
        onSubmit={onSubmitHandler}
        action=""
        className=" relative bg-white p-10 rounded-xl text-slate-500"
      >
        <h1 className="text-center text-2xl text- neutral-700 font-medium">
          {isLogin}
        </h1>
        <p className="text-sm">
          Welcome Back ! Please <span>{isLogin}</span> to Continue
        </p>
        {isLogin === "Sign Up" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img
              src={assets.profile_icon}
              alt=""
              width={30}
              className="text-black"
            />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Full Name"
              required
              className="outline-none text-black"
            />
          </div>
        )}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <img
            src={assets.email_icon}
            alt=""
            width={15}
            className="text-black"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            required
            className="outline-none text-black"
          />
        </div>
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
          <img
            src={assets.lock_icon}
            alt=""
            width={15}
            className="text-black"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            required
            viewable
            className="outline-none text-black"
          />
        </div>
        <p className="text-sm my-4 text-blue-600">Forget Password</p>
        <button
          type="submit"
          className="bg-black text-white rounded-full w-full py-2"
        >
          {isLogin === "Login" ? "Login" : "Sign Up"}
        </button>

        {isLogin === "Login" ? (
          <p className="mt-5 text-center">
            Don't have an account ?
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setIsLogin("Sign Up")}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account ?
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setIsLogin("Login")}
            >
              Login
            </span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt=""
          className="absolute top-5 right-5 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Login;
