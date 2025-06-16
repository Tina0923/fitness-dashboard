import React from 'react';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './Dashboard';
import Workout from './Workout';
import HealthRecords from './HealthRecords';
import Appointment from './Appointment';
import Profile from './Profile';
import AIInsights from './AIInsights';
import RiskReport from './RiskReport';
import Chat from './Chat';  // 新增引入

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/health-records" element={<HealthRecords />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ai-insights" element={<AIInsights />} />
          <Route path="/risk-report" element={<RiskReport />} />
          <Route path="/chat" element={<Chat />} /> {/* 新增聊天頁路由 */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
