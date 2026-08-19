import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  body,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: React.ReactNode;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span
          className={
            light
              ? "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-leaf-300"
              : "eyebrow"
          }
        >
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-4 text-3xl leading-[1.15] sm:text-[38px] ${light ? "!text-white" : ""}`}>{title}</h2>
      {body && (
        <p className={`mt-4 text-[15.5px] leading-relaxed ${light ? "text-navy-100/85" : "text-navy-500"}`}>{body}</p>
      )}
    </Reveal>
  );
}
