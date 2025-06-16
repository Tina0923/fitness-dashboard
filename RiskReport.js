import React from "react";
import NavigationBar from "./NavigationBar";

const RiskReport = () => {
  const report = {
    bmi: 24.7,
    bloodPressure: "122/80",
    riskLevel: "Moderate",
    suggestions: [
      "建議增加休息日以避免過度訓練。",
      "保持均衡飲食與適量運動。",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-lg">
      <NavigationBar />
      <h2 className="text-2xl font-bold mb-4">📊 Risk Report</h2>

      <p>BMI: {report.bmi} (Normal)</p>
      <p>Blood Pressure: {report.bloodPressure}</p>
      <p>Risk Level: {report.riskLevel}</p>

      <h3 className="mt-4 font-semibold">Suggestions:</h3>
      <ul className="list-disc list-inside text-gray-700">
        {report.suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default RiskReport;
