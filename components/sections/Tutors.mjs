import { useRef } from "react";

export default function Tutors({ title, tutors = [] }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">

        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            {title}
          </h2>

          {/* Navigation Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              →
            </button>
          </div>
        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="mt-10 flex gap-6 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[300px] bg-gray-50 p-6 rounded-xl shadow-sm text-center"
            >
              <img
                src={tutor.image}
                alt={tutor.name}
                width="150"
                height="150"
                loading="lazy"
                decoding="async"
                className="mx-auto rounded-full"
              />
              <h3 className="mt-4 font-semibold text-blue-900">
                {tutor.name}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {tutor.qualification}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {tutor.language}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
