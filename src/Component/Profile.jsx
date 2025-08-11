import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from '../Asset/3.png'
import { FaUserCircle, FaBell, FaCog, FaSignOutAlt, FaAws, FaCloud, FaChartLine, FaWallet, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

export default function AwsProfessionalDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [region, setRegion] = useState("us-east-1");
  const [account, setAccount] = useState({
    name: "Poeage",
    title: "PWS Cloud Architect",
    email: "info@poeage.com",
    phone: "+91 805-688-9616",
    awsId: "",
    avatar: Logo,
  });

  const regions = ["us-east-1", "us-west-2", "eu-west-1", "ap-south-1"];

  const sidebarItems = [
    { icon: <FaChartLine />, label: "Overview" },
    { icon: <FaCloud />, label: "Services" },
    { icon: <FaWallet />, label: "Billing" },
    { icon: <FaUsers />, label: "IAM & Users" },
    { icon: <FaMapMarkerAlt />, label: "Regions" },
    { icon: <FaCog />, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex ">
        {/* Sidebar */}
        <aside
          className={`transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out w-72 bg-black backdrop-blur border-r border-gray-200 min-h-screen p-4`}
        >
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6 bg-black">
            <motion.div
              initial={{ rotate: 0 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="rounded-full w-14 bg-black/20"
            >
              <img src={Logo} alt="load...!" />
            </motion.div>
            <div>
              <div className="text-lg font-bold tracking-wide">Poeage Cloud</div>
              <div className="text-sm text-slate-500">Account: {account.awsId}</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1 bg-black">
            {sidebarItems.map((item, idx) => (
              <motion.button
                key={idx}
                whileHover={{ x: 4, scale: 1.02 }}
                className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 transition"
              >
                <span className="text-slate-600">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="mt-6">
            <div className="text-xs uppercase text-slate-400 mb-2">Quick actions</div>
            <div className="flex flex-col gap-2">
              <motion.button whileTap={{ scale: 0.95 }} className="text-sm py-2 px-3 rounded-lg bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white shadow">Create Instance</motion.button>
              <motion.button whileTap={{ scale: 0.95 }} className="text-sm py-2 px-3 rounded-lg border border-gray-200">Create S3 Bucket</motion.button>
              <motion.button whileTap={{ scale: 0.95 }} className="text-sm py-2 px-3 rounded-lg border border-gray-200">Invite Team</motion.button>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="mt-auto pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <img src={account.avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover shadow-sm" />
              <div>
                <div className="font-medium">{account.name}</div>
                <div className="text-xs text-slate-500">{account.title}</div>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <button onClick={() => setProfileOpen(true)} className="text-xs px-3 py-2 rounded bg-black">Profile</button>
              <button className="text-xs px-3 py-2 rounded bg-black border">Sign out</button>
            </div>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6">
          {/* Topbar */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden p-2 rounded-lg bg-white shadow-sm">☰</button>
              <div>
                <div className="text-2xl font-semibold">Dashboard</div>
                <div className="text-sm text-slate-500">Welcome back, {account.name.split(" ")[0]}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <select value={region} onChange={(e) => setRegion(e.target.value)} className="px-3 py-2 rounded-lg bg-black border">
                {regions.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <button className="p-2 rounded-lg bg-black shadow-sm"><FaBell /></button>
              <button className="p-2 rounded-lg bg-black shadow-sm" onClick={() => setProfileOpen(true)}><FaUserCircle /></button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Account Health */}
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="col-span-1 md:col-span-2 bg-black rounded-2xl p-5 shadow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-slate-400">Account health</div>
                  <div className="text-xl font-semibold">Active & secure</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-500">Region</div>
                  <div className="font-medium">{region}</div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-black/35 border 2xl border-white">
                  <div className="text-xs text-slate-500">Monthly spend</div>
                  <div className="text-lg font-semibold">$1,245</div>
                </div>
                <div className="p-4 rounded-lg bg-black/35 border 2xl border-white">
                  <div className="text-xs text-slate-500">Active instances</div>
                  <div className="text-lg font-semibold">8</div>
                </div>
                <div className="p-4 rounded-lg bg-black/35 border 2xl border-white">
                  <div className="text-xs text-slate-500">IAM Users</div>
                  <div className="text-lg font-semibold">12</div>
                </div>
              </div>
            </motion.div>

            {/* Billing */}
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="bg-black/35 border 2xl border-white rounded-2xl p-5 shadow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-slate-400">Billing</div>
                  <div className="text-lg font-semibold">Next invoice</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-slate-500">Due date</div>
                  <div className="font-medium">Aug 15, 2025</div>
                </div>
              </div>
              <div className="mt-3 text-sm text-slate-600">Projected monthly spend: <span className="font-semibold">$1,420</span></div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white">Pay Invoice</button>
                <button className="py-2 px-3 rounded-lg border">View Bills</button>
              </div>
            </motion.div>
          </div>

          {/* Services */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {["EC2", "S3", "Lambda", "RDS", "CloudFront", "IAM"].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.03 }}
                className="bg-black/35 border 2xl border-white p-4 rounded-2xl shadow flex flex-col gap-2"
              >
                <div className="text-sm text-slate-500">{service}</div>
                <div className="font-semibold">Manage</div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 text-sm text-slate-500">© {new Date().getFullYear()} Poeage Technology Pvt. Ltd. — Built with AWS</div>
        </main>
      </div>

      {/* Profile Drawer */}
      <AnimatePresence>
        {profileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex">
            <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: 300 }} transition={{ type: "spring" }} className="ml-auto w-full max-w-md bg-black min-h-full shadow-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={account.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="font-semibold">{account.name}</div>
                    <div className="text-xs text-slate-500">{account.email}</div>
                  </div>
                </div>
                <button onClick={() => setProfileOpen(false)} className="px-3 py-2 rounded bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">Close</button>
              </div>
              <div className="mt-6 space-y-4">
                <div>
                  <div className="text-xs text-slate-400">PWS ID</div>
                  <div className="font-medium">{account.awsId}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Phone</div>
                  <div className="font-medium">{account.phone}</div>
                </div>
                <div>
                  <div className="text-xs bg-blac">Region</div>
                  <select value={region} onChange={(e) => setRegion(e.target.value)} className="w-full mt-2 p-2 border bg-black rounded">
                    {regions.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
                <div className="mt-6 flex gap-2">
                  <button className="flex-1 py-2 rounded gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white">Sync with PWS</button>
                  <button className="flex-1 py-2 rounded border">Export Profile</button>
                </div>
                <div className="mt-4 text-xs text-slate-400">Tip: Connect your AWS credentials to enable live usage & billing data.</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
