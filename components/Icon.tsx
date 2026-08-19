import {
  Activity,
  ArrowRight,
  BarChart3,
  Banknote,
  Blocks,
  Boxes,
  Building,
  Building2,
  Check,
  Cloud,
  CreditCard,
  Database,
  Gauge,
  GitBranch,
  Globe,
  KeyRound,
  Landmark,
  Layers,
  Lock,
  MoveDiagonal,
  Network,
  QrCode,
  Rocket,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Store,
  Warehouse,
  Zap,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Activity,
  ArrowRight,
  BarChart3,
  Banknote,
  Blocks,
  Boxes,
  Building,
  Building2,
  Check,
  Cloud,
  CreditCard,
  Database,
  Gauge,
  GitBranch,
  Globe,
  KeyRound,
  Landmark,
  Layers,
  Lock,
  MoveDiagonal,
  Network,
  QrCode,
  Rocket,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Store,
  Warehouse,
  Zap,
};

export default function Icon({
  name,
  className = "h-5 w-5",
  strokeWidth = 1.8,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name] ?? Blocks;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden />;
}

export const toneClasses: Record<string, { chip: string; ring: string; text: string; bar: string; soft: string }> = {
  navy: {
    chip: "bg-navy-50 text-navy-700",
    ring: "ring-navy-100",
    text: "text-navy-700",
    bar: "bg-navy-700",
    soft: "bg-navy-50/60",
  },
  leaf: {
    chip: "bg-leaf-50 text-leaf-600",
    ring: "ring-leaf-100",
    text: "text-leaf-600",
    bar: "bg-leaf-500",
    soft: "bg-leaf-50/60",
  },
  ember: {
    chip: "bg-ember-50 text-ember-600",
    ring: "ring-ember-100",
    text: "text-ember-600",
    bar: "bg-ember-500",
    soft: "bg-ember-50/60",
  },
  lime: {
    chip: "bg-[#F4FAE3] text-[#5E8C11]",
    ring: "ring-[#E4F2C4]",
    text: "text-[#5E8C11]",
    bar: "bg-lime-500",
    soft: "bg-[#F4FAE3]/70",
  },
};
