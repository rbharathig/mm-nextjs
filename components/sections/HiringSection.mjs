export default function HiringSection({
  title,
  description,
  image,
  imageAlt,
  buttonText,
  buttonLink,
}) {
  return (
    <section className="bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            {title}
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            {description}
          </p>

          <a
            href={buttonLink}
            className="inline-block mt-6 bg-blue-900 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
          >
            {buttonText}
          </a>
        </div>

        {/* RIGHT IMAGE */}
        {image && (
          <div className="flex justify-center md:justify-end">
            <img
              src={image}
              alt={imageAlt}
              width="300"
              height="300"
              loading="lazy"
              decoding="async"
              className="w-full max-w-xs h-auto"
            />
          </div>
        )}

      </div>
    </section>
  );
}
