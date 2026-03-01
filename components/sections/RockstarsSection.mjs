export default function RockstarsSection({
  title,
  posts = [],
}) {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">

        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-900 mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl shadow-sm hover:shadow-md transition"
            >
              <img
                src={post.image}
                alt={post.alt}
                width="400"
                height="400"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
              />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
