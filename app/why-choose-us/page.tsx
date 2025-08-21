'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

/** Small count-up component */
function Counter({ end = 0, duration = 1200 }: { end: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { margin: '-20% 0px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const from = 0;
    const to = end;
    let raf = 0;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(from + (to - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, inView]);

  return <span ref={ref}>{val}</span>;
}

export default function WhyChoseUSPage() {
  // your content (unchanged text)
  const stats = [
    { icon: '⏰', number: 10, suffix: '+', title: 'Years Experience', description: 'In international sourcing', color: 'from-white/25 to-white/10' },
    { icon: '🏭', number: 1000, suffix: '+', title: 'Manufacturers', description: 'Verified suppliers', color: 'from-white/25 to-white/10' },
    { icon: '🌍', number: 500, suffix: '+', title: 'Destinations', description: 'Worldwide shipping', color: 'from-white/25 to-white/10' },
  ];

  const features = [
    { icon: '🤝', title: 'Trusted Partner', description: 'Reliable sourcing solutions' },
    { icon: '⚡', title: 'Fast Delivery', description: 'Quick turnaround times' },
    { icon: '💰', title: 'Best Prices', description: 'Competitive rates guaranteed' },
    { icon: '🛡️', title: 'Quality Assured', description: 'Rigorous quality control' },
  ];

  const whyChoose = [
    { icon: '💰', title: 'No Flat Fee', description: "If your total order cost is more than $2500, we don't charge any flat fees.", image: '/choose-us/no-flat-fee.jpg' },
    { icon: '📦', title: 'No MOQ', description: 'No minimum order limit, start small before scaling.', image: '/choose-us/no-moq.jpg' },
    { icon: '🇦🇺', title: 'Australian Company', description: 'Local payment, communication, and accountability.', image: '/choose-us/australian-company.jpg' },
    { icon: '📋', title: 'Free Quote', description: 'Get a free estimate for your product inquiry.', image: '/choose-us/free-quote.jpg' },
  ];

  const whoShould = [
    { icon: '🛒', title: 'Ecommerce', description: 'Amazon, Shopify, Etsy sellers — small MOQs with customization and better pricing.', color: 'from-[#3E5C76] to-[#6C7A89]' },
    { icon: '📦', title: 'Wholesalers', description: 'Save on buying and shipping while keeping it simple.', color: 'from-[#6C7A89] to-[#8B9CA8]' },
    { icon: '🏭', title: 'Manufacturers', description: 'Secure long-term supply contracts with duty-paid shipping.', color: 'from-[#FF6B35] to-[#E55A2B]' },
    { icon: '🏪', title: 'Retailers', description: 'Offer low-cost goods for repeat purchases.', color: 'from-[#3E5C76] to-[#6C7A89]' },
    { icon: '🤝', title: 'Procurement Companies', description: 'Win more business with competitive pricing and quality.', color: 'from-[#6C7A89] to-[#8B9CA8]' },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-20 pb-16 bg-[#3E5C76] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-30">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-6 font-poppins"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Source smarter. Ship faster. <br className="hidden md:block" />
            Grow confidently with <span className="text-[var(--primary)]">YST — YIWU SALAH Traders</span>.
          </motion.h1>

          <motion.p
            className="text-xl text-white/90 max-w-4xl mx-auto font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            We bridge Australian businesses and Chinese manufacturers with an end-to-end sourcing and logistics partner you can trust.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <button className="px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-semibold shadow hover:shadow-lg transition hover:bg-[var(--primary-hover)] font-poppins">
              Work With Us
            </button>
            <a href="#process" className="px-6 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/30 backdrop-blur-sm hover:bg-white/15 transition font-poppins">
              See How We Work
            </a>
          </motion.div>
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

      {/* SPLIT SECTION A */}
      <section id="process" className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1723651295433-ad8832656e38?q=80&w=2575&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sourcing in action"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </div>

          <div>
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#3E5C76] font-poppins"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Your sourcing partner from inquiry to delivery
            </motion.h2>
            <motion.p
              className="mt-4 text-[#6C7A89] font-inter leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              From negotiating the right manufacturer to quality checks and shipping — we handle the messy middle so you can focus on growth.
            </motion.p>

            <div className="mt-8 space-y-4">
              {features.slice(0, 2).map((f) => (
                <div key={f.title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#F0F3F4] flex items-center justify-center text-xl shadow">{f.icon}</div>
                  <div>
                    <div className="font-semibold text-[#3E5C76] font-poppins">{f.title}</div>
                    <div className="text-sm text-[#6C7A89] font-inter">{f.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPLIT SECTION B (alternate) */}
      <section className="py-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-[#3E5C76] font-poppins"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Speed and certainty, without surprises
            </motion.h2>
            <motion.p
              className="mt-4 text-[#6C7A89] font-inter leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Clear timelines, transparent pricing, and rigorous quality control. We keep you in the loop, every step of the way.
            </motion.p>

            <div className="mt-8 space-y-4">
              {features.slice(2, 4).map((f) => (
                <div key={f.title} className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-[#F0F3F4] flex items-center justify-center text-xl shadow">{f.icon}</div>
                  <div>
                    <div className="font-semibold text-[#3E5C76] font-poppins">{f.title}</div>
                    <div className="text-sm text-[#6C7A89] font-inter">{f.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1600&auto=format&fit=crop"
              alt="Logistics and delivery"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US – rich image cards */}
      <section className="py-20 bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#3E5C76] font-poppins"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Why <span className="text-[#6C7A89]">choose us</span>?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item) => (
              <motion.article
                key={item.title}
                className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 group"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 bg-white">
                  <div className="w-14 h-14 rounded-full bg-[#3E5C76] text-white grid place-items-center text-2xl -mt-10 border-4 border-white shadow-lg">
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-[#3E5C76] font-poppins">{item.title}</h3>
                  <p className="mt-2 text-sm text-[#6C7A89] font-inter">{item.description}</p>
                </div>

                {/* hover reveal mini-case */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute bottom-6 left-6 right-6 text-white text-sm">
                    <div className="font-semibold mb-1">Example</div>
                    <p>Helped an AU retailer cut landed cost by 18% and reduce lead time by 12 days.</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHO SHOULD USE US – horizontal snap carousel */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-[#3E5C76] font-poppins"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Who <span className="text-[#6C7A89]">should use us</span>?
          </motion.h2>

          <div className="relative">
            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {whoShould.map((biz) => (
                <div
                  key={biz.title}
                  className="min-w-[280px] md:min-w-[360px] snap-start bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl p-6 shadow-xl border border-slate-200"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${biz.color} rounded-2xl flex items-center justify-center mb-4 text-2xl`}>
                    {biz.icon}
                  </div>
                  <div className="text-2xl font-bold text-[#3E5C76] font-poppins">{biz.title}</div>
                  <p className="mt-2 text-[#6C7A89] text-sm font-inter">{biz.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3E5C76]/85 via-[#6C7A89]/70 to-[#8B9CA8]/50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-[#3E5C76]">
          <motion.h2
            className="text-3xl md:text-5xl font-extrabold max-w-4xl font-poppins"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Ready to scale your sourcing with a partner that delivers?
          </motion.h2>
          <motion.p
            className="mt-4 text-slate-500 max-w-2xl font-inter leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Get a free quote today — no flat fee above $2,500 and no MOQ.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <button className="px-7 py-3 rounded-xl bg-[var(--primary)] text-white font-semibold shadow hover:shadow-lg transition hover:bg-[var(--primary-hover)] font-poppins">
              Get Free Quote
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
