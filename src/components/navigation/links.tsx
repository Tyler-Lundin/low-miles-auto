"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { usePathname } from "next/navigation";

const LINKS = [
    { name: "Home", href: "/" },
    { name: "Inventory", href: "/inventory" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Documents", href: "/documents" },
];

const linkVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

export default function Links({ desktop = true, onClick }: { desktop?: boolean, onClick?: () => void }) {
    if (desktop) return <DesktopLinks />;
    return <MobileLinks onClick={onClick} />;
}

function DesktopLinks() {
    const pathname = usePathname();

    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            className="w-full flex justify-between max-w-md"
        >
            {LINKS.map((link, i) => (
                <motion.div
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                    className="relative"
                >
                    <Link 
                        href={link.href} 
                        className={`text-black dark:text-white text-md font-medium tracking-wide transition-colors duration-300 hover:text-amber-600 ${
                            pathname === link.href ? 'text-amber-600' : ''
                        }`}
                    >
                        {link.name}
                    </Link>
                    {pathname === link.href && (
                        <motion.div
                            layoutId="activeLink"
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                </motion.div>
            ))}
        </motion.div>
    );
}

function MobileLinks({ onClick }: { onClick?: () => void }) {
    const pathname = usePathname();

    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            className="grid gap-6 text-center"
        >
            {LINKS.map((link, i) => (
                <motion.div
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                    className="relative"
                >
                    <Link 
                        href={link.href} 
                        onClick={onClick}
                        className={`text-black dark:text-white text-xl font-medium tracking-wide transition-colors duration-300 hover:text-amber-600 ${
                            pathname === link.href ? 'text-amber-600' : ''
                        }`}
                    >
                        {link.name}
                    </Link>
                    {pathname === link.href && (
                        <motion.div
                            layoutId="activeLinkMobile"
                            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-amber-500"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}
                </motion.div>
            ))}
        </motion.div>
    );
}