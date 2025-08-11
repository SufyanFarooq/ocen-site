import { motion } from "framer-motion";

export default function Services() {
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#E8ECEF]">
          <div className="w-16 h-16 bg-[#3E5C76] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white text-2xl">📦</span>
          </div>
          <h3 className="text-2xl font-bold text-[#212121] mb-4">
            Product Sourcing
          </h3>
          <p className="text-[#6C7A89] leading-relaxed">
            Find the perfect manufacturers and suppliers for your products
            with our extensive network.
          </p>
        </div>
        <div className="group bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#E8ECEF]">
          <div className="w-16 h-16 bg-[#6C7A89] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white text-2xl">🚢</span>
          </div>
          <h3 className="text-2xl font-bold text-[#212121] mb-4">
            Logistics
          </h3>
          <p className="text-[#6C7A89] leading-relaxed">
            End-to-end logistics solutions including shipping, customs, and
            delivery.
          </p>
        </div>
        <div className="group bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#E8ECEF]">
          <div className="w-16 h-16 bg-[#FF6B35] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white text-2xl">✅</span>
          </div>
          <h3 className="text-2xl font-bold text-[#212121] mb-4">
            Quality Control
          </h3>
          <p className="text-[#6C7A89] leading-relaxed">
            Rigorous quality control processes to ensure your products meet
            the highest standards.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}