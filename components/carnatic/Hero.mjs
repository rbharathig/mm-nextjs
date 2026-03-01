export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/images/carnatic/carnatic-musicmaster.in.webp"
            alt="singing classes near me"
            title="online carnatic music classes"
            width="400"
            height="400"
            className="w-full max-w-md object-contain"
             fetchPriority="high"
             loading="eager"
             decoding="async"
          />
        </div>

        {/* Content */}
        <div>
          <h3 className="text-lg font-semibold text-[#0b4da2] mb-2">
            Live 1 to 1
          </h3>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Online <span className="text-[#0b4da2]">Carnatic Classical Music</span> Classes
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Searching for best carnatic music classes near you? Learn classical carnatic vocals from qualified Carnatic music teachers.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=919789897600&text=&source=&data="
              className="bg-[#0b4da2] text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition"
            >
              Book a FREE Demo
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=919789897600&text=&source=&data="
              className="border border-[#0b4da2] text-[#0b4da2] px-6 py-3 rounded-md font-semibold hover:bg-[#0b4da2] hover:text-white transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
