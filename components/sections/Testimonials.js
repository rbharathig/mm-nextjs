import { useState } from "react";

export default function Testimonials({
  title,
  testimonials = [],
  defaultImage = "/images/default-avatar.svg",
}) {
  const [current, setCurrent] = useState(0);

  if (!testimonials.length) return null;

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const active = testimonials[current];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-center text-3xl lg:text-4xl font-bold text-[#0b4da2] mb-16">
          {title}
        </h2>

        <div className="relative bg-white rounded-2xl shadow-lg p-10">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <img
              src={active.image || defaultImage}
              alt={active.name}
              width="96"
              height="96"
              loading="lazy"
              decoding="async"
              className="w-24 h-24 rounded-full object-cover border"
            />

            <div className="text-center md:text-left">

              {active.title && (
                <h4 className="font-semibold text-lg text-gray-900 mb-2">
                  {active.title}
                </h4>
              )}

              <p className="text-gray-700 leading-relaxed mb-4">
                “{active.text}”
              </p>

              <p className="font-semibold text-gray-800">
                {active.name}
              </p>

            </div>

          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-[#0b4da2] hover:bg-[#0b4da2] hover:text-white transition"
            >
              ‹
            </button>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-[#0b4da2] hover:bg-[#0b4da2] hover:text-white transition"
            >
              ›
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
