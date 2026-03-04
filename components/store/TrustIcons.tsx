import { ShieldCheck, Truck, Headphones, BadgeCheck } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "100% Checked",
    subtitle: "Before Delivery",
    desc: "Every flute is hand-inspected and verified before dispatch.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    subtitle: "Worldwide",
    desc: "Carefully packed and dispatched within 24 hours.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    subtitle: "Always Free",
    desc: "Speak directly with our team for guidance and care tips.",
  },
  {
    icon: BadgeCheck,
    title: "1 Year",
    subtitle: "Warranty",
    desc: "Full craftsmanship warranty on every instrument.",
  },
];

export default function TrustBadges() {
  return (
    <section className="mt-14 border-t border-gray-100 pt-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100 text-center">
          {badges.map((badge, i) => {
            const Icon = badge.icon;
            return (
              <div
                key={i}
                className="p-6 md:p-8 flex flex-col items-center gap-3 transition duration-300 hover:bg-gray-50"
              >
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-amber-700"
                />

                <div>
                  <div className="text-base font-semibold text-gray-900">
                    {badge.title}
                  </div>
                  <div className="text-sm italic text-amber-700">
                    {badge.subtitle}
                  </div>
                </div>

                <p className="text-xs text-gray-500 leading-relaxed max-w-[180px]">
                  {badge.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}