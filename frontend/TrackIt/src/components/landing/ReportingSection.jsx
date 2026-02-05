import React from "react";
import { FileSpreadsheet, MousePointer, ListChecks, UserCheck, ShieldCheck, Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem, GlowingOrb } from "../ui/motion";

const reportFeatures = [
  {
    icon: MousePointer,
    text: "One-click Excel export",
    highlight: "Instant",
  },
  {
    icon: ListChecks,
    text: "Task-level details",
    highlight: "Complete",
  },
  {
    icon: UserCheck,
    text: "User performance summaries",
    highlight: "Insightful",
  },
  {
    icon: ShieldCheck,
    text: "Perfect for reviews & audits",
    highlight: "Professional",
  },
];

const ReportingSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-950">
      <div 
          className="absolute inset-0 opacity-[0.03] bg-linear-to-b from-emerald-500/5 via-transparent to-transparent pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 opacity-40 pointer-events-none">
        <GlowingOrb color="success" size="xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <AnimatedSection direction="left">
            <div className="relative group perspective-1000">
              <motion.div
                initial={{ rotateY: 10, rotateX: 5 }}
                whileInView={{ rotateY: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
                className="relative z-10 bg-zinc-900/80 backdrop-blur-xl rounded-3xl p-6 border border-white/10 ring-1 ring-emerald-500/20 shadow-2xl shadow-emerald-900/20"
              >
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-lg shadow-emerald-500/20 text-white">
                    <FileSpreadsheet className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white truncate">Task_Report_Q4_2024.xlsx</div>
                    <div className="text-xs text-emerald-400 flex items-center gap-1.5 mt-0.5 font-medium">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      Ready to download
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-emerald-500/20 hover:text-emerald-400 flex items-center justify-center transition-colors border border-white/5"
                  >
                    <Download className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="rounded-xl border border-white/5 bg-black/40 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-white/5 border-b border-white/5">
                        <th className="px-4 py-3 text-left font-semibold text-zinc-400 text-xs uppercase tracking-wider">Task</th>
                        <th className="px-4 py-3 text-left font-semibold text-zinc-400 text-xs uppercase tracking-wider">Assignee</th>
                        <th className="px-4 py-3 text-left font-semibold text-zinc-400 text-xs uppercase tracking-wider">Status</th>
                        <th className="px-4 py-3 text-right font-semibold text-zinc-400 text-xs uppercase tracking-wider">Due</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {[
                        { task: "UI Redesign", assignee: "Alice", status: "Done", date: "Jan 15", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                        { task: "API Integ.", assignee: "Bob", status: "Active", date: "Jan 18", color: "text-amber-400", bg: "bg-amber-500/10" },
                        { task: "Unit Tests", assignee: "Carol", status: "Pending", date: "Jan 22", color: "text-zinc-400", bg: "bg-zinc-500/10" },
                        { task: "Docs", assignee: "David", status: "Done", date: "Jan 12", color: "text-emerald-400", bg: "bg-emerald-500/10" },
                        { task: "Deploy", assignee: "Eve", status: "Active", date: "Jan 25", color: "text-amber-400", bg: "bg-amber-500/10" },
                      ].map((row, i) => (
                        <motion.tr
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="group hover:bg-white/5 transition-colors"
                        >
                          <td className="px-4 py-3 font-medium text-zinc-200">{row.task}</td>
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-400 border border-white/10">
                                {row.assignee[0]}
                              </div>
                              <span className="text-zinc-400 text-xs">{row.assignee}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium ${row.bg} ${row.color}`}>
                              {row.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right text-zinc-500 text-xs font-mono">{row.date}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs">
                  <span className="text-zinc-500">5 records exported successfully</span>
                  <div className="flex items-center gap-1.5 text-emerald-500">
                    <Sparkles className="w-3 h-3" />
                    <span className="font-medium">Data Verified</span>
                  </div>
                </div>
              </motion.div>
              
              <div className="absolute -inset-1 bg-linear-to-r from-emerald-500/30 to-teal-500/30 rounded-3xl blur-2xl opacity-20 -z-10 transition-opacity duration-500 group-hover:opacity-40" />
            </div>
          </AnimatedSection>

          <div className="space-y-10">
            <AnimatedSection>
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Automated Intelligence</span>
                </motion.div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Reports that managers <br/>
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">
                    actually need
                  </span>
                </h2>
                
                <p className="text-lg text-zinc-400 leading-relaxed max-w-lg">
                  Stop wasting hours on manual spreadsheets. Get comprehensive, audit-ready data exports that help you make better decisions in seconds.
                </p>
              </div>
            </AnimatedSection>

            <StaggerContainer staggerDelay={0.1} className="grid gap-4">
              {reportFeatures.map((feature, index) => (
                <StaggerItem key={index}>
                  <motion.div 
                    whileHover={{ x: 4, backgroundColor: "rgba(255,255,255,0.08)" }}
                    className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/5 transition-all group cursor-default"
                  >
                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center group-hover:border-emerald-500/50 group-hover:text-emerald-400 transition-colors text-zinc-400">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                        {feature.text}
                      </h4>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400 whitespace-nowrap">
                      {feature.highlight}
                    </span>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReportingSection;