'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    query: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      // EmailJS configuration - Replace these with your actual EmailJS credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_8stgp5e'
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_kzf1tbj'
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'wFB_yeclDFKqNOqA0'
      
      // Initialize EmailJS
      emailjs.init(publicKey)
      
      // Send email
      const result = await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.query,
        to_email: 'yiwusalahtrading@gmail.com',
        reply_to: formData.email
      })
      
      console.log('Email sent successfully:', result.text)
      setIsSubmitted(true)
      setFormData({ name: '', company: '', email: '', phone: '', query: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitError('Failed to send message. Please try again or contact us directly at yiwusalahtrading@gmail.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'yiwusalahtrading@gmail.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+86 15058674331',
      description: 'Call us during business hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 3244744890',
      description: 'Call us during business hours',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Pakistan office and warehouse address : ADD : G.T ROAD,SALAMT PURA STATION,KOH-E-NOOR KANTA, LAHORE',
      description: 'Visit our office',
    },
  ]

  // Predefined positions for floating elements to avoid hydration issues
  const floatingPositions = [
    { left: '5%', top: '15%' },
    { left: '15%', top: '85%' },
    { left: '25%', top: '35%' },
    { left: '35%', top: '75%' },
    { left: '45%', top: '25%' },
    { left: '55%', top: '95%' },
    { left: '65%', top: '45%' },
    { left: '75%', top: '65%' },
    { left: '85%', top: '20%' },
    { left: '95%', top: '80%' },
    { left: '10%', top: '55%' },
    { left: '20%', top: '30%' },
    { left: '30%', top: '80%' },
    { left: '40%', top: '50%' },
    { left: '50%', top: '10%' },
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
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: position.left,
                top: position.top,
              }}
              animate={{
                y: [0, -80, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + (i % 2),
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto">
              Get in touch with our team to discuss your sourcing needs and discover how we can help your business grow.
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

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-white to-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold ocean-text-gradient mb-8">
                Get In Touch
              </h2>
              
              {isSubmitted ? (
                <div className="ocean-card p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-deep-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-deep-600 mb-6">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="ocean-button"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-deep-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-deep-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-deep-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-deep-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-deep-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-deep-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-deep-700 mb-2">
                      Phone (please include country code)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-deep-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200"
                      placeholder="+1 for USA, +86 for France"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="query" className="block text-sm font-medium text-deep-700 mb-2">
                      Query *
                    </label>
                    <textarea
                      id="query"
                      name="query"
                      value={formData.query}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-deep-300 rounded-lg focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your sourcing needs..."
                    />
                  </div>
                  
                  {/* Error Message */}
                  {submitError && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-600 text-sm">{submitError}</p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ocean-button w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold ocean-text-gradient mb-8">
                  Contact Information
                </h2>
                <p className="text-deep-600 text-lg mb-8">
                  Ready to start your sourcing journey? Get in touch with us and let's discuss how we can help your business grow.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="ocean-card p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-ocean-500 to-ocean-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-deep-800 mb-1">
                          {info.title}
                        </h3>
                        {info.title === 'Address' ? (
                          <a 
                            href="https://google.com/maps?q=31.588624954223633,74.41537475585938&z=17&hl=en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ocean-600 font-medium mb-1 hover:text-ocean-700 transition-colors duration-200 cursor-pointer"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-ocean-600 font-medium mb-1">
                            {info.value}
                          </p>
                        )}
                        <p className="text-deep-600 text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="ocean-card p-6">
                <h3 className="text-lg font-semibold text-deep-800 mb-4">
                  Business Hours
                </h3>
                <div className="space-y-2 text-deep-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
