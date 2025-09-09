'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Users, Target, Globe, Award, CheckCircle } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const teamMembers = [
    {
      name: 'Shabahat Ali',
      role: 'Head of Growth China',
      description: 'With an extensive background in marketing and B2B, Shabahat leads our client management and acquisition in China.',
      image: '/api/placeholder/300/300',
    },
    {
      name: 'Shujaat Ali',
      role: 'Head of Sourcing China',
      description: 'Shujaat has been active in the supply chain industry for over 8 years. Starting out as a customs agent in Pakistan, he is currently on the ground in the Chinese market finding deals for our clients.',
      image: '/api/placeholder/300/300',
    },
  ]

  const missions = [
    'Bring enterprise level customer experience to the China SMB market',
    'Remove friction from international sourcing',
    'Mitigate risk for small businesses in doing foreign trade',
  ]

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service delivery.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term partnerships based on trust and mutual success.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting China businesses with the best global suppliers.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Ensuring the highest quality standards in all our sourcing activities.',
    },
  ]

  // Predefined positions for floating elements to avoid hydration issues
  const floatingPositions = [
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
  ]

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-[#3E5C76] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {floatingPositions.map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-4 h-4 bg-white rounded-full"
              style={{
                left: position.left,
                top: position.top,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + (i % 2),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              About YST - YIWU SALAH Traders
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-medium">
              Connecting China businesses with verified manufacturers and suppliers worldwide through our comprehensive sourcing solutions.
            </p>
          </div>
        </div>

        {/* Diagonal Edge Cut Overlay - Left Side */}
        <div 
          className="absolute top-0 left-0 w-1/2 h-full bg-[#6C7A89] backdrop-blur-sm z-10"
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)'
          }}
        >
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold ocean-text-gradient mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-deep-600 max-w-3xl mx-auto mb-12">
              A sourcing company built for small and medium business. We are connecting the China SMB market directly with China to achieve a competitive edge over pricing and the market.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {missions.map((mission, index) => (
                <div
                  key={index}
                  className="ocean-card p-6 text-center"
                >
                  <CheckCircle className="h-12 w-12 text-ocean-600 mx-auto mb-4" />
                  <p className="text-deep-700 font-medium">{mission}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold ocean-text-gradient mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-deep-600 max-w-3xl mx-auto">
              Our experienced team is dedicated to providing you with the best sourcing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="ocean-card p-8"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-ocean-400 to-ocean-600 rounded-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-white" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold text-deep-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-ocean-600 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-deep-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold ocean-text-gradient mb-6">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="ocean-card p-6 text-center"
              >
                <value.icon className="h-12 w-12 text-ocean-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-deep-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-deep-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
