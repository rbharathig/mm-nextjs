import { ShieldCheck, Truck, Headphones, BadgeCheck } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "100% Checked",
    subtitle: "Before Delivery",
    desc: "Every flute is hand-inspected and verified before dispatch.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    subtitle: "Worldwide",
    desc: "Carefully packed and dispatched within 24 hours.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    subtitle: "Always Free",
    desc: "Speak directly with our team for guidance and care tips.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: BadgeCheck,
    title: "1 Year",
    subtitle: "Warranty",
    desc: "Full craftsmanship warranty on every instrument.",
    color: "bg-purple-50 text-purple-600",
  },
];

export default function TrustBadges() {
  return (
    <section className="mt-12 py-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div
                key={i}
                className="group relative flex flex-col items-center lg:items-start text-center lg:text-left p-2 transition-all duration-300"
              >
                {/* Icon Wrapper with soft background */}
                <div className={`mb-5 p-4 rounded-2xl ${badge.color} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-sm`}>
                  <Icon size={28} strokeWidth={2} />
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-900 flex items-center justify-center lg:justify-start gap-2">
                    {badge.title}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700/80">
                    {badge.subtitle}
                  </p>
                </div>

                <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-[240px] lg:max-w-none">
                  {badge.desc}
                </p>
                
                {/* Subtle bottom accent line that appears on hover */}
                <div className="mt-4 h-1 w-0 bg-amber-500/20 group-hover:w-12 transition-all duration-500 rounded-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}