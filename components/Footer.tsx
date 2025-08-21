'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, Ship, Globe, TrendingUp } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about' },
      { name: 'Product Catalogs', href: '/products' },
      { name: 'Market Insights', href: '/insights' },
    ],
    services: [
      { name: 'Sourcing', href: '/services/sourcing' },
      { name: 'Logistics', href: '/services/logistics' },
      { name: 'Quality Control', href: '/services/quality' },
      { name: 'Custom Manufacturing', href: '/services/manufacturing' },
    ],
    resources: [
      { name: 'Sourcing Tips', href: '/tips' },
      { name: 'Import Guide', href: '/guide' },
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
    ],
  }

  // Predefined positions for floating elements to avoid hydration issues
  const floatingPositions = [
    { left: '5%', top: '10%' },
    { left: '15%', top: '80%' },
    { left: '25%', top: '30%' },
    { left: '35%', top: '70%' },
    { left: '45%', top: '20%' },
    { left: '55%', top: '90%' },
    { left: '65%', top: '40%' },
    { left: '75%', top: '60%' },
    { left: '85%', top: '15%' },
    { left: '95%', top: '85%' },
    { left: '10%', top: '50%' },
    { left: '20%', top: '25%' },
    { left: '30%', top: '75%' },
    { left: '40%', top: '45%' },
    { left: '50%', top: '95%' },
  ]

  return (
    <footer className="bg-gradient-to-br from-[#3E5C76] to-[#4A6B8A] text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {floatingPositions.map((position, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[var(--primary)] rounded-full"
            style={{
              left: position.left,
              top: position.top,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + (i % 4),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <Image 
                src="/black-logo.png" 
                alt="YST - YIWU SALAH Traders Logo" 
                width={120} 
                height={120}
                className="h-40 w-40 object-contain"
              />
            </div>
            <p className="text-[#E8ECEF] mb-6 leading-relaxed">
              Your trusted sourcing partner connecting Australian businesses with premium Chinese manufacturers.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-[#E8ECEF]">
                <Mail className="h-5 w-5 text-[var(--primary)]" />
                <span>info@oceanportlink.com</span>
              </div>
              <div className="flex items-center space-x-3 text-[#E8ECEF]">
                <MapPin className="h-5 w-5 text-[var(--primary)]" />
                <span>1649 Ocean Drive Road, Lake Cathie NSW 2445</span>
              </div>
              <div className="flex items-center space-x-3 text-[#E8ECEF]">
                <Phone className="h-5 w-5 text-[var(--primary)]" />
                <span>+61 (0) 400 000 000</span>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-[var(--primary)]">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#E8ECEF] hover:text-[var(--primary)] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-[var(--primary)]">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#E8ECEF] hover:text-[var(--primary)] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-[var(--primary)]">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#E8ECEF] hover:text-[var(--primary)] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Global Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-[#E8ECEF]"
        >
          <h3 className="text-xl font-semibold mb-6 text-[var(--primary)] text-center">
            Global Solutions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
            {[
              'Sydney, Melbourne, Brisbane',
              'Los Angeles, Long Beach, Savannah',
              'Hamburg, Rotterdam, Antwerp',
              'Ningbo, Xiamen, Shanghai',
              'Jebbel Ali, Sharjah, Bahrain',
              'Incheon, Pusan',
            ].map((location, index) => (
              <div key={index} className="text-[#E8ECEF] text-center">
                {location}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-[#E8ECEF] flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-center text-[#E8ECEF] text-sm">
            © 2024-2025 YST - YIWU SALAH Traders. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-[#E8ECEF] hover:text-[var(--primary)] text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#E8ECEF] hover:text-[var(--primary)] text-sm">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-[#E8ECEF] hover:text-[var(--primary)] text-sm">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
