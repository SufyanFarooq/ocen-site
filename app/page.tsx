"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Landing/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Stats from "@/components/Landing/Stats";
import Competitive from "@/components/Landing/Competitive";
import Options from "@/components/Landing/Options";
import Pool from "@/components/Landing/Pool";
import Services from "@/components/Landing/Services";
import CTA from "@/components/Landing/CTA";
import Process from "@/components/Landing/Process";
import Global from "@/components/Landing/Global";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF]">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <Navbar />
      </div>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20">
        <Hero />
      </section>
      {/* Our Process Section */}
      <Process />
      {/* Services Section */}
      <Services />
      {/* Stats Section */}
      <Stats />
      {/* Competitive Edge Section */}
      <Competitive />

      {/* Two Options Section */}
      <Options />

      {/* Supplier Pool Section */}
      <Pool />

      {/* CTA Section */}
      <CTA />

      {/* Global Solutions Section */}
      <Global />

      {/* <Features /> */}
      <Footer />
    </main>
  );
}
