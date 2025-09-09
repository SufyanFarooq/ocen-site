"use client";

import { motion } from "framer-motion";
import { Ship, Package, Globe, Shield, Clock, DollarSign } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function FreightShippingPage() {
  const features = [
    {
      icon: Ship,
      title: "FCL Shipping",
      description: "Full Container Load services for large shipments with exclusive container use and faster transit times."
    },
    {
      icon: Package,
      title: "LCL Shipping",
      description: "Less than Container Load services for smaller shipments with cost-effective consolidation."
    },
    {
      icon: Globe,
      title: "Worldwide Coverage",
      description: "Shipping services from Yiwu to destinations worldwide with reliable delivery."
    },
    {
      icon: Shield,
      title: "Professional Loading",
      description: "Safe and efficient cargo loading following international standards for secure transportation."
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Reliable and on-time delivery with experienced logistics team handling your goods."
    },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Cost-efficient shipping solutions with transparent pricing and no hidden fees."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF]">
      <Navbar />
      
      {/* Hero Section */}
      
      <section className="relative pt-32 pb-20 bg-[#3E5C76] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            FCL & LCL <span className="text-[var(--primary)]">Freight Shipping</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-4xl mx-auto"
          >
            Reliable and cost-efficient international shipping solutions from Yiwu to destinations worldwide. 
            Whether you need FCL or LCL services, we ensure your goods are handled with care and delivered on time.
          </motion.p>
        </div>

        {/* Diagonal Edge Cut Overlay - Left Side */}
        <div 
          className="absolute top-0 left-0 w-1/2 h-full bg-[#6C7A89] backdrop-blur-sm z-10"
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)'
          }}
        >
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* FCL Shipping Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#212121] mb-6">
                FCL Shipping <span className="text-[#3E5C76]">(Full Container Load)</span>
              </h2>
              <p className="text-xl text-[#6C7A89] max-w-3xl mx-auto">
                If your shipment is large enough to fill an entire container, FCL shipping is the best choice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 bg-[#F8F9FA] rounded-2xl">
                <div className="w-16 h-16 bg-[#3E5C76] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ship className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#212121] mb-3">Exclusive Container Use</h3>
                <p className="text-[#6C7A89]">Your goods get the entire container to themselves, ensuring maximum security and control.</p>
              </div>
              
              <div className="text-center p-6 bg-[#F8F9FA] rounded-2xl">
                <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#212121] mb-3">Faster Transit Times</h3>
                <p className="text-[#6C7A89]">Fewer stops and direct routes mean your cargo reaches its destination faster.</p>
              </div>
              
              <div className="text-center p-6 bg-[#F8F9FA] rounded-2xl">
                <div className="w-16 h-16 bg-[#3E5C76] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#212121] mb-3">Lower Risk</h3>
                <p className="text-[#6C7A89]">No mixing with other cargo reduces the risk of damage or loss during transit.</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-[#6C7A89] leading-relaxed">
                Yiwu Salah Trading provides secure and efficient FCL freight services from Yiwu to destinations worldwide, 
                ensuring peace of mind for bulk shipments.
              </p>
            </div>
          </motion.div>

          {/* LCL Shipping Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#212121] mb-6">
                LCL Shipping <span className="text-[#3E5C76]">(Less than Container Load)</span>
              </h2>
              <p className="text-xl text-[#6C7A89] max-w-3xl mx-auto">
                For smaller shipments that don't require a full container, LCL shipping offers a flexible and affordable solution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 bg-[#F8F9FA] rounded-2xl">
                <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#212121] mb-3">Cost Savings</h3>
                <p className="text-[#6C7A89]">Share container costs with other shipments, making it more affordable for smaller loads.</p>
              </div>
              
              <div className="text-center p-6 bg-[#F8F9FA] rounded-2xl">
                <div className="w-16 h-16 bg-[#3E5C76] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#212121] mb-3">Flexible Shipping</h3>
                <p className="text-[#6C7A89]">Ship goods without waiting for a full container, providing more flexibility.</p>
              </div>
              
              <div className="text-center p-6 bg-[#F8F9FA] rounded-2xl">
                <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#212121] mb-3">Professional Handling</h3>
                <p className="text-[#6C7A89]">Enjoy reliable delivery with professional handling and care for your cargo.</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-[#6C7A89] leading-relaxed">
                Our LCL freight services from Yiwu are ideal for businesses of all sizes looking for affordable international transport.
              </p>
            </div>
          </motion.div>

          {/* Professional Loading Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#212121] mb-6">
                Professional <span className="text-[#3E5C76]">Goods Loading Services</span>
              </h2>
              <p className="text-xl text-[#6C7A89] max-w-3xl mx-auto">
                Proper loading is essential to protect your products during transport.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-[#F8F9FA] rounded-2xl">
                <h3 className="text-2xl font-semibold text-[#212121] mb-4">Safe & Efficient Loading</h3>
                <p className="text-[#6C7A89] leading-relaxed">
                  We provide safe and efficient cargo loading services to maximize container space, reduce risk of damage, 
                  and ensure smooth shipping. From fragile items to oversized goods, our team follows international 
                  loading standards for secure transportation.
                </p>
              </div>
              
              <div className="p-6 bg-[#F8F9FA] rounded-2xl">
                <h3 className="text-2xl font-semibold text-[#212121] mb-4">International Standards</h3>
                <p className="text-[#6C7A89] leading-relaxed">
                  Our loading procedures adhere to international standards and best practices, ensuring your cargo 
                  is properly secured and protected throughout the entire journey from Yiwu to your destination.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Trusted Provider Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-[#3E5C76] to-[#2A4A5F] rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Trusted Freight Provider in <span className="text-[var(--primary)]">Yiwu</span>
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
              As a leading freight provider in Yiwu, we manage the entire logistics process—from booking space with carriers 
              to customs clearance and final delivery. With strong partnerships in sea freight, air freight, road, and rail transport, 
              Yiwu Salah Trading guarantees:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-3">Competitive Rates</h3>
                <p className="text-white/80">Get the best shipping rates with transparent pricing and no hidden fees.</p>
              </div>
              
              <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-3">End-to-End Solutions</h3>
                <p className="text-white/80">Complete freight forwarding solutions covering every aspect of your shipment.</p>
              </div>
              
              <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-3">Reliable Delivery</h3>
                <p className="text-white/80">Timely and reliable delivery worldwide with our experienced logistics team.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/contact">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-[#212121] mb-6 hover:text-[#3E5C76] transition-colors duration-300 cursor-pointer"
            >
              Ready to Ship Your Cargo?
            </motion.h2>
          </Link>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#6C7A89] mb-8"
          >
            Whether you need FCL, LCL, or professional loading services, Yiwu Salah Trading is your trusted partner for global shipping.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#3E5C76] hover:bg-[#2A4A5F] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl"
          >
            Get Shipping Quote
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
