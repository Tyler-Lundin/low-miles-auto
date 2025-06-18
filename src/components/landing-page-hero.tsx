"use client";
import { COMPANY_ADDRESS } from "../../site.config";
import LandingPageCta from "./landing-page-cta";
import Image from "next/image";
import Logo from "./logo";
import TrustSignals from "./landing-page/trust-signals";
import { LuMapPin } from "react-icons/lu";


export default function LandingPageHero() {
  return (
    <div className="relative isolate min-h-[calc(100vh-100px)] pt-32 bg-neutral-900 text-white pb-8">
      {/* Background Image & Dark Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/landing-page-hero.jpeg" // A high-quality image of a car's interior/exterior detail or a clean lot shot works best
          alt="A clean, quality used car on display"
          fill
          priority
          className="object-cover opacity-75 dark:opacity-25" // Lower opacity to blend with the dark background
          quality={90}
        />
        {/* Subtle Gradient to darken the edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-white dark:from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-transparent" />
        <div className="absolute inset-0 bg-white/50 dark:bg-black/50" />
      </div>

      {/* Main Content Container */}

          <HeroContent />
          <TrustSignals />

    </div>
  );
}

function HeroContent() {
  return(
    <>
          <div className="z-10 mx-auto max-w-5xl px-6 lg:px-8 pb-4">
        <div className="grid place-items-center gap-4 h-fit rounded-md p-4 w-full">
          {/* Main Headline */}
          <Logo size="lg" />

          {/* Tagline */}
          <a href={`https://maps.app.goo.gl/X6ATVYXhWdu1xYMBA`} target="_blank" rel="noopener noreferrer" className="w-fit">
            <p className="flex items-center gap-x-2 text-sm text-black/80 dark:text-white/80">
              Directions
              <LuMapPin className="w-4 h-4" />
          </p>
          </a>

          {/* Call to Action Button */}
          <div className=" flex items-center justify-center gap-x-6">
            <LandingPageCta text="View Inventory" href="/inventory" />
          </div>
        </div>
      </div>
    </>
  )
}