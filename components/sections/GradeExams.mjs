export default function GradeExams({
  title,
  subtitle,
  description1,
  description2,
  image,
  imageAlt,
  buttonText,
  buttonLink,
}) {
  return (
    <section className="bg-blue-900 text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src={image}
            alt={imageAlt}
            width="350"
            height="350"
            loading="lazy"
            decoding="async"
            className="w-full max-w-sm h-auto rounded-lg"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-2 text-blue-200 font-medium">
              {subtitle}
            </p>
          )}

          <p className="mt-6 text-blue-100 leading-relaxed">
            {description1}
          </p>

          <p className="mt-4 text-blue-100 leading-relaxed">
            {description2}
          </p>

          {buttonText && (
            <a
              href={buttonLink}
              className="inline-block mt-6 bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              {buttonText}
            </a>
          )}
        </div>

      </div>
    </section>
  );
}
