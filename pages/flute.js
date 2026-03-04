export default function FluteLandingPage() {
  return (
    <div>
    <section className="relative w-full h-[600px] overflow-hidden flex">

  {/* LEFT PANEL */}
  <div className="relative w-[55%] bg-[#E6D59A] flex items-center z-10">
    <div className="w-full flex justify-center">
      <div className="max-w-[520px]">

        <h1 className="text-[42px] leading-[1.2] text-black mb-6">
          <span className="block font-light">
            Buy <span className="font-extrabold">PERFECTLY TUNED</span>
          </span>
          <span className="block font-light">
            Indian Flutes
          </span>
        </h1>

        <p className="text-[16px] leading-relaxed text-black/80">
          Only the best flutes, handmade one by one,
          by professional flute makers.
        </p>

      </div>
    </div>
  </div>

  {/* RIGHT PANEL */}
  <div className="relative w-[45%] flex items-center justify-center">
    <img
      src="/images/flute-hero2.webp"
      alt="Flute Player"
      className="w-full h-full object-cover object-top"
    />
  </div>

  {/* TRIANGLE DIVIDER */}
  <div
    className="absolute top-0 left-[55%] h-full w-[110px] bg-[#E6D59A] z-20"
    style={{
      clipPath: "polygon(0 0, 100% 0, 0 100%)",
    }}
  />

</section>

<section className="bg-[#f5f3ee] pt-8 pb-16 md:pt-12 md:pb-20">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-12">
      Why You Should Buy Flutes Online From Us?
    </h2>

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* Left Content */}
      <div className="space-y-6 text-gray-700 leading-relaxed text-[17px]">
        <p>
          Buying a perfectly tuned Indian flute is a challenge. If you are new
          to flutes it becomes even a bigger challenge as you will not be able
          to check if they are perfectly tuned. Majority of the flutes that you
          find in the market and online sites will have this problem.
        </p>

        <p>
          But at <span className="font-semibold text-gray-900">Music Master</span>, we work closely
          with flute suppliers to make sure that you get best tuned flutes.
          <span className="font-semibold italic">
            {" "}All our flutes are 100% quality checked in our Music Store
            and only when they pass the quality check are they dispatched
            to customers.
          </span>
        </p>

        <p>
          You can be assured that you get only the{" "}
          <span className="font-semibold text-gray-900">best flutes</span>{" "}
          that are perfectly tuned so that you can focus on what you love —
          playing the flute.
        </p>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src="/store-new/images/flute-quality.webp"
          alt="Flute quality check process"
          className="rounded-2xl shadow-lg max-h-[420px] object-cover"
        />
      </div>

    </div>
  </div>
</section>
<section className="bg-[#fff] pt-14 pb-16 md:pt-20 md:pb-24">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-semibold text-center text-gray-900 mb-14">
      Looking To Buy A Perfectly Tuned Flute?
    </h2>

    {/* Two Column Layout */}
    <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

      {/* Carnatic */}
      <div className="text-center md:text-left">
        <img
          src="/store-new/images/carnatic-flute.webp"
          alt="Carnatic Flute"
          className="mx-auto md:mx-0 mb-6 max-h-[160px] object-contain"
        />

        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Carnatic Flutes
        </h3>

        <p className="text-gray-600 mb-4 font-medium">
          The South Indian Flute
        </p>

        <p className="text-gray-700 leading-relaxed text-[16px]">
          Made from traditional South Indian bamboos, all our flutes
          have natural nodes and are handmade one at a time.
        </p>
      </div>

      {/* Bansuri */}
      <div className="text-center md:text-left">
        <img
          src="/store-new/images/bansuri-flute.webp"
          alt="Bansuri Flute"
          className="mx-auto md:mx-0 mb-6 max-h-[160px] object-contain"
        />

        <h3 className="text-2xl font-semibold text-gray-900 mb-2">
          Bansuri
        </h3>

        <p className="text-gray-600 mb-4 font-medium">
          The Hindustani Flute
        </p>

        <p className="text-gray-700 leading-relaxed text-[16px]">
          Bansuris are made predominantly from Assam bamboo. Our flutes
          are crafted carefully for durability and tonal richness.
        </p>
      </div>

    </div>

  </div>
</section>
<section className="bg-[#efe1c6] pt-8 pb-10 md:pt-12 md:pb-14">
  <div className="max-w-4xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-semibold text-center text-black mb-10">
      Different Types of Indian Flutes
    </h2>

    {/* Intro Paragraph */}
    <p className="text-black leading-relaxed text-[18px] mb-6">
      You can see many kinds of flutes in our country. However, broadly speaking,
      Indian flutes can be divided into three main categories:
    </p>

    {/* Ordered List */}
    <ol className="space-y-6 text-black leading-relaxed text-[17px] list-decimal list-inside">

      <li>
        <span className="font-semibold text-black">
          Bansuri (Hindustani Flute)
        </span>
        {" "}– Predominantly used in most parts of India (except South India).
        Majority of these flutes are made from Assam bamboo and selected hardwood.
        This flute has one blowing hole, six finger holes and one tuning hole.
      </li>

      <li>
        <span className="font-semibold text-black">
          Carnatic Flutes
        </span>
        {" "}– Also called Venu or Pullankuzhal. These flutes are predominantly
        used in South India. They have one blowing hole and eight finger holes.
      </li>

      <li>
        <span className="font-semibold text-black">
          6 Hole Flutes
        </span>
        {" "}– Popular across the country, especially in light, film and folk music.
        These wooden flutes are simple and easy to use.
      </li>

    </ol>

  </div>
</section>

<section className="bg-white pt-8 pb-10 md:pt-12 md:pb-14">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-2xl md:text-3xl font-semibold text-center text-gray-900 mb-8">
      Advantage of Online Buying of Flutes From Us
    </h2>

    {/* Grid */}
    <div className="grid md:grid-cols-3 gap-8 text-center">

      {/* Card 1 */}
      <div>
        <img
          src="/store-new/images/tuned-flutes.webp"
          alt="Perfectly Tuned Flutes"
          className="mx-auto mb-4 max-h-[140px] object-contain"
        />

        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Perfectly Tuned Flutes
        </h3>

        <p className="text-gray-600 text-base leading-relaxed">
          100% of the flutes are quality checked before dispatch.
        </p>
      </div>

      {/* Card 2 */}
      <div>
        <img
          src="/store-new/images/customized-flutes.webp"
          alt="Customised Flutes"
          className="mx-auto mb-4 max-h-[140px] object-contain"
        />

        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Customised Flutes
        </h3>

        <p className="text-gray-600 text-base leading-relaxed">
          We customise finger hole sizes, tuning and more to meet individual needs.
        </p>
      </div>

      {/* Card 3 */}
      <div>
        <img
          src="/store-new/images/shipping.webp"
          alt="Global Shipping"
          className="mx-auto mb-4 max-h-[140px] object-contain"
        />

        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Easy Shipping Across Globe
        </h3>

        <p className="text-gray-600 text-base leading-relaxed">
          Shipping inside India is free. International shipping charges apply.
        </p>
      </div>

    </div>

  </div>
</section>

<section className="bg-[#dfe4d8] pt-10 pb-12 md:pt-14 md:pb-16">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

    {/* Left Content */}
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
        Bansuri Flute Set
      </h2>

      <div className="space-y-5 text-gray-800 text-[16px] leading-relaxed">
        <p>
          Simply put, a collection of flutes is called a flute set.
          You need a bansuri flute set if you want to play songs in
          the original key in which they were composed.
        </p>

        <p>
          Different flutes have different finger spacing, so you
          need to get used to them. That is why owning a flute set
          becomes essential.
        </p>

        <p>
          A typical mid-scale bansuri flute set includes around
          12 flutes, while a bass scale set includes about 6 bass
          flutes.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <a
          href="/store/flute/bansuri-flute-set"
          className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-red-700 transition"
        >
          Explore More
        </a>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex justify-center md:justify-end">
      <img
        src="/store-new/images/flutes-set.webp"
        alt="Bansuri flute set"
        className="max-h-[420px] object-contain"
      />
    </div>

  </div>
</section>

<section className="bg-[#e6e4b8] pt-10 pb-12 md:pt-14 md:pb-16">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

    {/* Left Content */}
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
        Carnatic Flute Set
      </h2>

      <div className="space-y-5 text-gray-800 text-[16px] leading-relaxed">
        <p>
          The medium size or mid-scale Carnatic flute set includes 12 flutes —
          one for each note in the scale. This allows you to play songs
          in any key and across different genres.
        </p>

        <p>
          If you prefer bass tones, you may choose bass flutes.
          Bass flutes are commonly available in scales such as
          G, G#, A, A# and B.
        </p>

        <p>
          We can produce even lower notes on request, though
          larger spacing between finger holes may require
          additional adjustment.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <a
          href="/store/flute/carnatic-flute-set"
          className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-red-700 transition"
        >
          Explore More
        </a>
      </div>
    </div>

    {/* Right Image */}
    <div className="flex justify-center md:justify-end">
      <img
        src="/store-new/images/carnatic-flute-set.webp"
        alt="Carnatic flute set"
        className="max-h-[420px] object-contain"
      />
    </div>

  </div>
</section>



<section className="relative bg-[#f3f3f3] pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">

  {/* Soft background texture layer */}
  <div className="absolute inset-0 opacity-10 bg-[url('/store-new/images/flute-pattern.webp')] bg-cover bg-center pointer-events-none"></div>

  <div className="relative max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
      Hear Our Flutes
    </h2>

    <p className="text-gray-600 text-base md:text-lg mb-10 max-w-2xl mx-auto">
      Experience the tonal richness and clarity of our handcrafted flutes.
      Listen to a live Carnatic flute performance before you choose yours.
    </p>

    <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/ZvU-9btX7L4"
        title="Hear Our Flutes"
        allowFullScreen
      ></iframe>
    </div>

  </div>
</section>


<section className="bg-[#f5f5f3] pt-12 pb-14 md:pt-16 md:pb-18">
  <div className="max-w-6xl mx-auto px-6">

    {/* Heading */}
    <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-12">
      Best Sellers
    </h2>

    {/* Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">

      {/* Product 1 */}
      <div className="group transition duration-300 hover:-translate-y-2">
        <img
          src="/store-new/images/d-sharp-carnatic-flute.webp"
          alt="D# Carnatic Flute"
          className="mx-auto mb-6 max-h-[220px] object-contain"
        />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          D# Carnatic Flute
        </h3>
        <a
          href="/store/flute/carnatic-flute/dsharp"
          className="inline-block bg-red-600 text-white px-5 py-2 rounded-full 
                     text-sm font-medium hover:bg-red-700 transition"
        >
          View Details
        </a>
        
      </div>

      {/* Product 2 */}
      <div className="group transition duration-300 hover:-translate-y-2">
        <img
          src="/store-new/images/c-natural-bansuri-flute.webp"
          alt="C Natural Bansuri"
          className="mx-auto mb-6 max-h-[220px] object-contain"
        />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          C Natural Bansuri
        </h3>
        <a
          href="/store/flute/carnatic-flute/dsharp"
          className="inline-block bg-red-600 text-white px-5 py-2 rounded-full 
                     text-sm font-medium hover:bg-red-700 transition"
        >
          View Details
        </a>
        
      </div>

      {/* Product 3 */}
      <div className="group transition duration-300 hover:-translate-y-2">
        <img
          src="/store-new/images/g-sharp-base-bansuri-flute.webp"
          alt="G# Natural Bansuri (Bass)"
          className="mx-auto mb-6 max-h-[220px] object-contain"
        />
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          G# Natural Bansuri (Bass)
        </h3>
         <a
          href="/store/flute/carnatic-flute/dsharp"
          className="inline-block bg-red-600 text-white px-5 py-2 rounded-full 
                     text-sm font-medium hover:bg-red-700 transition"
        >
          View Details
        </a>
       
      </div>

    </div>

  </div>
</section>


    </div>
  );
}