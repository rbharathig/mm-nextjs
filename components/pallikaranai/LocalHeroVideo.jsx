// components/pallikaranai/LocalHeroVideo.jsx

export default function LocalHeroVideo() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-center text-white">

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://musicmaster-in.s3.ap-south-1.amazonaws.com/videos/musicmaster-hero-bgvideo.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold uppercase">
          Best Music Classes in Pallikaranai
        </h1>
        <p className="mt-4 text-xl md:text-2xl">
          Taught by qualified teachers for all ages
        </p>
      </div>

    </section>
  )
}