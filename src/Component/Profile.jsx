import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from '../Asset/3.png';
import { FaUserCircle, FaBell, FaCog, FaChartLine, FaWallet, FaUsers, FaMapMarkerAlt, FaTimes, FaSignInAlt, FaUserPlus, FaEdit, FaSave, FaLock, FaShieldAlt, FaDesktop, FaHistory, FaCrown, FaEye, FaPen } from "react-icons/fa";

export default function AwsProfessionalDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [region, setRegion] = useState("us-east-1");
  const [isMdUp, setIsMdUp] = useState(window.innerWidth >= 768);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("profile"); // New state for profile tabs
  const [user, setUser] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    awsId: "",
    avatar: Logo,
    password: "••••••••",
    accessLevel: "admin", // New field
    joinDate: "2023-05-15", // New field
    lastLogin: "2024-01-20 14:30", // New field
    mfaEnabled: true, // New field
  });

  const [editUser, setEditUser] = useState({ ...user });
  const [changePassword, setChangePassword] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  // New state for account access
  const [accessLevels] = useState([
    { value: "admin", label: "Administrator", icon: <FaCrown />, description: "Full access to all resources and settings" },
    { value: "editor", label: "Editor", icon: <FaPen />, description: "Can create and modify resources but cannot manage users" },
    { value: "viewer", label: "Viewer", icon: <FaEye />, description: "Read-only access to resources" }
  ]);

  // New state for active sessions
  const [activeSessions] = useState([
    { id: 1, device: "Windows Chrome", location: "New York, USA", lastActive: "2 hours ago", current: true },
    { id: 2, device: "MacOS Safari", location: "California, USA", lastActive: "5 days ago", current: false },
    { id: 3, device: "Android Chrome", location: "London, UK", lastActive: "2 weeks ago", current: false }
  ]);

  // New state for activity log
  const [activityLog] = useState([
    { id: 1, action: "Login", resource: "Dashboard", time: "2 hours ago", status: "Success" },
    { id: 2, action: "Created", resource: "EC2 Instance", time: "Yesterday", status: "Success" },
    { id: 3, action: "Modified", resource: "Security Group", time: "3 days ago", status: "Success" },
    { id: 4, action: "Failed Login", resource: "Dashboard", time: "1 week ago", status: "Failed" }
  ]);

  const regions = ["us-east-1", "us-west-2", "eu-west-1", "ap-south-1"];

  const sidebarItems = [
    { icon: <FaChartLine />, label: "Overview" },
    { icon: <FaCog />, label: "Services" },
    { icon: <FaWallet />, label: "Billing" },
    { icon: <FaUsers />, label: "IAM & Users" },
    { icon: <FaMapMarkerAlt />, label: "Regions" },
    { icon: <FaCog />, label: "Settings" },
  ];

  useEffect(() => {
    const handleResize = () => {
      const mdUp = window.innerWidth >= 768;
      setIsMdUp(mdUp);
      if (mdUp) setSidebarOpen(true);
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    const userData = {
      name: "Poeage",
      title: "PWS Cloud Architect",
      email: "info@poeage.com",
      phone: "+91 805-688-9616",
      awsId: "PWS-123456",
      avatar: Logo,
      password: "••••••••",
      accessLevel: "admin",
      joinDate: "2023-05-15",
      lastLogin: new Date().toLocaleString(),
      mfaEnabled: true,
    };
    setUser(userData);
    setEditUser(userData);
    setAuthModalOpen(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    const userData = {
      name: "Poeage",
      title: "PWS Cloud Architect",
      email: "info@poeage.com",
      phone: "+91 805-688-9616",
      awsId: "PWS-123456",
      avatar: Logo,
      password: "••••••••",
      accessLevel: "admin",
      joinDate: new Date().toISOString().split('T')[0],
      lastLogin: new Date().toLocaleString(),
      mfaEnabled: true,
    };
    setUser(userData);
    setEditUser(userData);
    setAuthModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({
      name: "",
      title: "",
      email: "",
      phone: "",
      awsId: "",
      avatar: Logo,
      password: "••••••••",
      accessLevel: "admin",
      joinDate: "2023-05-15",
      lastLogin: "2024-01-20 14:30",
      mfaEnabled: true,
    });
    setProfileOpen(false);
    setIsEditing(false);
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      setUser({ ...editUser });
    } else {
      // Reset edit form to current user data
      setEditUser({ ...user });
    }
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditUser(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setChangePassword(prev => ({ ...prev, [name]: value }));
  };

  const savePasswordChange = () => {
    // Validate passwords
    if (changePassword.new !== changePassword.confirm) {
      alert("New passwords don't match!");
      return;
    }
    
    // In a real app, you would verify current password with backend
    alert("Password changed successfully!");
    setChangePassword({ current: "", new: "", confirm: "" });
  };

  // New function to toggle MFA
  const toggleMFA = () => {
    setUser(prev => ({ ...prev, mfaEnabled: !prev.mfaEnabled }));
    setEditUser(prev => ({ ...prev, mfaEnabled: !prev.mfaEnabled }));
  };

  // New function to revoke a session
  const revokeSession = (sessionId) => {
    alert(`Session ${sessionId} revoked successfully!`);
  };

  return (
    <div className="min-h-screen bg-black text-white md:mt-16 mt-16">
      <div className="flex">
        {/* Sidebar - Always visible on medium screens and up */}
        <AnimatePresence>
          {(sidebarOpen || isMdUp) && isLoggedIn && (
            <motion.aside
              initial={!isMdUp ? { x: -300 } : false}
              animate={!isMdUp ? { x: 0 } : false}
              exit={!isMdUp ? { x: -300 } : false}
              transition={{ type: "spring" }}
              className={`${isMdUp ? "relative" : "fixed"} z-40 top-0 left-0 w-64 bg-black border-r border-gray-700 p-4 min-h-screen flex flex-col`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <motion.div 
                    initial={{ rotate: 0 }} 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }} 
                    className="rounded-full w-12 bg-black/20"
                  >
                    <img src={Logo} alt="logo" className="w-full" />
                  </motion.div>
                  <div>
                    <div className="text-base font-bold tracking-wide">Poeage Cloud</div>
                    <div className="text-xs text-slate-500">{user.awsId}</div>
                  </div>
                </div>
                {!isMdUp && (
                  <button onClick={() => setSidebarOpen(false)} className="p-1 rounded-full hover:bg-white/10">
                    <FaTimes />
                  </button>
                )}
              </div>

              <nav className="space-y-1 text-sm">
                {sidebarItems.map((item, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ x: 4, scale: 1.02 }}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:text-white"
                  >
                    <span className="text-slate-400 text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </nav>

              {isLoggedIn && (
                <div className="mt-auto pt-6 border-t border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={user.avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <div className="font-medium text-sm">{user.name}</div>
                      <div className="text-xs text-slate-500">
                        {accessLevels.find(level => level.value === user.accessLevel)?.label}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 text-sm">
                    <button 
                      onClick={() => setProfileOpen(true)} 
                      className="flex-1 py-2 rounded bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors"
                    >
                      Profile
                    </button>
                    <button 
                      onClick={handleLogout} 
                      className="flex-1 py-2 rounded bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 min-h-screen">
          {/* Topbar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              {!isMdUp && isLoggedIn && (
                <button 
                  onClick={() => setSidebarOpen(!sidebarOpen)} 
                  className="p-2 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors"
                >
                  ☰
                </button>
              )}
              <div>
                <div className="text-xl md:text-2xl font-semibold">Dashboard</div>
                <div className="text-xs md:text-sm text-slate-500">
                  {isLoggedIn ? `Welcome back, ${user.name}` : "Please log in to access your dashboard"}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {isLoggedIn ? (
                <>
                  <select 
                    value={region} 
                    onChange={(e) => setRegion(e.target.value)} 
                    className="px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {regions.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                  <button className="p-2 rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors">
                    <FaBell />
                  </button>
                  <button 
                    className="p-2 rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-700 transition-colors" 
                    onClick={() => setProfileOpen(true)}
                  >
                    <FaUserCircle className="text-lg" />
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => { setAuthMode("login"); setAuthModalOpen(true); }} 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all text-sm"
                  >
                    <FaSignInAlt /> Login
                  </button>
                  <button 
                    onClick={() => { setAuthMode("register"); setAuthModalOpen(true); }} 
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 transition-all text-sm"
                  >
                    <FaUserPlus /> Register
                  </button>
                </>
              )}
            </div>
          </div>
          
          {isLoggedIn ? (
            <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
              <h2 className="text-lg font-semibold mb-4">Resource Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <div className="text-sm text-slate-400">Running Instances</div>
                  <div className="text-2xl font-bold mt-2">12</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <div className="text-sm text-slate-400">Monthly Cost</div>
                  <div className="text-2xl font-bold mt-2">$1,247.38</div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                  <div className="text-sm text-slate-400">Storage Usage</div>
                  <div className="text-2xl font-bold mt-2">2.4 TB</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center mt-10 md:mt-20 text-center">
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-32 h-32 mb-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 p-1"
              >
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <img src={Logo} alt="Poeage Cloud" className="w-20 h-20" />
                </div>
              </motion.div>
              <h2 className="text-2xl font-bold mb-4">Welcome to Poeage Web Services</h2>
              <p className="text-slate-400 max-w-md mb-8">
                Manage your PWS resources with our professional dashboard. 
                Log in or create an account to get started.
              </p>
              <div className="flex gap-4">
                <button 
                  onClick={() => { setAuthMode("login"); setAuthModalOpen(true); }} 
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all flex items-center gap-2 text-sm"
                >
                  <FaSignInAlt /> Login
                </button>
                <button 
                  onClick={() => { setAuthMode("register"); setAuthModalOpen(true); }} 
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 transition-all flex items-center gap-2 text-sm"
                >
                  <FaUserPlus /> Register
                </button>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Enhanced Profile Drawer with Account Access Concept */}
      <AnimatePresence>
        {profileOpen && isLoggedIn && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-50 flex bg-black/70 backdrop-blur-sm"
            onClick={() => {
              setProfileOpen(false);
              setIsEditing(false);
            }}
          >
            <motion.div 
              initial={{ x: 300 }} 
              animate={{ x: 0 }} 
              exit={{ x: 300 }} 
              transition={{ type: "spring", damping: 25 }} 
              className="ml-auto w-full max-w-md bg-gray-900 min-h-full shadow-2xl p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <img src={user.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="font-semibold">{user.name}</div>
                    <div className="text-xs text-slate-500">{user.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={handleEditToggle}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                    title={isEditing ? "Save Changes" : "Edit Profile"}
                  >
                    {isEditing ? <FaSave /> : <FaEdit />}
                  </button>
                  <button 
                    onClick={() => {
                      setProfileOpen(false);
                      setIsEditing(false);
                    }} 
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>
              
              {/* Profile Tabs */}
              <div className="flex border-b border-gray-800 mb-6">
                <button 
                  className={`px-4 py-2 text-sm font-medium ${activeTab === "profile" ? "text-purple-400 border-b-2 border-purple-400" : "text-slate-400 hover:text-white"}`}
                  onClick={() => setActiveTab("profile")}
                >
                  Profile
                </button>
                <button 
                  className={`px-4 py-2 text-sm font-medium ${activeTab === "security" ? "text-purple-400 border-b-2 border-purple-400" : "text-slate-400 hover:text-white"}`}
                  onClick={() => setActiveTab("security")}
                >
                  Security
                </button>
                <button 
                  className={`px-4 py-2 text-sm font-medium ${activeTab === "sessions" ? "text-purple-400 border-b-2 border-purple-400" : "text-slate-400 hover:text-white"}`}
                  onClick={() => setActiveTab("sessions")}
                >
                  Sessions
                </button>
                <button 
                  className={`px-4 py-2 text-sm font-medium ${activeTab === "activity" ? "text-purple-400 border-b-2 border-purple-400" : "text-slate-400 hover:text-white"}`}
                  onClick={() => setActiveTab("activity")}
                >
                  Activity
                </button>
              </div>
              
              {/* Profile Tab Content */}
              {activeTab === "profile" && (
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Full Name</div>
                    {isEditing ? (
                      <input 
                        type="text" 
                        name="name"
                        value={editUser.name}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="font-medium p-3 bg-gray-800 rounded-lg">{user.name}</div>
                    )}
                  </div>
                  
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Email Address</div>
                    {isEditing ? (
                      <input 
                        type="email" 
                        name="email"
                        value={editUser.email}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="font-medium p-3 bg-gray-800 rounded-lg">{user.email}</div>
                    )}
                  </div>
                  
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Title/Role</div>
                    {isEditing ? (
                      <input 
                        type="text" 
                        name="title"
                        value={editUser.title}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="font-medium p-3 bg-gray-800 rounded-lg">{user.title}</div>
                    )}
                  </div>
                  
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Phone</div>
                    {isEditing ? (
                      <input 
                        type="text" 
                        name="phone"
                        value={editUser.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                    ) : (
                      <div className="font-medium p-3 bg-gray-800 rounded-lg">{user.phone}</div>
                    )}
                  </div>
                  
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Access Level</div>
                    {isEditing ? (
                      <select 
                        name="accessLevel"
                        value={editUser.accessLevel}
                        onChange={handleInputChange}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        {accessLevels.map(level => (
                          <option key={level.value} value={level.value}>
                            {level.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <div className="font-medium p-3 bg-gray-800 rounded-lg flex items-center gap-2">
                        {accessLevels.find(level => level.value === user.accessLevel)?.icon}
                        {accessLevels.find(level => level.value === user.accessLevel)?.label}
                      </div>
                    )}
                    <div className="text-xs text-slate-500 mt-1">
                      {accessLevels.find(level => level.value === user.accessLevel)?.description}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-slate-400 mb-1">PWS ID</div>
                    <div className="font-medium p-3 bg-gray-800 rounded-lg">{user.awsId}</div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Member Since</div>
                    <div className="font-medium p-3 bg-gray-800 rounded-lg">{user.joinDate}</div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Last Login</div>
                    <div className="font-medium p-3 bg-gray-800 rounded-lg">{user.lastLogin}</div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Password</div>
                    <div className="font-medium p-3 bg-gray-800 rounded-lg flex justify-between items-center">
                      <span>{user.password}</span>
                      <button 
                        className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1"
                        onClick={() => {
                          setIsEditing(true);
                          setActiveTab("security");
                        }}
                      >
                        <FaLock className="text-xs" /> Change
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Region</div>
                    <select 
                      value={region} 
                      onChange={(e) => setRegion(e.target.value)} 
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      {regions.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
              
              {/* Security Tab Content */}
              {activeTab === "security" && (
                <div className="space-y-4 text-sm">
                  <h3 className="font-medium mb-3 flex items-center gap-2">
                    <FaLock /> Password
                  </h3>
                  
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Current Password</div>
                      <input 
                        type="password" 
                        name="current"
                        value={changePassword.current}
                        onChange={handlePasswordChange}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter current password"
                      />
                    </div>
                    
                    <div>
                      <div className="text-xs text-slate-400 mb-1">New Password</div>
                      <input 
                        type="password" 
                        name="new"
                        value={changePassword.new}
                        onChange={handlePasswordChange}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Enter new password"
                      />
                    </div>
                    
                    <div>
                      <div className="text-xs text-slate-400 mb-1">Confirm New Password</div>
                      <input 
                        type="password" 
                        name="confirm"
                        value={changePassword.confirm}
                        onChange={handlePasswordChange}
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Confirm new password"
                      />
                    </div>
                    
                    <button 
                      onClick={savePasswordChange}
                      className="w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors font-medium mt-2"
                    >
                      Update Password
                    </button>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-800 mt-4">
                    <h3 className="font-medium mb-3 flex items-center gap-2">
                      <FaShieldAlt /> Two-Factor Authentication
                    </h3>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div>
                        <div className="font-medium">Multi-Factor Authentication</div>
                        <div className="text-xs text-slate-400">
                          {user.mfaEnabled ? "Enabled" : "Disabled"} - Adds an extra layer of security to your account
                        </div>
                      </div>
                      <button 
                        onClick={toggleMFA}
                        className={`px-3 py-1 rounded text-xs font-medium ${user.mfaEnabled ? "bg-green-600 hover:bg-green-700" : "bg-gray-700 hover:bg-gray-600"}`}
                      >
                        {user.mfaEnabled ? "Disable" : "Enable"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Sessions Tab Content */}
              {activeTab === "sessions" && (
                <div className="space-y-4 text-sm">
                  <h3 className="font-medium mb-3 flex items-center gap-2">
                    <FaDesktop /> Active Sessions
                  </h3>
                  
                  <div className="text-xs text-slate-400 mb-4">
                    These are the devices that are currently logged into your account. 
                    If you see any suspicious activity, revoke those sessions immediately.
                  </div>
                  
                  <div className="space-y-3">
                    {activeSessions.map(session => (
                      <div key={session.id} className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium">{session.device}</div>
                            <div className="text-xs text-slate-400">{session.location}</div>
                            <div className="text-xs text-slate-500 mt-1">Last active: {session.lastActive}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            {session.current && (
                              <span className="px-2 py-1 bg-green-600/20 text-green-400 rounded text-xs">Current</span>
                            )}
                            {!session.current && (
                              <button 
                                onClick={() => revokeSession(session.id)}
                                className="px-2 py-1 bg-red-600 hover:bg-red-700 rounded text-xs"
                              >
                                Revoke
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Activity Tab Content */}
              {activeTab === "activity" && (
                <div className="space-y-4 text-sm">
                  <h3 className="font-medium mb-3 flex items-center gap-2">
                    <FaHistory /> Recent Activity
                  </h3>
                  
                  <div className="text-xs text-slate-400 mb-4">
                    This is a log of important actions performed on your account.
                  </div>
                  
                  <div className="space-y-3">
                    {activityLog.map(activity => (
                      <div key={activity.id} className="p-3 bg-gray-800 rounded-lg border border-gray-700">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-medium">{activity.action}</div>
                            <div className="text-xs text-slate-400">{activity.resource}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs text-slate-400">{activity.time}</div>
                            <div className={`text-xs ${activity.status === "Success" ? "text-green-400" : "text-red-400"}`}>
                              {activity.status}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="pt-4 border-t border-gray-800 mt-6">
                <button 
                  onClick={handleLogout} 
                  className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 rounded-lg transition-colors font-medium"
                >
                  Sign Out
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auth Modal */}
      <AnimatePresence>
        {authModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
            onClick={() => setAuthModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-xl w-full max-w-md p-6 border border-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {authMode === "login" ? "Login to Your Account" : "Create an Account"}
                </h2>
                <button onClick={() => setAuthModalOpen(false)} className="p-1 rounded-full hover:bg-white/10">
                  <FaTimes />
                </button>
              </div>

              <form onSubmit={authMode === "login" ? handleLogin : handleRegister}>
                <div className="space-y-4">
                  {authMode === "register" && (
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-1">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                        placeholder="John Doe"
                        required
                      />
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-1">Password</label>
                    <input 
                      type="password" 
                      className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  {authMode === "register" && (
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-1">Confirm Password</label>
                      <input 
                        type="password" 
                        className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" 
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  )}
                  {authMode === "login" && (
                    <div className="flex justify-between items-center">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded bg-gray-800 border-gray-700 text-purple-500 focus:ring-purple-500" />
                        <span className="ml-2 text-sm text-slate-400">Remember me</span>
                      </label>
                      <a href="#" className="text-sm text-purple-400 hover:text-purple-300">Forgot password?</a>
                    </div>
                  )}
                  <button 
                    type="submit" 
                    className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 rounded-lg font-semibold transition-all mt-2"
                  >
                    {authMode === "login" ? "Sign In" : "Create Account"}
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-slate-400">
                  {authMode === "login" ? "Don't have an account? " : "Already have an account? "}
                  <button 
                    onClick={() => setAuthMode(authMode === "login" ? "register" : "login")} 
                    className="text-purple-400 hover:text-purple-300 font-semibold"
                  >
                    {authMode === "login" ? "Sign Up" : "Sign In"}
                  </button>
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}