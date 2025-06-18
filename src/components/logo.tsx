import Image from "next/image";

export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" | "landing-page-hero" }) {

  const logoSize = () => {
    switch (size) {
      case "sm":
        return 50;
      case "md":
        return 100;
      case "lg":
        return 200;
      case "landing-page-hero":
        return 400;
      default:
        return 100;
    }
  }
  return (
    <div className={`flex items-center gap-1 relative px-2 py-1 text-black ${size === "sm" ? "text-xs" : size === "md" ? "text-sm" : "text-lg"}`}>
      <Image src={ size === "sm" ? "/images/low-miles-auto-logo-sm.png" : "/images/low-miles-auto-logo.png" } alt="Logo" width={logoSize()} height={logoSize()} className="grayscale brightness-50 dark:brightness-100 dark:invert"/>
    </div>
  );
}
