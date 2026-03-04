export default function FluteLandingPage() {
  return (
    <div className="bg-[#F8F6F1] text-[#1a1a1a]">

      {/* 1️⃣ HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1604719312566-8912e9c8a213?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Buy Perfectly Tuned <br /> Indian Flutes
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
            Only the best flutes, handmade one by one by professional flute makers.
            Quality checked and perfectly tuned — so you can focus on music.
          </p>

          <button className="bg-[#b48a3c] hover:bg-[#9e7630] transition px-8 py-4 rounded-full text-white font-semibold shadow-lg">
            Explore Flutes
          </button>
        </div>
      </section>


      {/* 2️⃣ TRUST SECTION */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Why Buy Flutes Online From Us?
          </h2>

          <p className="text-lg leading-relaxed text-gray-700">
            Buying a perfectly tuned Indian flute is a challenge. Many flutes
            available in the market are not accurately tuned. At Music Master,
            every flute is carefully quality checked before dispatch.
          </p>
        </div>
      </section>


      {/* 3️⃣ CATEGORY CARDS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1511376777868-611b54f68947?auto=format&fit=crop&w=800&q=80"
              className="w-full h-72 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3">
                Carnatic Flutes
              </h3>
              <p className="text-gray-600 mb-4">
                The South Indian flute (Venu), traditionally handcrafted
                with natural bamboo.
              </p>
              <button className="text-[#b48a3c] font-medium">
                Explore →
              </button>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&w=800&q=80"
              className="w-full h-72 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-3">
                Bansuri
              </h3>
              <p className="text-gray-600 mb-4">
                The Hindustani flute known for its rich tonal depth.
              </p>
              <button className="text-[#b48a3c] font-medium">
                Explore →
              </button>
            </div>
          </div>

        </div>
      </section>


      {/* 4️⃣ ADVANTAGES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-16">
            Advantages of Buying From Us
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Perfectly Tuned",
                desc: "Every flute is 100% quality checked before dispatch.",
              },
              {
                title: "Customised Flutes",
                desc: "We customise finger hole sizes and tuning.",
              },
              {
                title: "Global Shipping",
                desc: "Free shipping across India. International shipping available.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 5️⃣ VIDEO SECTION */}
      <section className="py-24 bg-[#111] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            Hear Our Flutes
          </h2>

          <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/ZvU-9btX7L4"
              allowFullScreen
            />
          </div>
        </div>
      </section>

    </div>
  )
}