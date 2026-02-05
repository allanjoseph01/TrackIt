import React from "react";
import { Plus, Users, Download, TrendingUp, Settings, Shield, FileSpreadsheet } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, FloatingElement, GlowingOrb } from "../ui/motion";
import { Button } from "../ui/Button";

const adminFeatures = [
  {
    icon: Plus,
    title: "Create & Manage Tasks",
    description: "Create, assign, and organize tasks with ease.",
  },
  {
    icon: TrendingUp,
    title: "Monitor Performance",
    description: "Track team productivity with detailed analytics.",
  },
  {
    icon: Download,
    title: "Download Reports",
    description: "Export task reports to Excel in one click.",
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Centralized control over all team members.",
  },
];

const AdminSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0 pointer-events-none">
        <GlowingOrb color="success" size="lg" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 order-1">
            <AnimatedSection>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium"
                >
                  <Shield className="w-4 h-4" />
                  <span>For Administrators</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Full Control for{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">
                    Admins
                  </span>
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed max-w-lg">
                  Powerful tools to oversee your team, manage workload, and generate comprehensive reports without the complexity.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-5">
                {adminFeatures.map((feature, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -4 }}
                    className="flex gap-4 p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800/50 hover:border-emerald-500/30 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500/20 to-teal-500/10 flex items-center justify-center shrink-0 group-hover:from-emerald-500/30 group-hover:to-teal-500/20 transition-all">
                      <feature.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1 group-hover:text-emerald-400 transition-colors">{feature.title}</h4>
                      <p className="text-sm text-zinc-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection direction="right" className="order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <FloatingElement duration={8} y={12}>
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/80 backdrop-blur-xl shadow-2xl ring-1 ring-emerald-500/20 p-6 sm:p-8">
                  <div className="absolute inset-0 bg-linear-to-b from-emerald-500/5 to-transparent pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-900/20">
                        <Settings className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">Admin Dashboard</div>
                        <div className="text-sm text-zinc-400">Team Overview</div>
                      </div>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold hover:bg-emerald-500/20 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Export
                    </motion.button>
                  </div>

                  <div className="grid grid-cols-4 gap-3 mb-8">
                    {[
                      { label: "Total", value: "156", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                      { label: "Done", value: "89", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                      { label: "Active", value: "45", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
                      { label: "Team", value: "12", color: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -2 }}
                        className={`text-center p-3 rounded-xl border ${stat.border} ${stat.bg} backdrop-blur-sm`}
                      >
                        <motion.div 
                          className={`text-xl font-bold ${stat.color}`}
                          initial={{ opacity: 0, scale: 0.5 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                        >
                          {stat.value}
                        </motion.div>
                        <div className="text-xs font-medium text-zinc-400 mt-1">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm font-semibold text-zinc-200">Weekly Performance</span>
                    </div>
                    <div className="space-y-4">
                      {[
                        { name: "Alice", progress: 92 },
                        { name: "Bob", progress: 78 },
                        { name: "Carol", progress: 85 },
                        { name: "David", progress: 64 },
                      ].map((member, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-300 border border-white/5">
                            {member.name[0]}
                          </div>
                          <span className="w-16 text-sm text-zinc-400">{member.name}</span>
                          <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-linear-to-r from-emerald-500 to-teal-400 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${member.progress}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                            />
                          </div>
                          <span className="w-10 text-xs text-right font-medium text-zinc-300">{member.progress}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/5 bg-black/20 overflow-hidden">
                    <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2 bg-white/5">
                      <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">Report Preview</span>
                    </div>
                    <div className="p-2 space-y-1">
                      <div className="grid grid-cols-4 gap-2 px-3 py-2 text-[10px] font-bold text-zinc-500 uppercase tracking-wider">
                        <span>ID</span>
                        <span>Assignee</span>
                        <span>Status</span>
                        <span className="text-right">Progress</span>
                      </div>
                      {[
                        { id: "001", name: "Alice", status: "Done", progress: "100%", color: "text-emerald-400", bg: "bg-emerald-500/20" },
                        { id: "002", name: "Bob", status: "Active", progress: "65%", color: "text-amber-400", bg: "bg-amber-500/20" },
                      ].map((row, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className="grid grid-cols-4 gap-2 px-3 py-2 rounded-lg hover:bg-white/5 transition-colors text-xs items-center"
                        >
                          <span className="font-mono text-zinc-500">#{row.id}</span>
                          <span className="text-zinc-300">{row.name}</span>
                          <span>
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${row.bg} ${row.color}`}>
                                {row.status}
                            </span>
                          </span>
                          <span className="text-right text-zinc-400 font-mono">{row.progress}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </FloatingElement>
              
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-500/10 blur-[100px] rounded-full opacity-50" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AdminSection;