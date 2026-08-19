import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-24 h-[380px] w-[380px] rounded-full bg-leaf-100/50 blur-3xl" />
        <div className="absolute -right-24 top-10 h-[340px] w-[340px] rounded-full bg-ember-100/40 blur-3xl" />
      </div>
      <div className="wrap relative max-w-2xl text-center">
        <p className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-navy-300">Error 404</p>
        <h1 className="mt-5 text-[38px] leading-[1.1] sm:text-[48px]">
          That endpoint <span className="gradient-text">does not exist</span>
        </h1>
        <p className="mt-5 text-[16px] leading-relaxed text-navy-500">
          The page you were looking for has moved or was never here. Try the API Hub, or tell us what you were after.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary group">
            Back to home
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link href="/products" className="btn-ghost">
            Browse products
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
