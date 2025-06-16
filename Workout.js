import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

const Workout = () => {
  const [workouts, setWorkouts] = useState([
    { id: 1, name: "Squats", reps: 15 },
    { id: 2, name: "Push-ups", reps: 20 },
  ]);
  const [newWorkout, setNewWorkout] = useState({ name: "", reps: "" });

  const addWorkout = () => {
    if (!newWorkout.name || !newWorkout.reps) return;
    setWorkouts([
      ...workouts,
      { id: Date.now(), name: newWorkout.name, reps: Number(newWorkout.reps) },
    ]);
    setNewWorkout({ name: "", reps: "" });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <NavigationBar />
      <h2 className="text-2xl font-bold mb-4">🏋️‍♂️ Workout Page</h2>

      <ul className="mb-4">
        {workouts.map((w) => (
          <li key={w.id}>
            {w.name} - {w.reps} reps
          </li>
        ))}
      </ul>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Workout Name"
          value={newWorkout.name}
          onChange={(e) => setNewWorkout({ ...newWorkout, name: e.target.value })}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Reps"
          value={newWorkout.reps}
          onChange={(e) => setNewWorkout({ ...newWorkout, reps: e.target.value })}
          className="border p-2 rounded w-24"
        />
        <button
          onClick={addWorkout}
          className="bg-indigo-600 text-white px-4 rounded hover:bg-indigo-700"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Workout;
