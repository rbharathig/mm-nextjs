export default function Advantages({
  title,
  subtitle,
  image,
  imageAlt,
  items = [],
}) {
  return (
    <section className="bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-2 text-gray-600 font-medium">
              {subtitle}
            </p>
          )}

          {image && (
            <div className="mt-6">
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

        {/* RIGHT SIDE */}
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <img
                src={item.icon}
                alt={item.iconAlt}
                width="50"
                height="50"
                loading="lazy"
                decoding="async"
                className="flex-shrink-0"
              />
              <div>
                <h3 className="font-semibold text-blue-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
