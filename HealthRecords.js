import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

const HealthRecords = () => {
  const [weights, setWeights] = useState([
    { id: 1, date: "2025-06-01", weight: 70 },
    { id: 2, date: "2025-06-10", weight: 69.5 },
  ]);
  const [newWeight, setNewWeight] = useState("");

  const addWeight = () => {
    if (!newWeight) return;
    setWeights([
      ...weights,
      { id: Date.now(), date: new Date().toISOString().slice(0, 10), weight: Number(newWeight) },
    ]);
    setNewWeight("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <NavigationBar />
      <h2 className="text-2xl font-bold mb-4">❤️ Health Records</h2>

      <ul className="mb-4">
        {weights.map((w) => (
          <li key={w.id}>
            {w.date}: {w.weight} kg
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        <input
          type="number"
          step="0.1"
          placeholder="New weight (kg)"
          value={newWeight}
          onChange={(e) => setNewWeight(e.target.value)}
          className="border p-2 rounded w-36"
        />
        <button
          onClick={addWeight}
          className="bg-green-600 text-white px-4 rounded hover:bg-green-700"
        >
          Add Weight
        </button>
      </div>
    </div>
  );
};

export default HealthRecords;
