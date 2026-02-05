import React from "react";
import { Github, Twitter, Linkedin, Hexagon, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Product",
    links: ["Features", "Team", "Enterprise"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Customers", "Brand"],
  },
  {
    title: "Resources",
    links: ["Community", "Help Center", "API Docs", "Status", "Contact"],
  },
];

const socialLinks = [
  { icon: Twitter, href: "https://x.com/AllanJoseph30", label: "Twitter" },
  { icon: Github, href: "https://github.com/allanjoseph01", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/allan-santosh-joseph/", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="relative bg-zinc-950 border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent opacity-50" />
      
      <div className="absolute bottom-0 left-0 w-full h-64 bg-linear-to-t from-indigo-900/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2 text-white font-bold text-xl">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <CheckSquare className="w-5 h-5 text-white fill-white/20" />
              </div>
              <span>Trackit</span>
            </div>
            
            <p className="text-zinc-400 leading-relaxed max-w-sm">
              Streamline your workflow with the platform built for modern teams. Organize, track, and succeed without the chaos.
            </p>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3, color: "#818cf8" }}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 transition-colors hover:bg-zinc-800 hover:border-indigo-500/30"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-white tracking-wide">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <motion.a 
                      href="#" 
                      className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors block w-fit"
                      whileHover={{ x: 2 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© 2026 Trackit Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;