

export default function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#3E5C76] to-[#4A6B8A]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Ready to Start Sourcing?
      </h2>
      <p className="text-xl text-[#E8ECEF] max-w-3xl mx-auto mb-12 font-inter">
        Join hundreds of France businesses that trust us with their
        sourcing needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-[#3E5C76] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl font-poppins">
          Get Started Today
        </button>
        <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white hover:text-[#3E5C76] transition-all duration-300 font-poppins">
          Learn More
        </button>
      </div>
    </div>
  </section>
  )
}