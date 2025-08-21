'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Ship, Globe, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const slides = [
    {
      title: "Source products from China",
      subtitle: "through an Australian partner",
      description: "Your Trusted Sourcing Agents In Australia Helping You In Sourcing Products From China At The Best Possible Rate.",
      image: "/hero/hero-1.png",
      icon: Ship,
      gradient: "from-[#3E5C76] via-[#6C7A89] to-[#8B9CA8]",
    },
    {
      title: "Gain a competitive edge",
      subtitle: "by accessing our vetted suppliers",
      description: "We have local representatives in the Chinese market that help you unlock the product sources not easily available to foreign buyers.",
      image: "/hero/hero-2.png",
      icon: Globe,
      gradient: "from-[#2C4A6B] via-[#5A7A8A] to-[#7B9CA8]",
    },
    {
      title: "1000+ Manufacturers",
      subtitle: "500+ Destinations worldwide",
      description: "Connect with our extensive network of verified manufacturers and suppliers across the globe for your sourcing needs.",
      image: "/hero/hero-3.png",
      icon: TrendingUp,
      gradient: "from-[#1E3A5A] via-[#4A6A7A] to-[#6B8C98]",
    },
  ]

  // Predefined positions for bubbles to avoid hydration issues
  const bubblePositions = [
    { left: '10%', top: '20%' },
    { left: '20%', top: '80%' },
    { left: '30%', top: '40%' },
    { left: '40%', top: '10%' },
    { left: '50%', top: '70%' },
    { left: '60%', top: '30%' },
    { left: '70%', top: '90%' },
    { left: '80%', top: '50%' },
    { left: '90%', top: '15%' },
    { left: '15%', top: '60%' },
    { left: '25%', top: '25%' },
    { left: '35%', top: '85%' },
    { left: '45%', top: '45%' },
    { left: '55%', top: '5%' },
    { left: '65%', top: '75%' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  // Reset image states when slide changes
  useEffect(() => {
    setImageLoading(true)
    setImageError(false)
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const renderIcon = (iconComponent: any, className: string) => {
    const Icon = iconComponent
    return <Icon className={className} />
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF]">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233E5C76' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>

      {/* Slider Background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Fallback gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient}`}></div>
            
            {/* Loading spinner */}
            {imageLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
              </div>
            )}
            
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              fill
              priority={currentSlide === 0}
              quality={85}
              sizes="100vw"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
                opacity: imageLoading || imageError ? 0 : 1,
                transition: 'opacity 1s ease-in-out'
              }}
              onLoad={() => setImageLoading(false)}
              onError={() => {
                setImageError(true)
                setImageLoading(false)
              }}
            />
            
            {/* Gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3E5C76]/80 via-[#6C7A89]/60 to-transparent"></div>
            
            {/* Animated Background Elements */}
            {bubblePositions.map((position, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: position.left,
                  top: position.top,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 4 + (i % 4),
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text Content */}
              <div className="text-white space-y-8 relative z-30">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-4">
                    <span className="w-2 h-2 bg-[#0B1D3A] rounded-full mr-2"></span>
                    Trusted Sourcing Partner
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-poppins">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="block text-white"
                    >
                      {slides[currentSlide].title}
                    </motion.span>
                    <br />
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="text-[#B8C2CC] font-poppins block"
                    >
                      {slides[currentSlide].subtitle}
                    </motion.span>
                  </h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg sm:text-xl lg:text-2xl text-[#E8ECEF] max-w-2xl font-inter leading-relaxed"
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                </motion.div>


              </div>

              {/* Visual Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:flex justify-center items-center"
              >
                <div className="relative">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="w-64 h-64 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl"
                  >
                    {renderIcon(slides[currentSlide].icon, "h-32 w-32 text-white/80")}
                  </motion.div>
                  
                  {/* Floating Elements */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-4 h-4 bg-white/30 rounded-full"
                      style={{
                        left: `${20 + (i * 60)}%`,
                        top: `${20 + (i * 60)}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Desktop CTA Buttons */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden lg:flex flex-col gap-4 z-40">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0B1D3A] text-white px-6 py-3 rounded-2xl font-semibold text-base hover:bg-[#23344E] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 font-poppins"
            >
              <Ship className="w-5 h-5" />
              Start Sourcing
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-6 py-3 rounded-2xl font-semibold text-base hover:bg-white hover:text-[#3E5C76] transition-all duration-300 flex items-center justify-center space-x-2 font-poppins whitespace-nowrap"
            >
              <span>Learn More</span>
              <Ship className="h-4 w-4" />
            </motion.button>
          </div>

          {/* Mobile CTA Buttons */}
          <div className="absolute bottom-31 left-1/2 transform -translate-x-1/2 flex lg:hidden flex-col sm:flex-row gap-4 z-40 w-full max-w-md px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0B1D3A] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#23344E] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 font-poppins w-full"
            >
              <Ship className="w-5 h-5" />
              Start Sourcing
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-[#3E5C76] transition-all duration-300 flex items-center justify-center space-x-2 font-poppins w-full"
            >
              <span>Learn More</span>
              <Ship className="h-5 w-5" />
            </motion.button>
          </div>

        
        </div>
      </div>

      {/* Diagonal Edge Cut Overlay - Moved to Left Side */}
      <div 
        className="absolute top-0 left-0 w-1/2 h-full bg-[#6C7A89] backdrop-blur-sm z-10"
        style={{
          clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)'
        }}
      >
      </div>
    </div>
  )
}

export default Hero
