// src/NavigationBar.js
import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="bg-white shadow p-4 flex justify-between items-center mb-6">
      <h1 className="text-xl font-bold text-gray-700">🏋️‍♀️ Smart Gym</h1>
      <Link
        to="/"
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
      >
        回到首頁
      </Link>
    </div>
  );
};

export default NavigationBar;
