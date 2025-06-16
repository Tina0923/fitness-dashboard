import React, { useState, useEffect } from 'react';
import { 
  HeartPulse, 
  Dumbbell, 
  CalendarDays, 
  BrainCircuit, 
  FileHeart, 
  User2,
  Activity,
  Target,
  Clock,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Flame,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const StatCard = ({ title, value, icon: Icon, color, trend, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          {trend && (
            <div className="flex items-center gap-1 text-green-400 text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>{trend}</span>
            </div>
          )}
        </div>
        <h3 className="text-gray-300 text-sm font-medium mb-2">{title}</h3>
        <p className="text-3xl font-bold text-white">{value}</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const quickActions = [
    { 
      name: "Workout Log", 
      icon: Dumbbell, 
      color: "from-indigo-500 to-purple-600",
      description: "Track your exercises",
      to: "/workout"
    },
    { 
      name: "Health Records", 
      icon: HeartPulse, 
      color: "from-green-500 to-emerald-600",
      description: "Monitor vital signs",
      to: "/health-records"
    },
    { 
      name: "Appointment", 
      icon: CalendarDays, 
      color: "from-yellow-500 to-orange-500",
      description: "Schedule sessions",
      to: "/appointment"
    },
    { 
      name: "Profile", 
      icon: User2, 
      color: "from-gray-500 to-slate-600",
      description: "Manage account",
      to: "/profile"
    },
    { 
      name: "AI Insights", 
      icon: BrainCircuit, 
      color: "from-pink-500 to-rose-600",
      description: "Smart recommendations",
      to: "/ai-insights"
    },
    { 
      name: "Risk Report", 
      icon: FileHeart, 
      color: "from-cyan-500 to-blue-600",
      description: "Health analysis",
      to: "/risk-report"
    },
	{ 
    name: "Chat with Llama3", 
    icon: BrainCircuit, // 你也可以換成其他你喜歡的 icon
    color: "from-indigo-500 to-blue-600",
    description: "Ask AI questions",
    to: "/chat"
	}
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
              Welcome back, Alex! 👋
            </h1>
            <p className="text-gray-400">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-white">
              {currentTime.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit'
              })}
            </p>
            <p className="text-gray-400 text-sm">Local Time</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Today's Burn"
          value="472 kcal"
          icon={Flame}
          color="from-red-500 to-pink-600"
          trend="+12%"
          delay={100}
        />
        <StatCard
          title="Avg Heart Rate"
          value="87 bpm"
          icon={Activity}
          color="from-blue-500 to-cyan-600"
          trend="+5%"
          delay={200}
        />
        <StatCard
          title="Workout Time"
          value="42 min"
          icon={Clock}
          color="from-green-500 to-emerald-600"
          trend="+8%"
          delay={300}
        />
      </div>

      {/* AI Workout Suggestion */}
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 mb-8 hover:bg-white/15 transition-all duration-300">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">AI-Suggested Routine</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "5-min warm-up jog",
            "3× sets of dumbbell squats",
            "Plank hold: 60s × 3 sets",
            "15-min cycling (moderate intensity)"
          ].map((exercise, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="text-gray-200">{exercise}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Health Alerts & Risk Assessment */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Health Alerts */}
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-xl rounded-2xl p-6 border border-red-500/30">
          <div className="flex items-center gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <h2 className="text-xl font-bold text-red-300">Health Alerts</h2>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-red-500/10 rounded-lg">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
              <span className="text-red-200">High heart rate detected during last workout</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-red-500/10 rounded-lg">
              <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
              <span className="text-red-200">Low sleep quality detected (avg: 4.2 hrs)</span>
            </div>
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl p-6 border border-blue-500/30">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-bold text-blue-300">Risk Assessment</h2>
          </div>
          <div className="space-y-3">
            <p className="text-blue-200">AI has detected moderate risk of overtraining. Suggested 1 rest day.</p>
            <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg">
              <span className="text-blue-200">BMI: 24.7</span>
              <span className="text-green-400 font-semibold">Normal</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-blue-500/10 rounded-lg">
              <span className="text-blue-200">Blood Pressure</span>
              <span className="text-green-400 font-semibold">122/80</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickActions.map((action, index) => (
            <Link
              key={action.name}
              to={action.to}
              className={`group bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl transform ${
                index % 2 === 0 ? 'hover:rotate-1' : 'hover:-rotate-1'
              }`}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${action.color} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform mx-auto`}>
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{action.name}</h3>
              <p className="text-gray-400 text-xs">{action.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;