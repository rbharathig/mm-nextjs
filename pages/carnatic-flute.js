import { MessageCircle, Package, Globe } from "lucide-react";
import CraftingProcess from "../components/CraftingProcess"
import FaqSection from "../components/FaqSection"

export default function CarnaticFlutePage() {
  return (
    <div className="w-full bg-white">

      {/* HERO SECTION */}
      <div className="pt-20">
      <section
        className="relative w-full overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #ede8e0 0%, #e5ddd2 50%, #ddd5c8 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center min-h-[480px]">

          {/* LEFT PANEL */}
          <div className="px-10 md:px-16 py-16">

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-gray-900">
              Carnatic Flute
            </h1>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-md">
              India’s Best Handcrafted Carnatic Flutes - Indiran Flutes
            </p>

            {/* CTA BUTTON */}
            <div className="mt-8">
              <button className="bg-red-700 hover:bg-red-800 text-white px-7 py-3 rounded-full text-sm font-medium transition duration-300">
                Explore Carnatic Flutes
              </button>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          {/* RIGHT IMAGE */}
            <div className="relative flex items-start justify-center pt-16 pr-8 md:pr-12">

            <img
                src="/store-new/images/carnatic-flute-hero.webp"
                alt="Carnatic Flute"
                className="max-h-[380px] object-contain"
                style={{
                filter: "drop-shadow(0px 20px 30px rgba(0,0,0,0.18))",
                }}
            />

            </div>

        </div>
      </section>
      </div>


      {/* SECTION 2 */}
    {/* SECTION 2 */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto">

    {/* TOP ROW */}
    <div className="grid md:grid-cols-2 gap-14 items-end">
      
      <h2 className="text-3xl text-center md:text-4xl font-semibold text-gray-900">
        Carnatic flute shop
      </h2>

      <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
        Buy Carnatic Flute Online With Confidence
      </h3>

    </div>

    {/* BOTTOM ROW */}
    <div className="mt-10 grid md:grid-cols-2 gap-14 items-start">

      {/* IMAGE */}
      <div className="flex justify-center md:justify-start">
        <img
          src="/store-new/images/carnatic-flute-hero.webp"
          alt="Carnatic flute shop"
          className="max-w-[380px] object-contain"
        />
      </div>

      {/* PARAGRAPHS */}
      <div className="space-y-6 text-gray-700 leading-relaxed text-lg">

        <p>
          Finding a perfectly tuned carnatic bamboo flute is always a challenge. At Music Master you can be 100% assured that you will get that ‘perfect carnatic flute’.
        </p>

        <p>
          Welcome to the online flute shop at Music Master, the best place to buy premium handmade carnatic flutes. We offer an entire range of carnatic flutes, venu flute or pulankuzhal. These flutes are suitable for flautists of all levels, from beginner to professional.
        </p>

        <p>
          Our flutes are concert ready that are tuned to 440Hz. In case you need any special tuning please do write to us at support@musicmaster.in. We can customize to your specific needs.
        </p>

        <p>
          We would say these carnatic flutes will be the last ones you’ll ever need. Once you get one scale of Indiran’s flute, you’ll want to buy all the scales for its sweet tone.
        </p>

      </div>

    </div>

  </div>
</section>

{/* youtube video section */}
                <section className="relative bg-[#f3f3f3] pt-12 pb-16 md:pt-16 md:pb-20 overflow-hidden">

  {/* Soft background texture layer */}
  <div className="absolute inset-0 opacity-10 bg-[url('/store-new/images/flute-pattern.webp')] bg-cover bg-center pointer-events-none"></div>

  <div className="relative max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
      8 Hole Flute - The Flute Of South India
    </h2>

    <p className="text-gray-600 text-base md:text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
      In this video carnatic flute guru Mr. Sai Prabhakar reviews an 8 hole carnatic flute made by Mr. Indiran. The classical carnatic flute also referred to as Venu or Pulankuzhal in South India has 8 finger holes and one hole to blow.
    </p>

    <div className="aspect-video rounded-2xl overflow-hidden shadow-xl mb-10">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/3FZ2Wsb-2ko"
        title="8 Hole Carnatic Flute Review"
        allowFullScreen
      ></iframe>
    </div>

    {/* CTA BUTTON */}
    <a
      href="https://musicmaster.in/getstarted/carnatic-flute"
      className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-sm md:text-base font-medium transition duration-300"
    >
      Whatsapp Now
    </a>

  </div>
</section>



<section className="bg-[#e9f0f1] py-16 md:py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
      Buy Flute Online
    </h2>

    <p className="text-gray-700 max-w-3xl mx-auto mb-14 leading-relaxed">
      Buying carnatic flutes should be fun and easy. At Music Master we will do all the heavy lifting so that you don’t have to worry about anything. Here is how it works…
    </p>

    <div className="grid md:grid-cols-3 gap-10 items-start">

      {/* STEP 1 */}
      <div className="flex flex-col items-center text-center">
        <MessageCircle className="w-14 h-14 text-green-600 mb-6" />

        <h3 className="text-xl font-semibold mb-3">
          1. Whatsapp ‘Flute’
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Whatsapp ‘Flute’ to 9789897600. We will send you a professional photograph and video of the flute that you will receive.
        </p>
      </div>

      {/* STEP 2 */}
      <div className="flex flex-col items-center text-center">
        <Package className="w-14 h-14 text-yellow-600 mb-6" />

        <h3 className="text-xl font-semibold mb-3">
          2. Place Order
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Select all the scales you want and pay us. We accept all International currency.
        </p>
      </div>

      {/* STEP 3 */}
      <div className="flex flex-col items-center text-center">
        <Globe className="w-14 h-14 text-blue-600 mb-6" />

        <h3 className="text-xl font-semibold mb-3">
          3. Shipping
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Free Shipping all over India. Courier charges apply to all international locations.
        </p>
      </div>

    </div>

  </div>
</section>

<section className="bg-[#f8f7f4] py-16 md:py-20">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
      Shop Carnatic Bamboo Flutes Online
    </h2>

    <p className="text-gray-600 max-w-3xl mx-auto mb-14 leading-relaxed">
      The perfect 8 hole flute crafted one a time ideal for daily practise, studio recordings and live shows. All flutes in our catalogue are tuned to 440 HZ.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* PRODUCT CARD */}
      {[
        {
          title: "D# Carnatic Flute (Shruthi/Kattai–2.5)",
          image: "/store-new/images/premium-d-sharp-carnatic-flute-flat-view-400x400.webp",
        },
        {
          title: "E Natural Carnatic Flute (Shruthi / Kattai – 3)",
          image: "/store-new/images/premium-e-carnatic-flute-flat-view-400x400.webp",
        },
        {
          title: "F Natural Carnatic Flute (Shruthi / Kattai – 4)",
          image: "/store-new/images/premium-F-carnatic-flute-flat-view-400x400.webp",
        },
      ].map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition duration-300 text-left"
        >

          {/* Image */}
          <div className="flex justify-center mb-6">
            <img
              src={product.image}
              alt={product.title}
              className="h-[260px] object-contain"
            />
          </div>

          {/* Category */}
          <p className="text-sm text-gray-400 mb-2">
            Bamboo flutes
          </p>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-snug">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500 mb-6 text-sm">
            ★★★★★
          </div>

          {/* CTA */}
          <button className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-xl font-medium transition duration-300">
            Buy Now
          </button>

        </div>
      ))}

    </div>

  </div>
</section>

      <section className="w-full bg-[#2f6e2f] py-20">
  <div className="max-w-5xl mx-auto px-6 text-white">

            <h2 className="text-3xl text-center md:text-4xl font-semibold mb-8">
            Explore Super Premium Carnatic Flutes
            </h2>

            {/* Flute Image */}
            <div className="flex justify-center mb-10">
            <img
                src="/store-new/images/musicmaster-super-premium-carnatic-flute-1.webp"
                alt="Super Premium Carnatic Flute"
                className="max-w-4xl w-full object-contain drop-shadow-xl"
            />
            </div>

            <div className="text-left max-w-4xl mx-auto space-y-6 text-white/90 leading-relaxed text-lg">

            <p>
                Looking for a professional carnatic flute that is tuned perfectly and has a sweet tone? Look no further you have landed in the right spot. The super premium carnatic flutes are made from 15+ year old bamboos that are found in deep jungles of specific forests of Kerala and Karnataka. The key features of the super premium carnatic flutes are:
            </p>

            <ul className="list-disc pl-6 space-y-4">
                <li>
                The wooden flute is thicker, therefore the vibration of air inside is a lot more smoother. However compared to lighter flutes, this flute will need more blowing efforts and therefore this flute is recommended for intermediate and advanced flute players.
                </li>
                <li>
                The overall weight of the flute is almost 40% more than its regular counterpart and therefore holding it in the hand gives a better feeling.
                </li>
                <li>
                Can be customized to specific needs of a carnatic flute player. The size of the finger holes can be made smaller for artists with smaller finger size. But please bear in mind such orders will take time to deliver.
                </li>
            </ul>

            <p>
                Play them once, you will get blown by the feel you will get when you hold them in hand and its sweet tone that will match that of the great carnatic flute players. For more details on custom carnatic flute for sale whatsapp us now.
            </p>

            </div>

            {/* CTA */}
           <div className="mt-12 flex justify-center">
            <a
                href="https://musicmaster.in/getstarted/carnatic-flute"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-base font-medium transition duration-300 shadow-lg"
            >
                Whatsapp Now
            </a>
            </div>

        </div>
    </section>

    <section className="bg-[#f2eef4] py-12 md:py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">

            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
            Music Master Guarantee
            </h3>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
            <span className="font-semibold">
                We want you to love playing our flutes: the notes, tone and overall feel.
            </span>{" "}
            That is the reason why we want to give 100% guarantee on all our flutes.
            If you ever find any note not in tune, we will give you a free replacement
            of another Indiran’s flute (same scale) or refund your full money. No questions asked.
            We just want you to be happy shopping with us. This is applicable for 30 days
            from the date you buy.
            </p>

        </div>
    </section>

    <section className="bg-[#faf9f6] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
            The Best Carnatic Flutes For Classical Music
            </h2>

            <p className="text-gray-700 max-w-4xl mx-auto mb-14 leading-relaxed text-lg">
            Indiran handmade flutes are crafted one at a time by Indiran, who has mastered the art of crafting awesome carnatic and hindustani flutes over the last 30+ years. The flutes are made with first quality select bamboo through a natural and labour intensive process of removing moisture, drying and drilling holes. He has taken it as a mission to craft India’s best handmade carnatic and hindustani flutes. In a nutshell, this is what it means for you:
            </p>

            <div className="grid md:grid-cols-3 gap-8 text-left">

            {/* CARD 1 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
                <img
                src="/store-new/images/bamboo.webp"
                alt="Selection & Seasoning Of Bamboo"
                className="w-full h-48 object-cover"
                />
                <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                    1. Selection & Seasoning Of Bamboo
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    The wood is selected from the finest quality bamboo. Backed by 30+ years of selecting wood and making the finest quality ‘bamboo’ flutes. These bamboo has to be of a certain thickness to get that beautiful carnatic tone.
                </p>
                </div>
            </div>

            {/* CARD 2 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
                <img
                src="/store-new/images/perfect-tuning.webp"
                alt="Perfect Tuning"
                className="w-full h-48 object-cover"
                />
                <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                    2. Perfect Tuning
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    While you can play one octave notes, you can also play higher notes in the next octave easily. Making such flutes is an art and Indiran has mastered this art over a long period of time.
                </p>
                </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
                <img
                src="/store-new/images/playing-notes.webp"
                alt="Playing Higher Notes"
                className="w-full h-48 object-cover"
                />
                <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                    3. Playing Higher Notes
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    The notes have to be perfectly tuned to play carnatic music. Each bamboo piece is unique, therefore drilling the finger and blowing holes has to be mastered on different sizes – length, diameter and thickness of the bamboo.
                </p>
                </div>
            </div>

            </div>

        </div>
    </section>

    <CraftingProcess />

    <section className="bg-gray-900 py-12 md:py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          Wondering Where to Start Your Carnatic Journey?
        </h2>

        <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          Selecting your first instrument is exciting. To get the right sound and comfort, our blog explains the basics of choosing a Carnatic flute so you can begin playing with ease and confidence
        </p>

        <a
          href="https://musicmaster.in/blog/guide-to-select-your-carnatic-or-hindustani-flute-instrument/"
          className="inline-block bg-white text-gray-900 hover:bg-gray-200 px-10 py-4 rounded-md text-base font-medium transition duration-200"
        >
          Start Here: Beginner's Guide
        </a>

      </div>
    </section>

    <section className="bg-[#faf9f6] py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-6">
          Classification of Carnatic flutes
        </h2>

        <p className="text-center text-gray-700 mb-14">
          We can broadly classify carnatic flutes into 3 segments based on octave of the flutes. Given below are the details fo three octave:
        </p>

        <div className="space-y-14">

          {/* MID OCTAVE */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Mid Octave Carnatic Flutes
            </h3>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                This is where ideally you should start – mid octave or medium sized carnatic flutes. The mid octave flute consists of 12 flutes, one for each scale also referred to as shruti or kattai. The scales in ascending order are C, C#, D, D#, E, F, F#, G, G#, A, A# and B. C is the longest one and B is the smallest one. Students can pick flutes based on their finger length.
              </p>

              <p>
                Carnatic gurus prefer D# as their key flute for adults for the simple reason it enables them to play for long period of time with comfortable finger spacing between holes and soothing tone.
              </p>

              <p>
                If you are a seasoned player and are looking to play along with other instruments, you will need all the flutes so that you can play the songs in all scales.
              </p>
            </div>
          </div>

          {/* LOWER OCTAVE */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Lower Octave or Bass Carnatic Flutes
            </h3>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                You should explore these flutes once you move to an intermediate level in the mid octave flutes. The sound from bass flutes will be very pleasant and divine. We have 5 flutes here. B, A#, A, G# and G. G is the longest one and flutes beyond this becomes impossible to play due to increased space between finger holes.
              </p>

              <p>
                You can see flute maestro Shashank Subramaniam using bass flutes in live performances.
              </p>
            </div>
          </div>

          {/* HIGHER OCTAVE */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Higher Octave Carnatic Flutes
            </h3>

            <p className="text-gray-700 leading-relaxed">
              These flutes are extremely small in size and the note will be high and therefore not so pleasant to ears. So these are not receommended for practise.
            </p>
          </div>

        </div>

      </div>
    </section>

    <section className="bg-[#f8f7f4] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-center mb-8">
            Buy India's Best Carnatic Flute Online
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              At Music Master, we specialise in sourcing the best flutes across India and get them listed on our website. We work closely with select manufacturers and make sure we sell only the highest quality concert graded carnatic bamboo flutes.
            </p>

            <p>
              While there are a variety of cheap flutes available with both offline and online dealers, what sets us apart is the kind of quality checks we do before sending the flutes to customers. The biggest challenge in buying the carnatic flute is its tuning. While there is no doubt that Indiran’s flutes reach us perfectly tuned, we ensure that the flutes are again checked in our music store with our inhouse flute teachers and tagged as quality checked. This ensures that the flutes that we sell to customers are perfectly tuned at concert grade of 440 Hz.
            </p>
          </div>

        </div>
    </section>

    <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Venu / Pulanguzhal Flute, The Beautiful Wind Instrument
            </h2>

            <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
              <p>
                Carnatic Flutes is also referred as Karnatic flute, Venu or Pulankuzhal is the flute that is used in South India (Tamil Nadu, Karnataka, Telangana, Andhra Pradesh & Kerala). Venu flute is a monophonic instrument meaning it can sound like that of a human voice. A carnatic flute is capable of producing notes in two and half octaves with cross fingering and over blowing.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/store-new/images/carnatic-flute-anatomy-musicmaster.webp"
              alt="Venu Pulanguzhal Flute"
              className="max-w-full h-[320px] object-contain"
            />
          </div>

        </div>
    </section>


    <section className="bg-[#f8f7f4] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-12">

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                History of Venu
              </h3>

              <p className="text-gray-700 leading-relaxed text-lg">
                While the history of venu flute can be traced hundreds of years back, it was only about 125+ years back, Sri Sarabha Sastri designed the carnatic flute. However it was Palladam Sanjeeva Rao who made it a popular instrument among the carnatic circle. He promoted the flute also as main concert instrument along with Mirudangam, Violin, Veena etc. Prior to that flute was generally considered as a folk instrument. The flute was made popular among the carnatic circle by TR Mahalingam better known as TR Mali.
              </p>
            </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Anatomy of a carnatic flute
            </h3>

            <p className="text-gray-700 leading-relaxed text-lg">
              The carnatic flute has one blowing hole and eight finger holes. The end near the blowing hole has a natural node and this is an essential feature of carnatic flute. The other end is open. The last finger hole is not widely used and occasionally used for tuning.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              The Shadjam (tonic Sa) or the scale is the note played when the first two finger holes are covered. Three fingers (index, middle & ring fingers) in the left hand cover the first 3 holes. In the right hand, four fingers (index, middle, ring & pinky finger) are used to cover the next 4 holes. The last or the 8th hole is generally left open, sometimes used for tuning.
            </p>
          </div>

        </div>
    </section>

    <section className="bg-white py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 text-center">
            Classification of carnatic flutes
          </h3>

          <p className="text-center text-gray-700 mb-12">
            We can broadly classify carnatic flutes into 3 segments based on size (length of the wooden flute) and octave that is being played.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <div>
              <h4 className="font-semibold text-lg mb-3">
                Medium sized flutes
              </h4>
              <p className="text-gray-700 leading-relaxed">
                12 flutes, one for each scale : C, C#, D, D#, E, F, F#, G, G#, A, A# & B. These flutes are used to play the mid octave.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">
                Bass flutes
              </h4>
              <p className="text-gray-700 leading-relaxed">
                The flutes are larger in size to get that deep bass sound. G, G#, A, A# and B scales are recommended. These flutes are used to play lower octaves. Beyond G base scale the flute’s length becomes too long and the distance between finger holes becomes too large to play the flute.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">
                Small sized flutes
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Beyond a key the flutes become too small to handle. So these flutes are not recommended for playing.
              </p>
            </div>

          </div>

        </div>
    </section>

    <FaqSection />



    </div>
  );
}