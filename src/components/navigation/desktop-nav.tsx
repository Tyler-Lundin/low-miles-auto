"use client";

import Link from "next/link";
import Logo from "../logo";
import Links from "./links";
import { useEffect, useState, useCallback, memo, useRef } from "react";
import debounce from "lodash/debounce";

const DesktopNav = memo(function DesktopNav() {
    const [isScrolled, setIsScrolled] = useState(false);
    const debouncedScroll = useRef(
        debounce(() => {
            setIsScrolled(window.scrollY > 0);
        }, 10)
    ).current;

    const handleScroll = useCallback(() => {
        if (!isScrolled) {
            // Immediate check for initial scroll
            setIsScrolled(window.scrollY > 0);
        } else {
            // Use the debounced function for subsequent scrolls
            debouncedScroll();
        }
    }, [isScrolled, debouncedScroll]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            debouncedScroll.cancel();
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll, debouncedScroll]);

    return (
        <nav className={`hidden lg:flex fixed top-4 left-4 right-4 justify-between items-center gap-4 z-50 px-8 py-2 rounded-md transition-all duration-300 ${isScrolled ? 'bg-white/75 dark:bg-neutral-900/90 backdrop-blur-md' : ''}`}>
            <div className="grid place-items-center">
                <Link href="/">
                    <Logo size={'sm'}/>
                </Link>
            </div>
            <Links desktop />
        </nav>
    );
});

export default DesktopNav;