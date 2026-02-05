import { useState, useEffect } from "react";
import { CheckSquare, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#workflow" },
  { label: "Use Cases", href: "#use-cases" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-4"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div
          className={`flex items-center justify-between h-16 px-6 rounded-2xl transition-all duration-300 border ${
            scrolled
              ? "bg-gray-900/60 backdrop-blur-xl border-white/10 shadow-lg shadow-indigo-500/10"
              : "bg-transparent border-transparent"
          }`}
        >
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.04 }}
            onClick={() => navigate("/")}
          >
            <div className="w-9 h-9 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <CheckSquare className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Trackit
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
                className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute left-1/2 bottom-1 h-px w-0 -translate-x-1/2 bg-linear-to-r from-indigo-500 to-purple-500 group-hover:w-1/2 transition-all duration-300 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-white/5"
              onClick={() => navigate("/login")}
            >
              Sign In
            </Button>

            <Button
              className="h-10 px-5 rounded-xl text-sm font-medium flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 transition-all hover:scale-105"
              onClick={() => navigate("/signup")}
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <button
            className="md:hidden p-2 rounded-xl text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl mt-2 p-4 border border-white/10 shadow-2xl">
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}

                  <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-white/10">
                    <Button
                      variant="ghost"
                      className="justify-start text-gray-300 hover:text-white hover:bg-white/5"
                      onClick={() => navigate("/login")}
                    >
                      Sign In
                    </Button>

                    <Button
                      className="gap-2 bg-indigo-600 hover:bg-indigo-500 text-white justify-center shadow-lg shadow-indigo-500/20"
                      onClick={() => navigate("/signup")}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;