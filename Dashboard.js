// src/Dashboard.js
import React from "react";
import { HeartPulse, Dumbbell, CalendarDays } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4">👋 Welcome back, Alex</h1>

      {/* Section 1: Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2">🔥 Today's Burn</h2>
          <p className="text-3xl font-bold text-red-500">472 kcal</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2">❤️ Avg Heart Rate</h2>
          <p className="text-3xl font-bold text-blue-500">87 bpm</p>
        </div>
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <h2 className="text-xl font-semibold mb-2">🕒 Workout Time</h2>
          <p className="text-3xl font-bold text-green-500">42 min</p>
        </div>
      </div>

      {/* Section 2: AI Workout Suggestion */}
      <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
        <h2 className="text-2xl font-bold mb-2">🏋️‍♂️ AI-Suggested Routine</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>5-min warm-up jog</li>
          <li>3x sets of dumbbell squats</li>
          <li>Plank hold: 60s × 3 sets</li>
          <li>15-min cycling (moderate intensity)</li>
        </ul>
      </div>

      {/* Section 3: Navigation Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="bg-indigo-600 text-white p-4 rounded-xl shadow flex flex-col items-center hover:bg-indigo-700 transition">
          <Dumbbell className="w-6 h-6 mb-1" />
          Workout Log
        </button>
        <button className="bg-green-500 text-white p-4 rounded-xl shadow flex flex-col items-center hover:bg-green-600 transition">
          <HeartPulse className="w-6 h-6 mb-1" />
          Health Records
        </button>
        <button className="bg-yellow-500 text-white p-4 rounded-xl shadow flex flex-col items-center hover:bg-yellow-600 transition">
          <CalendarDays className="w-6 h-6 mb-1" />
          Appointment
        </button>
        <button className="bg-gray-600 text-white p-4 rounded-xl shadow flex flex-col items-center hover:bg-gray-700 transition">
          Profile
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
