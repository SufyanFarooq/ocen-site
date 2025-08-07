'use client'

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'

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
                icon: '🚢', 
                number: '1000+', 
                label: 'Manufacturers',
                description: 'Verified suppliers across China',
                color: 'from-[#3E5C76] to-[#4A6B8A]',
                delay: 0.1
              },
              { 
                icon: '🌍', 
                number: '500+', 
                label: 'Destinations',
                description: 'Countries we serve worldwide',
                color: 'from-[#6C7A89] to-[#7A8B9A]',
                delay: 0.2
              },
              { 
                icon: '📈', 
                number: '24/7', 
                label: 'Support',
                description: 'Round-the-clock assistance',
                color: 'from-[#FF6B35] to-[#E55A2B]',
                delay: 0.3
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
              className="bg-white rounded-3xl p-8 shadow-xl border border-[#E8ECEF]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#FF6B35] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛒</span>
                </div>
                <h3 className="text-2xl font-bold text-[#212121] font-poppins">AliBaba</h3>
                <div className="text-[#FF6B35] font-semibold text-lg">High prices</div>
              </div>
              <p className="text-[#6C7A89] leading-relaxed font-inter">
                Prices are higher than Chinese market prices because suppliers are aware their customers are overseas & have no frame of reference. Plus, one thing wrong and you have to ship back from Australia and wait for them to rectify & ship again that is if they agree to this in the first place.
              </p>
            </motion.div>

            {/* Sourcing Agent Option */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl border border-[#E8ECEF]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#3E5C76] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-[#212121] font-poppins">Sourcing Agent</h3>
                <div className="text-[#3E5C76] font-semibold text-lg">High friction</div>
              </div>
              <p className="text-[#6C7A89] leading-relaxed font-inter">
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
                description: 'If your total order cost is more than $2500, we don\'t charge any flat fees.'
              },
              {
                icon: '📦',
                title: 'No MOQ',
                description: 'No minimum order limit, we want you to have a frictionless experience and try with a small order before scaling.'
              },
              {
                icon: '🇦🇺',
                title: 'Australian Company',
                description: 'Payment methods, Communication, and accountability are the same as with any local company in Australia.'
              },
              {
                icon: '📋',
                title: 'Free Quote',
                description: 'No upfront fee means that you will be given a free of cost estimate for the product you inquire for.'
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-[#E8ECEF] text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#3E5C76] to-[#4A6B8A] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-[#212121] mb-4 font-poppins group-hover:text-[#3E5C76] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-[#6C7A89] leading-relaxed font-inter">
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
      <section className="py-20 bg-gradient-to-br from-[#F0F3F4] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6 font-poppins">
              Our <span className="text-[#3E5C76]">Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: '1',
                title: 'Discovery',
                description: 'We do an online call to discuss your needs',
                icon: '🔍'
              },
              {
                number: '2',
                title: 'Hunt',
                description: 'We take your requirements and find the best supplier and price',
                icon: '🎯'
              },
              {
                number: '3',
                title: 'Quote',
                description: 'We get you a quote for your goods & shipping',
                icon: '📋'
              },
              {
                number: '4',
                title: 'Sampling',
                description: 'Where needed, we arrange samples for you',
                icon: '📦'
              },
              {
                number: '5',
                title: 'Shipping',
                description: 'Once you are happy and payment is made, we book in your shipping',
                icon: '🚢'
              },
              {
                number: '6',
                title: 'Delivery',
                description: 'Order arrives at your warehouse',
                icon: '✅'
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-xl border border-[#E8ECEF] text-center group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#FF6B35] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>
                
                <div className="w-16 h-16 bg-gradient-to-br from-[#3E5C76] to-[#4A6B8A] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#212121] mb-4 font-poppins group-hover:text-[#3E5C76] transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-[#6C7A89] leading-relaxed font-inter">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6B35] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#E55A2B] transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
            >
              Request A Quote
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                region: 'Oceania',
                cities: 'Sydney, Melbourne, Brisbane,...',
                color: 'from-[#3E5C76] to-[#4A6B8A]'
              },
              {
                region: 'US',
                cities: 'Los Angeles, Long Beach, Savannah, Charleston, Norfolk, Houston, Baltimore, Boston, Tampa,...',
                color: 'from-[#6C7A89] to-[#7A8B9A]'
              },
              {
                region: 'South America',
                cities: 'Manzanillo, Ensenada, Buenaventur, Callao, San Antonio, Puerto Quetzal',
                color: 'from-[#FF6B35] to-[#E55A2B]'
              },
              {
                region: 'EU - MED',
                cities: 'Hamburg, Rotterdam, Antwerp, Szczecin, Lehavre, Dunkirk, Southampton, Felixstowe, Gdansk, Immingham, Valencia, Genoa, LaSpezia, FOS, Livorno,...',
                color: 'from-[#3E5C76] to-[#4A6B8A]'
              },
              {
                region: 'Middle East',
                cities: 'Jebbel Ali, Sharjah, Bahrain, Sohar, Hamad,...',
                color: 'from-[#6C7A89] to-[#7A8B9A]'
              },
              {
                region: 'India',
                cities: 'Nhava Sheva, Mundra, Mundra, Chennai, Cochin, Kolkata',
                color: 'from-[#FF6B35] to-[#E55A2B]'
              },
              {
                region: 'China',
                cities: 'Ningbo, Xiamen, Xingang, Qingdao, Fuzhou, Shanghai, Dalian, Shenzeng, Hongkong',
                color: 'from-[#3E5C76] to-[#4A6B8A]'
              },
              {
                region: 'Thailand',
                cities: 'Bangkok, Laem Chabang,',
                color: 'from-[#6C7A89] to-[#7A8B9A]'
              },
              {
                region: 'Malaysia',
                cities: 'Port Klang (North & West), Penang',
                color: 'from-[#FF6B35] to-[#E55A2B]'
              },
              {
                region: 'Philippines',
                cities: 'Manila',
                color: 'from-[#3E5C76] to-[#4A6B8A]'
              },
              {
                region: 'Korea',
                cities: 'Incheon, Pusan',
                color: 'from-[#6C7A89] to-[#7A8B9A]'
              },
            ].map((location, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF] rounded-3xl p-6 shadow-xl border border-[#E8ECEF] group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${location.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-white font-bold text-sm">🌍</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#212121] mb-2 font-poppins group-hover:text-[#3E5C76] transition-colors duration-300">
                  {location.region}
                </h3>
                
                <p className="text-[#6C7A89] text-sm font-inter">
                  {location.cities}
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

      <Features />
      <Footer />
    </main>
  )
}
