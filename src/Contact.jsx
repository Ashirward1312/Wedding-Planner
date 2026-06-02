import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact"  className="relative bg-[#2B0F1B] py-32 overflow-hidden">

      {/* ✅ Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2B0F1B] via-[#3A1424] to-[#2B0F1B]" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D6336C20] rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* ✅ Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[8px] text-[#D6336C] text-xs mb-6">
            Let’s Connect
          </p>

          <h2 className="text-4xl md:text-5xl font-serif text-[#FFF5F7] mb-6 leading-tight">
            Begin Your <span className="text-[#E6B566]">Love Story</span> With Us
          </h2>

          <p className="text-[#E8C9D2] text-base md:text-lg leading-relaxed mb-8">
            Share your vision and allow us to transform your dreams
            into an unforgettable celebration filled with elegance,
            emotion, and timeless beauty.
          </p>

          <div className="text-[#E8C9D2] space-y-2 text-sm">
            <p>Email: hello@royalweddings.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Location: Jaipur, India</p>
          </div>
        </motion.div>

        {/* ✅ Luxury Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-[#D6336C30] rounded-3xl p-10 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
        >
          <form className="space-y-8">

            {/* Name */}
            <div className="relative">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-[#E8C9D250] py-3 text-[#FFF5F7] focus:border-[#E6B566] outline-none transition"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-[#E8C9D250] py-3 text-[#FFF5F7] focus:border-[#E6B566] outline-none transition"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                rows="4"
                placeholder="Tell us about your dream wedding..."
                className="w-full bg-transparent border-b border-[#E8C9D250] py-3 text-[#FFF5F7] focus:border-[#E6B566] outline-none transition resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#D6336C] to-[#b02a57] text-white font-semibold tracking-wide shadow-lg hover:scale-105 transition duration-300"
            >
              Send Message
            </button>

          </form>
        </motion.div>

      </div>

    </section>
  );
};

export default Contact;