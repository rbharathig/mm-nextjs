// components/pallikaranai/TrialCTAOffline.jsx

export default function TrialCTAOffline() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Try a FREE Trial Music Class
            </h2>

            <p className="mb-4 text-lg">
              <strong>Free Demo Session:</strong> Attend a free demo and experience what our classroom sessions feel like.
            </p>

            <p className="mb-6 text-lg">
              <strong>Class Sessions:</strong> Each session is 60 minutes with 1-on-1 instruction for 15 minutes and 45 minutes of guided classroom practice.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=917200145687"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-full font-semibold shadow-lg"
            >
              WhatsApp Us to Book
            </a>
          </div>

          {/* Right Image */}
          <div className="text-center">
            <img
              src="/images/pallikaranai/music-pallikaranai.webp"
              alt="Free Trial Music Class"
              width="600"
              height="400"
              loading="lazy"
              className="rounded-2xl shadow-xl mx-auto"
            />
          </div>

        </div>

      </div>
    </section>
  )
}