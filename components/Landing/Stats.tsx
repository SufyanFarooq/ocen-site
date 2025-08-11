import { motion } from "framer-motion";

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-[#F0F3F4] relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233E5C76' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#212121] mb-4 font-poppins">
            Our <span className="text-[#3E5C76]">Global Reach</span>
          </h2>
          <p className="text-xl text-[#6C7A89] max-w-2xl mx-auto font-inter">
            Connecting Australian businesses with verified manufacturers and
            suppliers worldwide
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              number: "1000+",
              label: "Manufacturers",
              description: "Verified suppliers across China",
              color: "from-[#3E5C76] to-[#4A6B8A]",
              delay: 0.1,
              image: "/hero/manufacturers.jpg",
            },
            {
              number: "500+",
              label: "Destinations",
              description: "Countries we serve worldwide",
              color: "from-[#6C7A89] to-[#7A8B9A]",
              delay: 0.2,
              image: "/hero/destinations.jpg",
            },
            {
              number: "24/7",
              label: "Support",
              description: "Round-the-clock assistance",
              color: "from-[#FF6B35] to-[#E55A2B]",
              delay: 0.3,
              image: "/hero/support.jpg",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: stat.delay }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="text-center group relative"
            >
              {/* Card Background */}
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#E8ECEF] group-hover:border-[#3E5C76]/30 relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <img
                    src={stat.image}
                    alt={stat.label}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-500"
                  />
                  {/* Overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/40"></div>
                </div>

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#3E5C76]/5 to-[#FF6B35]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                {/* Number */}
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-[#212121] mb-3 font-poppins group-hover:text-[#3E5C76] transition-colors duration-300 relative z-10"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: stat.delay + 0.2 }}
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <div className="text-xl font-semibold text-[#3E5C76] mb-2 font-poppins relative z-10">
                  {stat.label}
                </div>

                {/* Description */}
                <div className="text-[#6C7A89] font-inter relative z-10">
                  {stat.description}
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#FF6B35] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-150"></div>
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#3E5C76] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 group-hover:scale-150"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-[#6C7A89] mb-6 font-inter">
            Ready to start your sourcing journey?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FF6B35] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#E55A2B] transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
