import React, { useContext } from "react";
import Home from "./pages/Home";
import BuyCredit from "./pages/BuyCredit";
import Result from "./pages/Result";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./utils/AppContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { showLogin } = useContext(AppContext);
  return (
    <div
      className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen 
      bg-gradient-to-b
      from-teal-50
      to-orange-50"
    >
      <Toaster position="top-center" reverseOrder={false} />

      <NavBar></NavBar>
      {showLogin && <Login></Login>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
