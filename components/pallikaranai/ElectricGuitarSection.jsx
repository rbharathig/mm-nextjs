export default function ElectricGuitarSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Electric Guitar Classes in Pallikaranai
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            If you are already playing guitar and looking to improve your skills,
            electric guitar is a logical extension. Learn power chords, riffs,
            blues scales & rock techniques.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Students also get opportunities to perform in our in-house shows —
            both solo and band settings.
          </p>
        </div>

        <img
          src="/images/pallikaranai/student-playing-guitar.webp"
          alt="Electric Guitar Classes"
          className="rounded-2xl shadow-md"
        />
      </div>
    </section>
  )
}