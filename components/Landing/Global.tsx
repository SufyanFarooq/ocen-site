import { motion } from "framer-motion";


export default function Global() {
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
          <span className="text-[#3E5C76]">Global Solutions</span>
        </h2>
        <p className="text-xl text-[#6C7A89] max-w-3xl mx-auto font-inter">
          Connecting businesses worldwide with our extensive network of
          suppliers and partners
        </p>
      </motion.div>

      {/* World Map Container */}
      <div className="relative w-full h-[600px] bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF] rounded-3xl overflow-hidden shadow-2xl border border-[#E8ECEF]">
        {/* World Map Background */}
        <div className="absolute inset-0 opacity-10">
          <svg viewBox="0 0 1000 500" className="w-full h-full">
            <path
              d="M150,200 Q200,180 250,200 T350,200 Q400,220 450,200 T550,200 Q600,180 650,200 T750,200 Q800,220 850,200"
              fill="none"
              stroke="#3E5C76"
              strokeWidth="2"
            />
            <path
              d="M100,250 Q150,230 200,250 T300,250 Q350,270 400,250 T500,250 Q550,230 600,250 T700,250 Q750,270 800,250 T900,250"
              fill="none"
              stroke="#6C7A89"
              strokeWidth="2"
            />
            <path
              d="M120,300 Q170,280 220,300 T320,300 Q370,320 420,300 T520,300 Q570,280 620,300 T720,300 Q770,320 820,300 T920,300"
              fill="none"
              stroke="#FF6B35"
              strokeWidth="2"
            />
            {/* Add more map elements */}
            <circle cx="200" cy="150" r="3" fill="#3E5C76" />
            <circle cx="400" cy="180" r="3" fill="#6C7A89" />
            <circle cx="600" cy="160" r="3" fill="#FF6B35" />
            <circle cx="800" cy="190" r="3" fill="#3E5C76" />
            <circle cx="300" cy="280" r="3" fill="#6C7A89" />
            <circle cx="500" cy="260" r="3" fill="#FF6B35" />
            <circle cx="700" cy="270" r="3" fill="#3E5C76" />
            <circle cx="900" cy="250" r="3" fill="#6C7A89" />
          </svg>
        </div>

        {/* Location Cards positioned around the map */}
        <div className="relative z-10 w-full h-full">
          {/* Oceania - Bottom Right */}
          <motion.div
            className="absolute bottom-8 right-8 w-48"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🇦🇺</span>
                <h3 className="text-lg font-bold text-[#212121] font-poppins">
                  Oceania
                </h3>
              </div>
              <p className="text-[#6C7A89] text-sm font-inter">
                Sydney, Melbourne, Brisbane
              </p>
            </div>
          </motion.div>

          {/* US - Top Left */}
          <motion.div
            className="absolute top-8 left-8 w-48"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🇺🇸</span>
                <h3 className="text-lg font-bold text-[#212121] font-poppins">
                  US
                </h3>
              </div>
              <p className="text-[#6C7A89] text-sm font-inter">
                Los Angeles, New York, Houston
              </p>
            </div>
          </motion.div>

          {/* South America - Bottom Left */}
          <motion.div
            className="absolute bottom-8 left-8 w-48"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🇧🇷</span>
                <h3 className="text-lg font-bold text-[#212121] font-poppins">
                  South America
                </h3>
              </div>
              <p className="text-[#6C7A89] text-sm font-inter">
                São Paulo, Buenos Aires, Lima
              </p>
            </div>
          </motion.div>

          {/* Europe - Top Center */}
          <motion.div
            className="absolute top-8 left-1/2 transform -translate-x-1/2 w-48"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🇪🇺</span>
                <h3 className="text-lg font-bold text-[#212121] font-poppins">
                  EU - MED
                </h3>
              </div>
              <p className="text-[#6C7A89] text-sm font-inter">
                Hamburg, Rotterdam, Antwerp
              </p>
            </div>
          </motion.div>

          {/* Middle East - Top Right */}
          <motion.div
            className="absolute top-8 right-8 w-48"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🇦🇪</span>
                <h3 className="text-lg font-bold text-[#212121] font-poppins">
                  Middle East
                </h3>
              </div>
              <p className="text-[#6C7A89] text-sm font-inter">
                Dubai, Jeddah, Doha
              </p>
            </div>
          </motion.div>

          {/* India - Center Left */}
          <motion.div
            className="absolute top-1/2 left-8 transform -translate-y-1/2 w-48"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🇮🇳</span>
                <h3 className="text-lg font-bold text-[#212121] font-poppins">
                  India
                </h3>
              </div>
              <p className="text-[#6C7A89] text-sm font-inter">
                Mumbai, Chennai, Kolkata
              </p>
            </div>
          </motion.div>

          {/* China - Center Right */}
          <motion.div
            className="absolute top-1/2 right-8 transform -translate-y-1/2 w-48"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🇨🇳</span>
                <h3 className="text-lg font-bold text-[#212121] font-poppins">
                  China
                </h3>
              </div>
              <p className="text-[#6C7A89] text-sm font-inter">
                Shanghai, Shenzhen, Hong Kong
              </p>
            </div>
          </motion.div>

          {/* Southeast Asia - Center */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🇹🇭</span>
                <h3 className="text-lg font-bold text-[#212121] font-poppins">
                  Southeast Asia
                </h3>
              </div>
              <p className="text-[#6C7A89] text-sm font-inter">
                Bangkok, Singapore, Manila
              </p>
            </div>
          </motion.div>

          {/* Korea - Top Right Center */}
          <motion.div
            className="absolute top-1/3 right-1/4 w-48"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-white rounded-2xl p-4 shadow-xl border border-[#E8ECEF] group">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">🇰🇷</span>
                <h3 className="text-lg font-bold text-[#212121] font-poppins">
                  Korea
                </h3>
              </div>
              <p className="text-[#6C7A89] text-sm font-inter">
                Seoul, Busan, Incheon
              </p>
            </div>
          </motion.div>
        </div>

        {/* Connection Lines Animation */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.path
            d="M 200 150 Q 400 200 600 160"
            stroke="#3E5C76"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.path
            d="M 400 180 Q 600 220 800 190"
            stroke="#6C7A89"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          />
          <motion.path
            d="M 300 280 Q 500 240 700 270"
            stroke="#FF6B35"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.4 }}
          />
        </svg>
      </div>

      {/* Stats Summary */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="text-center">
          <div className="text-4xl font-bold text-[#3E5C76] mb-2 font-poppins">
            11
          </div>
          <div className="text-lg text-[#6C7A89] font-inter">
            Global Regions
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-[#3E5C76] mb-2 font-poppins">
            500+
          </div>
          <div className="text-lg text-[#6C7A89] font-inter">
            Cities Worldwide
          </div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-[#3E5C76] mb-2 font-poppins">
            24/7
          </div>
          <div className="text-lg text-[#6C7A89] font-inter">
            Global Support
          </div>
        </div>
      </motion.div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FF6B35] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#E55A2B] transition-all duration-300 shadow-lg hover:shadow-xl font-poppins"
        >
          Work With Us
        </motion.button>
      </motion.div>
    </div>
  </section>
  )
}