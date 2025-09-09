import { motion } from "framer-motion";
import Image from "next/image";

export default function Options() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F0F3F4] to-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6 font-poppins">
          You have <span className="text-[#3E5C76]">two options</span> when
          it comes to buying from China as an worldwide business
        </h2>
        <p className="text-xl text-[#6C7A89] max-w-3xl mx-auto font-inter">
          Choose the path that works best for your business needs and growth
          strategy.
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
            <h3 className="text-2xl font-bold text-[#212121] font-poppins">
              AliBaba
            </h3>
            <div className="text-[#FF6B35] font-semibold text-lg">
              High prices
            </div>
          </div>
          <p className="text-[#6C7A89] leading-relaxed font-inter relative z-10">
            Prices are higher than Chinese market prices because suppliers
            are aware their customers are overseas & have no frame of
            reference. Plus, one thing wrong and you have to ship back from
            countries and wait for them to rectify & ship again that is if
            they agree to this in the first place.
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
            <h3 className="text-2xl font-bold text-[#212121] font-poppins">
              Sourcing Agent
            </h3>
            <div className="text-[#3E5C76] font-semibold text-lg">
              High friction
            </div>
          </div>
          <p className="text-[#6C7A89] leading-relaxed font-inter relative z-10">
            This path is usually for large corporations because of the
            security, efficiency, and reliability of having someone you have
            hired to inspect the goods before shipping or payment to ensure
            compliance. But this route is associated with high MOQs, Upfront
            Fees, and Retainer fees.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
  )
}