import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { Suspense, useRef } from "react";

/* ===========================
   💍 Rose Gold Rotating Ring
=========================== */
function Ring() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.008;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1.3, 0.3, 64, 200]} />
      <meshStandardMaterial
        color="#E6B566"
        metalness={1}
        roughness={0.25}
      />
    </mesh>
  );
}

/* ===========================
   💖 ABOUT SECTION
=========================== */
const AboutSection = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center bg-[#3A1424] overflow-hidden">

      {/* ✅ Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3A1424] via-[#2B0F1B] to-[#3A1424]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* ✅ LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[10px] text-[#D6336C] text-xs mb-6">
            About Our Atelier
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FFF5F7] leading-tight mb-6">
            Designing Weddings <br />
            <span className="text-[#E6B566]">
              With Passion & Elegance
            </span>
          </h2>

          <p className="text-[#E8C9D2] text-base md:text-lg leading-relaxed mb-6">
            We are a boutique luxury wedding studio dedicated to crafting
            unforgettable celebrations. Every wedding we design is a reflection
            of love, artistry, and timeless sophistication.
          </p>

          <p className="text-[#E8C9D2] text-base md:text-lg leading-relaxed mb-10">
            From intimate ceremonies to grand destination events, we curate
            every detail with precision and heart — turning your dream into
            a beautifully orchestrated reality.
          </p>

          <div className="flex gap-6 flex-wrap">
            <button className="px-8 py-3 rounded-full bg-[#D6336C] text-white font-semibold hover:bg-[#b02a57] transition duration-300">
              Discover More
            </button>

            <button className="px-8 py-3 rounded-full border border-[#E6B566] text-[#E6B566] hover:bg-[#E6B566] hover:text-[#2B0F1B] transition duration-300">
              Our Portfolio
            </button>
          </div>
        </motion.div>

        {/* ✅ RIGHT SIDE RING */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative h-[400px] md:h-[500px] flex items-center justify-center"
        >

          {/* ✅ Subtle Glow Behind Ring */}
          <div className="absolute w-72 h-72 bg-[#D6336C20] rounded-full blur-3xl"></div>

          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={1.3} />
            <directionalLight position={[3, 3, 3]} intensity={2} />
            <Suspense fallback={null}>
              <Ring />
              <Environment preset="sunset" />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>

        </motion.div>

      </div>

    </section>
  );
};

export default AboutSection;