export default function BassGuitarSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        <img
          src="/images/pallikaranai/Bass-guitar-class-.webp"
          alt="Bass Guitar Classes"
          className="rounded-2xl shadow-md md:order-1"
        />

        <div className="md:order-2">
          <h2 className="text-3xl font-bold mb-6">
            Bass Guitar Classes in Pallikaranai
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            Learn finger exercises, scales and songs of your choice.
            Ideal for students who already understand acoustic guitar basics.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Perform in Stage Ready events and our annual flagship show Loud & Live.
          </p>
        </div>

      </div>
    </section>
  )
}