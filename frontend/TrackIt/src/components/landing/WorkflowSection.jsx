import React from "react";
import { Plus, UserPlus, ClipboardCheck, BarChart3, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/motion";

const steps = [
  {
    icon: Plus,
    title: "Admin creates tasks",
    description: "Define tasks with details, deadlines, and checklists.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    icon: UserPlus,
    title: "Tasks assigned to users",
    description: "Assign tasks to team members based on skills.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "group-hover:border-purple-500/50",
    glow: "group-hover:shadow-purple-500/20",
  },
  {
    icon: ClipboardCheck,
    title: "Users update progress",
    description: "Team members update checklist & track completion.",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "group-hover:border-amber-500/50",
    glow: "group-hover:shadow-amber-500/20",
  },
  {
    icon: BarChart3,
    title: "Admin tracks & exports",
    description: "Monitor progress and download comprehensive reports.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50",
    glow: "group-hover:shadow-emerald-500/20",
  },
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="py-24 relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-950 to-zinc-950 opacity-40 pointer-events-none" />

      <div 
        className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-950 to-zinc-950 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center space-y-6 mb-24">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-zinc-400">Simple Process</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            How it{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-400 to-emerald-400">
              works
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A streamlined workflow designed to keep everyone aligned without the administrative overhead.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="hidden lg:block absolute top-18 left-0 right-0 h-0.5 w-full">
            <div className="absolute inset-0 bg-zinc-800" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-emerald-500 origin-left"
            />
          </div>

          <StaggerContainer staggerDelay={0.2} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={index}>
                <div className="relative group pt-10">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`relative z-10 h-full p-6 rounded-2xl bg-zinc-900/80 backdrop-blur-xl border border-white/5 ${step.border} hover:shadow-2xl ${step.glow} transition-all duration-300`}
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                      <motion.div
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.15, type: "spring" }}
                        className={`w-20 h-20 rounded-2xl bg-zinc-900 border-4 border-zinc-950 flex items-center justify-center ${step.bg} relative z-20 shadow-xl`}
                      >
                        <step.icon className={`w-8 h-8 ${step.color}`} />
                        <div className="absolute -bottom-3 bg-zinc-950 border border-zinc-800 text-zinc-400 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                            {index + 1}
                        </div>
                      </motion.div>
                    </div>

                    <div className="mt-8 text-center">
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                        {step.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + index * 0.2 }}
                      className="hidden lg:flex absolute top-18 -right-4 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 items-center justify-center text-zinc-500"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;