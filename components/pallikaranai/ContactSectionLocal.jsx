// components/pallikaranai/ContactSectionLocal.jsx

export default function ContactSectionLocal() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Connect With Us
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-10">

            <div>
              <h3 className="text-xl font-semibold mb-3">
                MUSIC MASTER, Pallikaranai, Chennai
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Plot No.227 (First Floor), 1st Main Road,<br />
                Kamakoti Nagar,<br />
                Chennai – 600100
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Email</h4>
              <a
                href="mailto:support@musicmaster.in"
                className="text-blue-600 hover:underline"
              >
                support@musicmaster.in
              </a>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Contact Person</h4>
              <p className="text-gray-700">Reka N</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">
                WhatsApp & Mobile
              </h4>

              <div className="flex flex-wrap gap-4">

                {/* WhatsApp */}
                <a
                  href="https://api.whatsapp.com/send?phone=917200145687"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-full font-semibold text-white shadow"
                >
                  WhatsApp 72001 45687
                </a>

                {/* Get Directions */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Music+Master+Pallikaranai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-full font-semibold text-white shadow"
                >
                  Get Directions
                </a>

              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Timings</h4>
              <p className="text-gray-700 leading-relaxed">
                Monday to Friday: 10 AM to 8:30 PM<br />
                Saturday & Sunday: 9 AM to 9 PM
              </p>
            </div>

          </div>

          {/* MAP */}
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4662287766696!2d80.210938!3d12.941991!2m3!1f0!2f0!3f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525da87faf98d5%3A0x1c353d44d8a9c1d9!2sMUSIC%20MASTER!5e0!3m2!1sen!2sin!4v1766995237664!5m2!1sen!2sin"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              title="Music Master Pallikaranai Location"
              className="absolute inset-0"
            />
          </div>

        </div>
      </div>
    </section>
  )
}