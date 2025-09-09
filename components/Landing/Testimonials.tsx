"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {  Star } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Worldwide Retail Solutions",
      role: "CEO",
      content:
        "YST transformed our sourcing process completely. Their Yiwu market guidance saved us weeks of research, and the quality control exceeded our expectations. Highly recommended!",
      rating: 5,
      image: "/testimonials/Sarah-Johnson.jpg"
    },
    {
      name: "Michael Chen",
      company: "Global Import Co.",
      role: "Operations Manager",
      content:
        "The team at YST is incredibly professional. From supplier verification to final delivery, they handled everything seamlessly. Our production timeline improved by 30%.",
      rating: 4,
      image: "/testimonials/Michael-Chen.jpg"
    },
    {
      name: "Emma Rodriguez",
      company: "Eco Products",
      role: "Founder",
      content:
        "Working with YST has been a game-changer for our business. Their expertise in customs clearance and shipping made international sourcing feel effortless.",
      rating: 5,
      image: "/testimonials/Emma-Rodriguezv.jpg"
    },
    {
      name: "David Thompson",
      company: "Tech Innovations Ltd",
      role: "Procurement Director",
      content:
        "Outstanding service quality and attention to detail. YST's order tracking system gives us complete visibility, and their quality control is second to none.",
      rating: 5,
      image: "/testimonials/David-Thompson.jpg"
    },
    {
      name: "Lisa Wang",
      company: "Fashion Forward",
      role: "Creative Director",
      content:
        "YST helped us navigate the complex world of international sourcing. Their airport pickup service and local support made our business trips to China incredibly smooth.",
      rating: 4,
      image: "/testimonials/Lisa-Wang.jpg"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-[var(--primary)] text-white text-xs font-semibold tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-6"
          >
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6 leading-tight"
          >
            Trusted by <span className="text-[#3E5C76]">Founders</span>
            <br />
            Backed by <span className="text-[var(--primary)]">Results</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#6B7280] max-w-2xl mx-auto"
          >
            Results that speak through founder voices
          </motion.p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Main Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative bg-white rounded-2xl shadow-[0_20px_60px_-12px_rgba(0,0,0,0.08)] p-8 md:p-12 max-w-4xl mx-auto border border-[#F3F4F6]"
          >
            {/* Top Tab Indicator */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-[#E5E7EB] rounded-t-lg"></div>

            {/* Company Name */}
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-2xl font-bold text-[#1A1A1A]">
                {testimonials[currentIndex].company}
              </h3>
              {/* Pagination Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-[#3E5C76]" : "bg-[#D1D5DB]"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Quote Icon */}
            <div className="w-20 h-20 bg-gradient-to-br from-[#3E5C76] to-[#2A4A5F] rounded-full flex items-center justify-center mb-6 mx-auto overflow-hidden">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-lg md:text-xl text-[#4B5563] leading-relaxed mb-8 font-medium text-center">
              {testimonials[currentIndex].content}
            </blockquote>

            {/* Rating Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 mx-1 ${
                    i < testimonials[currentIndex].rating 
                      ? "text-[var(--primary)] fill-current" 
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Client Info */}
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-4">
                <div>
                  <h4 className="text-lg font-bold text-[#1A1A1A]">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-[#6B7280] font-medium">
                    {testimonials[currentIndex].role} of{" "}
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#3E5C76] w-8"
                    : "bg-[#E5E7EB] hover:bg-[#D1D5DB]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
