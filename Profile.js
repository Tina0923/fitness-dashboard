import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "Alex",
    email: "alex@example.com",
    age: 28,
  });

  const handleChange = (field, value) => {
    setProfile({ ...profile, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-md">
      <NavigationBar />
      <h2 className="text-2xl font-bold mb-4">👤 Profile</h2>

      <div className="flex flex-col gap-4">
        <label>
          Name:
          <input
            type="text"
            value={profile.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={profile.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </label>

        <label>
          Age:
          <input
            type="number"
            value={profile.age}
            onChange={(e) => handleChange("age", e.target.value)}
            className="border p-2 rounded w-full"
          />
        </label>
      </div>
    </div>
  );
};

export default Profile;
