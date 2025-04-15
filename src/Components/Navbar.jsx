import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  // for color change on scroll
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed w-full top-0 z-50 px-6 py-4 transition-all duration-500 ${
          scrolled ? "bg-blue-900 shadow-lg backdrop-blur-md" : "bg-transparent"
        } text-white`}
      >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div
            className="text-xl font-bold cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            DiceMed
          </div>
          <div className="hidden md:flex gap-8">
            {[
              "about",
              "drajo",
              "publications",
              "research-group",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-blue-300 transition duration-300"
              >
                {item
                  .replace("-", " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </button>
            ))}
          </div>
          <div className="xl:hidden flex gap-8 xl:gap-0" />

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i
                className={`fas ${
                  isMenuOpen ? "fa-times" : "fa-bars"
                } text-2xl transition duration-300`}
              ></i>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-md text-white flex flex-col items-center justify-center gap-8 py-4 md:hidden z-50"
          >
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-3xl"
            >
              <i className="fas fa-times"></i>
            </button>

            {[
              "about",
              "drajo",
              "publications",
              "research-group",
              "contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item);
                  setIsMenuOpen(false);
                }}
                className="text-xl font-medium hover:text-blue-300 transition duration-300"
              >
                {item
                  .replace("-", " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
