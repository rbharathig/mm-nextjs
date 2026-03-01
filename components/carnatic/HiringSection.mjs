export default function HiringSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#193498]">
              Online Carnatic Music Teachers Recruitment
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              If you are formally certified or above
              you can explore teaching lessons with us.
            </p>

            <a
              href="/hiring.html"
              className="inline-block mt-8 bg-[#0b4da2] text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              Apply Here
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/images/carnatic/singing-teacher-hiring.webp"
              alt="indian classical music classes online"
              title="online indian classical music classes"
              width="350"
              height="350"
              loading="lazy"
              className="w-full max-w-sm object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
