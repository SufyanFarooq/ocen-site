import { motion } from "framer-motion";


export default function Competitive() {
  return (
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
            by accessing our vetted suppliers and partners in the Chinese
            market
          </h3>
          <p className="text-xl text-[#6C7A89] leading-relaxed font-inter">
            We have local representatives in the Chinese market that help
            you unlock the product sources not easily available to foreign
            buyers.
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
            <div className="text-6xl font-bold text-[#3E5C76] mb-2 font-poppins">
              1000+
            </div>
            <div className="text-xl font-semibold text-[#212121] font-poppins">
              Manufacturers
            </div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-[#3E5C76] mb-2 font-poppins">
              500+
            </div>
            <div className="text-xl font-semibold text-[#212121] font-poppins">
              Destinations
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
  )
}