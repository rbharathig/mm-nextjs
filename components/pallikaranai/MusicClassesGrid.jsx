export default function MusicClassesGrid() {
  const items = [
    { title: "Guitar", image: "/images/pallikaranai/guitar.webp" },
    { title: "Drum", image: "/images/pallikaranai/drum-musicmasters.webp" },
    { title: "Piano", image: "/images/pallikaranai/piano.webp" },
    { title: "Western Vocals", image: "/images/pallikaranai/western-vocals.webp" },
    { title: "Grade Exam", image: "/images/pallikaranai/grade-exam.webp" },
    { title: "Music Theory", image: "/images/pallikaranai/music-theory.webp" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Music Classes
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-24 mx-auto object-contain mb-4"
              />
              <h3 className="font-semibold text-sm">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}