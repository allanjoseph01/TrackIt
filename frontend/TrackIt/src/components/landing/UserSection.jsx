import React from "react";
import { LayoutDashboard, PieChart, CheckSquare, ListTodo, Sparkles, User } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, FloatingElement, GlowingOrb } from "../ui/motion";

const userFeatures = [
  {
    icon: LayoutDashboard,
    title: "Personal Dashboard",
    description: "Your dedicated workspace with all assigned tasks at a glance.",
  },
  {
    icon: PieChart,
    title: "Task Priority Charts",
    description: "Visualize your workload by priority and status distribution.",
  },
  {
    icon: ListTodo,
    title: "Assigned Task List",
    description: "Clear view of all tasks with due dates and progress indicators.",
  },
  {
    icon: CheckSquare,
    title: "Editable Checklists",
    description: "Break tasks into subtasks and check them off as you go.",
  },
];

const UserSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0 pointer-events-none">
        <GlowingOrb color="primary" size="xl" className="-top-24 -left-24 opacity-20" />
        <GlowingOrb color="accent" size="lg" className="bottom-0 right-0 opacity-20" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <AnimatedSection direction="left" className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <FloatingElement duration={7} y={12}>
                <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-zinc-900/70 backdrop-blur-xl shadow-2xl ring-1 ring-white/5">
                  <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-50" />
                  
                  <div className="relative p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 shadow-lg shadow-indigo-500/20 flex items-center justify-center text-white text-lg font-bold">
                          JD
                        </div>
                        <div>
                          <div className="text-lg font-bold text-white tracking-tight">John Doe</div>
                          <div className="flex items-center gap-1.5 text-sm text-zinc-400">
                            <div className="p-0.5 rounded-full bg-zinc-800">
                              <User className="w-3 h-3" />
                            </div>
                            <span>Product Team</span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1.1, 1] }}
                        transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                        className="p-2 rounded-full bg-amber-500/10 border border-amber-500/20"
                      >
                        <Sparkles className="w-5 h-5 text-amber-400" />
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 mb-8">
                      {[
                        { value: 12, label: "Done", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
                        { value: 5, label: "Active", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
                        { value: 3, label: "Pending", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
                      ].map((stat, i) => (
                        <motion.div 
                          key={i}
                          whileHover={{ y: -2 }}
                          className={`flex flex-col items-center justify-center p-3 rounded-xl border ${stat.border} ${stat.bg} backdrop-blur-md`}
                        >
                          <motion.div 
                            className={`text-2xl font-bold ${stat.color}`}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1 }}
                          >
                            {stat.value}
                          </motion.div>
                          <div className="text-xs font-medium text-zinc-400 mt-1">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 mb-8">
                      <div className="relative w-24 h-24 shrink-0">
                        <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full drop-shadow-lg">
                          <circle cx="50" cy="50" r="42" fill="none" stroke="#27272a" strokeWidth="12" />
                          <motion.circle
                            cx="50" cy="50" r="42"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="12"
                            strokeDasharray="264"
                            strokeDashoffset="264"
                            strokeLinecap="round"
                            whileInView={{ strokeDashoffset: 105 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                          />
                          <motion.circle
                            cx="50" cy="50" r="42"
                            fill="none"
                            stroke="#f59e0b"
                            strokeWidth="12"
                            strokeDasharray="264"
                            strokeDashoffset="264"
                            strokeLinecap="round"
                            whileInView={{ strokeDashoffset: 210 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                            style={{ opacity: 0.8 }}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center flex-col">
                          <span className="text-xl font-bold text-white">60%</span>
                        </div>
                      </div>
                      <div className="space-y-2 flex-1">
                         <div className="flex justify-between text-sm">
                            <span className="text-zinc-400">Completion Rate</span>
                            <span className="text-white font-medium">High</span>
                         </div>
                         <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "60%" }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-full bg-linear-to-r from-emerald-500 to-emerald-400" 
                            />
                         </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4 flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Active Priority
                      </div>
                      {[
                        { label: "Create color palette", done: true },
                        { label: "Define typography", done: true },
                        { label: "Component library", done: false },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + i * 0.1 }}
                          className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-pointer"
                        >
                          <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                            item.done 
                              ? "bg-emerald-500 border-emerald-500 text-white" 
                              : "border-zinc-600 group-hover:border-indigo-400"
                          }`}>
                            {item.done && <CheckSquare className="w-3.5 h-3.5" />}
                          </div>
                          <span className={`text-sm ${item.done ? "text-zinc-500 line-through" : "text-zinc-200"}`}>
                            {item.label}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </FloatingElement>
              
              <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-3xl" />
              <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl" />
            </div>
          </AnimatedSection>

          <div className="order-1 lg:order-2">
            <AnimatedSection>
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-6">
                  <User className="w-4 h-4" />
                  <span>Team Member Experience</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Built for Users, <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                    Not Just Managers
                  </span>
                </h2>
                
                <p className="text-lg text-zinc-400 leading-relaxed max-w-lg">
                  Empower your team with a clean, focused interface that removes the noise and highlights what actually matters.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid sm:grid-cols-2 gap-5">
                {userFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800/50 hover:border-indigo-500/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserSection;