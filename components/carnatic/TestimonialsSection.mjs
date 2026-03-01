import { useState } from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      title: "Great Platform for Carnatic Music Classes",
      text: "I always interested to learn classical music for a strong foundation on vocal. And it's always exhausting to find a right teacher and this platform has done it with ease of me being home.",
      name: "Kalimauthu",
      image: "/images/students/kalimuthu-manivannan.webp",
    },
    {
      title: "Best Learning Platform for Singing Lessons",
      text: "I've attended 1st class and to be frank the tutor is amazing and I am completely satisfied with her teaching. She was friendly and shared her knowledge reg music....i was expecting such a Guru in my life and am really happy to join MUSIC MASTER👌🏻👍🏻.",
      name: "Student",
      image: "/images/students/selvaGanesh.webp",
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-center text-3xl lg:text-4xl font-bold text-[#0b4da2] mb-16">
          Carnatic Music Students Words About us
        </h2>

        <div className="relative bg-white rounded-2xl shadow-lg p-10">

          <div className="flex flex-col md:flex-row items-center gap-8">

            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-24 h-24 rounded-full object-cover border"
            />

            <div className="text-center md:text-left">

              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                {testimonials[current].title}
              </h4>

              <p className="text-gray-700 leading-relaxed mb-4">
                “{testimonials[current].text}”
              </p>

              <p className="font-semibold text-gray-800">
                {testimonials[current].name}
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
