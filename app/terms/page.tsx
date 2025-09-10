'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[#F0F3F4] to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6 font-poppins">
              Terms of Service
            </h1>
            <p className="text-xl text-[#6C7A89] font-inter">
              Please read these terms carefully before using our sourcing and trading services.
            </p>
            <div className="mt-4 text-sm text-[#6C7A89]">
              Last updated: December 2024
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Agreement to Terms
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you 
                  ("Client," "you," or "your") and YST - YIWU SALAH Trading ("Company," "we," "our," or "us") 
                  regarding your use of our sourcing, trading, and logistics services. By accessing our 
                  website or engaging our services, you agree to be bound by these Terms.
                </p>
              </div>

              {/* Services Description */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Services Description
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter mb-4">
                  YST - YIWU SALAH Trading provides comprehensive sourcing and trading services, including:
                </p>
                <ul className="list-disc list-inside text-[#6C7A89] leading-relaxed font-inter ml-4">
                  <li>Product sourcing from verified Chinese manufacturers</li>
                  <li>Quality control and inspection services</li>
                  <li>Logistics and shipping coordination</li>
                  <li>Customs clearance assistance</li>
                  <li>Order tracking and management</li>
                  <li>Market research and supplier verification</li>
                  <li>Business consultation and support</li>
                </ul>
              </div>

              {/* Client Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Client Responsibilities
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter mb-4">
                  As a client, you agree to:
                </p>
                <ul className="list-disc list-inside text-[#6C7A89] leading-relaxed font-inter ml-4">
                  <li>Provide accurate and complete information about your sourcing requirements</li>
                  <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                  <li>Pay all fees and charges as agreed upon in our service agreements</li>
                  <li>Respect intellectual property rights of manufacturers and suppliers</li>
                  <li>Maintain confidentiality of proprietary information shared during our collaboration</li>
                  <li>Use our services only for lawful business purposes</li>
                  <li>Notify us promptly of any changes to your requirements or contact information</li>
                </ul>
              </div>

              {/* Service Fees and Payment */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Service Fees and Payment Terms
                </h2>
                <div className="space-y-4">
                  <p className="text-[#6C7A89] leading-relaxed font-inter">
                    Our service fees are based on the scope and complexity of your sourcing requirements. 
                    We provide transparent pricing and will provide detailed quotes before commencing work.
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-[#3E5C76] mb-2 font-poppins">
                      Payment Terms
                    </h3>
                    <ul className="list-disc list-inside text-[#6C7A89] leading-relaxed font-inter ml-4">
                      <li>Payment terms will be specified in individual service agreements</li>
                      <li>We accept various payment methods including bank transfers and international payments</li>
                      <li>Late payments may incur additional charges as specified in our agreements</li>
                      <li>All prices are subject to change with reasonable notice</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Intellectual Property Rights
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  All intellectual property rights in our services, website content, and proprietary 
                  methodologies remain our exclusive property. You may not copy, modify, or distribute 
                  our materials without written permission. We respect the intellectual property rights 
                  of manufacturers and suppliers and expect our clients to do the same.
                </p>
              </div>

              {/* Confidentiality */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Confidentiality
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  Both parties agree to maintain strict confidentiality regarding all proprietary 
                  information shared during our business relationship. This includes business strategies, 
                  supplier information, pricing details, and any other sensitive information. This 
                  obligation survives termination of our service agreement.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Limitation of Liability
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter mb-4">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc list-inside text-[#6C7A89] leading-relaxed font-inter ml-4">
                  <li>Our liability is limited to the total fees paid for the specific service in question</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>We are not responsible for delays caused by third parties (suppliers, shipping companies, customs)</li>
                  <li>Force majeure events may excuse performance delays</li>
                  <li>Quality issues must be reported within specified timeframes</li>
                </ul>
              </div>

              {/* Disclaimers */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Disclaimers
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  Our services are provided "as is" without warranties of any kind. We do not guarantee 
                  specific outcomes, delivery times, or product quality beyond our reasonable control. 
                  We act as intermediaries and are not responsible for the actions or omissions of 
                  third-party suppliers, manufacturers, or service providers.
                </p>
              </div>

              {/* Force Majeure */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Force Majeure
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  We shall not be liable for any failure or delay in performance due to circumstances 
                  beyond our reasonable control, including but not limited to natural disasters, 
                  government actions, trade restrictions, pandemics, war, terrorism, or other 
                  unforeseeable events that prevent normal business operations.
                </p>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Termination
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter mb-4">
                  Either party may terminate our service agreement:
                </p>
                <ul className="list-disc list-inside text-[#6C7A89] leading-relaxed font-inter ml-4">
                  <li>With written notice as specified in individual agreements</li>
                  <li>Immediately for material breach of these Terms</li>
                  <li>For non-payment of fees after appropriate notice</li>
                  <li>For violation of applicable laws or regulations</li>
                </ul>
                <p className="text-[#6C7A89] leading-relaxed font-inter mt-4">
                  Upon termination, all outstanding fees become immediately due, and confidentiality 
                  obligations continue to apply.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Governing Law and Dispute Resolution
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  These Terms are governed by the laws of Pakistan. Any disputes arising from these 
                  Terms or our services shall be resolved through good faith negotiations. If 
                  negotiations fail, disputes may be submitted to binding arbitration or resolved 
                  in the courts of Lahore, Pakistan.
                </p>
              </div>

              {/* Compliance */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Compliance and Legal Requirements
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  Both parties agree to comply with all applicable international trade laws, 
                  export/import regulations, anti-corruption laws, and other relevant legal 
                  requirements. We reserve the right to refuse service if we believe it would 
                  violate any applicable laws or regulations.
                </p>
              </div>

              {/* Changes to Terms */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Changes to Terms
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  We may update these Terms from time to time to reflect changes in our services 
                  or legal requirements. We will notify you of material changes by posting the 
                  updated Terms on our website and updating the "Last updated" date. Your 
                  continued use of our services after such changes constitutes acceptance of 
                  the updated Terms.
                </p>
              </div>

              {/* Severability */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Severability
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  If any provision of these Terms is found to be invalid or unenforceable, 
                  the remaining provisions shall remain in full force and effect. We will 
                  replace any invalid provision with a valid provision that most closely 
                  reflects the original intent.
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Contact Information
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter mb-4">
                  For questions about these Terms or our services, please contact us:
                </p>
                <div className="bg-[#F0F3F4] p-6 rounded-2xl">
                  <div className="space-y-3">
                    <div>
                      <strong className="text-[#3E5C76] font-poppins">Email:</strong>
                      <span className="text-[#6C7A89] font-inter ml-2">yiwusalahtrading@gmail.com</span>
                    </div>
                    <div>
                      <strong className="text-[#3E5C76] font-poppins">Pakistan Office:</strong>
                      <span className="text-[#6C7A89] font-inter ml-2">+92 324 4744890, +92 321 8853747</span>
                    </div>
                    <div>
                      <strong className="text-[#3E5C76] font-poppins">China Office:</strong>
                      <span className="text-[#6C7A89] font-inter ml-2">+86 15058674331</span>
                    </div>
                    <div>
                      <strong className="text-[#3E5C76] font-poppins">Address:</strong>
                      <span className="text-[#6C7A89] font-inter ml-2">G.T ROAD, SALAMT PURA STATION, KOH-E-NOOR KANTA, LAHORE</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-[#3E5C76] to-[#4A6B8A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white mb-6 font-poppins"
          >
            Ready to Start Your Sourcing Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#E8ECEF] mb-8 font-inter"
          >
            Contact us today to discuss your sourcing needs and learn how we can help your business grow.
          </motion.p>
          <Link href="/contact">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white text-[#3E5C76] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
            >
              Get Started Today
            </motion.button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
