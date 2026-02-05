import React from "react";
import { Rocket, GraduationCap, Briefcase, Users, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem, GlowingOrb } from "../ui/motion";

const useCases = [
  {
    icon: Rocket,
    title: "Startups",
    description: "Fast-moving teams need clarity. Ship faster with organized workflows.",
    gradient: "from-blue-500 to-indigo-500",
    shadow: "shadow-blue-500/20",
    stat: "3x faster",
    statLabel: "delivery",
  },
  {
    icon: GraduationCap,
    title: "College Teams",
    description: "Coordinate group projects without the chaos of endless chats.",
    gradient: "from-violet-500 to-purple-500",
    shadow: "shadow-violet-500/20",
    stat: "10k+",
    statLabel: "students",
  },
  {
    icon: Briefcase,
    title: "Corporate Teams",
    description: "Enterprise-ready task management with accountability built in.",
    gradient: "from-emerald-500 to-teal-500",
    shadow: "shadow-emerald-500/20",
    stat: "99.9%",
    statLabel: "uptime",
  },
  {
    icon: Users,
    title: "Freelancers",
    description: "Collaborate with clients and contractors seamlessly.",
    gradient: "from-amber-500 to-orange-500",
    shadow: "shadow-amber-500/20",
    stat: "2x",
    statLabel: "productivity",
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 relative overflow-hidden bg-gray-950">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 opacity-20 pointer-events-none">
        <GlowingOrb color="primary" size="lg" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 opacity-20 pointer-events-none">
        <GlowingOrb color="accent" size="md" />
      </div>
      <div 
        className="absolute inset-0 opacity-[0.03] bg-linear-to-b from-emerald-500/5 via-transparent to-transparent pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center space-y-6 mb-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium backdrop-blur-md"
          >
            <Users className="w-4 h-4 text-indigo-400" />
            <span className="text-zinc-400">Use Cases</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-emerald-400">
              every team
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Whether you're a startup founder or managing a university project, our platform adapts to your unique workflow needs.
          </p>
        </AnimatedSection>

        <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative h-full"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${useCase.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-xl`} />
                
                <div className="relative h-full p-6 rounded-3xl bg-zinc-900/80 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all duration-300 flex flex-col items-center text-center overflow-hidden">
                  
                  <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${useCase.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500 ${useCase.shadow} shadow-lg`}>
                    <div className="w-full h-full rounded-2xl bg-zinc-900 flex items-center justify-center">
                      <useCase.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-400 leading-relaxed mb-8 grow">
                    {useCase.description}
                  </p>

                  <div className="w-full pt-6 border-t border-white/5">
                    <div className="flex flex-col items-center">
                      <span className={`text-2xl font-bold bg-linear-to-r ${useCase.gradient} bg-clip-text text-transparent`}>
                        {useCase.stat}
                      </span>
                      <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider mt-1">
                        {useCase.statLabel}
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default UseCasesSection;