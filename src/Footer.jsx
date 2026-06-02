import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#12060D] text-[#E8C9D2] pt-20 pb-10">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">

        {/* ✅ Brand */}
        <div>
          <h3 className="text-2xl font-serif text-[#FFF5F7] mb-4">
            <span className="text-[#E6B566]">THE EVENTS </span> WORLD
          </h3>
          <p className="text-sm leading-relaxed">
            Crafting unforgettable wedding experiences filled with
            elegance, emotion, and timeless beauty.
          </p>
        </div>

        {/* ✅ Quick Links */}
        <div>
          <h4 className="text-[#FFF5F7] mb-4 font-semibold">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#home" className="hover:text-[#E6B566]">Home</a></li>
            <li><a href="#about" className="hover:text-[#E6B566]">About</a></li>
            <li><a href="#services" className="hover:text-[#E6B566]">Services</a></li>
            <li><a href="#gallery" className="hover:text-[#E6B566]">Gallery</a></li>
            <li><a href="#contact" className="hover:text-[#E6B566]">Contact</a></li>
          </ul>
        </div>

        {/* ✅ Contact Info */}
        <div>
          <h4 className="text-[#FFF5F7] mb-4 font-semibold">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>Email: hello@eventsworld.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Raipur, India</li>
          </ul>
        </div>

        {/* ✅ Newsletter */}
        <div>
          <h4 className="text-[#FFF5F7] mb-4 font-semibold">Newsletter</h4>
          <p className="text-sm mb-4">
            Get updates on exclusive wedding trends and events.
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 bg-[#2B0F1B] border border-[#D6336C30] rounded-l-lg outline-none focus:border-[#E6B566]"
            />
            <button
              type="submit"
              className="px-4 bg-[#D6336C] hover:bg-[#b02a57] rounded-r-lg text-white"
            >
              →
            </button>
          </form>
        </div>

      </div>

      {/* ✅ Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="border-t border-[#D6336C20] mt-16 pt-6 text-center text-sm"
      >
        © {new Date().getFullYear()} THE EVENTS WORLD. All rights reserved.
      </motion.div>

    </footer>
  );
};

export default Footer;