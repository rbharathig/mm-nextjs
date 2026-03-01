export default function DrumsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            Drums Classes in Pallikaranai
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Learn rhythm, timing and technique in fully equipped practice rooms.
            Suitable for beginners and advanced students.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Students gain performance opportunities in school shows,
            building confidence and stage presence.
          </p>
        </div>

        <img
          src="/images/pallikaranai/drumsclasses.webp"
          alt="Drums Classes"
          className="rounded-2xl shadow-md"
        />

      </div>
    </section>
  )
}