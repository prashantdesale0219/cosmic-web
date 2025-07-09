// src/pages/About.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AwardsTimeline from "../components/AwardsTimeline";
import ServicesSection from "../components/ServicesSection";
import SolarDesignSection from "../components/SolarDesignSection";
import TeamSection from "../components/TeamSection";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <div className="min-h-screen font-['Space_Grotesk']">
      {/* HERO SECTION */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
        className="relative bg-cover bg-center h-64 sm:h-80 md:h-[300px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://zolar.wpengine.com/wp-content/uploads/2025/01/zolar-breadcrumb-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About</h1>
          <nav className="flex items-center justify-center space-x-2 text-sm">
            <Link to="/" className="hover:text-accent-500 transition">
              Home
            </Link>
            <span>—</span>
            <span className="text-accent-500">About</span>
          </nav>
        </div>
      </motion.header>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <motion.header
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-700 mb-4">
              About Us :
            </h2>
            <p>
              Cosmic Powertech is a Surat-based solar energy company founded in
              2018 by brothers Chaitanya Shah and Charchil Shah. Established
              with the vision of making clean energy accessible and affordable
              across India, the company has rapidly emerged as a trusted
              provider of end-to-end renewable energy solutions for both
              residential and commercial sectors.
            </p>
            <p>
              Specializing in a diverse portfolio that includes rooftop solar
              installations, ongrid and off-grid power plants, solar water
              heaters, and custom solutions for industries such as textiles,
              hospitality, pharmaceuticals, petroleum, FMCG, PACKAGING. Cosmic
              Powertech offers comprehensive services from initial consultation
              to installation and long-term maintenance. Their in-house team of
              skilled engineers and sales professionals ensure high- quality
              execution and unmatched responsiveness, positioning the company to
              meet the evolving demands of India’s growing solar market.{" "}
            </p>
            <div className="h-1 w-24 bg-accent-500 mx-auto rounded-full mt-4"></div>
          </motion.header>

          <motion.header
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-700 mb-4">
              Who we are ?
            </h2>
            <p>
              Cosmic Powertech is a Surat-based solar energy company
              transforming the way India powers its future. Founded by Chaitanya
              and Charchil Shah, we specialize in end-to-end renewable energy
              solutions—rooftop systems, solar water heaters, and on/off-grid
              power plants—designed for homes, industries, and commercial
              spaces. With a focus on quality, affordability, and long-term
              service, we make clean energy reliable and accessible across
              India.
            </p>

            <div className="h-1 w-24 bg-accent-500 mx-auto rounded-full mt-4"></div>
          </motion.header>
          {/* Our Expertise Grid Section */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold text-center text-primary-700 mb-8">
              Our Expertise
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-center mb-10">
              We are hands down our expertise in product distributorship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 - Solar Solutions */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group aspect-square">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src="/solar-panels.jpg"
                    alt="Solar Solutions"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-bold text-lg">
                      Solar Solutions
                    </h4>
                  </div>
                </div>
              </div>

              {/* Card 2 - Motors and Gearboxes */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group aspect-square">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src="/installation.jpg"
                    alt="Motors and Gearboxes"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-bold text-lg">
                      Motors and Gearboxes
                    </h4>
                  </div>
                </div>
              </div>

              {/* Card 3 - Switchgear */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group aspect-square">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src="/quality-assurance.jpg"
                    alt="Switchgear"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-bold text-lg">Switchgear</h4>
                  </div>
                </div>
              </div>

              {/* Card 4 - Cables */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group aspect-square">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src="/site-assessment.jpg"
                    alt="Cables"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-bold text-lg">Cables</h4>
                  </div>
                </div>
              </div>

              {/* Card 5 - Industrial Categories */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group aspect-square">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src="/back_Image.avif"
                    alt="Industrial Categories"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-bold text-lg">
                      Industrial Categories
                    </h4>
                  </div>
                </div>
              </div>

              {/* Card 6 - Energy Solutions */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group aspect-square">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src="/newsimage.jpeg"
                    alt="Energy Solutions"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-white font-bold text-lg">
                      Energy Solutions
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <SolarDesignSection />
      </motion.div>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <AwardsTimeline />
      </motion.div>

      {/* VISION, MISSION, VALUES SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        className="bg-white py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Vision */}
            <motion.div variants={fadeUpVariant} className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600">
                Cosmic Powertech envisions a world where sustainable living is second nature, driven by the widespread adoption of clean, abundant renewable energy. We dedicate ourselves to crafting tailored solar solutions that precisely address the distinctive requirements of every household, business, and industry we serve, while simultaneously advancing a healthier planet. Our pledge reaches far beyond routine operations; it infuses each consultation, installation, and maintenance visit with purpose, ensuring measurable, long-term impact. Guided by an unwavering belief in a future powered exclusively by renewable resources, we continually innovate, educate, and collaborate to accelerate India’s transition toward carbon-free prosperity and global clean-energy leadership.

              </p>
            </motion.div>

            {/* Mission */}
            <motion.div variants={fadeUpVariant} className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600">
                The dedication to achieve our vision is a reflected in our
                mission to make solar power accessible and affordable, thereby
                enabling individuals and businesses to participate actively in
                the global shift towards sustainability. By integrating advanced
                technology with personalized service, we aim to empower
                communities to harness solar energy effectively, reducing
                reliance on fossil fuels and promoting environmental
                stewardship. Our efforts are aligned with broader initiatives to
                mitigate climate change and support India’s green energy goals,
                including the ambitious target of achieving 500 GW of renewable
                energy capacity by 2030.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div variants={fadeUpVariant} className="text-left">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Values</h3>
              <p className="text-gray-600">
                At Cosmic Powertech, our values are rooted in sustainability,
                innovation, and people-first service. We are committed to making
                solar energy accessible and affordable, empowering individuals
                and businesses to join India’s green revolution. By integrating
                advanced technology with customized solutions, we help reduce
                dependence on fossil fuels and contribute to the nation’s goal
                of 500 GW renewable energy by 2030. Every project reflects our
                dedication to climate action, engineering excellence, and
                long-term reliability. With a team driven by integrity and
                purpose, we deliver clean energy solutions that not only power
                homes and industries but also inspire a sustainable, greener
                future.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <TeamSection />
      </motion.div>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        className="py-16 px-4 sm:px-6 lg:px-8 bg-white"
      ></motion.section>
    </div>
  );
};

export default About;
