import { COMPANY_ESTABLISHED_YEAR } from "../../../site.config";
import { LuHeartHandshake, LuKey, LuShieldCheck } from "react-icons/lu";
import { motion, easeOut } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
};

const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 20,
        scale: 0.95
    },
    visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: easeOut
        }
    }
};

const iconVariants = {
    hidden: { 
        opacity: 0, 
        scale: 0.8,
        rotate: -10
    },
    visible: { 
        opacity: 1, 
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.6,
            ease: easeOut,
            delay: 0.2
        }
    }
};

export default function TrustSignals() {
    return (
        <>
            {/* Value Propositions / Trust Signals */}
            <div className="w-full">
                <motion.div 
                    className="grid grid-cols-1 gap-8 text-white sm:grid-cols-3"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <motion.div 
                        className="flex flex-col items-center gap-y-3"
                        variants={cardVariants}
                    >
                        <motion.div variants={iconVariants}>
                            <LuShieldCheck className="h-8 w-8 text-emerald-500 dark:text-emerald-400" />
                        </motion.div>
                        <p className="text-sm font-semibold leading-6 text-black/80 dark:text-white/80">Quality Inspected</p>
                        <p className="text-xs text-black/80 dark:text-white/80">Every vehicle is hand-picked</p>
                    </motion.div>
                    <motion.div 
                        className="flex flex-col items-center gap-y-3"
                        variants={cardVariants}
                    >
                        <motion.div variants={iconVariants}>
                            <LuHeartHandshake className="h-8 w-8 text-emerald-500 dark:text-emerald-400" />
                        </motion.div>
                        <p className="text-sm font-semibold leading-6 text-black/80 dark:text-white/80">Family-Owned & Operated</p>
                        <p className="text-xs text-black/80 dark:text-white/80">Built on trust since {COMPANY_ESTABLISHED_YEAR}</p>
                    </motion.div>
                    <motion.div 
                        className="flex flex-col items-center gap-y-3"
                        variants={cardVariants}
                    >
                        <motion.div variants={iconVariants}>
                            <LuKey className="h-8 w-8 text-emerald-500 dark:text-emerald-400" />
                        </motion.div>
                        <p className="text-sm font-semibold leading-6 text-black/80 dark:text-white/80">A Hassle-Free Experience</p>
                        <p className="text-xs text-black/80 dark:text-white/80">Find your perfect car, stress-free</p>
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}