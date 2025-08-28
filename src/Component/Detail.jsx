import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaServer, 
  FaDatabase, 
  FaNetworkWired, 
  FaShieldAlt, 
  FaCloud,
  FaRocket,
  FaStar,
  FaGlobe,
  FaBrain,
  FaLock,
  FaBolt,
  FaCog,
  FaBell,
  FaUser,
  FaSearch,
  FaChartLine,
  FaCreditCard,
  FaQuestionCircle,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaCogs,
  FaMemory,
  FaHdd,
  FaUpload
} from 'react-icons/fa';

export default function PoeageCloudDashboard() {
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [sidebarOpen, setSidebarOpen] = useState(screenWidth >= 768);
  const [activeService, setActiveService] = useState('dashboard');
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setScreenWidth(newWidth);
      // Auto-close sidebar on small screens, keep open on medium and larger
      if (newWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mock data for dashboard
  const serviceStats = {
    compute: { usage: 45, instances: 12, health: 'good' },
    storage: { usage: 78, buckets: 8, health: 'warning' },
    database: { usage: 32, instances: 5, health: 'good' },
    networking: { usage: 22, vpcs: 3, health: 'good' },
  };

  const recentActivities = [
    { service: 'Nebula Compute', action: 'Instance created', time: '2 minutes ago' },
    { service: 'Stellar Storage', action: 'Bucket configured', time: '15 minutes ago' },
    { service: 'QuantumDB', action: 'Backup completed', time: '1 hour ago' },
    { service: 'Cosmic Lambda', action: 'Function deployed', time: '3 hours ago' },
  ];

  const costData = {
    current: 1245.67,
    forecast: 1876.43,
    services: [
      { name: 'Compute', cost: 567.32 },
      { name: 'Storage', cost: 342.18 },
      { name: 'Database', cost: 198.45 },
      { name: 'Networking', cost: 137.72 },
    ]
  };

  return (
    <div className="flex h-screen bg-cosmic-dark text-cosmic-light overflow-hidden">
      {/* Sidebar - Hidden on small screens, shown on medium and up */}
      {screenWidth >= 768 && (
        <motion.div 
          initial={{ x: -300 }}
          animate={{ x: sidebarOpen ? 0 : -300 }}
          transition={{ type: 'spring', damping: 25 }}
          className="w-64 bg-cosmic-darker mt-20 border-r border-cosmic-border flex-shrink-0 overflow-y-auto z-20 fixed h-full md:relative md:left-0"
        >
          <div className="p-4 border-b border-cosmic-border">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cosmic-teal to-cosmic-blue flex items-center justify-center mr-2">
                <FaRocket className="text-white text-sm" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cosmic-teal to-cosmic-blue bg-clip-text text-transparent">
                Poeage Cloud
              </h1>
            </div>
          </div>

          <nav className="p-4">
            <div className="mb-6">
              <h2 className="text-xs uppercase tracking-wider text-cosmic-light/60 mb-3">Services</h2>
              <ul className="space-y-1">
                {[
                  { id: 'dashboard', name: 'Dashboard', icon: FaChartLine },
                  { id: 'compute', name: 'Compute', icon: FaServer },
                  { id: 'storage', name: 'Storage', icon: FaDatabase },
                  { id: 'database', name: 'Database', icon: FaCogs },
                  { id: 'networking', name: 'Networking', icon: FaGlobe },
                  { id: 'security', name: 'Security', icon: FaShieldAlt },
                  { id: 'ai-ml', name: 'AI & Machine Learning', icon: FaBrain },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setActiveService(item.id)}
                      className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeService === item.id
                          ? 'bg-cosmic-blue/20 text-cosmic-teal border-l-2 border-cosmic-teal'
                          : 'text-cosmic-light/80 hover:bg-cosmic-dark'
                      }`}
                    >
                      <item.icon className="mr-3 text-lg" />
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs uppercase tracking-wider text-cosmic-light/60 mb-3">Tools & Settings</h2>
              <ul className="space-y-1">
                {[
                  { id: 'billing', name: 'Billing & Cost', icon: FaCreditCard },
                  { id: 'support', name: 'Support', icon: FaQuestionCircle },
                  { id: 'settings', name: 'Settings', icon: FaCog },
                ].map((item) => (
                  <li key={item.id}>
                    <button className="w-full flex items-center px-3 py-2 rounded-lg text-sm text-cosmic-light/80 hover:bg-cosmic-dark transition-colors">
                      <item.icon className="mr-3 text-lg" />
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col mt-20 overflow-hidden">
        {/* Header */}
        <header className="bg-cosmic-darker border-b border-cosmic-border p-4 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-1 rounded-lg text-cosmic-light/70 hover:text-cosmic-teal mr-4"
            >
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            <div className="relative w-48 md:w-64">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cosmic-light/50" />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full bg-cosmic-dark border border-cosmic-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cosmic-teal/50"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="relative p-2 rounded-lg text-cosmic-light/70 hover:text-cosmic-teal hover:bg-cosmic-dark"
            >
              <FaBell />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="relative">
              <button 
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-cosmic-dark"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cosmic-purple to-cosmic-pink flex items-center justify-center">
                  <FaUser className="text-white text-sm" />
                </div>
                <span className="text-sm hidden md:block">admin@poeage.com</span>
                <FaChevronDown className="text-xs" />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-cosmic-darker border border-cosmic-border rounded-lg shadow-lg py-1 z-30">
                  <button className="flex items-center px-4 py-2 text-sm text-cosmic-light/80 hover:bg-cosmic-dark w-full text-left">
                    <FaUser className="mr-3" /> Profile
                  </button>
                  <button className="flex items-center px-4 py-2 text-sm text-cosmic-light/80 hover:bg-cosmic-dark w-full text-left">
                    <FaCog className="mr-3" /> Settings
                  </button>
                  <hr className="my-1 border-cosmic-border" />
                  <button className="flex items-center px-4 py-2 text-sm text-red-400 hover:bg-cosmic-dark w-full text-left">
                    <FaSignOutAlt className="mr-3" /> Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-xl md:text-2xl font-bold text-cosmic-light">Dashboard</h1>
            <p className="text-cosmic-light/60 text-sm md:text-base">Welcome to Poeage Cloud Console</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {[
              { title: 'Compute Instances', value: serviceStats.compute.instances, icon: FaServer, color: 'text-cosmic-purple' },
              { title: 'Storage Buckets', value: serviceStats.storage.buckets, icon: FaDatabase, color: 'text-cosmic-blue' },
              { title: 'Database Instances', value: serviceStats.database.instances, icon: FaCogs, color: 'text-cosmic-teal' },
              { title: 'Virtual Networks', value: serviceStats.networking.vpcs, icon: FaGlobe, color: 'text-cosmic-green' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-cosmic-darker border border-cosmic-border rounded-xl p-4 md:p-5"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-cosmic-light/60 text-xs md:text-sm">{stat.title}</p>
                    <h3 className="text-xl md:text-2xl font-bold text-cosmic-light mt-1">{stat.value}</h3>
                  </div>
                  <div className={`p-2 md:p-3 rounded-lg bg-cosmic-dark ${stat.color}`}>
                    <stat.icon className="text-lg" />
                  </div>
                </div>
                <div className="mt-3 md:mt-4">
                  <div className="w-full bg-cosmic-dark rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-cosmic-teal to-cosmic-blue" 
                      style={{ width: `${serviceStats[Object.keys(serviceStats)[index]].usage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-cosmic-light/60 mt-2">{serviceStats[Object.keys(serviceStats)[index]].usage}% Utilization</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Left column */}
            <div className="md:col-span-2 space-y-4 md:space-y-6">
              {/* Cost Overview */}
              <div className="bg-cosmic-darker border border-cosmic-border rounded-xl p-4 md:p-5">
                <div className="flex justify-between items-center mb-4 md:mb-5">
                  <h2 className="text-base md:text-lg font-semibold text-cosmic-light">Cost Overview</h2>
                  <button className="text-xs md:text-sm text-cosmic-teal hover:underline">View detailed report</button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="bg-cosmic-dark border border-cosmic-border rounded-lg p-3 md:p-4">
                    <p className="text-cosmic-light/60 text-xs md:text-sm">Current Spend</p>
                    <h3 className="text-lg md:text-xl font-bold text-cosmic-light">${costData.current.toFixed(2)}</h3>
                  </div>
                  <div className="bg-cosmic-dark border border-cosmic-border rounded-lg p-3 md:p-4">
                    <p className="text-cosmic-light/60 text-xs md:text-sm">Forecasted</p>
                    <h3 className="text-lg md:text-xl font-bold text-cosmic-light">${costData.forecast.toFixed(2)}</h3>
                  </div>
                  <div className="bg-cosmic-dark border border-cosmic-border rounded-lg p-3 md:p-4">
                    <p className="text-cosmic-light/60 text-xs md:text-sm">Budget</p>
                    <h3 className="text-lg md:text-xl font-bold text-cosmic-light">$2,000.00</h3>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-cosmic-light/60 text-xs md:text-sm mb-2 md:mb-3">Cost by Service</h4>
                  <div className="space-y-2 md:space-y-3">
                    {costData.services.map((service, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-xs md:text-sm mb-1">
                          <span className="text-cosmic-light">{service.name}</span>
                          <span className="text-cosmic-light">${service.cost.toFixed(2)}</span>
                        </div>
                        <div className="w-full bg-cosmic-dark rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-gradient-to-r from-cosmic-purple to-cosmic-pink" 
                            style={{ width: `${(service.cost / costData.current) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Health */}
              <div className="bg-cosmic-darker border border-cosmic-border rounded-xl p-4 md:p-5">
                <h2 className="text-base md:text-lg font-semibold text-cosmic-light mb-4 md:mb-5">Service Health</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
                  {Object.entries(serviceStats).map(([service, data], index) => (
                    <div key={index} className="bg-cosmic-dark border border-cosmic-border rounded-lg p-3 md:p-4 text-center">
                      <div className={`inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full mb-2 md:mb-3 ${
                        data.health === 'good' ? 'bg-green-500/20 text-green-400' : 
                        data.health === 'warning' ? 'bg-yellow-500/20 text-yellow-400' : 
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {data.health === 'good' ? <FaBolt /> : 
                         data.health === 'warning' ? <FaGlobe /> : 
                         <FaServer />}
                      </div>
                      <h3 className="font-semibold text-cosmic-light text-sm md:text-base capitalize">{service}</h3>
                      <p className={`text-xs ${
                        data.health === 'good' ? 'text-green-400' : 
                        data.health === 'warning' ? 'text-yellow-400' : 
                        'text-red-400'
                      }`}>
                        {data.health === 'good' ? 'Operational' : 
                         data.health === 'warning' ? 'Degraded' : 
                         'Outage'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-4 md:space-y-6">
              {/* Recent Activity */}
              <div className="bg-cosmic-darker border border-cosmic-border rounded-xl p-4 md:p-5">
                <h2 className="text-base md:text-lg font-semibold text-cosmic-light mb-4 md:mb-5">Recent Activity</h2>
                <div className="space-y-3 md:space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex">
                      <div className="relative">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-cosmic-blue/20 flex items-center justify-center text-cosmic-blue">
                          <FaCloud className="text-xs md:text-sm" />
                        </div>
                        {index < recentActivities.length - 1 && (
                          <div className="absolute left-4 top-8 md:left-5 md:top-10 w-0.5 h-4 md:h-6 bg-cosmic-border"></div>
                        )}
                      </div>
                      <div className="ml-3 md:ml-4">
                        <p className="text-xs md:text-sm font-medium text-cosmic-light">{activity.action}</p>
                        <p className="text-xs text-cosmic-light/60">{activity.service}</p>
                        <p className="text-xs text-cosmic-light/40 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-3 md:mt-4 text-xs md:text-sm text-cosmic-teal hover:underline text-center">
                  View all activity
                </button>
              </div>

              {/* Quick Actions */}
              <div className="bg-cosmic-darker border border-cosmic-border rounded-xl p-4 md:p-5">
                <h2 className="text-base md:text-lg font-semibold text-cosmic-light mb-4 md:mb-5">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {[
                    { label: 'Launch Instance', icon: FaServer, color: 'from-cosmic-purple to-cosmic-pink' },
                    { label: 'Create Bucket', icon: FaDatabase, color: 'from-cosmic-blue to-cosmic-teal' },
                    { label: 'Deploy Function', icon: FaCogs, color: 'from-cosmic-green to-cosmic-blue' },
                    { label: 'Set Up VPN', icon: FaGlobe, color: 'from-cosmic-teal to-cosmic-green' },
                  ].map((action, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-2 md:p-3 rounded-lg bg-gradient-to-r ${action.color} text-white flex flex-col items-center justify-center space-y-1 md:space-y-2`}
                    >
                      <action.icon className="text-base md:text-lg" />
                      <span className="text-xs text-center">{action.label}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom styles */}
      <style jsx>{`
        :root {
          --cosmic-deep: #0a0a1a;
          --cosmic-dark: #0f0f23;
          --cosmic-darker: #070711;
          --cosmic-black: #05050c;
          --cosmic-border: #1e2a3a;
          --cosmic-light: #cbd5e1;
          --cosmic-teal: #5eead4;
          --cosmic-blue: #38bdf8;
          --cosmic-purple: #8b5cf6;
          --cosmic-pink: #ec4899;
          --cosmic-orange: #fb923c;
          --cosmic-yellow: #fde047;
          --cosmic-green: #4ade80;
          --cosmic-star: #ffffff;
        }
        
        .bg-cosmic-deep { background-color: var(--cosmic-deep); }
        .bg-cosmic-dark { background-color: var(--cosmic-dark); }
        .bg-cosmic-darker { background-color: var(--cosmic-darker); }
        .bg-cosmic-black { background-color: var(--cosmic-black); }
        .border-cosmic-border { border-color: var(--cosmic-border); }
        .text-cosmic-light { color: var(--cosmic-light); }
        .text-cosmic-teal { color: var(--cosmic-teal); }
        .text-cosmic-blue { color: var(--cosmic-blue); }
        .text-cosmic-purple { color: var(--cosmic-purple); }
        .text-cosmic-pink { color: var(--cosmic-pink); }
        .text-cosmic-orange { color: var(--cosmic-orange); }
        .text-cosmic-yellow { color: var(--cosmic-yellow); }
        .text-cosmic-green { color: var(--cosmic-green); }
        
        .bg-cosmic-dark\\/50 { background-color: rgba(15, 15, 35, 0.5); }
        .bg-cosmic-dark\\/80 { background-color: rgba(15, 15, 35, 0.8); }
        .bg-cosmic-black\\/50 { background-color: rgba(5, 5, 12, 0.5); }
        
        .from-cosmic-deep { --tw-gradient-from: var(--cosmic-deep); }
        .via-cosmic-dark { --tw-gradient-via: var(--cosmic-dark); }
        .to-cosmic-black { --tw-gradient-to: var(--cosmic-black); }
        
        .from-cosmic-purple { --tw-gradient-from: var(--cosmic-purple); }
        .to-cosmic-pink { --tw-gradient-to: var(--cosmic-pink); }
        .to-cosmic-teal { --tw-gradient-to: var(--cosmic-teal); }
        .to-cosmic-blue { --tw-gradient-to: var(--cosmic-blue); }
        .to-cosmic-green { --tw-gradient-to: var(--cosmic-green); }
        
        .from-cosmic-purple\\/30 { --tw-gradient-from: rgba(139, 92, 246, 0.3); }
        .via-cosmic-dark\\/70 { --tw-gradient-via: rgba(15, 15, 35, 0.7); }
        .to-cosmic-blue\\/30 { --tw-gradient-to: rgba(56, 189, 248, 0.3); }
      `}</style>
    </div>
  );
}