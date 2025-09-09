'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, Ship, Globe, TrendingUp, Map, MessageCircle } from 'lucide-react'

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Logistics', href: '/logistics' },
      { name: 'Contact Us', href: '/contact' },
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
            <div className="flex items-center space-x-2">
              {/* <Image
                src="/black-logo.png"
                alt="YST - YIWU SALAH Traders Logo"
                width={120}
                height={40}
                className="w-40 object-contain mb-2"
              /> */}
              <Image
                src="/logo-one.png"
                alt="YST - YIWU SALAH Trading Logo"
                width={190}
                height={120}
                className="object-cover"
              />
            </div>
            <p className="text-[#E8ECEF] mb-6 leading-relaxed">
              Your trusted sourcing partner connecting worldwide businesses with premium Chinese manufacturers.
            </p>

          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-white">Company</h3>
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


          {/* Pakistan Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-white">Pakistan Office</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-[#E8ECEF]">
                <Mail className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">yiwusalahtrading@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 text-[#E8ECEF]">
                <Map className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <a 
                  href="https://google.com/maps?q=31.588624954223633,74.41537475585938&z=17&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed hover:text-[var(--primary)] transition-colors duration-200 cursor-pointer"
                >
                  G.T ROAD, SALAMT PURA STATION, KOH-E-NOOR KANTA, LAHORE
                </a>
              </div>
              <div className="flex items-start space-x-3 text-[#E8ECEF]">
                <Phone className="h-5 w-5 text-white flex-shrink-0 mt-5" />
                <div className="flex flex-col space-y-1">
                  <span className="leading-relaxed">+92 324 4744890</span>
                  <span className="leading-relaxed">+92 321 8853747</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* China Office */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-2 text-white">China Office</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-[#E8ECEF]">
                <MessageCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">WeChatId: yiwusalahtrading</span>
              </div>
              <div className="flex items-start space-x-3 text-[#E8ECEF]">
                <Map className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">浙江省金华市义乌市稠城街道车站路134号后面亿景建筑公司1楼 102</span>
              </div>
              <div className="flex items-start space-x-3 text-[#E8ECEF]">
                <Phone className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">+86 15058674331</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Global Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-[#E8ECEF]"
        >
          <h3 className="text-xl font-semibold mb-6 text-white text-center">
            Our Global Presence - Expanding Worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-sm">
            {/* Current Offices */}
            <div className="text-center">
              <div className="text-[#E8ECEF] font-medium mb-1">Pakistan</div>
              <div className="text-[#8B9CA8] text-xs">Lahore Office</div>
            </div>
            <div className="text-center">
              <div className="text-[#E8ECEF] font-medium mb-1">China</div>
              <div className="text-[#8B9CA8] text-xs">Yiwu Office</div>
            </div>
            
            {/* Coming Soon Offices */}
            <div className="text-center">
              <div className="text-[#E8ECEF] font-medium mb-1">France</div>
              <div className="text-[#8B9CA8] text-xs mb-1">Paris Office</div>
              <span className="inline-block bg-[#FF6B35] text-white text-xs px-2 py-1 rounded-full font-medium">
                Coming Soon
              </span>
            </div>
            <div className="text-center">
              <div className="text-[#E8ECEF] font-medium mb-1">UK</div>
              <div className="text-[#8B9CA8] text-xs mb-1">London Office</div>
              <span className="inline-block bg-[#FF6B35] text-white text-xs px-2 py-1 rounded-full font-medium">
                Coming Soon
              </span>
            </div>
            <div className="text-center">
              <div className="text-[#E8ECEF] font-medium mb-1">UAE</div>
              <div className="text-[#8B9CA8] text-xs mb-1">Dubai Office</div>
              <span className="inline-block bg-[#FF6B35] text-white text-xs px-2 py-1 rounded-full font-medium">
                Coming Soon
              </span>
            </div>
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
            © 2022-2025 YST - YIWU SALAH Trading. All rights reserved.
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
