// src/components/SmartEnergySolutions.jsx
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "../context/AppContext";
import {
  HomeModernIcon,
  BoltIcon,
  TruckIcon,
  BuildingOffice2Icon,
  Battery100Icon,
  ArrowUpRightIcon
} from "@heroicons/react/24/outline";

// Map icons to feature types
const iconMap = {
  "rooftop": HomeModernIcon,
  "ev": BoltIcon,
  "rural": TruckIcon,
  "industrial": BuildingOffice2Icon,
  "concentrated": Battery100Icon,
  "default": HomeModernIcon
};

// Fallback features if API fails
const fallbackFeatures = [
  {
    title: "Rooftop Solar",
    Icon: HomeModernIcon,
    img:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Solar EV Chargers",
    Icon: BoltIcon,
    img:
      "https://images.unsplash.com/photo-1543328721-cd7f2a85c433?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Rural Solar Solutions",
    Icon: TruckIcon,
    img:
      "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Industrial Solar",
    Icon: BuildingOffice2Icon,
    img:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Concentrated Solar",
    Icon: Battery100Icon,
    img:
      "https://images.unsplash.com/photo-1502052399018-77dd3ec62b07?auto=format&fit=crop&w=1600&q=80"
  }
];

const ROTATE_MS = 5000;

export default function SmartEnergySolutions() {
  const { energySolutions, loading } = useAppContext();
  const [active, setActive] = useState(2);
  const timerRef = useRef(null);
  
  // Use API data or fallback to static data
  const features = energySolutions && energySolutions.length > 0
    ? energySolutions.map(solution => ({
        title: solution.title,
        Icon: iconMap[solution.type?.toLowerCase()] || iconMap.default,
        img: solution.image || fallbackFeatures[0].img
      }))
    : fallbackFeatures;

  const startTimer = () =>
    (timerRef.current = setInterval(
      () => setActive((i) => (i + 1) % features.length),
      ROTATE_MS
    ));
  const stopTimer = () => clearInterval(timerRef.current);

  useEffect(() => {
    startTimer();
    return () => stopTimer();
  }, []);

  return (
    <section className="relative bg-[#f3faf6] py-24 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f3faf6] via-[#edfbf1] to-[#f0fff5] opacity-80"></div>
      
      {/* Animated mesh grid background */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4ade80" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <img
        src="https://images.unsplash.com/photo-1509395107-0ebd10a326dd?auto=format&fit=crop&w=900&q=80"
        alt=""
        className="pointer-events-none select-none absolute left-4 bottom-0 w-[600px] max-w-[70vw] rounded-2xl shadow-2xl z-10"
      />

      {/* 3D Rotating cube */}
      <motion.div 
        className="absolute left-20 bottom-80 w-16 h-16 z-0"
        animate={{ 
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{ 
          transformStyle: "preserve-3d",
          transformOrigin: "center center"
        }}
      >
        {/* Cube faces */}
        <div className="absolute inset-0 bg-lime-300/30 transform translateZ(8px)"></div>
        <div className="absolute inset-0 bg-lime-400/30 transform rotateY(180deg) translateZ(8px)"></div>
        <div className="absolute inset-0 bg-lime-500/30 transform rotateY(90deg) translateZ(8px)"></div>
        <div className="absolute inset-0 bg-lime-200/30 transform rotateY(-90deg) translateZ(8px)"></div>
        <div className="absolute inset-0 bg-lime-100/30 transform rotateX(90deg) translateZ(8px)"></div>
        <div className="absolute inset-0 bg-lime-600/30 transform rotateX(-90deg) translateZ(8px)"></div>
      </motion.div>

      {/* Main animated half circle decorations */}
      <motion.div 
        className="absolute left-8 bottom-40 w-32 h-32 bg-lime-300/50 rounded-full z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1.2, 1], 
          opacity: [0, 0.8, 0.5],
          x: [0, -20, -10],
          y: [0, 20, 10]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          repeatType: "reverse", 
          ease: "easeInOut" 
        }}
        style={{ clipPath: "circle(50% at 0% 100%)" }}
      />

      <motion.div 
        className="absolute left-24 bottom-52 w-24 h-24 bg-lime-500/30 rounded-full z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1.1, 0.9], 
          opacity: [0, 0.7, 0.4],
          x: [0, 10, 5],
          y: [0, -10, -5]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          repeatType: "reverse", 
          ease: "easeInOut",
          delay: 0.5
        }}
        style={{ clipPath: "circle(50% at 100% 100%)" }}
      />

      {/* Additional decorative elements */}
      <motion.div 
        className="absolute left-4 bottom-76 w-16 h-16 bg-lime-400/20 rounded-full z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1.3, 0.8], 
          opacity: [0, 0.6, 0.3],
          x: [0, 15, 5],
          y: [0, -5, -15]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          repeatType: "reverse", 
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div 
        className="absolute left-40 bottom-44 w-20 h-20 bg-lime-200/40 rounded-full z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1.2, 0.9], 
          opacity: [0, 0.5, 0.3],
          x: [0, -10, -5],
          y: [0, 10, 5]
        }}
        transition={{ 
          duration: 4.5, 
          repeat: Infinity, 
          repeatType: "reverse", 
          ease: "easeInOut",
          delay: 0.7
        }}
        style={{ clipPath: "circle(50% at 50% 50%)" }}
      />

      {/* Floating dots with trails */}
      <motion.div 
        className="absolute left-16 bottom-64 w-3 h-3 bg-lime-500 rounded-full z-0"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.7, 1, 0.7],
          boxShadow: [
            "0 0 0 0 rgba(132, 204, 22, 0)",
            "0 0 0 10px rgba(132, 204, 22, 0.1)",
            "0 0 0 0 rgba(132, 204, 22, 0)"
          ]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      <motion.div 
        className="absolute left-32 bottom-56 w-2 h-2 bg-lime-600 rounded-full z-0"
        animate={{ 
          y: [0, -10, 0],
          opacity: [0.5, 0.8, 0.5],
          boxShadow: [
            "0 0 0 0 rgba(132, 204, 22, 0)",
            "0 0 0 8px rgba(132, 204, 22, 0.1)",
            "0 0 0 0 rgba(132, 204, 22, 0)"
          ]
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.3
        }}
      />

      <motion.div 
        className="absolute left-48 bottom-72 w-4 h-4 bg-lime-300 rounded-full z-0"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.6, 0.9, 0.6],
          boxShadow: [
            "0 0 0 0 rgba(132, 204, 22, 0)",
            "0 0 0 12px rgba(132, 204, 22, 0.1)",
            "0 0 0 0 rgba(132, 204, 22, 0)"
          ]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1.5
        }}
      />

      {/* Animated lines */}
      <svg className="absolute left-0 bottom-60 w-40 h-40 z-0" viewBox="0 0 100 100">
        <motion.path
          d="M10,50 Q30,30 50,50 T90,50"
          stroke="#84cc16"
          strokeWidth="0.5"
          fill="transparent"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: [0, 1, 0],
            opacity: [0, 0.3, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </svg>

      {/* Glow effects */}
      <div className="absolute left-20 bottom-60 w-40 h-40 bg-lime-300/10 rounded-full blur-xl z-0"></div>
      <div className="absolute left-10 bottom-48 w-60 h-60 bg-lime-500/5 rounded-full blur-3xl z-0"></div>
      
      {/* Radial gradient glow */}
      <div className="absolute left-30 bottom-50 w-80 h-80 rounded-full z-0" 
        style={{ 
          background: "radial-gradient(circle, rgba(132, 204, 22, 0.1) 0%, rgba(132, 204, 22, 0.05) 40%, rgba(132, 204, 22, 0) 70%)"
        }}>
      </div>
      
      {/* Animated gradient border */}
      <motion.div 
        className="absolute left-12 bottom-36 w-36 h-36 rounded-full z-0 border-2 border-transparent"
        animate={{ 
          rotate: [0, 360],
          scale: [0.9, 1.1, 0.9]
        }}
        transition={{ 
          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{ 
          background: "linear-gradient(90deg, rgba(132, 204, 22, 0.3) 0%, rgba(163, 230, 53, 0.1) 50%, rgba(132, 204, 22, 0.3) 100%)",
          backgroundSize: "200% 200%",
          animation: "gradientShift 5s linear infinite",
          clipPath: "circle(50% at 30% 70%)"
        }}
      />

      <div className="mx-auto max-w-[1700px] px-6 lg:pl-10 lg:pr-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* LEFT */}
          <div className="lg:col-span-3">
            <p className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-700 font-space-grotesk">
              <span className="h-px flex-1 bg-gray-400" /> ✷ Cleaner Future ✷{" "}
              <span className="h-px flex-1 bg-gray-400" />
            </p>
            <h2 className="mb-8 text-[48px] leading-[1.1] font-extrabold font-space-grotesk relative z-20">
              <span className="relative inline-block px-2 py-1">
                <span className="relative z-10 text-gray-900">Smart Power</span>
                <span className="absolute inset-0  rounded-lg -z-10 "></span>
              </span>
              <br />
              <span className="relative inline-block px-2 py-1 mt-2">
                <span className="relative z-10 text-gray-900">Solutions</span>
                <span className="absolute inset-0  rounded-lg -z-10 "></span>
              </span>
            </h2>

            <Link
              to="/services"
              className="group relative overflow-hidden inline-flex items-center gap-3 rounded-full bg-lime-300/70 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm border-2 border-transparent hover:border-[#cae28e] transition-all duration-300"
            >
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">All Services</span>
              <span className="absolute inset-0 bg-black transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gray-900 text-white group-hover:bg-[#cae28e] transition-all duration-300 relative z-10">
                <ArrowUpRightIcon className="h-4 w-4 group-hover:text-black transition-all duration-300" />
              </span>
            </Link>
          </div>

          {/* MIDDLE – feature list */}
          <div className="lg:col-span-4 space-y-2">
            {features.map(({ title, Icon }, i) => {
              const isActive = i === active;
              return (
                <motion.button
                  key={title}
                  onMouseEnter={() => {
                    stopTimer();
                    setActive(i);
                  }}
                  onMouseLeave={startTimer}
                  onClick={() => setActive(i)}
                  initial={{ opacity: isActive ? 1 : 0.7 }}
                  animate={{
                    opacity: 1,
                    scale: isActive ? 1.02 : 1
                  }}
                  whileHover={{ scale: isActive ? 1.04 : 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`relative flex w-full items-center justify-between gap-4 py-7 pl-8 pr-6 text-left text-xl font-semibold font-space-grotesk ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "text-gray-900 hover:text-gray-900/80"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-bar"
                      className="absolute left-0 top-0 h-full w-1.5 bg-lime-400"
                    />
                  )}
                  <Icon
                    className={`h-9 w-9 flex-shrink-0 ${
                      isActive ? "text-white" : "text-gray-900"
                    }`}
                  />
                  <span className="flex-1">{title}</span>
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="grid h-11 w-11 place-items-center rounded-full bg-lime-300/90"
                      >
                        <ArrowUpRightIcon className="h-5 w-5 text-gray-900" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>

          {/* RIGHT – hero */}
          <figure className="relative col-span-full h-[560px] overflow-hidden shadow-lg lg:col-span-5 rounded-3xl">
            <AnimatePresence mode="wait">
              {features.map((f, idx) =>
                idx === active ? (
                  <motion.img
                    key={f.title}
                    src={f.img}
                    alt={f.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                ) : null
              )}
            </AnimatePresence>
          </figure>
        </div>
      </div>
    </section>
  );
}
