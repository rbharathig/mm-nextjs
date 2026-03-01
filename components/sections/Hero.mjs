export default function Hero({
  title,
  subtitle,
  image,
  alt,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
}) {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
          <img
            src={image}
            alt={alt}
            width="600"
            height="500"
            loading="eager"
            decoding="async"
            fetchpriority="high"
            className="w-full max-w-md h-auto"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 text-lg md:text-xl text-gray-700">
              {subtitle}
            </p>
          )}

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {primaryCtaText && (
              <a
                href={primaryCtaLink}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition"
              >
                {primaryCtaText}
              </a>
            )}

            {secondaryCtaText && (
              <a
                href={secondaryCtaLink}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full transition"
              >
                {secondaryCtaText}
              </a>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
