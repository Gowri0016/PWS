import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle, FaBell, FaCog, FaSignOutAlt, FaAws, FaCloud, FaChartLine, FaWallet, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

// NOTE: This single-file React component is a polished, responsive dashboard shell
// styled with Tailwind classes (assumes Tailwind is available). It's meant to be
// a drop-in starting point; integrate AWS SDK calls (Amplify/AWS SDK v3) where needed.

export default function AwsProfessionalDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [region, setRegion] = useState("us-east-1");
  const [account, setAccount] = useState({
    name: "Jane Smith",
    title: "AWS Cloud Architect",
    email: "jane.smith@company.com",
    phone: "+1 555-987-6543",
    awsId: "0123-4567-8901",
    avatar: "https://i.pravatar.cc/150?img=47",
  });

  const regions = ["us-east-1", "us-west-2", "eu-west-1", "ap-south-1"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white text-slate-800">
      <div className="flex">
        {/* SIDEBAR */}
        <aside className={`transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 ease-in-out w-72 bg-white/80 backdrop-blur border-r border-gray-200 min-h-screen p-4`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="rounded-full p-2 bg-yellow-400/20">
              <FaAws className="text-yellow-600 text-2xl" />
            </div>
            <div>
              <div className="text-lg font-semibold">Poeage Cloud</div>
              <div className="text-sm text-slate-500">Account: {account.awsId}</div>
            </div>
          </div>

          <nav className="space-y-2">
            {[
              { icon: <FaChartLine />, label: "Overview" },
              { icon: <FaCloud />, label: "Services" },
              { icon: <FaWallet />, label: "Billing" },
              { icon: <FaUsers />, label: "IAM & Users" },
              { icon: <FaMapMarkerAlt />, label: "Regions" },
              { icon: <FaCog />, label: "Settings" },
            ].map((item, i) => (
              <button key={i} className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition">
                <span className="text-slate-600">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-6">
            <div className="text-xs uppercase text-slate-400 mb-2">Quick actions</div>
            <div className="flex flex-col gap-2">
              <button className="text-sm py-2 px-3 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 text-white">Create Instance</button>
              <button className="text-sm py-2 px-3 rounded-lg border border-gray-200">Create S3 Bucket</button>
              <button className="text-sm py-2 px-3 rounded-lg border border-gray-200">Invite Team</button>
            </div>
          </div>

          <div className="mt-auto pt-6">
            <div className="flex items-center gap-3">
              <img src={account.avatar} alt="avatar" className="w-10 h-10 rounded-full object-cover shadow-sm" />
              <div>
                <div className="font-medium">{account.name}</div>
                <div className="text-xs text-slate-500">{account.title}</div>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              <button onClick={() => setProfileOpen(true)} className="text-xs px-3 py-2 rounded bg-slate-50">Profile</button>
              <button className="text-xs px-3 py-2 rounded bg-white border">Sign out</button>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 p-6">
          {/* TOPBAR */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden p-2 rounded-lg bg-white shadow-sm">☰</button>
              <div className="text-2xl font-semibold">Dashboard</div>
              <div className="text-sm text-slate-500">Welcome back, {account.name.split(" ")[0]}</div>
            </div>

            <div className="flex items-center gap-3">
              <select value={region} onChange={(e) => setRegion(e.target.value)} className="px-3 py-2 rounded-lg bg-white border">
                {regions.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>

              <button className="p-2 rounded-lg bg-white shadow-sm"><FaBell /></button>
              <button className="p-2 rounded-lg bg-white shadow-sm" onClick={() => setProfileOpen(true)}><FaUserCircle /></button>
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="col-span-1 md:col-span-2 bg-white rounded-2xl p-5 shadow">
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
                <div className="p-4 rounded-lg bg-gradient-to-r from-emerald-50 to-emerald-100">
                  <div className="text-xs text-slate-500">Monthly spend</div>
                  <div className="text-lg font-semibold">$1,245</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100">
                  <div className="text-xs text-slate-500">Active instances</div>
                  <div className="text-lg font-semibold">8</div>
                </div>
                <div className="p-4 rounded-lg bg-gradient-to-r from-yellow-50 to-yellow-100">
                  <div className="text-xs text-slate-500">IAM Users</div>
                  <div className="text-lg font-semibold">12</div>
                </div>
              </div>

              <div className="mt-6">
                <div className="text-sm text-slate-500 mb-3">Recent activity</div>
                <div className="space-y-2">
                  <div className="p-3 rounded-lg border border-gray-100">Launched t3.medium in us-east-1 — <span className="text-xs text-slate-400">2h ago</span></div>
                  <div className="p-3 rounded-lg border border-gray-100">Updated S3 bucket policy — <span className="text-xs text-slate-400">1d ago</span></div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-5 shadow">
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
                <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 text-white">Pay Invoice</button>
                <button className="py-2 px-3 rounded-lg border">View Bills</button>
              </div>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "EC2", subtitle: "8 running" },
              { title: "S3", subtitle: "24 buckets" },
              { title: "Lambda", subtitle: "15 functions" },
              { title: "RDS", subtitle: "3 instances" },
              { title: "CloudFront", subtitle: "2 distributions" },
              { title: "IAM", subtitle: "12 users" },
            ].map((s, i) => (
              <motion.div key={i} whileHover={{ y: -6 }} className="bg-white p-4 rounded-2xl shadow flex flex-col gap-2">
                <div className="text-sm text-slate-500">{s.title}</div>
                <div className="font-semibold">{s.subtitle}</div>
                <div className="text-xs text-slate-400 mt-auto">Manage</div>
              </motion.div>
            ))}
          </div>

          {/* Footer quick links */}
          <div className="mt-8 text-sm text-slate-500">© {new Date().getFullYear()} Poeage Technology Pvt. Ltd. — Built with AWS</div>
        </main>
      </div>

      {/* PROFILE DRAWER */}
      <AnimatePresence>
        {profileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex">
            <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ x: 300 }} transition={{ type: "spring" }} className="ml-auto w-full max-w-md bg-white min-h-full shadow-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={account.avatar} alt="avatar" className="w-12 h-12 rounded-full" />
                  <div>
                    <div className="font-semibold">{account.name}</div>
                    <div className="text-xs text-slate-500">{account.email}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setProfileOpen(false)} className="px-3 py-2 rounded bg-slate-50">Close</button>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <div className="text-xs text-slate-400">AWS ID</div>
                  <div className="font-medium">{account.awsId}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Phone</div>
                  <div className="font-medium">{account.phone}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Region</div>
                  <select value={region} onChange={(e) => setRegion(e.target.value)} className="w-full mt-2 p-2 border rounded">
                    {regions.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>

                <div className="mt-6 flex gap-2">
                  <button className="flex-1 py-2 rounded bg-gradient-to-r from-yellow-400 to-orange-400 text-white">Sync with AWS</button>
                  <button className="flex-1 py-2 rounded border">Export Profile</button>
                </div>

                <div className="mt-4 text-xs text-slate-400">Tip: Connect your AWS credentials (Cognito/STS) to enable live usage & billing data in this dashboard.</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
