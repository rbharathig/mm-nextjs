export default function HowItWorks({
  eyebrow,
  title,
  highlight,
  steps = [],
  image,
  imageAlt,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
}) {
  return (
   <section className="bg-white">
  <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">


        {/* LEFT CONTENT */}
        <div>
          {eyebrow && (
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
              {eyebrow}
            </p>
          )}

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-blue-900 leading-tight">
            {title}{" "}
            {highlight && (
              <span className="text-primary">{highlight}</span>
            )}
          </h2>

          <ul className="mt-10 space-y-8">
            {steps.map((step, index) => (
              <li key={index} className="flex items-start gap-4">
                
                {/* Step Number Circle */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-semibold">
                  {step.number}
                </div>

                {/* Step Text */}
                <p className="text-gray-600 leading-relaxed">
                  {step.text}
                </p>
              </li>
            ))}
          </ul>

          {(primaryCtaText || secondaryCtaText) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
          )}
        </div>

        {/* RIGHT IMAGE */}
        {image && (
          <div className="flex justify-center">
            <img
              src={image}
              alt={imageAlt}
              width="400"
              height="500"
              loading="lazy"
              decoding="async"
              className="w-full max-w-xs h-auto max-h-[380px] object-contain"
            />
          </div>
        )}

      </div>
    </section>
  );
}
