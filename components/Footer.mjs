export default function Footer() {
  return (
    <footer className="bg-[#0b4da2] text-white">
      
      {/* TOP LOGO STRIP */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <a href="https://musicmaster.in/" className="flex justify-center">
            <img
              src="https://musicmaster.in/store/wp-content/uploads/sites/3/2025/06/music-master-class-footer-logo.webp"
              alt="Music Master Classes"
              className="h-16 object-contain"
            />
          </a>

          <a href="https://musicmaster.in/blog/" className="flex justify-center">
            <img
              src="https://musicmaster.in/store/wp-content/uploads/sites/3/2025/06/music-master-blog-footer-logo.webp"
              alt="Music Master Blog"
              className="h-16 object-contain"
            />
          </a>

          <a href="https://musicmaster.in/store/" className="flex justify-center">
            <img
              src="https://musicmaster.in/store/wp-content/uploads/sites/3/2025/06/music-master-store-footer-logo.webp"
              alt="Music Master Store"
              className="h-16 object-contain"
            />
          </a>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-14">

          {/* ROW 1 */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

            {/* BRAND + CONTACT */}
            <div>
              <img
                src="https://musicmaster.in/store/wp-content/uploads/sites/3/2025/06/music-master-footer-logos-1.webp"
                alt="Music Master Logo"
                className="h-9 mb-4"
              />

              {/* Social Icons */}
             <div className="flex items-center space-x-4 mb-5">

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@MusicMasterContent/videos"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="YouTube"
    className="p-2 rounded-md hover:bg-white/10 transition duration-200"
  >
    <svg
      className="w-5 h-5 fill-white"
      viewBox="0 0 24 24"
    >
      <path d="M23.5 6.2a2.9 2.9 0 0 0-2-2C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.5.7a2.9 2.9 0 0 0-2 2A30.5 30.5 0 0 0 0 12a30.5 30.5 0 0 0 .5 5.8 2.9 2.9 0 0 0 2 2c2 .7 9.5.7 9.5.7s7.5 0 9.5-.7a2.9 2.9 0 0 0 2-2A30.5 30.5 0 0 0 24 12a30.5 30.5 0 0 0-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z"/>
    </svg>
  </a>

  {/* Instagram */}
 <a
  href="https://www.instagram.com/musicmaster.inofficial/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
  className="p-2 rounded-md hover:bg-white/10 transition duration-200"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    className="w-5 h-5 fill-current text-white"
  >
    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
  </svg>
</a>


  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/company/musicmaster-in/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
    className="p-2 rounded-md hover:bg-white/10 transition duration-200"
  >
    <svg
      className="w-5 h-5 fill-white"
      viewBox="0 0 24 24"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.5-2.2 3.8 0 4.5 2.5 4.5 5.7V24h-4v-8.5c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24h-4V8z"/>
    </svg>
  </a>

</div>


              <div className="text-sm">
                Call / Chat<br />
                <a href="tel:+919789897600" className="hover:underline">
                  +91 97898 97600
                </a>
              </div>
            </div>

            {/* MUSIC CLASSES */}
            <FooterColumn
              title="Music Classes"
              links={[
                ["Online Piano Classes", "https://musicmaster.in/online-piano-classes.html"],
                ["Online Guitar Classes", "https://musicmaster.in/online-guitar-classes.html"],
                ["Online Flute Classes", "https://musicmaster.in/online-flute-classes.html"],
                ["Online Violin Classes", "https://musicmaster.in/online-violin-classes.html"],
                ["Online Drums Classes", "https://musicmaster.in/online-drums-classes.html"],
                ["Online Ukulele Classes", "https://musicmaster.in/online-ukulele-classes.html"],
                ["Music Classes for Adults", "https://musicmaster.in/online-music-classes-for-adults.html"],
              ]}
            />

            {/* SINGING */}
            <FooterColumn
              title="Singing Classes"
              links={[
                ["Online Western Vocals", "https://musicmaster.in/online-western-music-classes.html"],
                ["Online Carnatic Vocals", "https://musicmaster.in/online-carnatic-music-classes.html"],
                ["Online Hindustani Vocals", "https://musicmaster.in/online-hindustani-music-classes.html"],
              ]}
            />

            {/* GRADE EXAMS */}
            <FooterColumn
              title="Grade Exams"
              links={[
                ["Trinity College, London", "https://musicmaster.in/trinity-college-london-music-grade-exams.html"],
                ["Rockschool, London", "https://musicmaster.in/music-grade-exams.html"],
                ["Grade Exam Achievers", "https://musicmaster.in/music-grade-exams.html"],
              ]}
            />

          </div>

          {/* ROW 2 */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 mt-14">

            <FooterColumn
              title="Free Resources"
              links={[
                ["Blogs", "https://musicmaster.in/blog/"],
                ["Guitar Tuner", "https://musicmaster.in/guitar-tuner.html"],
                ["Metronome", "https://musicmaster.in/metronome.html"],
                ["Shruti Box", "https://musicmaster.in/shrutiBox.html"],
                ["Virtual Piano", "https://musicmaster.in/virtual-piano.html"],
                ["Ukulele Tuner", "https://musicmaster.in/online-ukulele-tuner.html"],
                ["Vocal Range Finder", "https://musicmaster.in/vocal-range-finder.html"],
              ]}
            />

            <FooterColumn
              title="Buy Instruments"
              links={[
                ["Digital Keyboards", "https://musicmaster.in/store/"],
                ["Guitars", "https://musicmaster.in/store/"],
                ["Carnatic Flutes", "https://musicmaster.in/store/"],
                ["Bansuris", "https://musicmaster.in/store/"],
                ["Guitar Strings", "https://musicmaster.in/store/"],
              ]}
            />

            <FooterColumn
              title="Company"
              links={[
                ["About Us", "https://musicmaster.in/about.html"],
                ["Contact Us", "https://musicmaster.in/contact.html"],
                ["Careers", "https://musicmaster.in/careers.html"],
                ["Join As Tutor", "https://musicmaster.in/hiring.html"],
                ["FAQs", "https://musicmaster.in/faq.html"],
                ["Offline School", "https://musicmaster.in/music-classes-in-chennai.html"],
              ]}
            />

            <FooterColumn
              title="Our Policies"
              links={[
                ["Shipping & Payment", "https://musicmaster.in/store/shipping-policy/"],
                ["Return & Exchange Policy", "https://musicmaster.in/store/return-refund-policy/"],
                ["Refund Policy", "https://musicmaster.in/store/return-refund-policy/"],
                ["Terms & Conditions", "https://musicmaster.in/terms.html/"],
                ["Privacy Policy", "https://musicmaster.in/privacy-policy.html"],
                ["Content Policy", "https://musicmaster.in/blog/content-policy/"],
                ["Kids & Online Safety", "https://musicmaster.in/kids-online-safety-policy.html"],
                ["Cookie Policy", "https://musicmaster.in/cookie-policy.html"],
              ]}
            />

          </div>

          {/* SECURE PAYMENTS */}
          <div className="mt-16 border-t border-white/20 pt-10 text-center">
            <h6 className="text-lg font-semibold mb-2">
              Secure Payments & Infrastructure
            </h6>
            <p className="text-sm mb-6">
              Payments are processed via PCI-DSS compliant gateways with 256-bit SSL encryption.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6 bg-white p-1 rounded" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6 bg-white p-1 rounded" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/RuPay.svg" className="h-6 bg-white p-1 rounded" alt="RuPay" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-6 bg-white p-1 rounded" alt="PayPal" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" className="h-6 bg-white p-1 rounded" alt="Stripe" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" className="h-6 bg-white p-1 rounded" alt="Google Pay" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Amazon_Pay_logo.svg" className="h-6 bg-white p-1 rounded" alt="Amazon Pay" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg" className="h-6 bg-white p-1 rounded" alt="PhonePe" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" className="h-6 bg-white p-1 rounded" alt="Paytm" />
            </div>
          </div>

        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-black/20 text-center text-sm py-6 px-6">
        Registered Address: Happy Music Technologies P Ltd, Plot No.227 (1st Floor),
        1st Main Road, Kamakoti Nagar, Chennai – 600100<br />
        © 2026 Music Master, Happy Music Technologies P Ltd – All rights reserved.
      </div>

    </footer>
  );
}

/* Reusable Footer Column */
function FooterColumn({ title, links }) {
  return (
    <div>
      <h6 className="text-lg font-semibold mb-4">{title}</h6>
      <ul className="space-y-2 text-sm">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="hover:underline">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
