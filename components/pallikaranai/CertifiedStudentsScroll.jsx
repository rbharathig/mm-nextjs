// components/pallikaranai/CertifiedStudentsScroll.jsx

export default function CertifiedStudentsScroll() {

  const students = [
    "Hareesh Thiru-6-grade-piano-trinity- college-london.webp",
    "Angeline Varsha V-Grade-1-RSL.webp",
    "Nethra Praveen-initia- guitar-Trinity-college.webp",
    "Jai Prakash-initial - piano-Trinity-college.webp",
    "Jaxson Geevarghese Mathew initia- guitar-Trinity-college.webp",
    "jaikrishna v-Grade 1-PIANO rockschool-london.webp",
    "Eshaan-Fiaz.webp",
    "Neha Praveen-initial - guitar-Trinity-college.webp",
    "Tejas Hariharan-initial Grade - piano-Trinity-college.webp"
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Our Certified Students
        </h2>

        <div className="overflow-x-auto">
          <div className="flex gap-8 snap-x snap-mandatory pb-4">

            {students.map((img, i) => (
              <div
                key={i}
                className="min-w-[260px] snap-center bg-white rounded-2xl shadow-md p-4 flex-shrink-0"
              >
                <img
                  src={`/images/pallikaranai/${img}`}
                  alt="Certified Student"
                  width="300"
                  height="400"
                  loading="lazy"
                  className="rounded-xl object-contain"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}