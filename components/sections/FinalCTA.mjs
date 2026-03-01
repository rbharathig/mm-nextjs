export default function FinalCTA({
  title,
  subtitle,
  primaryText,
  primaryLink,
  secondaryText,
  secondaryLink,
}) {
  return (
    <section className="bg-gray-200 text-blue-900">
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">

        <h2 className="text-2xl md:text-3xl font-bold">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 text-blue-800">
            {subtitle}
          </p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          {primaryText && (
            <a
              href={primaryLink}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition"
            >
              {primaryText}
            </a>
          )}

          {secondaryText && (
            <a
              href={secondaryLink}
              className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full hover:opacity-90 transition"
            >
              {secondaryText}
            </a>
          )}
        </div>

      </div>
    </section>
  );
}
