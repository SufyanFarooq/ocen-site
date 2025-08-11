import { motion } from "framer-motion";


export default function Pool() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6 font-poppins">
          Whatever your mind can imagine,{" "}
          <span className="text-[#3E5C76]">we can source it</span>
        </h2>
        <p className="text-xl text-[#6C7A89] max-w-3xl mx-auto font-inter">
          The question is always what you need, never what we can deliver!
        </p>
      </motion.div>

      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h3 className="text-3xl font-bold text-[#3E5C76] mb-8 font-poppins">
          A supplier pool 1000's strong
        </h3>
      </motion.div>

      {/* Product Categories */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {[
          { icon: "🌶️", name: "Spices" },
          { icon: "⚙️", name: "Machine" },
          { icon: "📦", name: "Carton Box" },
          { icon: "👕", name: "Garment" },
          { icon: "🔩", name: "Steel" },
          { icon: "👟", name: "Footwear" },
        ].map((category, index) => (
          <motion.div
            key={index}
            className="text-center group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            whileHover={{ y: -5, scale: 1.05 }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-3xl">{category.icon}</span>
            </div>
            <h4 className="text-lg font-semibold text-[#212121] font-poppins group-hover:text-[#3E5C76] transition-colors duration-300">
              {category.name}
            </h4>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-[#3E5C76] font-poppins">
          We are small and medium business specialists
        </h3>
      </motion.div>
    </div>
  </section>
  )
}