export default function RockstarsSection() {
  return (
    <section className="py-12 bg-[#0b4da2]/5">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl lg:text-4xl font-bold text-[#0b4da2] mb-16">
          Check Our Rockstars In Action
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">

          {/* Reel 1 */}
          <a
            href="https://www.instagram.com/p/CS012udj7t1/"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full max-w-xs"
          >
            <div className="aspect-[9/16] overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/carnatic/onlinecarnaticmusicclass-musicmaster.in.webp"
                alt="Online Carnatic Music Class"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </div>
          </a>

          {/* Reel 2 */}
          <a
            href="https://www.instagram.com/p/CToCDmiJp06/"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full max-w-xs"
          >
            <div className="aspect-[9/16] overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/carnatic/singingsongonlordshiva-musicmaster.in.webp"
                alt="Carnatic Singing Session"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </div>
          </a>

          {/* Reel 3 */}
          <a
            href="https://www.instagram.com/p/CTejcKNjGUJ/"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full max-w-xs"
          >
            <div className="aspect-[9/16] overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/images/carnatic/onlinevocallessons-musicmaster.in.webp"
                alt="Online Vocal Lessons"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                loading="lazy"
              />
            </div>
          </a>

        </div>

         <a
          href="https://www.instagram.com/musicmaster.inofficial/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-[#0b4da2] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition"
        >
          Follow @musicmaster.inofficial
        </a>

      </div>
      
    </section>
  );
}

