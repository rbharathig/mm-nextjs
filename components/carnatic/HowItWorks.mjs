export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
            How it works?
          </h2>

          <h2 className="text-4xl font-bold text-[#0b4da2] mb-2">
            Learn Carnatic Online
          </h2>

          <p className="font-semibold text-gray-600 mb-10">
            in 3 Simple Steps
          </p>

          {/* STEPS */}
          <div className="space-y-10">

            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#0b4da2] text-white flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1 w-px bg-[#0b4da2] mt-2"></div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Register on our website (or) WhatsApp us{" "}
                <a
                  href="https://api.whatsapp.com/send?phone=919789897600&text=&source=&data="
                  className="text-[#0b4da2] font-semibold hover:underline"
                >
                  DEMO
                </a>. We will reach out to you and schedule a FREE online Carnatic class.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#0b4da2] text-white flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1 w-px bg-[#0b4da2] mt-2"></div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Meet the Carnatic teacher, discuss your aspirations and get a sneak peak of a typical Carnatic class.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#0b4da2] text-white flex items-center justify-center font-bold">
                  3
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Liked the demo session? Upgrade and start your Carnatic lessons.
              </p>
            </div>

          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
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

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/images/carnatic/vocals_hero.svg"
            alt="Carnatic classes near me with fees"
            title="Carnatic lessons online"
            width="450"
            height="400"
            className="w-full max-w-md object-contain"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}
