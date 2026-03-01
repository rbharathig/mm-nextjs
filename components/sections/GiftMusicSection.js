export default function GiftMusicSection({
  title,
  paragraphs = [],
  image,
  imageAlt,
  buttonText,
  buttonLink,
}) {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 leading-tight">
            {title}
          </h2>

          <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
            {paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          {buttonText && (
            <a
              href={buttonLink}
              className="inline-block mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition"
            >
              {buttonText}
            </a>
          )}
        </div>

        {/* RIGHT IMAGE */}
        {image && (
          <div className="flex justify-center md:justify-end">
            <img
              src={image}
              alt={imageAlt}
              width="350"
              height="350"
              loading="lazy"
              decoding="async"
              className="w-full max-w-sm h-auto"
            />
          </div>
        )}

      </div>
    </section>
  );
}
