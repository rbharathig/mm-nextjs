import { MessageCircle, Package, Globe } from "lucide-react";


export default function BansuriFlutePage() {
  return (
     <div className="w-full bg-white">

    <section
        className="relative h-[420px] flex items-center justify-center text-white"
        style={{
            backgroundImage: "url('/store-new/images/bansuri-hero.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        >
        <div className="bg-black/40 absolute inset-0"></div>

        <div className="relative text-center px-6">
            <h1 className="text-4xl md:text-5xl font-semibold">
            India’s Best Bansuri Flute
            </h1>
            <p className="mt-4 text-lg md:text-xl">
            Premium Hindustani Flutes For All Skill Levels
            </p>
        </div>
    </section>

    <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                <div>
                <h2 className="text-2xl font-semibold mb-4">
                    Music Master Online Bansuri Store
                </h2>

                <img
                    src="/store-new/images/bansuri-side.webp"
                    alt="Bansuri"
                    className="w-full max-w-sm object-contain"
                />
                </div>

                <div>
                <h2 className="text-3xl font-semibold mb-6">
                    Best Bansuri Flute
                </h2>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                    {/* Keep original content exactly */}
                </div>
                </div>

        </div>
    </section>

    <section className="bg-white py-16">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

    <div>
      <h2 className="text-2xl font-semibold mb-4">
        Music Master Online Bansuri Store
      </h2>

      <img
        src="/store-new/images/bansuri-side.webp"
        alt="Bansuri"
        className="w-full max-w-sm object-contain"
      />
    </div>

    <div>
      <h2 className="text-3xl font-semibold mb-6">
        Best Bansuri Flute
      </h2>

      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>Finding difficult to get a perfectly tuned bansuri with great tone? We have got you covered. We have that perfectly tuned bansuri that you always wanted.</p>

<p>Welcome to online bansuri flute store at Music Master, the best place to buy premium handmade hindustani flutes. We offer entire range of bansuri – medium and base flutes. These flutes are suitable for flautists of all levels, from beginner to professional. We ship our flutes to all major international locations.</p>

<p>Our flutes are pitch tight and concert ready that is tuned to 440Hz and can be used in any live shows and studio recordings. We can customise to your specific needs in case if you need any special tuning. You can write to us at support@musicmaster.in for customised flutes.</p>

<p>We would say these bansuri will be the last ones you’ll ever need. Once you get one scale of Indiran’s flute, you’ll want to buy all the scales for its sweet tones and great tuning.</p>
      </div>
    </div>

  </div>
</section>

<section className="bg-[#f8f7f4] py-16">
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2 className="text-3xl font-semibold mb-6">
      Quality Check on Bansuri Flutes
    </h2>

    <div className="text-gray-700 leading-relaxed space-y-4">
      {/* Keep content exactly */}
    </div>

    <div className="mt-8">
      <button className="bg-green-600 text-white px-8 py-3 rounded-md">
        Whatsapp Now
      </button>
    </div>

  </div>
</section>




    </div>
  );
}