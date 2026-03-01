// components/pallikaranai/HiringSection.jsx

export default function HiringSection() {
  return (
    <section className="py-24 bg-white border-t">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join us as a Music Teacher
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We are looking for music teachers in <strong>Guitar, Keyboard & Western Vocals</strong> to teach in our school.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              If you have formal education with <strong>Grade 5 and above</strong> WhatsApp us
              <span className="font-semibold"> +72001 45687 ‘TEACHER’</span> and we will be happy to talk to you.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=917200145687&text=TEACHER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-full font-semibold text-white shadow-lg"
            >
              Apply via WhatsApp
            </a>
          </div>

          {/* Right Image */}
          <div className="text-center">
            <img
              src="/images/pallikaranai/tutor.webp"
              alt="Music Teacher Hiring"
              width="500"
              height="500"
              loading="lazy"
              className="rounded-2xl shadow-md mx-auto"
            />
          </div>

        </div>

      </div>
    </section>
  )
}