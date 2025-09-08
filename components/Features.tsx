'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, DollarSign, Clock, Users, Target, Zap, ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

const Features = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const slideRef = useRef<HTMLDivElement>(null)
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Shield,
      title: 'No Flat Fee',
      description: 'If your total order cost is more than $2500, we don\'t charge any flat fees.',
      color: 'from-[#3E5C76] to-[#4A6B8A]',
      bgGradient: 'from-[#F0F3F4] to-[#E8ECEF]',
    },
    {
      icon: DollarSign,
      title: 'No MOQ',
      description: 'No minimum order limit, we want you to have a frictionless experience and try with a small order before scaling.',
      color: 'from-[#6C7A89] to-[#7A8B9A]',
      bgGradient: 'from-[#F0F3F4] to-[#E8ECEF]',
    },
    {
      icon: Users,
      title: 'France Company',
      description: 'Payment methods, Communication, and accountability are the same as with any local company in France.',
      color: 'from-[#FF6B35] to-[#E55A2B]',
      bgGradient: 'from-[#F0F3F4] to-[#E8ECEF]',
    },
    {
      icon: Target,
      title: 'Free Quote',
      description: 'No upfront fee means that you will be given a free of cost estimate for the product you inquire for.',
      color: 'from-[#3E5C76] to-[#4A6B8A]',
      bgGradient: 'from-[#F0F3F4] to-[#E8ECEF]',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'We ensure timely delivery with our extensive network of logistics partners across the globe.',
      color: 'from-[#6C7A89] to-[#7A8B9A]',
      bgGradient: 'from-[#F0F3F4] to-[#E8ECEF]',
    },
    {
      icon: Zap,
      title: 'Quality Assurance',
      description: 'Every product goes through our rigorous quality control process before shipping.',
      color: 'from-[#FF6B35] to-[#E55A2B]',
      bgGradient: 'from-[#F0F3F4] to-[#E8ECEF]',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [features.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-ocean-50 relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold ocean-text-gradient mb-6 font-poppins">
              Why Choose Us?
            </h2>
            <p className="text-xl lg:text-2xl text-deep-600 max-w-3xl mx-auto font-inter">
              We are small and medium business specialists, providing enterprise-level service with no hidden costs.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Slide Container */}
      <div 
        ref={slideRef}
        className="relative h-screen flex items-center justify-center pt-32 pb-20"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.9 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className={`ocean-card p-8 sm:p-12 lg:p-16 text-center group h-[60vh] sm:h-[70vh] flex flex-col justify-center items-center bg-gradient-to-br ${features[currentSlide].bgGradient} border-2 border-white/50 shadow-2xl`}>
              {/* Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r ${features[currentSlide].color} text-white mb-8 sm:mb-12 shadow-xl`}
              >
                {React.createElement(features[currentSlide].icon, {
                  className: "h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16"
                })}
              </motion.div>
              
              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-deep-800 mb-6 sm:mb-8 font-poppins"
              >
                {features[currentSlide].title}
              </motion.h3>
              
              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-lg sm:text-xl lg:text-2xl text-deep-600 leading-relaxed max-w-2xl mx-auto font-inter"
              >
                {features[currentSlide].description}
              </motion.p>

              {/* Slide Counter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2"
              >
                <span className="text-deep-600 font-semibold text-lg">
                  {currentSlide + 1} / {features.length}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-deep-600 hover:bg-white/30 transition-all duration-300 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>

          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {features.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-ocean-500 scale-125' 
                    : 'bg-ocean-300 hover:bg-ocean-400'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-deep-600 hover:bg-white/30 transition-all duration-300 shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>
        </div>
      </div>

      {/* Comparison Section - Only show after all slides */}
      {currentSlide === features.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-2xl sm:text-3xl font-bold ocean-text-gradient text-center mb-8 font-poppins"
            >
              You have two options when it comes to buying from China as an France business
            </motion.h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {/* AliBaba Option */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                whileHover={{ y: -5 }}
                className="ocean-card p-6 sm:p-8 border-l-4 border-red-500"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg sm:text-xl">A</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-deep-800 font-poppins">AliBaba</h4>
                </div>
                <div className="space-y-3 sm:space-y-4 text-deep-600 font-inter">
                  <p className="flex items-start text-sm sm:text-base">
                    <span className="text-red-500 mr-2">•</span>
                    Prices are higher than Chinese market prices
                  </p>
                  <p className="flex items-start text-sm sm:text-base">
                    <span className="text-red-500 mr-2">•</span>
                    Suppliers aware of overseas customers
                  </p>
                  <p className="flex items-start text-sm sm:text-base">
                    <span className="text-red-500 mr-2">•</span>
                    High friction in returns and corrections
                  </p>
                </div>
              </motion.div>

              {/* Sourcing Agent Option */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ y: -5 }}
                className="ocean-card p-6 sm:p-8 border-l-4 border-green-500"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg sm:text-xl">S</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-deep-800 font-poppins">Sourcing Agent</h4>
                </div>
                <div className="space-y-3 sm:space-y-4 text-deep-600 font-inter">
                  <p className="flex items-start text-sm sm:text-base">
                    <span className="text-green-500 mr-2">•</span>
                    Usually for large corporations
                  </p>
                  <p className="flex items-start text-sm sm:text-base">
                    <span className="text-green-500 mr-2">•</span>
                    High MOQs and upfront fees
                  </p>
                  <p className="flex items-start text-sm sm:text-base">
                    <span className="text-green-500 mr-2">•</span>
                    Retainer fees required
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default Features
