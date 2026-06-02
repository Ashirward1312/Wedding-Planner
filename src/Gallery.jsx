import { motion } from "framer-motion";
import imgA from "./assets/a.webp";
import imgB from "./assets/b.png";
import imgC from "./assets/c.png";
import imgD from "./assets/d.png";
import imgE from "./assets/e.png";

const mediaItems = [
  { src: imgA, title: "Eternal Love", category: "Pre-Wedding" },
  { src: imgB, title: "The Grand Entrance", category: "Ceremony" },
  { src: imgC, title: "Royal Celebration", category: "Reception" },
  { src: imgD, title: "Sacred Moments", category: "Vows" },
  { src: imgE, title: "Timeless Joy", category: "Portrait" }
];

const Gallery = () => {
  return (
    <section id="gallery" className="bg-[#12060D] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ✅ Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-[#D6336C] text-xs mb-6">
            Captured Memories
          </p>

          <h2 className="text-4xl md:text-6xl font-serif text-[#FFF5F7]">
            Visual <span className="text-[#E6B566]">Gallery</span>
          </h2>
        </motion.div>

        {/* ✅ Dynamic Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => {
            // Give different cards different spanning configurations for an elegant layout
            const isLarge = index === 0 || index === 3;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden rounded-3xl group shadow-2xl cursor-pointer ${
                  isLarge ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                style={{ height: "420px" }}
              >
                {/* Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B0F1B]/90 via-[#2B0F1B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-xs uppercase tracking-[4px] text-[#D6336C] mb-2 font-semibold">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-serif text-[#E6B566] font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {item.title}
                  </h3>
                  <div className="w-10 h-[2px] bg-[#E6B566] mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </div>
                
                {/* Static Subtle Border */}
                <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Gallery;