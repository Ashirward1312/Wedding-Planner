import { motion } from "framer-motion";
import Image from "./assets/q.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">

      {/* ✅ Background Image */}
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6 }}
        src={Image}
        alt="Bride and Groom Walking on Hill"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* ✅ Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#2B0F1B]/50 to-black/70"></div>

      {/* ✅ Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        {/* Small Top Text */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#F8F6F0] tracking-[6px] text-xs uppercase mb-6"
        >
          Your Dream Celebration
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-serif leading-[1.05]"
        >
          <span className="block text-5xl sm:text-6xl md:text-7xl text-white">
            Modern Wedding
          </span>

          <span className="block text-5xl sm:text-6xl md:text-7xl text-[#E6B566] mt-2">
            Experience
          </span>
        </motion.h1>

        {/* Elegant Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100px" }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="h-[2px] bg-[#D6336C] my-8"
        ></motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-[#F8F6F0]/90 text-base md:text-lg max-w-xl"
        >
          We craft unforgettable weddings with timeless elegance,
          cinematic beauty, and heartfelt moments.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 px-10 py-4 rounded-full bg-[#D6336C] text-white font-semibold hover:bg-[#b02a57] transition duration-300 shadow-xl"
        >
          Begin Your Journey
        </motion.button>

      </div>
    </section>
  );
};

export default Hero;