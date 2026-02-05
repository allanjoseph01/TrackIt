import { BarChart3, Users, ClipboardList, FileDown, TrendingUp, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem, GlowingOrb } from "../ui/motion";

const features = [
  {
    icon: BarChart3,
    title: "Visual Dashboards",
    description: "Get instant insights with beautiful, real-time charts and analytics.",
    gradient: "from-indigo-500 to-purple-500",
    shadow: "shadow-indigo-500/20",
  },
  {
    icon: Users,
    title: "Role-based Access",
    description: "Separate views and permissions for admins and team members.",
    gradient: "from-purple-500 to-pink-500",
    shadow: "shadow-purple-500/20",
  },
  {
    icon: ClipboardList,
    title: "Checklist-driven Tasks",
    description: "Break down tasks into actionable items with progress tracking.",
    gradient: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/20",
  },
  {
    icon: FileDown,
    title: "Excel Reports",
    description: "Export comprehensive reports with one click for reviews.",
    gradient: "from-amber-500 to-orange-500",
    shadow: "shadow-amber-500/20",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor task completion rates and team performance.",
    gradient: "from-blue-500 to-indigo-500",
    shadow: "shadow-blue-500/20",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee.",
    gradient: "from-cyan-500 to-blue-500",
    shadow: "shadow-cyan-500/20",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 lg:py-26 overflow-hidden bg-gray-950">
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
      
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection className="text-center space-y-8 mb-20">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm text-amber-300 w-fit mx-auto"
          >
            <Zap className="w-4 h-4 fill-amber-300/20" />
            <span className="font-medium text-amber-100/90">Powerful Capabilities</span>
          </motion.div>
          
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Everything you need to <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">
                manage work
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We've obsessed over every pixel to bring you a tool that's not just powerful, 
              but a joy to use every single day.
            </p>
          </div>
        </AnimatedSection>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative h-full bg-gray-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-8 overflow-hidden hover:bg-gray-800/40 transition-all duration-300"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 blur-[60px] transition-opacity duration-500 rounded-full`} />
                
                <div className="relative mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${feature.gradient} p-px ${feature.shadow} group-hover:shadow-lg transition-shadow duration-300`}>
                    <div className="w-full h-full rounded-2xl bg-gray-950/90 flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {feature.description}
                </p>

                <div className={`absolute bottom-0 left-0 w-full h-1 bg-linear-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default FeaturesSection;