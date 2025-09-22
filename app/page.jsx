"use client";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/Title";
import { ACTIVITIES, activities, activities2, home, strategy } from "@/public/assets/data/dummydata";
import BlogCard from "@/components/BlogCard";
import Brand from "@/components/FAQs";
import { Card2, Card3 } from "@/components/Card";
import Image from "next/image";
import Text from "@/components/Text";
import { FaDotCircle } from "react-icons/fa";
import { DotIcon } from "@/public/assets/icons/icons";
import FAQs from "@/components/FAQs";
import Link from "next/link";
import Testimonial2 from "@/components/Testimonial copy";
import Form from "@/components/sections/Form";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import smoothscroll from "smoothscroll-polyfill";
import "aos/dist/aos.css";
import AOS from "aos";
import { Icon } from "@iconify/react";



export default function Home() {
  return (
    <>
      <Head>
        <title>
          The Association of Resident Doctors (ARD) at Delta State University
          Teaching Hospital (DELSUTH){" "}
        </title>
      </Head>
      <section
        className="!h-[85vh] relative opacity-[.96]"
        style={{
          background:
            "radial-gradient(ellipse at top left, rgba(132,90,255,0.2) 0%, rgba(129,212,250,0.2) 40%, #fff 50%, rgba(129,212,250,0.17) 80%, rgba(132,90,255,0.2) 100% )",
        }}
      >
        <div className="px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="md:flex md:items-center md:justify-between w-full">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1
                className="text-4xl md:text-[50px] font-bold leading-tight mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              >
                Association of Resident Doctors{" "}
                <span className="text-orange-300">DELSUTH</span>
              </motion.h1>
              <motion.p
                className="text-xl mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
              >
                Advancing medical excellence, welfare, and healthcare in Delta
                State.
              </motion.p>
              <motion.div
                className="flex space-x-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
              >
                <a
                  href="#about"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all"
                >
                  Learn More
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all"
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
            <motion.div
              className="hidden md:block md:w-1/2 h-full"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div
                className="relative w-full h-full"
                style={{ maxHeight: "70vh" }}
              >
                <motion.img
                  src="/assets/images/image.png"
                  alt="Medical Team"
                  className="rounded-lg w-full h-full object-cover object-top"
                  style={{
                    maxHeight: "70vh",
                    objectFit: "cover",
                    boxShadow: "10px 12px 48px 0 rgba(30, 41, 59, 0.38)",
                  }}
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                />
                <motion.div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: "rgba(30, 41, 59, 0.25)",
                    pointerEvents: "none",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="about" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              About ARD DELSUTH
            </motion.h2>
            <motion.div
              className="w-20 h-1 bg-blue-600 mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
            />
          </div>
          <div className="md:flex md:items-center md:space-x-8">
            <motion.div
              className="md:w-1/2 mb-8 md:mb-0"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <img
                src="http://static.photos/medical/640x360/2"
                alt="Hospital Building"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                The Association of Resident Doctors (ARD) at Delta State
                University Teaching Hospital (DELSUTH) unites doctors in
                residency training, along with other doctors of similar ranks
                and house officers.
              </motion.p>
              <motion.p
                className="text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our mission is to advance the welfare of doctors, uphold
                outstanding residency training, promote efficient hospital
                operations, and advocate for quality healthcare in Delta State.
              </motion.p>
              <motion.p
                className="text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                We actively engage in policy and collaborate with aligned
                organizations at the state and national levels to improve health
                and training outcomes.
              </motion.p>
              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-blue-100 p-4 rounded-lg">
                  {/* Use your preferred icon library here */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-600"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z"
                      opacity=".4"
                    />
                    <path
                      fill="currentColor"
                      d="M16.5 11c.83 0 1.5-.67 1.5-1.5S17.33 8 16.5 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5Zm0 2c-1.12 0-3.34.56-4.5 1.5C13.16 15.44 15.38 16 16.5 16c1.12 0 3.34-.56 4.5-1.5-1.16-.94-3.38-1.5-4.5-1.5ZM7.5 11c.83 0 1.5-.67 1.5-1.5S8.33 8 7.5 8 6 8.67 6 9.5 6.67 11 7.5 11Zm0 2c-1.12 0-3.34.56-4.5 1.5C4.16 15.44 6.38 16 7.5 16c1.12 0 3.34-.56 4.5-1.5-1.16-.94-3.38-1.5-4.5-1.5Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Affiliations</h3>
                  <p className="text-gray-700">
                    Nigerian Association of Resident Doctors (NARD) &amp;
                    Nigerian Medical Association (NMA)
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="activities" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Activities
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 max-w-3xl mx-auto mt-4">
              We engage in various activities to promote medical excellence,
              welfare, and community health.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities2.map((act, i) => (
              <div
                key={act.desc}
                className="bg-white p-6 rounded-lg shadow-md card-hover transition-all"
                // initial={{ opacity: 0, y: 40 }}
                // whileInView={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.5, delay: act.delay/1000 }}
                // viewport={{ once: true }}
              >
                <div
                  className={`  w-12 h-12 rounded-full flex items-center justify-center mb-4 `}
                  style={{
                    background: `${act.bg}`
                  }}
                >
                  <Icon
                    icon={act.icon}
                    color={`${act.color}`}
                    width={28}
                    height={28}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {act.title}
                </h3>
                <p className="text-gray-700">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Banner /> */}
      {/* <ShowCase /> */}
      <Form />
      <FAQs />

      {/* <div className='text-center'>
      <Title title='Latest news & articles' />
    </div>
    <BlogCard /> */}
    </>
  );
}
