"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is YST - YIWU SALAH Traders and what services do you provide?",
      answer: "YST - YIWU SALAH Traders is a comprehensive sourcing company that connects Australian businesses with verified manufacturers and suppliers worldwide. We provide end-to-end sourcing solutions including Yiwu market guidance, airport pickup, order tracking, quality control, container loading, customs clearance, and shipping services."
    },
    {
      question: "How do you ensure the quality of products from suppliers?",
      answer: "We implement a rigorous quality control process that includes pre-production quality planning, in-process inspections, final product verification, testing and certification support, and comprehensive quality documentation. Our team conducts regular factory audits and maintains strict quality standards throughout the entire production process."
    },
    {
      question: "What is the typical timeline for sourcing products from China?",
      answer: "The timeline varies depending on the complexity and quantity of products. Generally, it takes 2-4 weeks for supplier identification and negotiation, 4-8 weeks for production, 1-2 weeks for quality control and packaging, and 2-4 weeks for shipping and customs clearance. Total timeline typically ranges from 9-18 weeks."
    },
    {
      question: "Do you provide Yiwu market guidance services?",
      answer: "Yes! We offer comprehensive Yiwu market guidance including personal market navigation, supplier identification, local language support, market research and trend analysis, supplier verification, and negotiation support. Our experts help you navigate the world's largest wholesale market efficiently."
    },
    {
      question: "What shipping options do you offer?",
      answer: "We provide multiple shipping solutions including sea freight, air freight, express shipping, and multi-modal transportation. We handle both FCL (Full Container Load) and LCL (Less than Container Load) shipments, offer insurance and cargo protection, and coordinate door-to-door delivery worldwide."
    },
    {
      question: "How do you handle customs clearance and documentation?",
      answer: "Our customs experts handle all aspects of import/export including documentation preparation, license assistance, tariff classification and optimization, customs clearance coordination, and compliance guidance. We ensure smooth customs processes and help minimize delays and costs."
    },
    {
      question: "What is your minimum order quantity (MOQ) policy?",
      answer: "We work with suppliers to negotiate flexible MOQs based on your business needs. While some suppliers have standard MOQs, we can often negotiate lower quantities for new partnerships or help you find suppliers with more flexible requirements. Our goal is to make sourcing accessible for businesses of all sizes."
    },
    {
      question: "Do you provide order tracking and updates?",
      answer: "Absolutely! We provide comprehensive order tracking with live status updates, production progress monitoring, quality control checkpoints, shipping and logistics tracking, and custom dashboard reporting. You'll receive regular updates throughout the entire process from order placement to final delivery."
    },
    {
      question: "What are your fees and pricing structure?",
      answer: "Our pricing is transparent and typically includes a service fee based on the complexity and value of your order. We don't charge hidden fees and provide detailed cost breakdowns upfront. Our fees cover supplier verification, quality control, logistics coordination, and ongoing support throughout the process."
    },
    {
      question: "How do you select and verify suppliers?",
      answer: "We conduct thorough supplier verification including factory audits, quality certifications review, financial stability assessment, production capacity evaluation, and reference checks. We only work with suppliers who meet our strict quality and reliability standards and maintain long-term relationships with verified partners."
    },
    {
      question: "Can you help with product development and customization?",
      answer: "Yes, we can assist with product development and customization. We work with manufacturers who offer OEM/ODM services and can help you develop custom products, modify existing designs, or create new products from scratch. Our team coordinates between you and manufacturers to ensure your specifications are met."
    },
    {
      question: "What happens if there are quality issues with received products?",
      answer: "We have a comprehensive quality assurance process, but if issues arise, we immediately investigate and work with suppliers to resolve them. This may include product replacement, refunds, or other solutions depending on the situation. Our quality control team documents all issues and ensures proper resolution."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF]">
      <Navbar />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-[#3E5C76]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Frequently Asked <span className="text-[#FF6B35]">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Find answers to common questions about our sourcing services, processes, and how we can help your business grow.
          </motion.p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-[#E8ECEF] overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-[#F8F9FA] transition-colors duration-200"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-[#212121] pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-[#3E5C76]" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-[#3E5C76]" />
                    )}
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-[#6C7A89] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
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
            Still Have Questions?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#6C7A89] mb-8"
          >
            Can't find the answer you're looking for? Our team is here to help with any specific questions about your sourcing needs.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#3E5C76] hover:bg-[#2A4A5F] text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl"
          >
            Contact Us
          </motion.button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
