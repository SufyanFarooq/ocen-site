'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import Image from 'next/image'

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

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-white to-[#F0F3F4] relative overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233E5C76' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-4 font-poppins">
              Our <span className="text-[#3E5C76]">Global Reach</span>
            </h2>
            <p className="text-xl text-[#6C7A89] max-w-2xl mx-auto font-inter">
              Connecting Australian businesses with verified manufacturers and suppliers worldwide
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                number: '1000+', 
                label: 'Manufacturers',
                description: 'Verified suppliers across China',
                color: 'from-[#3E5C76] to-[#4A6B8A]',
                delay: 0.1,
                image: '/hero/manufacturers.jpg'
              },
              { 
                number: '500+', 
                label: 'Destinations',
                description: 'Countries we serve worldwide',
                color: 'from-[#6C7A89] to-[#7A8B9A]',
                delay: 0.2,
                image: '/hero/destinations.jpg'
              },
              {  
                number: '24/7', 
                label: 'Support',
                description: 'Round-the-clock assistance',
                color: 'from-[#FF6B35] to-[#E55A2B]',
                delay: 0.3,
                image: '/hero/support.jpg'
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: stat.delay }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="text-center group relative"
              >
                {/* Card Background */}
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#E8ECEF] group-hover:border-[#3E5C76]/30 relative overflow-hidden">
                  {/* Background Image */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <img
                      src={stat.image}
                      alt={stat.label}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                    />
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/40"></div>
                  </div>
                  
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3E5C76]/5 to-[#FF6B35]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  
                  {/* Number */}
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold text-[#212121] mb-3 font-poppins group-hover:text-[#3E5C76] transition-colors duration-300 relative z-10"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  {/* Label */}
                  <div className="text-xl font-semibold text-[#3E5C76] mb-2 font-poppins relative z-10">
                    {stat.label}
                  </div>
                  
                  {/* Description */}
                  <div className="text-[#6C7A89] font-inter relative z-10">
                    {stat.description}
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FF6B35] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#3E5C76] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 group-hover:scale-150"></div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-[#6C7A89] mb-6 font-inter">
              Ready to start your sourcing journey?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6B35] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#E55A2B] transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#F0F3F4] to-white overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233E5C76' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-[#212121] mb-6 font-poppins"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Why Choose <span className="text-[#3E5C76]">Ocean Port Link</span>?
            </motion.h2>
            <motion.p 
              className="text-xl text-[#6C7A89] max-w-3xl mx-auto font-inter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We bridge the gap between Australian businesses and Chinese manufacturers with our comprehensive sourcing solutions.
            </motion.p>
          </motion.div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {[
              {
                icon: '⏰',
                number: '10+',
                title: 'Years Experience',
                description: 'In international sourcing',
                color: 'from-[#3E5C76] to-[#4A6B8A]',
                delay: 0.1
              },
              {
                icon: '🏭',
                number: '1000+',
                title: 'Manufacturers',
                description: 'Verified suppliers',
                color: 'from-[#6C7A89] to-[#7A8B9A]',
                delay: 0.2
              },
              {
                icon: '🌍',
                number: '500+',
                title: 'Destinations',
                description: 'Worldwide shipping',
                color: 'from-[#FF6B35] to-[#E55A2B]',
                delay: 0.3
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: stat.delay }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Card Background */}
                <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#E8ECEF] group-hover:border-[#3E5C76]/30 relative overflow-hidden">
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3E5C76]/5 to-[#FF6B35]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon Container */}
                  <motion.div 
                    className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-3xl">{stat.icon}</span>
                  </motion.div>
                  
                  {/* Number */}
                  <motion.div 
                    className="text-4xl md:text-5xl font-bold text-[#212121] mb-3 font-poppins group-hover:text-[#3E5C76] transition-colors duration-300 relative z-10"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  {/* Title */}
                  <div className="text-xl font-semibold text-[#3E5C76] mb-2 font-poppins relative z-10">
                    {stat.title}
                  </div>
                  
                  {/* Description */}
                  <div className="text-[#6C7A89] font-inter relative z-10">
                    {stat.description}
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FF6B35] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#3E5C76] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 group-hover:scale-150"></div>
              </motion.div>
            ))}
          </div>

          {/* Additional Features */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { icon: '🤝', title: 'Trusted Partner', description: 'Reliable sourcing solutions' },
              { icon: '⚡', title: 'Fast Delivery', description: 'Quick turnaround times' },
              { icon: '💰', title: 'Best Prices', description: 'Competitive rates guaranteed' },
              { icon: '🛡️', title: 'Quality Assured', description: 'Rigorous quality control' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h4 className="text-lg font-semibold text-[#212121] mb-2 font-poppins group-hover:text-[#3E5C76] transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-[#6C7A89] text-sm font-inter">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Competitive Edge Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6 font-poppins">
                Gain a <span className="text-[#3E5C76]">competitive edge</span>
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-[#212121] mb-6 font-poppins">
                by accessing our vetted suppliers and partners in the Chinese market
              </h3>
              <p className="text-xl text-[#6C7A89] leading-relaxed font-inter">
                We have local representatives in the Chinese market that help you unlock the product sources not easily available to foreign buyers.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-6xl font-bold text-[#3E5C76] mb-2 font-poppins">1000+</div>
                <div className="text-xl font-semibold text-[#212121] font-poppins">Manufacturers</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-[#3E5C76] mb-2 font-poppins">500+</div>
                <div className="text-xl font-semibold text-[#212121] font-poppins">Destinations</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Two Options Section */}
      <section className="py-20 bg-gradient-to-br from-[#F0F3F4] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6 font-poppins">
              You have <span className="text-[#3E5C76]">two options</span> when it comes to buying from China as an Australian business
            </h2>
            <p className="text-xl text-[#6C7A89] max-w-3xl mx-auto font-inter">
              Choose the path that works best for your business needs and growth strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AliBaba Option */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-[#E8ECEF] relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <Image
                  src="/features/ali-baba.jpg"
                  alt="AliBaba"
                  fill
                  className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/40"></div>
              </div>
              
              <div className="text-center mb-6 relative z-10">
                <div className="w-20 h-20 bg-[#FF6B35] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛒</span>
                </div>
                <h3 className="text-2xl font-bold text-[#212121] font-poppins">AliBaba</h3>
                <div className="text-[#FF6B35] font-semibold text-lg">High prices</div>
              </div>
              <p className="text-[#6C7A89] leading-relaxed font-inter relative z-10">
                Prices are higher than Chinese market prices because suppliers are aware their customers are overseas & have no frame of reference. Plus, one thing wrong and you have to ship back from Australia and wait for them to rectify & ship again that is if they agree to this in the first place.
              </p>
            </motion.div>

            {/* Sourcing Agent Option */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-[#E8ECEF] relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <Image
                  src="/features/source-agent.jpg"
                  alt="Sourcing Agent"
                  fill
                  className="object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/40"></div>
              </div>
              
              <div className="text-center mb-6 relative z-10">
                <div className="w-20 h-20 bg-[#3E5C76] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-[#212121] font-poppins">Sourcing Agent</h3>
                <div className="text-[#3E5C76] font-semibold text-lg">High friction</div>
              </div>
              <p className="text-[#6C7A89] leading-relaxed font-inter relative z-10">
                This path is usually for large corporations because of the security, efficiency, and reliability of having someone you have hired to inspect the goods before shipping or payment to ensure compliance. But this route is associated with high MOQs, Upfront Fees, and Retainer fees.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Supplier Pool Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6 font-poppins">
              Whatever your mind can imagine, <span className="text-[#3E5C76]">we can source it</span>
            </h2>
            <p className="text-xl text-[#6C7A89] max-w-3xl mx-auto font-inter">
              The question is always what you need, never what we can deliver!
            </p>
          </motion.div>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-[#3E5C76] mb-8 font-poppins">
              A supplier pool 1000's strong
            </h3>
          </motion.div>

          {/* Product Categories */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { icon: '🌶️', name: 'Spices' },
              { icon: '⚙️', name: 'Machine' },
              { icon: '📦', name: 'Carton Box' },
              { icon: '👕', name: 'Garment' },
              { icon: '🔩', name: 'Steel' },
              { icon: '👟', name: 'Footwear' },
            ].map((category, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl">{category.icon}</span>
                </div>
                <h4 className="text-lg font-semibold text-[#212121] font-poppins group-hover:text-[#3E5C76] transition-colors duration-300">
                  {category.name}
                </h4>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-[#3E5C76] font-poppins">
              We are small and medium business specialists
            </h3>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Features */}
      <section className="py-20 bg-gradient-to-br from-[#F0F3F4] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6 font-poppins">
              Why <span className="text-[#3E5C76]">choose us</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '💰',
                title: 'No Flat Fee',
                description: 'If your total order cost is more than $2500, we don\'t charge any flat fees.',
                image: '/choose-us/no-flat-fee.jpg'
              },
              {
                icon: '📦',
                title: 'No MOQ',
                description: 'No minimum order limit, we want you to have a frictionless experience and try with a small order before scaling.',
                image: '/choose-us/no-moq.jpg'
              },
              {
                icon: '🇦🇺',
                title: 'Australian Company',
                description: 'Payment methods, Communication, and accountability are the same as with any local company in Australia.',
                image: '/choose-us/australian-company.jpg'
              },
              {
                icon: '📋',
                title: 'Free Quote',
                description: 'No upfront fee means that you will be given a free of cost estimate for the product you inquire for.',
                image: '/choose-us/free-quote.jpg'
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-[#E8ECEF] text-center group relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-500"
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30"></div>
                </div>
                
                <div className="w-20 h-20 bg-gradient-to-br from-[#3E5C76] to-[#4A6B8A] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl relative z-10 border-4 border-white ring-4 ring-[#3E5C76]/20">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#212121] mb-4 font-poppins group-hover:text-[#3E5C76] transition-colors duration-300 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-[#6C7A89] leading-relaxed font-inter relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6B35] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#E55A2B] transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
            >
              Work With Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">
              Our <span className="text-[#3E5C76]">Services</span>
            </h2>
            <p className="text-xl text-[#6C7A89] max-w-3xl mx-auto">
              Comprehensive sourcing solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#E8ECEF]">
              <div className="w-16 h-16 bg-[#3E5C76] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">📦</span>
              </div>
              <h3 className="text-2xl font-bold text-[#212121] mb-4">Product Sourcing</h3>
              <p className="text-[#6C7A89] leading-relaxed">
                Find the perfect manufacturers and suppliers for your products with our extensive network.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#E8ECEF]">
              <div className="w-16 h-16 bg-[#6C7A89] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">🚢</span>
              </div>
              <h3 className="text-2xl font-bold text-[#212121] mb-4">Logistics</h3>
              <p className="text-[#6C7A89] leading-relaxed">
                End-to-end logistics solutions including shipping, customs, and delivery.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#E8ECEF]">
              <div className="w-16 h-16 bg-[#FF6B35] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-2xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold text-[#212121] mb-4">Quality Control</h3>
              <p className="text-[#6C7A89] leading-relaxed">
                Rigorous quality control processes to ensure your products meet the highest standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#3E5C76] to-[#4A6B8A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Sourcing?
          </h2>
          <p className="text-xl text-[#E8ECEF] max-w-3xl mx-auto mb-12 font-inter">
            Join hundreds of Australian businesses that trust us with their sourcing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#3E5C76] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl font-poppins">
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-[#3E5C76] transition-all duration-300 font-poppins">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Who Should Use Us Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6 font-poppins">
              Who <span className="text-[#3E5C76]">Should Use Us</span>?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🛒',
                title: 'Ecommerce',
                description: 'If you are an Amazon seller, shopify store owner, etsy store owner, we can not only accommodate smaller MOQs but can also provide customization options in the same MOQs while beating your supplier\'s prices by a good margin.',
                color: 'from-[#3E5C76] to-[#4A6B8A]'
              },
              {
                icon: '📦',
                title: 'Wholesalers',
                description: 'If you are a wholesaler buying bulk quantities, you should expect at least 20% increase in margins as we will help you save on buying as well as shipping while keeping it as simple as dealing with a local importer.',
                color: 'from-[#6C7A89] to-[#7A8B9A]'
              },
              {
                icon: '🏭',
                title: 'Manufacturers',
                description: 'For manufacturers looking for continuous supply of parts or material, we help sign supply contracts with manufacturers and suppliers for extended periods. Offer you Duty Paid Shipping service even on full containers.',
                color: 'from-[#FF6B35] to-[#E55A2B]'
              },
              {
                icon: '🏪',
                title: 'Retailers',
                description: 'If you are selling commodity good direct to consumer, you have people who are looking to buy at the lowest price for their repeat purchase. We can help you become that by offering low cost goods.',
                color: 'from-[#3E5C76] to-[#4A6B8A]'
              },
              {
                icon: '🤝',
                title: 'Procurement Companies',
                description: 'Win more business with the confidence of having the most competitive prices in you arsenal that match quality standards that your client is looking for.',
                color: 'from-[#6C7A89] to-[#7A8B9A]'
              },
            ].map((business, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF] rounded-3xl p-8 shadow-xl border border-[#E8ECEF] group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${business.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl">{business.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-[#212121] mb-4 font-poppins group-hover:text-[#3E5C76] transition-colors duration-300">
                  {business.title}
                </h3>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  {business.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6B35] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#E55A2B] transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
            >
              Work With Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gradient-to-br from-[#3E5C76] to-[#4A6B8A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              Our <span className="text-[#FF6B35]">Process</span>
            </h2>
            <p className="text-xl text-[#E8ECEF] max-w-3xl mx-auto font-inter">
              A systematic approach to delivering exceptional sourcing solutions
            </p>
          </motion.div>

          <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[600px] flex items-center justify-center px-4">
            {/* Central Circle */}
            <motion.div
              className="relative w-32 h-32 md:w-48 md:h-48 bg-white/10 backdrop-blur-sm rounded-full flex flex-col items-center justify-center border-2 border-white/20 shadow-2xl z-20"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="text-center text-white px-2">
                <h3 className="text-sm md:text-lg font-bold font-poppins mb-1 md:mb-2">Review client brief</h3>
                <h4 className="text-sm md:text-lg font-bold font-poppins mb-1 md:mb-2">& scope of work</h4>
                <p className="text-xs md:text-sm text-[#E8ECEF] font-inter">Ensure clarity around outputs</p>
              </div>
            </motion.div>

            {/* Process Segments - Mobile Version */}
            <div className="absolute inset-0 block md:hidden">
              {[
                {
                  id: 1,
                  title: "Discovery",
                  description: "We do an online call to discuss your needs",
                  icon: "🔍",
                  angle: -90,
                  color: "from-[#FF6B35] to-[#E55A2B]",
                  delay: 0.1
                },
                {
                  id: 2,
                  title: "Hunt",
                  description: "We take your requirements and find the best supplier and price",
                  icon: "🎯",
                  angle: -18,
                  color: "from-[#3E5C76] to-[#4A6B8A]",
                  delay: 0.2
                },
                {
                  id: 3,
                  title: "Quote",
                  description: "We get you a quote for your goods & shipping",
                  icon: "📋",
                  angle: 54,
                  color: "from-[#6C7A89] to-[#7A8B9A]",
                  delay: 0.3
                },
                {
                  id: 4,
                  title: "Sampling",
                  description: "Where needed, we arrange samples for you",
                  icon: "📦",
                  angle: 126,
                  color: "from-[#3E5C76] to-[#4A6B8A]",
                  delay: 0.4
                },
                {
                  id: 5,
                  title: "Shipping",
                  description: "Once you are happy and payment is made, we book in your shipping",
                  icon: "🚢",
                  angle: 198,
                  color: "from-[#FF6B35] to-[#E55A2B]",
                  delay: 0.5
                }
              ].map((step, index) => {
                const radius = 120;
                const x = Math.cos((step.angle) * Math.PI / 180) * radius;
                const y = Math.sin((step.angle) * Math.PI / 180) * radius;
                
                return (
                  <motion.div
                    key={step.id}
                    className="absolute w-32 h-32"
                    style={{
                      left: `calc(50% + ${x}px - 64px)`,
                      top: `calc(50% + ${y}px - 64px)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: step.delay }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${step.color} rounded-2xl shadow-2xl border-2 border-white/20 relative overflow-hidden`}>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-3 text-center">
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-2 backdrop-blur-sm">
                          <span className="text-xl">{step.icon}</span>
                        </div>
                        <h3 className="text-sm font-bold font-poppins">{step.title}</h3>
                      </div>
                      <div className="absolute -top-3 -right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-white/30 z-10">
                        <span className="text-[#3E5C76] font-bold text-sm">{step.id}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Process Segments - Desktop Version */}
            <div className="absolute inset-0 hidden md:block">
              {[
                {
                  id: 1,
                  title: "Discovery",
                  description: "We do an online call to discuss your needs",
                  icon: "🔍",
                  angle: -90,
                  color: "from-[#FF6B35] to-[#E55A2B]",
                  delay: 0.1
                },
                {
                  id: 2,
                  title: "Hunt",
                  description: "We take your requirements and find the best supplier and price",
                  icon: "🎯",
                  angle: -18,
                  color: "from-[#3E5C76] to-[#4A6B8A]",
                  delay: 0.2
                },
                {
                  id: 3,
                  title: "Quote",
                  description: "We get you a quote for your goods & shipping",
                  icon: "📋",
                  angle: 54,
                  color: "from-[#6C7A89] to-[#7A8B9A]",
                  delay: 0.3
                },
                {
                  id: 4,
                  title: "Sampling",
                  description: "Where needed, we arrange samples for you",
                  icon: "📦",
                  angle: 126,
                  color: "from-[#3E5C76] to-[#4A6B8A]",
                  delay: 0.4
                },
                {
                  id: 5,
                  title: "Shipping",
                  description: "Once you are happy and payment is made, we book in your shipping",
                  icon: "🚢",
                  angle: 198,
                  color: "from-[#FF6B35] to-[#E55A2B]",
                  delay: 0.5
                }
              ].map((step, index) => {
                const radius = 200;
                const x = Math.cos((step.angle) * Math.PI / 180) * radius;
                const y = Math.sin((step.angle) * Math.PI / 180) * radius;
                
                return (
                  <motion.div
                    key={step.id}
                    className="absolute w-48 h-48"
                    style={{
                      left: `calc(50% + ${x}px - 96px)`,
                      top: `calc(50% + ${y}px - 96px)`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: step.delay }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${step.color} rounded-3xl shadow-2xl border-2 border-white/20 relative overflow-hidden`}>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
                          <span className="text-3xl">{step.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold font-poppins mb-2">{step.title}</h3>
                        <p className="text-sm font-inter text-white/90 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-white/30 z-10">
                        <span className="text-[#3E5C76] font-bold text-lg">{step.id}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Connection Lines - Desktop only */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
              {[0, 72, 144, 216, 288].map((angle, index) => {
                const radius = 200;
                const x1 = Math.cos((angle - 90) * Math.PI / 180) * radius;
                const y1 = Math.sin((angle - 90) * Math.PI / 180) * radius;
                const nextAngle = angle + 72;
                const x2 = Math.cos((nextAngle - 90) * Math.PI / 180) * radius;
                const y2 = Math.sin((nextAngle - 90) * Math.PI / 180) * radius;
                
                return (
                  <motion.path
                    key={index}
                    d={`M ${500 + x1} ${300 + y1} Q 500 300 ${500 + x2} ${300 + y2}`}
                    stroke="white"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="10,5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.6 }}
                    transition={{ duration: 1.5, delay: 0.8 + index * 0.1 }}
                  />
                );
              })}
            </svg>

            {/* Animated Dots - Desktop only */}
            {[0, 72, 144, 216, 288].map((angle, index) => {
              const radius = 200;
              const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
              const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
              
              return (
                <motion.div
                  key={index}
                  className="absolute w-4 h-4 bg-[#FF6B35] rounded-full shadow-lg hidden md:block"
                  style={{
                    left: `calc(50% + ${x}px - 8px)`,
                    top: `calc(50% + ${y}px - 8px)`,
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 1.2 + index * 0.4,
                  }}
                />
              );
            })}
          </div>

          {/* Process Summary */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <div className="text-center text-white">
              <div className="text-4xl font-bold text-[#FF6B35] mb-2 font-poppins">5</div>
              <div className="text-lg text-[#E8ECEF] font-inter">Process Steps</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold text-[#FF6B35] mb-2 font-poppins">24/7</div>
              <div className="text-lg text-[#E8ECEF] font-inter">Support Available</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold text-[#FF6B35] mb-2 font-poppins">100%</div>
              <div className="text-lg text-[#E8ECEF] font-inter">Quality Assured</div>
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6B35] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#E55A2B] transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
            >
              Start Your Process
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Global Solutions Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6 font-poppins">
              <span className="text-[#3E5C76]">Global Solutions</span>
            </h2>
            <p className="text-xl text-[#6C7A89] max-w-3xl mx-auto font-inter">
              Connecting businesses worldwide with our extensive network of suppliers and partners
            </p>
          </motion.div>

          {/* World Map Container */}
          <div className="relative w-full h-[600px] bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF] rounded-3xl overflow-hidden shadow-2xl border border-[#E8ECEF]">
            {/* World Map Background */}
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 1000 500" className="w-full h-full">
                <path d="M150,200 Q200,180 250,200 T350,200 Q400,220 450,200 T550,200 Q600,180 650,200 T750,200 Q800,220 850,200" 
                      fill="none" stroke="#3E5C76" strokeWidth="2"/>
                <path d="M100,250 Q150,230 200,250 T300,250 Q350,270 400,250 T500,250 Q550,230 600,250 T700,250 Q750,270 800,250 T900,250" 
                      fill="none" stroke="#6C7A89" strokeWidth="2"/>
                <path d="M120,300 Q170,280 220,300 T320,300 Q370,320 420,300 T520,300 Q570,280 620,300 T720,300 Q770,320 820,300 T920,300" 
                      fill="none" stroke="#FF6B35" strokeWidth="2"/>
                {/* Add more map elements */}
                <circle cx="200" cy="150" r="3" fill="#3E5C76"/>
                <circle cx="400" cy="180" r="3" fill="#6C7A89"/>
                <circle cx="600" cy="160" r="3" fill="#FF6B35"/>
                <circle cx="800" cy="190" r="3" fill="#3E5C76"/>
                <circle cx="300" cy="280" r="3" fill="#6C7A89"/>
                <circle cx="500" cy="260" r="3" fill="#FF6B35"/>
                <circle cx="700" cy="270" r="3" fill="#3E5C76"/>
                <circle cx="900" cy="250" r="3" fill="#6C7A89"/>
              </svg>
            </div>

            {/* Location Cards positioned around the map */}
            <div className="relative z-10 w-full h-full">
              {/* Oceania - Bottom Right */}
              <motion.div
                className="absolute bottom-8 right-8 w-48"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🇦🇺</span>
                    <h3 className="text-lg font-bold text-[#212121] font-poppins">Oceania</h3>
                  </div>
                  <p className="text-[#6C7A89] text-sm font-inter">Sydney, Melbourne, Brisbane</p>
                </div>
              </motion.div>

              {/* US - Top Left */}
              <motion.div
                className="absolute top-8 left-8 w-48"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🇺🇸</span>
                    <h3 className="text-lg font-bold text-[#212121] font-poppins">US</h3>
                  </div>
                  <p className="text-[#6C7A89] text-sm font-inter">Los Angeles, New York, Houston</p>
                </div>
              </motion.div>

              {/* South America - Bottom Left */}
              <motion.div
                className="absolute bottom-8 left-8 w-48"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🇧🇷</span>
                    <h3 className="text-lg font-bold text-[#212121] font-poppins">South America</h3>
                  </div>
                  <p className="text-[#6C7A89] text-sm font-inter">São Paulo, Buenos Aires, Lima</p>
                </div>
              </motion.div>

              {/* Europe - Top Center */}
              <motion.div
                className="absolute top-8 left-1/2 transform -translate-x-1/2 w-48"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🇪🇺</span>
                    <h3 className="text-lg font-bold text-[#212121] font-poppins">EU - MED</h3>
                  </div>
                  <p className="text-[#6C7A89] text-sm font-inter">Hamburg, Rotterdam, Antwerp</p>
                </div>
              </motion.div>

              {/* Middle East - Top Right */}
              <motion.div
                className="absolute top-8 right-8 w-48"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🇦🇪</span>
                    <h3 className="text-lg font-bold text-[#212121] font-poppins">Middle East</h3>
                  </div>
                  <p className="text-[#6C7A89] text-sm font-inter">Dubai, Jeddah, Doha</p>
                </div>
              </motion.div>

              {/* India - Center Left */}
              <motion.div
                className="absolute top-1/2 left-8 transform -translate-y-1/2 w-48"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🇮🇳</span>
                    <h3 className="text-lg font-bold text-[#212121] font-poppins">India</h3>
                  </div>
                  <p className="text-[#6C7A89] text-sm font-inter">Mumbai, Chennai, Kolkata</p>
                </div>
              </motion.div>

              {/* China - Center Right */}
              <motion.div
                className="absolute top-1/2 right-8 transform -translate-y-1/2 w-48"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🇨🇳</span>
                    <h3 className="text-lg font-bold text-[#212121] font-poppins">China</h3>
                  </div>
                  <p className="text-[#6C7A89] text-sm font-inter">Shanghai, Shenzhen, Hong Kong</p>
                </div>
              </motion.div>

              {/* Southeast Asia - Center */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🇹🇭</span>
                    <h3 className="text-lg font-bold text-[#212121] font-poppins">Southeast Asia</h3>
                  </div>
                  <p className="text-[#6C7A89] text-sm font-inter">Bangkok, Singapore, Manila</p>
                </div>
              </motion.div>

              {/* Korea - Top Right Center */}
              <motion.div
                className="absolute top-1/3 right-1/4 w-48"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-2">🇰🇷</span>
                    <h3 className="text-lg font-bold text-[#212121] font-poppins">Korea</h3>
                  </div>
                  <p className="text-[#6C7A89] text-sm font-inter">Seoul, Busan, Incheon</p>
                </div>
              </motion.div>
            </div>

            {/* Connection Lines Animation */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <motion.path
                d="M 200 150 Q 400 200 600 160"
                stroke="#3E5C76"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.path
                d="M 400 180 Q 600 220 800 190"
                stroke="#6C7A89"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.2 }}
              />
              <motion.path
                d="M 300 280 Q 500 240 700 270"
                stroke="#FF6B35"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.4 }}
              />
            </svg>
          </div>

          {/* Stats Summary */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-[#3E5C76] mb-2 font-poppins">11</div>
              <div className="text-lg text-[#6C7A89] font-inter">Global Regions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#3E5C76] mb-2 font-poppins">500+</div>
              <div className="text-lg text-[#6C7A89] font-inter">Cities Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#3E5C76] mb-2 font-poppins">24/7</div>
              <div className="text-lg text-[#6C7A89] font-inter">Global Support</div>
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6B35] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#E55A2B] transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
            >
              Work With Us
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* <Features /> */}
      <Footer />
    </main>
  )
}
