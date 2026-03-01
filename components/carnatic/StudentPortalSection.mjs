export default function StudentPortalSection() {
  return (
    <section className="py-8 bg-[#0b4da2]/5">
  <div className="max-w-2xl mx-auto px-6">

    <div className="rounded-2xl p-6 lg:p-8 text-center">

      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Student Portal
      </h2>

      <p className="text-base text-gray-600 mb-6">
        Access your <strong>online class schedules, attendance, assignments, and learning materials</strong>
        through our dedicated LMS portal.
      </p>

      <a
        href="https://dashboard.musicmaster.in/online/public"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#0b4da2] text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition"
      >
        Login to Online Portal
      </a>

      <p className="mt-4 text-sm text-gray-500">
        * Only for students enrolled in online classes
      </p>

    </div>

  </div>
</section>

  );
}
