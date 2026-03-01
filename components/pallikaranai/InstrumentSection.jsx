// components/pallikaranai/InstrumentSection.jsx

export default function InstrumentSection({
  title,
  image,
  reverse = false,
  children,
}) {
  return (
    <section className="py-28 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className={`grid md:grid-cols-2 gap-20 items-center ${reverse ? "md:flex-row-reverse" : ""}`}>

      <div className={reverse ? "md:order-2" : ""}>
        <h2 className="text-4xl font-bold mb-6 leading-tight">
          {title}
        </h2>

        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          {children}
        </div>
      </div>

      <div className={reverse ? "md:order-1" : ""}>
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src={image}
            alt={title}
            width="700"
            height="500"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

    </div>

  </div>
</section>
  )
}