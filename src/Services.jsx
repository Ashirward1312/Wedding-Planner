import { motion } from "framer-motion";
import {
  CalendarHeart,
  Sparkles,
  Camera,
  Music,
  UtensilsCrossed,
  Users,
} from "lucide-react";
import { useRef } from "react";

const services = [
  {
    number: "01",
    title: "Wedding Planning",
    icon: CalendarHeart,
    description:
      "From concept to celebration, we orchestrate every detail with precision and elegance.",
  },
  {
    number: "02",
    title: "Luxury Decor",
    icon: Sparkles,
    description:
      "Bespoke floral artistry and refined ambiance design crafted for timeless beauty.",
  },
  {
    number: "03",
    title: "Photo & Films",
    icon: Camera,
    description:
      "Cinematic storytelling capturing emotions and unforgettable memories.",
  },
  {
    number: "04",
    title: "Entertainment",
    icon: Music,
    description:
      "Curated performances and immersive experiences elevating your celebration.",
  },
  {
    number: "05",
    title: "Fine Catering",
    icon: UtensilsCrossed,
    description:
      "Exquisite culinary journeys designed for unforgettable taste experiences.",
  },
  {
    number: "06",
    title: "Guest Experience",
    icon: Users,
    description:
      "Luxury hospitality ensuring seamless comfort for every guest.",
  },
];

const Services = () => {
  return (
    <section className="relative bg-[#12060D] py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ✅ Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-[#FFF5F7]">
            Premium <span className="text-[#E6B566]">Services</span>
          </h2>
        </motion.div>

        {/* ✅ Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {services.map((service, index) => {
            const Icon = service.icon;
            const cardRef = useRef(null);

            const handleMouseMove = (e) => {
              const card = cardRef.current;
              const rect = card.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              const rotateX = -(y - rect.height / 2) / 20;
              const rotateY = (x - rect.width / 2) / 20;

              card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

              card.style.setProperty("--x", `${x}px`);
              card.style.setProperty("--y", `${y}px`);
            };

            const handleMouseLeave = () => {
              cardRef.current.style.transform =
                "rotateX(0deg) rotateY(0deg)";
            };

            return (
              <motion.div
                key={index}
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative p-10 rounded-3xl bg-[#2B0F1B] border border-transparent 
                           transition-transform duration-300 
                           group overflow-hidden"
                style={{
                  backgroundImage:
                    "linear-gradient(#2B0F1B, #2B0F1B), linear-gradient(135deg, #D6336C, #E6B566)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >

                {/* ✅ Spotlight */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition duration-300"
                  style={{
                    background: `radial-gradient(300px circle at var(--x) var(--y),
                      rgba(230,181,102,0.2), transparent 60%)`,
                  }}
                />

                {/* ✅ Big Number */}
                <span className="absolute top-6 right-8 text-7xl font-serif text-[#E6B566]/10">
                  {service.number}
                </span>

                {/* ✅ Icon with Rotation */}
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="mb-6 w-14 h-14 flex items-center justify-center rounded-full bg-[#D6336C]/20"
                >
                  <Icon size={28} className="text-[#E6B566]" />
                </motion.div>

                {/* ✅ Title */}
                <h3 className="text-2xl font-serif text-[#E6B566] mb-4">
                  {service.title}
                </h3>

                {/* ✅ Description */}
                <p className="text-[#E8C9D2] leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Services;