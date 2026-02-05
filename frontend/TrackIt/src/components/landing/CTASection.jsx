import React from "react";
import { ArrowRight, Play, Sparkles, Zap, Check } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection, MagneticButton, GlowingOrb } from "../ui/motion";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-32 relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-indigo-900/20 via-zinc-950 to-zinc-950 opacity-40" />
      
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
        }} 
      />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 pointer-events-none">
        <GlowingOrb color="primary" size="xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="relative rounded-[2.5rem] p-8 md:p-20 text-center overflow-hidden border border-white/10 bg-zinc-900/50 backdrop-blur-2xl shadow-2xl ring-1 ring-white/5 group"
          >
            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-12 -left-12 w-40 h-40 border border-indigo-500/20 rounded-full blur-sm"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-12 -right-12 w-40 h-40 border border-purple-500/20 rounded-full blur-sm"
            />

            <AnimatedSection className="relative z-10 space-y-10">
              <div className="flex justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/80 border border-white/10 text-sm font-medium backdrop-blur-md shadow-lg"
                >
                  <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-zinc-200">Start Free Today</span>
                  <div className="w-1 h-1 rounded-full bg-zinc-600" />
                  <span className="text-indigo-400 flex items-center gap-1">
                    Limited Offer <Sparkles className="w-3 h-3" />
                  </span>
                </motion.div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                  Ready to organize work <br />
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x">
                    without chaos?
                  </span>
                </h2>
                
                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                  Join forward-thinking teams who have transformed how they manage tasks, track progress, and deliver results faster than ever.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <MagneticButton>
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 hover:scale-105 transition-all font-semibold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)]" onClick={()=>navigate("/signup")}>
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </MagneticButton>
                
                <MagneticButton>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-full border-zinc-700 bg-transparent text-white hover:bg-zinc-800 hover:border-zinc-600 transition-all text-lg font-medium group/btn">
                    <Play className="w-5 h-5 mr-2 fill-current group-hover/btn:text-indigo-400 transition-colors" />
                    View Demo
                  </Button>
                </MagneticButton>
              </div>

              <div className="pt-8 border-t border-white/5 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-zinc-500">
                {[
                  "No credit card required",
                  "Free plan available",
                  "Cancel anytime"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;