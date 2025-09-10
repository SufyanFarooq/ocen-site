'use client'

import { motion } from 'framer-motion'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-[#6C7A89] font-inter">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
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
                  Introduction
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  YST - YIWU SALAH Trading ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you visit our website or use our sourcing and trading services.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#3E5C76] mb-2 font-poppins">
                      Personal Information
                    </h3>
                    <p className="text-[#6C7A89] leading-relaxed font-inter">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc list-inside text-[#6C7A89] leading-relaxed font-inter ml-4 mt-2">
                      <li>Register for an account or request our services</li>
                      <li>Contact us through our website, email, or phone</li>
                      <li>Subscribe to our newsletter or updates</li>
                      <li>Participate in surveys or feedback forms</li>
                    </ul>
                    <p className="text-[#6C7A89] leading-relaxed font-inter mt-2">
                      This information may include your name, email address, phone number, company name, 
                      business address, and other relevant business information.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-[#3E5C76] mb-2 font-poppins">
                      Automatically Collected Information
                    </h3>
                    <p className="text-[#6C7A89] leading-relaxed font-inter">
                      We may automatically collect certain information about your device and usage patterns, including:
                    </p>
                    <ul className="list-disc list-inside text-[#6C7A89] leading-relaxed font-inter ml-4 mt-2">
                      <li>IP address and location data</li>
                      <li>Browser type and version</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referring website information</li>
                      <li>Device information and operating system</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  How We Use Your Information
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter mb-4">
                  We use the collected information for various purposes, including:
                </p>
                <ul className="list-disc list-inside text-[#6C7A89] leading-relaxed font-inter ml-4">
                  <li>Providing and improving our sourcing and trading services</li>
                  <li>Communicating with you about your inquiries and orders</li>
                  <li>Processing transactions and managing your account</li>
                  <li>Sending you relevant business updates and marketing materials</li>
                  <li>Analyzing website usage to improve user experience</li>
                  <li>Complying with legal obligations and protecting our rights</li>
                  <li>Preventing fraud and ensuring security</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Information Sharing and Disclosure
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-[#6C7A89] leading-relaxed font-inter ml-4">
                  <li>With trusted service providers who assist us in operating our business</li>
                  <li>With manufacturers and suppliers as necessary to fulfill your sourcing requests</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>In connection with a business transfer or acquisition</li>
                  <li>With your explicit consent</li>
                </ul>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Data Security
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  We implement appropriate technical and organizational security measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  However, no method of transmission over the internet or electronic storage is 100% secure, 
                  and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Cookies and Tracking */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Cookies and Tracking Technologies
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  Our website may use cookies and similar tracking technologies to enhance your browsing 
                  experience, analyze website traffic, and personalize content. You can control cookie 
                  settings through your browser preferences, though disabling cookies may affect website functionality.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Your Rights and Choices
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter mb-4">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-[#6C7A89] leading-relaxed font-inter ml-4">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Data portability rights</li>
                  <li>Withdraw consent where applicable</li>
                </ul>
              </div>

              {/* International Transfers */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  International Data Transfers
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  As a global sourcing company, we may transfer your personal information to countries 
                  outside your residence, including China and Pakistan where our offices are located. 
                  We ensure appropriate safeguards are in place to protect your information during such transfers.
                </p>
              </div>

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Data Retention
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  We retain your personal information for as long as necessary to fulfill the purposes 
                  outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and 
                  enforce our agreements. When information is no longer needed, we will securely delete or anonymize it.
                </p>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Children's Privacy
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  Our services are not directed to individuals under the age of 18. We do not knowingly 
                  collect personal information from children under 18. If we become aware that we have 
                  collected such information, we will take steps to delete it promptly.
                </p>
              </div>

              {/* Changes to Privacy Policy */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  We may update this Privacy Policy from time to time to reflect changes in our practices 
                  or legal requirements. We will notify you of any material changes by posting the updated 
                  policy on our website and updating the "Last updated" date. Your continued use of our 
                  services after such changes constitutes acceptance of the updated policy.
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-[#212121] mb-4 font-poppins">
                  Contact Us
                </h2>
                <p className="text-[#6C7A89] leading-relaxed font-inter mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our 
                  data practices, please contact us:
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
            Questions About Your Privacy?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#E8ECEF] mb-8 font-inter"
          >
            We're here to help. Contact us if you have any questions about how we handle your information.
          </motion.p>
          <Link href="/contact">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white text-[#3E5C76] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
            >
              Contact Us
            </motion.button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
