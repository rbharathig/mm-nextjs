export default function StudentPortalSection() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Student Portal
        </h2>

        <p className="text-gray-700 mb-8 leading-relaxed">
          Access your offline class schedules, attendance,
          assignments and learning materials through our LMS portal.
        </p>

        <a
          href="https://dashboard.musicmaster.in/offline/public"
          target="_blank"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Login to Offline Portal
        </a>

        <p className="text-sm text-gray-500 mt-4">
          * Only for offline students
        </p>
      </div>
    </section>
  )
}