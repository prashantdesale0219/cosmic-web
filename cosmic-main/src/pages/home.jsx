/*  src/pages/Home.jsx  */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import SmartEnergySolutions from "../components/SmartEnergySolutions";
import Portfolio from "../components/Portfolio";
import SolarJourney from "../components/SolarJourney";
import FaqSection from "../components/FaqSection";
import CO2Section from "../components/CO2Section";
import CO2Counter from "../components/CO2Counter";
import CompanyIntro from "../components/CompanyIntro";
import VideoHero from "../components/VideoHero";
import TimelineSection from "../components/TimelineSection";
import TestimonialVideo from "../components/TestimonialVideo";
import { useAppContext } from "../context/AppContext";

// Import necessary icons for static SolarJourney component
import {
  CalculatorIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Home = () => {
  // Get data and functions from context
  const { 
    fetchHomepageData, 
    heroSlides,
    energySolutions,
    products,
    projects,
    testimonials,
    teamMembers,
    blogPosts,
    faqs,
    settings,
    loading 
  } = useAppContext();
  
  // Fetch homepage data when component mounts
  useEffect(() => {
    fetchHomepageData();
  }, []);
  
  // Fallback solutions data if API fails
  const fallbackSolutions = [
    {
      title: "Residential",
      description: "Perfect for homes and small properties",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      link: "/products/solar-panels",
    },
    {
      title: "Commercial",
      description: "Ideal for businesses and organizations",
      image:
        "https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&w=800&q=80",
      link: "/solutions",
    },
    {
      title: "Industrial",
      description: "Large-scale solar power plants",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      link: "/solutions",
    },
  ];
  
  // Use API data or fallback to static data
  const solutions = energySolutions && energySolutions.length > 0 ? energySolutions : fallbackSolutions;

  return (
    <div className="min-h-screen bg-transparent relative overflow-x-hidden">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center z-[-1]"
        style={{
          backgroundImage: 'url("/back_Image.avif")',
          opacity: 0.5,
          backgroundAttachment: "fixed",
        }}
      ></div>

      <div className="flex flex-col w-full">
        {/* ---------- Hero ---------- */}
        <Hero />

        {/* ---------- Smart Energy Solutions ---------- */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <SmartEnergySolutions />
        </div>

        {/* ---------- CompanyIntro ---------- */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <CompanyIntro />
        </div>

        {/* ---------- Portfolio ---------- */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <Portfolio />
        </div>

        {/* ---------- VideoHero ---------- */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <VideoHero />
        </div>
        {/* ---------- Timeline ---------- */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <TimelineSection />
        </div>
        
        {/* ---------- TestimonialVideo ---------- */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <TestimonialVideo />
        </div>

       
        {/* ---------- CO2Section ---------- */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          {/* Static CO2Section */}
          <section className="w-full bg-transparent py-8 sm:py-10 md:py-16">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center px-4 sm:px-6 md:px-6">
              {/* Left Image Column */}
              <div className="order-2 md:order-1 col-span-12 md:col-span-7 flex justify-center md:justify-start overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative w-full h-full rounded-xl overflow-hidden"
                >
                  <motion.img
                    src="/co2emission.png"
                    alt="Solar Energy Solutions"
                    className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] rounded-xl object-cover"
                    initial={{ scale: 1, x: 0 }}
                    animate={{ 
                      x: [0, -10, 10, -5, 5, 0],
                      scale: [1, 1.02, 1, 1.01, 1]
                    }}
                    transition={{ 
                      x: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                      scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.05 }}
                  />
                </motion.div>
              </div>
              {/* Right Content Column */}
              <div className="order-1 md:order-2 col-span-12 md:col-span-5 px-4 md:px-0 mb-6 md:mb-0">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-[1rem] sm:text-[1.1rem] md:text-[1.3rem] font-medium mb-2 flex items-center text-black font-space-grotesk">
                  <span className="text-[0.7rem] sm:text-[0.8rem] mx-1">★</span>
                  Intelligent Solution
                  <span className="text-[0.7rem] sm:text-[0.8rem] mx-1">★</span>
                </motion.p>

                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-[1.8rem] sm:text-[2.2rem] md:text-[3.5rem] font-bold text-black leading-tight sm:leading-snug mb-3 sm:mb-4 font-space-grotesk">
                  CO2 Emission Reduction
                </motion.h2>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] leading-relaxed text-black mb-5 sm:mb-6">
                  Transform Your Energy Use – Reduce CO₂, Restore Nature. Our solar solutions help reduce carbon footprint and contribute to a cleaner environment.
                </motion.p>

                <motion.button 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-1 sm:gap-2 px-5 py-2.5 sm:px-6 md:px-8 sm:py-3 rounded-full bg-[#9fc22f] hover:bg-[#8db327] text-black font-semibold text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] transition-shadow shadow-md">
                  Discover Solar
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </motion.div>
                </motion.button>
              </div>
            </div>
          </section>
        </div>
        
       
         {/* ---------- SolarJourney ---------- */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          {/* Static SolarJourney */}
          <section className="relative overflow-hidden bg-[#f8f9fa] py-24">
            {/* ───────────────── heading */}
            <div className="mx-auto mb-20 max-w-7xl px-4 text-center">
              <p className="mb-3 text-sm uppercase tracking-wider text-gray-600 font-space-grotesk">
                —⚡ End-To-End Services ⚡—
              </p>
              <h2 className="text-4xl font-extrabold text-black sm:text-5xl font-space-grotesk">
                The Solar Journey
              </h2>
            </div>

            {/* ───────────────── steps grid */}
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Step 1 */}
              <div
                className="relative flex flex-col items-center text-center opacity-0 animate-slide-in"
                style={{ animationDelay: '0s' }}
              >
                {/* connector arrow */}
                <img
                  src="/arrow.svg"
                  alt="Arrow"
                  style={{ animationDelay: '0.3s' }}
                  className="absolute right-[-20%] top-[30%] z-10 hidden h-[60px] w-[60px] -translate-y-1/2 transform-gpu animate-arrow animate-color-gradient sm:block lg:h-[80px] lg:w-[80px] lg:right-[-26%]"
                />

                {/* image circle */}
                <div className="relative mb-6 h-44 w-44 overflow-hidden rounded-full shadow-lg transition-transform duration-300 hover:scale-105 animate-border-pulse">
                  <span
                    style={{ animationDelay: '0.3s' }}
                    className="absolute -right-3 -top-3 grid h-9 w-9 place-items-center rounded-full bg-[#9fc22f]/20 text-[11px] font-semibold text-black animate-pulse-in z-10"
                  >
                    01
                  </span>
                  <img
                    src="/site-assessment.jpg"
                    alt="Site Assessment"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <h3
                  style={{ animationDelay: '0.45s' }}
                  className="mb-2 text-lg font-semibold opacity-0 animate-fade-up font-space-grotesk"
                >
                  Site Assessment
                </h3>
                <p
                  style={{ animationDelay: '0.55s' }}
                  className="mx-auto max-w-xs text-sm text-gray-600 opacity-0 animate-fade-up"
                >
                  We evaluate your property to determine the optimal solar panel placement and system design.
                </p>
              </div>

              {/* Step 2 */}
              <div
                className="relative flex flex-col items-center text-center opacity-0 animate-slide-in"
                style={{ animationDelay: '0.2s' }}
              >
                {/* connector arrow */}
                <img
                  src="/arrow.svg"
                  alt="Arrow"
                  style={{ animationDelay: '0.5s' }}
                  className="absolute right-[-20%] top-[30%] z-10 hidden h-[60px] w-[60px] -translate-y-1/2 transform-gpu animate-arrow animate-color-gradient sm:block lg:h-[80px] lg:w-[80px] lg:right-[-26%]"
                />

                {/* image circle */}
                <div className="relative mb-6 h-44 w-44 overflow-hidden rounded-full shadow-lg transition-transform duration-300 hover:scale-105 animate-border-pulse">
                  <span
                    style={{ animationDelay: '0.5s' }}
                    className="absolute -right-3 -top-3 grid h-9 w-9 place-items-center rounded-full bg-[#9fc22f]/20 text-[11px] font-semibold text-black animate-pulse-in z-10"
                  >
                    02
                  </span>
                  <img
                    src="/solar_design.png"
                    alt="Agreement"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <h3
                  style={{ animationDelay: '0.65s' }}
                  className="mb-2 text-lg font-semibold opacity-0 animate-fade-up font-space-grotesk"
                >
                  Agreement
                </h3>
                <p
                  style={{ animationDelay: '0.75s' }}
                  className="mx-auto max-w-xs text-sm text-gray-600 opacity-0 animate-fade-up"
                >
                  We provide a detailed proposal and agreement outlining system specifications and costs.
                </p>
              </div>

              {/* Step 3 */}
              <div
                className="relative flex flex-col items-center text-center opacity-0 animate-slide-in"
                style={{ animationDelay: '0.4s' }}
              >
                {/* connector arrow */}
                <img
                  src="/arrow.svg"
                  alt="Arrow"
                  style={{ animationDelay: '0.7s' }}
                  className="absolute right-[-20%] top-[30%] z-10 hidden h-[60px] w-[60px] -translate-y-1/2 transform-gpu animate-arrow animate-color-gradient sm:block lg:h-[80px] lg:w-[80px] lg:right-[-26%]"
                />

                {/* image circle */}
                <div className="relative mb-6 h-44 w-44 overflow-hidden rounded-full shadow-lg transition-transform duration-300 hover:scale-105 animate-border-pulse">
                  <span
                    style={{ animationDelay: '0.7s' }}
                    className="absolute -right-3 -top-3 grid h-9 w-9 place-items-center rounded-full bg-[#9fc22f]/20 text-[11px] font-semibold text-black animate-pulse-in z-10"
                  >
                    03
                  </span>
                  <img
                    src="/installation.jpg"
                    alt="Installation"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <h3
                  style={{ animationDelay: '0.85s' }}
                  className="mb-2 text-lg font-semibold opacity-0 animate-fade-up font-space-grotesk"
                >
                  Installation
                </h3>
                <p
                  style={{ animationDelay: '0.95s' }}
                  className="mx-auto max-w-xs text-sm text-gray-600 opacity-0 animate-fade-up"
                >
                  Our expert team installs your solar system with minimal disruption to your property.
                </p>
              </div>

              {/* Step 4 */}
              <div
                className="relative flex flex-col items-center text-center opacity-0 animate-slide-in"
                style={{ animationDelay: '0.6s' }}
              >
                {/* image circle */}
                <div className="relative mb-6 h-44 w-44 overflow-hidden rounded-full shadow-lg transition-transform duration-300 hover:scale-105 animate-border-pulse">
                  <span
                    style={{ animationDelay: '0.9s' }}
                    className="absolute -right-3 -top-3 grid h-9 w-9 place-items-center rounded-full bg-[#9fc22f]/20 text-[11px] font-semibold text-black animate-pulse-in z-10"
                  >
                    04
                  </span>
                  <img
                    src="/quality-assurance.jpg"
                    alt="Quality Assurance"
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <h3
                  style={{ animationDelay: '1.05s' }}
                  className="mb-2 text-lg font-semibold opacity-0 animate-fade-up font-space-grotesk"
                >
                  Quality Assurance
                </h3>
                <p
                  style={{ animationDelay: '1.15s' }}
                  className="mx-auto max-w-xs text-sm text-gray-600 opacity-0 animate-fade-up"
                >
                  We conduct thorough testing and quality checks to ensure your system performs optimally.
                </p>
              </div>
            </div>

            {/* ───────────────── CTA buttons */}
            <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-center">
              <Link
                 to="/services"
                 style={{ animationDelay: "0.8s" }}
                 className="group relative overflow-hidden w-full animate-fade-up rounded-full bg-[#9fc22f] px-8 py-3 text-sm font-semibold text-black shadow-md border-2 border-transparent hover:border-[#9fc22f] transition-all duration-300 sm:w-auto"
               >
                 <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Explore All Services</span>
                 <span className="absolute inset-0 bg-[#003e63] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
               </Link>
              <a
                href="tel:+652582355889"
                style={{ animationDelay: "1s" }}
                className="group flex w-full animate-fade-up items-center justify-center rounded-full border border-black px-8 py-3 text-sm font-semibold text-black shadow-sm transition hover:-translate-y-0.5 hover:bg-black/5 sm:w-auto"
              >
                Talk To Us
                <span className="ml-2 text-xs font-medium group-hover:underline">
                  (+65) 258 235 5889
                </span>
              </a>
            </div>

            {/* ───────────────── keyframes */}
            <style>{`
              @keyframes slide-in{0%{opacity:0;transform:translateX(-20px)}100%{opacity:1;transform:translateX(0)}}
              @keyframes fade-up{0%{opacity:0;transform:translateY(8px)}100%{opacity:1;transform:translateY(0)}}
              @keyframes pulse-in{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
              @keyframes arrow-move{0%,100%{transform:translateX(0)}50%{transform:translateX(15px)}}
              @keyframes arrow-hue{0%{filter:hue-rotate(0deg)}50%{filter:hue-rotate(-45deg)}100%{filter:hue-rotate(0deg)}}
              @keyframes color-change{0%{filter:brightness(1) sepia(0.3) hue-rotate(70deg) saturate(1.5)}25%{filter:brightness(1.2) sepia(0.4) hue-rotate(80deg) saturate(1.7)}50%{filter:brightness(1.1) sepia(0.5) hue-rotate(90deg) saturate(1.9)}75%{filter:brightness(1.2) sepia(0.4) hue-rotate(80deg) saturate(1.7)}100%{filter:brightness(1) sepia(0.3) hue-rotate(70deg) saturate(1.5)}}
              @keyframes border-pulse{0%{box-shadow:0 0 0 0 rgba(159, 194, 47, 0.6)}50%{box-shadow:0 0 0 8px rgba(159, 194, 47, 0.2)}100%{box-shadow:0 0 0 0 rgba(159, 194, 47, 0)}}

              .animate-slide-in{animation:slide-in .6s cubic-bezier(.33,.99,.58,1) forwards}
              .animate-fade-up{animation:fade-up .5s ease-out forwards}
              .animate-pulse-in{animation:pulse-in 1.5s ease-in-out infinite}
              .animate-arrow{animation:arrow-move 1.6s ease-in-out infinite}
              .animate-color-change{animation:color-change 3s linear infinite}
              .animate-border-pulse{animation:border-pulse 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite}
            `}</style>
          </section>
        </div>


        {/* ---------- FAQ Section ---------- */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <FaqSection />
        </div>

        

        {/* ---------- Solar Solutions ---------- */}
        <section className="w-full bg-white py-12 sm:py-16 md:py-20 mt-8 sm:mt-12 md:mt-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12 md:mb-16 text-center">
            </div>

            {/* <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((s) => (
                <div
                  key={s.title}
                  className="group relative h-80 sm:h-96 overflow-hidden rounded-2xl shadow-lg transition hover:scale-105"
                >
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black to-transparent opacity-70" />
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-6">
                    <h3 className="mb-2 text-xl sm:text-2xl font-bold text-white">
                      {s.title}
                    </h3>
                    <p className="mb-3 sm:mb-4 text-yellow-green-100 opacity-90 text-sm sm:text-base">
                      {s.description}
                    </p>
                    <Link
                      to={s.link}
                      className="inline-flex items-center rounded-full bg-yellow-green-400 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-yellow-green-950 transition hover:bg-yellow-green-500"
                    >
                      Learn more
                      <svg
                        className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
