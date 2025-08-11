import { motion } from "framer-motion";
import {
  Users,
  ClipboardList,
  Globe,
  FileText,
  Landmark,
  Factory,
  Truck,
  Building2,
  ShieldCheck,
  BadgeCheck,
  Ship,
} from "lucide-react";

function validateOrder(ids: number[]) {
  if (process.env.NODE_ENV !== "production") {
    const ok = ids.every((id, i) => (i === 0 ? true : id === ids[i - 1] + 1));
    console.assert(ok, "OrderProcessExact: steps should be sequential.", ids);
  }
}

function Step({ id, title, Icon, size = 16 }: { id: number; title: string; Icon: any; size?: number }) {
  const fixed = size === 14 ? "w-14 h-14" : size === 20 ? "w-20 h-20" : "w-16 h-16";
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <div className={`rounded-xl bg-white shadow-lg border-2 border-[#E8ECEF] flex items-center justify-center ${fixed} hover:shadow-xl transition-all duration-300 hover:border-[#3E5C76]/30`}>
          <Icon className="w-7 h-7 text-[#3E5C76]" />
        </div>
        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#FF6B35] text-white text-xs font-semibold flex items-center justify-center shadow-lg border-2 border-white">
          {id}
        </div>
      </div>
      <div className="text-xs font-semibold text-[#212121] text-center max-w-24 leading-tight">
        {title}
      </div>
    </div>
  );
}

function HArrowSmall() {
  return (
    <svg width="32" height="16" viewBox="0 0 56 24" className="mx-auto">
      <path
        d="M2 12 H44 M44 12 L38 6 M44 12 L38 18"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        className="text-[#6C7A89]"
      />
    </svg>
  );
}

function HArrow() {
  return (
    <svg width="56" height="24" viewBox="0 0 56 24">
      <path
        d="M2 12 H44 M44 12 L38 6 M44 12 L38 18"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        className="text-[#6C7A89]"
      />
    </svg>
  );
}

function VArrowDown() {
  return (
    <svg width="28" height="64" viewBox="0 0 28 64">
      <path
        d="M14 4 V52 M14 52 L8 46 M14 52 L20 46"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        className="text-[#6C7A89]"
      />
    </svg>
  );
}

function VArrowUp() {
  return (
    <svg width="28" height="64" viewBox="0 0 28 64">
      <g transform="translate(0,64) scale(1,-1)">
        <path
          d="M14 4 V52 M14 52 L8 46 M14 52 L20 46"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="text-[#6C7A89]"
        />
      </g>
    </svg>
  );
}

export default function OrderProcessExact() {
  const top = [
    { id: 1, title: "Customers", Icon: Users },
    { id: 2, title: "Inquiry", Icon: ClipboardList },
    { id: 3, title: "Sourcing", Icon: Globe },
    { id: 4, title: "Invoice", Icon: FileText },
    { id: 5, title: "Payment", Icon: Landmark },
    { id: 6, title: "Order", Icon: Factory },
  ];

  const bottom = [
    { id: 7, title: "Collect", Icon: Truck },
    { id: 8, title: "Warehouse", Icon: Building2 },
    { id: 9, title: "Q&C", Icon: ShieldCheck },
    { id: 10, title: "Loading", Icon: Truck },
    { id: 11, title: "Customs", Icon: BadgeCheck },
    { id: 12, title: "Shipping", Icon: Ship },
  ];

  validateOrder(top.map((s) => s.id));
  validateOrder(bottom.map((s) => s.id));

  const mobile = [...top, ...bottom];

  return (
    <section className="py-16 bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-center mb-8">
          <div className="rounded-lg bg-[#3E5C76] text-white tracking-[0.25em] px-8 py-4 text-sm font-semibold shadow-lg border border-[#4A6B8A]">
            ORDER PROCESS
          </div>
        </div>

        {/* Desktop / Tablet layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="hidden md:block bg-white rounded-3xl shadow-2xl border border-[#E8ECEF] p-8 md:p-12"
        >
          <div className="w-full flex items-center justify-between gap-4">
            {top.map((s, i) => (
              <div key={s.id} className="flex items-center gap-4">
                <Step {...s} />
                {i < top.length - 1 && <HArrow />}
              </div>
            ))}
          </div>

          <div className="flex justify-center my-8">
            <VArrowDown />
          </div>

          <div className="w-full flex items-center justify-between gap-4">
            {bottom.map((s, i) => (
              <div key={s.id} className="flex items-center gap-4">
                <Step {...s} />
                {i < bottom.length - 1 && <HArrow />}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <VArrowUp />
          </div>
        </motion.div>

        {/* Mobile layout – grid with arrows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="md:hidden bg-white rounded-3xl shadow-2xl border border-[#E8ECEF] p-6"
        >
          <div className="grid grid-cols-3 gap-4">
            {mobile.map((s, i) => (
              <>
                <Step key={s.id} {...s} size={14} />
                {i < mobile.length - 1 && <HArrowSmall />}
              </>
            ))}
          </div>
        </motion.div>

        {/* Process Summary */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#3E5C76] mb-2">
              12
            </div>
            <div className="text-sm md:text-base text-[#6C7A89]">
              Process Steps
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#3E5C76] mb-2">
              24/7
            </div>
            <div className="text-sm md:text-base text-[#6C7A89]">
              Support
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#3E5C76] mb-2">
              100%
            </div>
            <div className="text-sm md:text-base text-[#6C7A89]">
              Quality
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#3E5C76] mb-2">
              🔄
            </div>
            <div className="text-sm md:text-base text-[#6C7A89]">
              Continuous
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}