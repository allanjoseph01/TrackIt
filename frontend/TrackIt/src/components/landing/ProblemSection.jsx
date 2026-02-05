import { MessageSquare, HelpCircle, Eye, FileSpreadsheet, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "../ui/motion";

const problems = [
  {
    icon: MessageSquare,
    text: "Tasks scattered everywhere",
    detail: "Lost in endless slack threads & emails.",
  },
  {
    icon: HelpCircle,
    text: "No clear ownership",
    detail: "Who is actually responsible for this?",
  },
  {
    icon: Eye,
    text: "Zero progress visibility",
    detail: "Flying blind on critical deadlines.",
  },
  {
    icon: FileSpreadsheet,
    text: "Manual reporting hell",
    detail: "Hours wasted updating sheets weekly.",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative py-24 lg:py-26 overflow-hidden bg-gray-950">

      <div className="absolute inset-0 pointer-events-none">

        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto space-y-16">

          <AnimatedSection>
            <div className="text-center space-y-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-sm font-medium text-rose-400"
              >
                <XCircle className="w-4 h-4" />
                <span>The Old Way</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Why teams struggle with <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-400 via-red-400 to-orange-400">
                  task management
                </span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Spreadsheets break, chats get buried, and accountability vanishes. 
                It's not your team—it's your tools.
              </p>
            </div>
          </AnimatedSection>

          <StaggerContainer staggerDelay={0.1} className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group relative h-full bg-gray-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-gray-900/60 hover:border-rose-500/30 transition-all duration-300"
                >

                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-rose-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border border-rose-500/10">
                      <problem.icon className="w-6 h-6 text-rose-400" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-white font-semibold text-xl">
                        {problem.text}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {problem.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <AnimatedSection delay={0.6}>
            <div className="flex justify-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-gray-900/80 backdrop-blur-xl border border-emerald-500/30 rounded-full shadow-2xl shadow-emerald-500/10 cursor-default"
              >

                <div className="absolute inset-0 bg-emerald-500/5 rounded-full blur-md group-hover:bg-emerald-500/10 transition-all" />
                
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/30"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                </motion.div>
                
                <span className="relative text-xl font-bold text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-400">
                  We fixed this.
                </span>
              </motion.div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;