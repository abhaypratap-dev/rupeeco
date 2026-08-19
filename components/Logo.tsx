import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export default function Logo({
  variant = "dark",
  className = "",
  withTagline = false,
}: {
  variant?: "dark" | "light";
  className?: string;
  withTagline?: boolean;
}) {
  const light = variant === "light";
  return (
    <Link href="/" aria-label={`${site.name} home`} className={`group inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src={light ? "/brand/mark-light.png" : "/brand/mark.png"}
        alt=""
        width={754}
        height={352}
        priority
        className="h-9 w-auto transition-transform duration-500 group-hover:scale-[1.06] sm:h-10"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[22px] font-bold tracking-[-0.03em] sm:text-[24px] ${light ? "text-white" : "text-navy-800"}`}
        >
          Rupee<span className={light ? "text-leaf-300" : "text-leaf-500"}>co</span>
        </span>
        {withTagline && (
          <span
            className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] ${
              light ? "text-navy-200" : "text-navy-400"
            }`}
          >
            {site.tagline}
          </span>
        )}
      </span>
    </Link>
  );
}
