"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Landing/Hero";
import Services from "../components/Landing/Services";
import Stats from "../components/Landing/Stats";
import Process from "../components/Landing/Process";
import Global from "../components/Landing/Global";
import Testimonials from "../components/Landing/Testimonials";
import CTA from "../components/Landing/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Process />
      <Services />
      <Stats />
      <Global />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
