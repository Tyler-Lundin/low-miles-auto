// LandingPageCta.tsx

import Link from "next/link";
import { LuArrowRight } from "react-icons/lu"; // A cleaner, more modern icon

export default function LandingPageCta({text, href}: {text: string, href: string}) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-emerald-500/40 bg-slate-900 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:border-emerald-500 hover:shadow-emerald-500/20"
    >
      {/* Animated Aurora Gradient */}
      <span className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent to-emerald-400 opacity-40 group-hover:left-full group-hover:duration-1000 group-hover:ease-in-out" />
      
      {/* Static "shine" element for a glassy feel */}
      <span className="absolute top-0 right-0 h-full w-full bg-slate-700/20" />
      
      {/* Text and Icon */}
      <span className="relative inline-flex items-center gap-2">
        {text}
        <LuArrowRight className="h-5 w-5 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
      </span>
    </Link>
  );
}