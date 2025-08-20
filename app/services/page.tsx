"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      title: "YIWU MARKET GUIDE",
      image: "services/yiwu-market.jpg",
      description: "Expert guidance through the world's largest wholesale market",
      details: [
        "Personal market navigation and supplier identification",
        "Local language support and cultural expertise",
        "Market research and trend analysis",
        "Supplier verification and background checks",
        "Negotiation support and price optimization"
      ]
    },
    {
      title: "AIRPORT PICKUP",
      image: "services/airport-pickup.jpg",
      description: "Professional airport pickup and transfer services",
      details: [
        "Meet and greet at major Chinese airports",
        "VIP transfer to hotels or business locations",
        "Multi-language driver support",
        "Flexible scheduling and 24/7 availability",
        "Luxury vehicle options available"
      ]
    },
    {
      title: "ORDER TRACKING",
      image: "services/order-tracing.jpg",
      description: "Real-time tracking of your orders throughout the process",
      details: [
        "Live order status updates",
        "Production progress monitoring",
        "Quality control checkpoints",
        "Shipping and logistics tracking",
        "Custom dashboard and reporting"
      ]
    },
    {
      title: "QUALITY CONTROL",
      image: "services/quality-controll.jpg",
      description: "Comprehensive quality assurance and inspection services",
      details: [
        "Pre-production quality planning",
        "In-process quality inspections",
        "Final product quality verification",
        "Testing and certification support",
        "Quality documentation and reports"
      ]
    },
    {
      title: "CONTAINER LOADING",
      image: "services/container-loading.jpg",
      description: "Professional container loading and securing services",
      details: [
        "Professional loading supervision",
        "Proper cargo securing and protection",
        "Container inspection and preparation",
        "Loading documentation and photos",
        "Customs compliance verification"
      ]
    },
    {
      title: "CHINA CUSTOMS",
      image: "services/custom-officer.jpg",
      description: "Expert customs clearance and documentation support",
      details: [
        "Customs documentation preparation",
        "Import/export license assistance",
        "Tariff classification and optimization",
        "Customs clearance coordination",
        "Compliance and regulatory guidance"
      ]
    },
    {
      title: "SHIPPING",
      image: "services/shipping.jpg",
      description: "Reliable shipping solutions worldwide",
      details: [
        "Sea freight and air freight options",
        "Express and standard shipping services",
        "Multi-modal transportation solutions",
        "Insurance and cargo protection",
        "Door-to-door delivery coordination"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#3E5C76]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-[#FF6B35]">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Comprehensive sourcing solutions tailored to your business needs. From market guidance to final delivery, we handle every step of your sourcing journey.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/90 text-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-8">
                  <h4 className="text-xl font-semibold text-[#3E5C76] mb-4">
                    What We Provide:
                  </h4>
                  <ul className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-[#6C7A89] leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#212121] mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#6C7A89] mb-8"
          >
            Contact us today to discuss your sourcing needs and discover how we can help streamline your business operations.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#3E5C76] hover:bg-[#2A4A5F] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl"
          >
            Get Free Quote
          </motion.button>
        </div>
      </section>

      {/* Logistics Services Link */}
      <section className="py-20 bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-[#212121] mb-6"
          >
            Need Shipping & Logistics?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#6C7A89] mb-8"
          >
            Discover our comprehensive FCL & LCL freight shipping services and professional logistics solutions.
          </motion.p>
          <motion.a
            href="/logistics"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block bg-[#3E5C76] hover:bg-[#2A4A5F] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl"
          >
            View Logistics Services
          </motion.a>
        </div>
      </section>
    </div>
    <Footer />
    </main>
  );
}
