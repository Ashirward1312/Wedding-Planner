import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#2B0F1B]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* ✅ Logo */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl md:text-2xl font-serif text-[#FFF5F7] tracking-wide"
        >
          <span className="text-[#E6B566]">THE EVENTS </span> WORLD
        </motion.h1>

        {/* ✅ Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-sm tracking-wide text-[#F8F6F0]">

          <a href="#home" className="hover:text-[#E6B566] transition">
            Home
          </a>
          <a href="#about" className="hover:text-[#E6B566] transition">
            About
          </a>
          <a href="#services" className="hover:text-[#E6B566] transition">
            Services
          </a>
          <a href="#gallery" className="hover:text-[#E6B566] transition">
            Gallery
          </a>
          <a href="#contact" className="hover:text-[#E6B566] transition">
            Contact
          </a>

          {/* <button className="ml-6 px-6 py-2 rounded-full bg-[#D6336C] hover:bg-[#b02a57] transition text-white text-xs uppercase tracking-wide">
            Book Now
          </button> */}
        </nav>

        {/* ✅ Mobile Hamburger */}
        <div
          className="md:hidden text-[#FFF5F7] cursor-pointer text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>
      </div>

      {/* ✅ Animated Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#2B0F1B] text-center py-6 space-y-6 text-[#F8F6F0]"
          >
            <a href="#home" onClick={handleLinkClick} className="block hover:text-[#E6B566]">
              Home
            </a>
            <a href="#about" onClick={handleLinkClick} className="block hover:text-[#E6B566]">
              About
            </a>
            <a href="#services" onClick={handleLinkClick} className="block hover:text-[#E6B566]">
              Services
            </a>
            <a href="#gallery" onClick={handleLinkClick} className="block hover:text-[#E6B566]">
              Gallery
            </a>
            <a href="#contact" onClick={handleLinkClick} className="block hover:text-[#E6B566]">
              Contact
            </a>

            {/* <button className="mt-4 px-6 py-2 rounded-full bg-[#D6336C] text-white">
              Book Now
            </button> */}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;