'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Shield } from 'lucide-react'

export default function Tips() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const articles = [
    {
      id: 1,
      category: 'Import Laws and Process',
      title: 'All you need to know about Australian Import Regulations As A New Importer',
      excerpt: 'A complete guide for first-time Australian importers focusing on customs, logistics, laws, and regulations. Learn about duties, taxes, documentation, and compliance to streamline your importing process.',
      date: 'December 18, 2024',
      readTime: '8 min read',
      image: '/api/placeholder/400/250',
    },
    {
      id: 2,
      category: 'Import Laws and Process',
      title: 'Incoterms for Australian Importers Importing from China',
      excerpt: 'Learn the essential Incoterms for Australian importers sourcing goods from China. Discover detailed explanations, responsibilities, and examples to streamline your importing process and reduce risks.',
      date: 'December 17, 2024',
      readTime: '6 min read',
      image: '/api/placeholder/400/250',
    },
    {
      id: 3,
      category: 'Import Laws and Process',
      title: 'Australian Import Taxes - Overview of Duties and Custom Charges',
      excerpt: 'Learn everything about Australian import taxes, including customs duties, GST, exemptions, and documentation requirements.',
      date: 'December 18, 2024',
      readTime: '10 min read',
      image: '/api/placeholder/400/250',
    },
    {
      id: 4,
      category: 'Market Insights',
      title: 'Ecommerce Trends Australia 2025 - A detailed report',
      excerpt: 'A complete breakdown of Australian Ecommerce market, consumer behavior, key statistics and digital trends that are shaping the ecommerce landscape of Australia going into 2025.',
      date: 'December 29, 2024',
      readTime: '12 min read',
      image: '/api/placeholder/400/250',
    },
  ]

  const categories = [
    { name: 'All', count: 4 },
    { name: 'Product Sourcing', count: 0 },
    { name: 'Import Laws and Process', count: 3 },
    { name: 'Market Insights', count: 1 },
  ]

  const tips = [
    {
      icon: Shield,
      title: 'Quality Control',
      description: 'Always request samples before placing large orders and conduct thorough quality inspections.',
    },
    {
      icon: TrendingUp,
      title: 'Market Research',
      description: 'Research your target market thoroughly to understand demand and competition.',
    },
    {
      icon: BookOpen,
      title: 'Documentation',
      description: 'Keep all import documentation organized and ensure compliance with Australian regulations.',
    },
  ]

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
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 ocean-bg overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {floatingPositions.map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white rounded-full"
              style={{
                left: position.left,
                top: position.top,
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 7 + (i % 3),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Product Sourcing Tips
            </h1>
            <p className="text-xl md:text-2xl text-ocean-100 max-w-3xl mx-auto">
              Expert insights and guides to help you navigate the world of international sourcing and importing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Tips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-3xl font-bold ocean-text-gradient mb-6"
            >
              Quick Sourcing Tips
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="ocean-card p-6 text-center"
              >
                <tip.icon className="h-12 w-12 text-ocean-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-deep-800 mb-3">
                  {tip.title}
                </h3>
                <p className="text-deep-600">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl font-bold ocean-text-gradient mb-6"
            >
              Latest Articles & Insights
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-xl text-deep-600 max-w-3xl mx-auto"
            >
              Stay updated with the latest trends, regulations, and best practices in international sourcing.
            </motion.p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  index === 0
                    ? 'bg-ocean-600 text-white'
                    : 'bg-white text-deep-600 hover:bg-ocean-50 border border-deep-200'
                }`}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </motion.div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="ocean-card overflow-hidden group"
              >
                <div className="aspect-video bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-white opacity-50" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm font-medium text-ocean-600 bg-ocean-50 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-2 text-deep-500 text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-deep-500 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-deep-800 mb-3 group-hover:text-ocean-600 transition-colors duration-200">
                    {article.title}
                  </h3>
                  
                  <p className="text-deep-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 text-ocean-600 font-medium hover:text-ocean-700 transition-colors duration-200"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ocean-button"
            >
              Load More Articles
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-deep-800 to-deep-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Stay Updated with Sourcing Insights
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-xl text-deep-300 mb-8"
            >
              Get the latest sourcing tips, market insights, and regulatory updates delivered to your inbox.
            </motion.p>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-deep-800 focus:ring-2 focus:ring-ocean-500 focus:border-transparent"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-ocean-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-ocean-700 transition-colors duration-200"
              >
                Subscribe
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
