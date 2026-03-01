// components/pallikaranai/LocalInstrumentGrid.jsx

export default function LocalInstrumentGrid() {
  const instruments = [
    { name: "Guitar", image: "/images/pallikaranai/guitar.webp" },
    { name: "Drum", image: "/images/pallikaranai/drum-musicmasters.webp" },
    { name: "Piano", image: "/images/pallikaranai/piano.webp" },
    { name: "Western Vocals", image: "/images/pallikaranai/western-vocals.webp" },
    { name: "Grade Exam", image: "/images/pallikaranai/grade-exam.webp" },
    { name: "Music Theory", image: "/images/pallikaranai/music-theory.webp" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Music Classes
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {instruments.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 border p-6 text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                width="200"
                height="200"
                loading="lazy"
                className="mx-auto mb-4 object-contain"
              />
              <h3 className="font-semibold text-lg">
                {item.name}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}