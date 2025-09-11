import { motion } from "framer-motion";
import Link from "next/link";
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
  Container,
  Package,
} from "lucide-react";

/* ---------------- helpers ---------------- */
function validateOrder(ids: number[]) {
  if (process.env.NODE_ENV !== "production") {
    const ok = ids.every((id, i) => (i === 0 ? true : id === ids[i - 1] + 1));
    console.assert(ok, "OrderProcessExact: steps should be sequential.", ids);
  }
}

/* ---------------- desktop cards (unchanged) ---------------- */
function StepDesktop({
  id,
  title,
  Icon,
  size = 16,
}: { id: number; title: string; Icon: any; size?: number }) {
  const fixed =
    size === 14 ? "w-14 h-14" : size === 20 ? "w-20 h-20" : "w-16 h-16";
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <div
          className={`rounded-xl bg-white shadow-lg border-2 border-[#E8ECEF] flex items-center justify-center ${fixed}`}
        >
          <Icon className="w-7 h-7 text-[#3E5C76]" />
        </div>
      </div>
      <div className="text-xs font-semibold text-[#212121] text-center max-w-24 leading-tight">
        {title}
      </div>
    </div>
  );
}

const HArrow = () => (
  <svg viewBox="0 0 56 24" className="w-12 h-6">
    <path
      d="M2 12 H44 M44 12 L38 6 M44 12 L38 18"
      stroke="currentColor"
      strokeWidth="2.5"
      fill="none"
      className="text-[#6C7A89]"
    />
  </svg>
);
const VArrowDown = () => (
  <svg viewBox="0 0 28 64" className="w-5 h-12">
    <path
      d="M14 4 V52 M14 52 L8 46 M14 52 L20 46"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
      className="text-[#6C7A89]"
    />
  </svg>
);
const VArrowUp = () => (
  <svg viewBox="0 0 28 64" className="w-5 h-12">
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

/* ---------------- micro arrows for mobile ---------------- */
const R = ({ className = "" }) => (
  <svg viewBox="0 0 56 24" className={`w-4 h-2.5 ${className}`}>
    <path
      d="M2 12 H44 M44 12 L38 6 M44 12 L38 18"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      className="text-[#8FA0B2]"
    />
  </svg>
);
const L = ({ className = "" }) => (
  <svg viewBox="0 0 56 24" className={`w-4 h-2.5 ${className}`}>
    <g transform="translate(56,0) scale(-1,1)">
      <path
        d="M2 12 H44 M44 12 L38 6 M44 12 L38 18"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-[#8FA0B2]"
      />
    </g>
  </svg>
);
const D = ({ className = "" }) => (
  <svg viewBox="0 0 28 64" className={`w-2.5 h-3.5 ${className}`}>
    <path
      d="M14 4 V52 M14 52 L8 46 M14 52 L20 46"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      className="text-[#8FA0B2]"
    />
  </svg>
);

/* ---------------- icon-only tile (MOBILE) ---------------- */
function StepIconMobile({
  step,
  index,
  totalCols,
  totalRows,
}: {
  step: { id: number; title: string; Icon: any };
  index: number;
  totalCols: number;
  totalRows: number;
}) {
  const { id, title, Icon } = step;

  const row = Math.floor(index / totalCols); // 0..(totalRows-1)
  const col = index % totalCols;            // 0..(totalCols-1)
  const isRowOdd = (row + 1) % 2 === 1;     // 1-based odd rows: 1,3,...

  const isLastRow = row === totalRows - 1;

  // end-of-row position depends on direction of that row (snake)
  const endOfRow = isRowOdd ? col === totalCols - 1 : col === 0;

  const showRight = isRowOdd && col < totalCols - 1;
  const showLeft  = !isRowOdd && col > 0;
  const showDown  = !isLastRow && endOfRow;

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* icon + label (compact) */}
      <Icon className="w-5 h-5 text-[#3E5C76]" />
      <div className="mt-1 text-[10px] font-semibold text-[#212121] text-center leading-tight">
        {title}
      </div>

      {/* micro arrows (overlay) */}
      {showRight && <R className="absolute top-[45%] -right-3" />}
      {showLeft  && <L className="absolute top-[45%] -left-3" />}
      {showDown  && <D className="absolute -bottom-3 left-1/2 -translate-x-1/2" />}
    </div>
  );
}

/* ---------------- MAIN ---------------- */
export default function OrderProcessExact() {
  const top = [
    { id: 1, title: "Customers", Icon: Users },
    { id: 2, title: "Inquiry", Icon: ClipboardList },
    { id: 3, title: "Sourcing", Icon: Globe },
    { id: 4, title: "Invoice", Icon: FileText },
  ];
  const middle = [
    { id: 8, title: "Warehouse", Icon: Building2 },
    { id: 7, title: "Collect", Icon: Truck },
    { id: 6, title: "Order", Icon: Factory },
    { id: 5, title: "Payment", Icon: Landmark },
  ];
  const bottom = [
    { id: 9, title: "Q&C", Icon: ShieldCheck },
    { id: 10, title: "Loading", Icon: Truck },
    { id: 11, title: "Customs", Icon: BadgeCheck },
    { id: 12, title: "Shipping", Icon: Ship },
  ];

  validateOrder(top.map((s) => s.id));
  validateOrder(middle.map((s) => s.id));
  validateOrder(bottom.map((s) => s.id));

  const steps = [...top, ...middle, ...bottom];

  /* mobile layout config */
  const TOTAL_COLS = 4;
  const TOTAL_ROWS = 3;

  return (
    <section className="bg-gradient-to-br from-[#F0F3F4] to-[#E8ECEF]">
      <div className="max-w-6xl mx-auto px-3 md:px-4 py-3 md:py-10">
        {/* Title */}
        <div className="flex justify-center mb-2 md:mb-8">
          <div className="rounded-lg bg-[#3E5C76] text-white tracking-[0.25em] px-4 py-1.5 text-[10px] md:text-sm font-semibold shadow-lg border border-[#4A6B8A]">
            ORDER PROCESS
          </div>
        </div>

        {/* Desktop / Tablet (cards + big arrows) */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="hidden md:block bg-white rounded-3xl shadow-2xl border border-[#E8ECEF] p-8 md:p-12"
        >
          <div className="w-full flex items-center justify-between gap-4">
            {top.map((s, i) => (
              <div key={s.id} className="flex items-center gap-4">
                <StepDesktop {...s} />
                {i < top.length - 1 && <HArrow />}
              </div>
            ))}
          </div>

          <div className="flex justify-center my-8">
            <VArrowDown />
          </div>

          <div className="w-full flex items-center justify-between gap-4">
            {middle.map((s, i) => (
              <div key={s.id} className="flex items-center gap-4">
                <StepDesktop {...s} />
                {i < middle.length - 1 && <HArrow />}
              </div>
            ))}
          </div>

          <div className="flex justify-center my-8">
            <VArrowDown />
          </div>

          <div className="w-full flex items-center justify-between gap-4">
            {bottom.map((s, i) => (
              <div key={s.id} className="flex items-center gap-4">
                <StepDesktop {...s} />
                {i < bottom.length - 1 && <HArrow />}
              </div>
            ))}
          </div>
        </motion.div>

        {/* MOBILE: 4×3 icon-only grid, compact height */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-white rounded-3xl shadow-2xl border border-[#E8ECEF] px-4 pt-6 pb-4"
        >
          <div className="grid grid-cols-4 grid-rows-3 gap-x-6 gap-y-12 place-items-center">
            {steps.map((s, i) => (
              <StepIconMobile
                key={s.id}
                step={s}
                index={i}
                totalCols={TOTAL_COLS}
                totalRows={TOTAL_ROWS}
              />
            ))}
          </div>
        </motion.div>

         {/* FCL & LCL Buttons Section */}
         <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8 md:mt-12"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-[#E8ECEF] p-6 md:p-8">
            <div className="text-center mb-6">
              <h3 className="text-lg md:text-xl font-bold text-[#3E5C76] mb-2">
                Choose Your Shipping Method
              </h3>
              <p className="text-sm md:text-base text-[#6C7A89]">
                Select the best shipping option for your cargo needs
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* FCL Button */}
              <Link href="/logistics" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-48 bg-[#3E5C76] text-white px-6 py-4 rounded-2xl font-semibold text-base hover:bg-[#4A6B8A] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 font-poppins"
                >
                  <Container className="w-6 h-6" />
                  <span>FCL Shipping</span>
                </motion.button>
              </Link>
              
              {/* LCL Button */}
              <Link href="/logistics" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-48 border-2 border-[#3E5C76] text-[#3E5C76] px-6 py-4 rounded-2xl font-semibold text-base hover:bg-[#3E5C76] hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 font-poppins"
                >
                  <Package className="w-6 h-6" />
                  <span>LCL Shipping</span>
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 md:mt-12"
        >
          <div className="md:bg-white md:rounded-3xl md:shadow-2xl md:border md:border-[#E8ECEF] p-6 md:p-8">
            <div className="grid grid-cols-4 gap-4 md:gap-8">
              {/* 12 Process Steps */}
              <div className="flex flex-col items-center text-center">
                <div className="text-2xl md:text-4xl font-bold text-[#3E5C76] mb-1 md:mb-2">
                  12
                </div>
                <div className="text-xs md:text-base text-[#6C7A89] font-medium">
                  Process Steps
                </div>
              </div>

              {/* 24/7 Support */}
              <div className="flex flex-col items-center text-center">
                <div className="text-2xl md:text-4xl font-bold text-[#3E5C76] mb-1 md:mb-2">
                  24/7
                </div>
                <div className="text-xs md:text-base text-[#6C7A89] font-medium">
                  Support
                </div>
              </div>

              {/* 100% Quality */}
              <div className="flex flex-col items-center text-center">
                <div className="text-2xl md:text-4xl font-bold text-[#3E5C76] mb-1 md:mb-2">
                  100%
                </div>
                <div className="text-xs md:text-base text-[#6C7A89] font-medium">
                  Quality
                </div>
              </div>

              {/* Continuous */}
              <div className="flex flex-col items-center text-center">
                <div className="w-8 h-8 md:w-16 md:h-16 bg-[#3E5C76] rounded-lg flex items-center justify-center mb-1 md:mb-2">
                  <svg 
                    className="w-4 h-4 md:w-8 md:h-8 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                    />
                  </svg>
                </div>
                <div className="text-xs md:text-base text-[#6C7A89] font-medium">
                  Continuous
                </div>
              </div>
            </div>
          </div>
        </motion.div>

       
      </div>
    </section>
  );
}
