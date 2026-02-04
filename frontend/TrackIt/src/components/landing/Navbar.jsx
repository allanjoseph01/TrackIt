// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { CheckSquare, Menu, X, ArrowRight } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const navLinks = [
//   { label: "Features", href: "#features" },
//   { label: "How it Works", href: "#workflow" },
//   { label: "Use Cases", href: "#use-cases" },
//   // { label: "Pricing", href: "#pricing" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
//         scrolled 
//           ? "py-2" 
//           : "py-4"
//       }`}
//     >
//       <div className="container mx-auto px-4 md:px-8">
//         <div className={`flex items-center justify-between h-14 px-4 md:px-6 rounded-2xl transition-all duration-500 ${
//           scrolled 
//             ? "glass-strong shadow-xl" 
//             : "bg-transparent"
//         }`}>
//           <motion.a 
//             href="/" 
//             className="flex items-center gap-2.5 group"
//             whileHover={{ scale: 1.02 }}
//           >
//             <div className="w-9 h-9 bg-linear-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow">
//               <CheckSquare className="w-5 h-5 text-primary-foreground" />
//             </div>
//             <span className="text-xl font-bold font-display bg-linear-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
//               TaskFlow
//             </span>
//           </motion.a>
//           <div className="hidden md:flex items-center gap-1">
//             {navLinks.map((link, i) => (
//               <motion.a
//                 key={link.label}
//                 href={link.href}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 * i }}
//                 className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
//               >
//                 {link.label}
//                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-primary to-accent group-hover:w-1/2 transition-all duration-300 rounded-full" />
//               </motion.a>
//             ))}
//           </div>
//           <div className="hidden md:flex items-center gap-3">
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               <Button variant="ghost" className="text-sm hover:bg-white/5">
//                 Sign In
//               </Button>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.5 }}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//             >
//               <Button className="btn-primary text-sm gap-2 rounded-xl">
//                 Get Started
//                 <ArrowRight className="w-3.5 h-3.5" />
//               </Button>
//             </motion.div>
//           </div>
//           <motion.button
//             whileTap={{ scale: 0.95 }}
//             className="md:hidden p-2 rounded-xl hover:bg-white/5 transition-colors"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? (
//               <X className="w-5 h-5" />
//             ) : (
//               <Menu className="w-5 h-5" />
//             )}
//           </motion.button>
//         </div>
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden overflow-hidden"
//             >
//               <div className="glass-strong rounded-2xl mt-2 p-4">
//                 <div className="flex flex-col gap-1">
//                   {navLinks.map((link, i) => (
//                     <motion.a
//                       key={link.label}
//                       href={link.href}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: 0.05 * i }}
//                       className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl transition-all"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {link.label}
//                     </motion.a>
//                   ))}
//                   <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border/50">
//                     <Button variant="ghost" className="justify-start">
//                       Sign In
//                     </Button>
//                     <Button className="btn-primary gap-2">
//                       Get Started
//                       <ArrowRight className="w-3.5 h-3.5" />
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;
