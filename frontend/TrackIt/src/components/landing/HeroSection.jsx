import { ArrowRight, Play, CheckCircle, BarChart3, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { GlowingOrb, AnimatedSection, FloatingElement, MagneticButton, CountUp } from "../ui/motion";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate= useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-950 pt-10 pb-16 lg:pt-16 lg:pb-24 mt-2">
      <div className="absolute inset-0 z-0">
        <GlowingOrb color="primary" size="xl" className="-top-20 -left-20 opacity-40" />
        <GlowingOrb color="accent" size="lg" className="bottom-0 right-0 opacity-30" />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-gray-950/50 to-gray-950" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="flex flex-col gap-8 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <AnimatedSection delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-gray-300 mx-auto lg:mx-0 w-fit"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-medium">Now in Public</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Manage Tasks. <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
                  Track Progress.
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-lg text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
                A role-based task management system built for teams who care about 
                clarity, accountability, and data-driven insights.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <MagneticButton className="w-full sm:w-auto">
                  <Button className="w-full h-12 px-8 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 transition-all" onClick={() => navigate("/signup")}>
                    Get Started Free <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </MagneticButton>
                <MagneticButton className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full h-12 px-8 rounded-xl border-gray-700 text-gray-300 hover:text-white hover:bg-white/5 hover:border-gray-600 transition-all">
                    <Play className="w-4 h-4 mr-2" /> Watch Demo
                  </Button>
                </MagneticButton>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="flex items-center justify-center lg:justify-start gap-8 pt-6 border-t border-gray-800/60">
                <StatItem icon={Users} color="text-indigo-400" bg="bg-indigo-500/10" value="2,500+" label="Active Teams" />
                <StatItem icon={BarChart3} color="text-emerald-400" bg="bg-emerald-500/10" value="99%" label="Satisfaction" />
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3} direction="right" className="relative hidden lg:block perspective-1000">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/5 blur-3xl rounded-full -z-10" />

            <FloatingElement duration={8} y={20}>
              <div className="relative z-10 bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/50 ring-1 ring-white/5">
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Dashboard</h3>
                      <p className="text-xs text-gray-400">Real-time overview</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <DashboardStat label="Done" value="24" color="text-emerald-400" bg="bg-emerald-500/10" />
                  <DashboardStat label="In Progress" value="08" color="text-amber-400" bg="bg-amber-500/10" />
                  <DashboardStat label="To Do" value="12" color="text-indigo-400" bg="bg-indigo-500/10" />
                </div>

                <div className="bg-black/20 rounded-xl p-4 mb-4 border border-white/5">
                  <div className="flex items-end gap-2 h-32 px-2">
                    {[40, 70, 45, 90, 60, 80, 50, 95].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 1, type: "spring" }}
                        className="flex-1 bg-linear-to-t from-indigo-600/50 to-indigo-400 rounded-t-sm hover:brightness-110 transition-all cursor-pointer"
                      />
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <TaskRow title="Design System" progress={100} color="bg-emerald-500" delay={1.2} />
                  <TaskRow title="API Integration" progress={75} color="bg-amber-500" delay={1.4} />
                  <TaskRow title="User Testing" progress={30} color="bg-indigo-500" delay={1.6} />
                </div>
              </div>
            </FloatingElement>

            <FloatingElement duration={5} delay={1} y={-10} className="absolute -right-3 top-7/8 z-20">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
                className="bg-gray-800/90 backdrop-blur-md border border-emerald-500/30 p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Task Complete</p>
                  <p className="text-xs text-gray-400">Just now</p>
                </div>
              </motion.div>
            </FloatingElement>

          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ icon: Icon, color, bg, value, label }) => (
  <div className="flex items-center gap-3">
    <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center`}>
      <Icon className={`w-5 h-5 ${color}`} />
    </div>
    <div>
      <div className="font-bold text-white text-lg">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  </div>
);

const DashboardStat = ({ label, value, color, bg }) => (
  <div className="bg-white/5 rounded-xl p-3 border border-white/5 hover:bg-white/10 transition-colors">
    <div className={`text-xl font-bold ${color} mb-1`}>{value}</div>
    <div className="text-xs text-gray-400">{label}</div>
  </div>
);

const TaskRow = ({ title, progress, color, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay }}
    className="flex items-center gap-3 bg-white/5 rounded-lg p-2.5 border border-white/5"
  >
    <div className={`w-2 h-2 rounded-full ${color}`} />
    <span className="text-xs text-gray-300 flex-1">{title}</span>
    <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ delay: delay + 0.3, duration: 1 }}
        className={`h-full ${color}`} 
      />
    </div>
  </motion.div>
);

export default HeroSection;