"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "../logo";
import { FaBars, FaTimes } from "react-icons/fa";
import Links from "./links";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.nav 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex lg:hidden fixed top-4 left-4 right-4 justify-between items-center gap-4 z-[105] bg-gradient-to-r from-white/80 dark:from-black/80 to-neutral-100/80 dark:to-neutral-900/80 backdrop-blur-md px-4 py-2 rounded-md border border-white/20 shadow-lg"
            >
                <div className="grid place-items-center">
                    <Link href="/">
                        <Logo size={'sm'}/>
                    </Link>
                </div>
                <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-white/90 dark:bg-black/90 backdrop-blur-md z-[100]"
                    >
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="flex flex-col items-center justify-center h-full"
                        >
                            <Links desktop={false} onClick={() => setIsOpen(false)} />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

function MenuButton({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) {
    return (
        <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="lg:hidden z-[101] p-2 rounded-md hover:bg-gray-100/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
        >
            <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {isOpen ? (
                    <FaTimes className="text-black dark:text-white w-6 h-6" />
                ) : (
                    <FaBars className="text-black dark:text-white w-6 h-6" />
                )}
            </motion.div>
        </motion.button>
    );
}