import { createContext, useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { data, useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credits, setCredits] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const nav = useNavigate();

  const loadCreditsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/credits", {
        headers: { token: token },
      });
      if (data.success) {
        setCredits(data.credits);
        console.log(credits);
        setUser(data.user.name);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/image/generate-image",
        { userId: user._id, prompt },
        {
          headers: {
            token,
          },
        }
      );
      if (data.success) {
        loadCreditsData();
        return data.resultImage;
      } else {
        toast.error(data.message);
        loadCreditsData();
        if (data.creditBalance === 0) {
          toast.error("You have no credits left");
          nav("/buy");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    toast.success("Logged Out Successfully");
  };
  useEffect(() => {
    if (token === true) {
      loadCreditsData();
    }
  }, [token]);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credits,
    setCredits,
    loadCreditsData,
    logout,
    generateImage,
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
