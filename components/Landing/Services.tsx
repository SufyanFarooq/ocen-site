"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();

  const services = [
    {
      title: "YIWU MARKET GUIDE",
      image: "services/yiwu-market.jpg",
      description: "Expert guidance through the world's largest wholesale market"
    },
    {
      title: "AIRPORT PICKUP",
      image: "services/airport-pickup.jpg",
      description: "Professional airport pickup and transfer services"
    },
    {
      title: "ORDER TRACKING",
      image: "services/order-tracing.jpg",
      description: "Real-time tracking of your orders throughout the process"
    },
    {
      title: "QUALITY CONTROL",
      image: "services/quality-controll.jpg",
      description: "Comprehensive quality assurance and inspection services"
    },
    {
      title: "CONTAINER LOADING",
      image: "services/container-loading.jpg",
      description: "Professional container loading and securing services"
    },
    {
      title: "CHINA CUSTOMS",
      image: "services/custom-officer.jpg",
      description: "Expert customs clearance and documentation support"
    },
    {
      title: "SHIPPING",
      image: "services/shipping.jpg",
      description: "Reliable shipping solutions worldwide"
    }
  ];

  const handleServiceClick = () => {
    router.push('/services');
  };

  return (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 active:scale-95"
              onClick={handleServiceClick}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="relative p-8 h-64 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--primary)] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-white/90 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {/* Learn More Button - Always visible on mobile */}
                <div className="flex items-center gap-2 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform md:translate-y-2 md:group-hover:translate-y-0">
                  <span className="text-[var(--primary)] font-semibold text-sm">Learn More</span>
                  <svg 
                    className="w-4 h-4 text-[var(--primary)] transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Hover overlay effect - Only on desktop */}
              <div className="absolute inset-0 bg-[var(--primary)]/10 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}