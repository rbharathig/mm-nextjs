import { useState } from "react";
import Head from "next/head";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [open, setOpen] = useState(null);

  const faqs = [
    {
      question: "What is the flute price range for a beginner?",
      answer:
        "You can get flutes from Rs.300 onwards. However a good quality pefectly tuned flute will be Rs.1400 and upwards",
    },
    {
      question: "How do I choose the right flute size and type online?",
      answer:
        "Based on the space between finger holes. For kids between 7 to 8, 8 to 10, 10 to 15, 15 & above G or G# , F or F#, F or E and D are recommended respectively.",
    },
    {
      question: "What is the best flute for carnatic music?",
      answer:
        "You can buy Indiran’s handmade carnatic flute from our online sotre",
    },
    {
      question: "Can I learn both Bhansuri and Carnatic flute at the same time?",
      answer:
        "You can, all you need is more time for practising.",
    },
    {
      question: "Where are the best places to buy Carnatic flutes online?",
      answer:
        "You can buy the best handmade carnatic flutes from https://musicmaster.in/store/carnatic-flute/",
    },
    {
      question: "Do premium flutes require special maintenance?",
      answer: "All flutes maintenance are same.",
    },
    {
      question: "What should I consider when choosing a premium flute?",
      answer: "You should buy a perfectly tuned carnatic flute.",
    },
    {
      question:
        "What is the return policy if I'm not satisfied with the flute I bought online?",
      answer:
        "Check our Return Policy . (https://musicmaster.in/store/return-refund-policy/)",
    },
    {
      question: "Can I customize a premium flute?",
      answer: "Yes you can customize a premium flute",
    },
    {
      question: "Are expensive flutes always high quality?",
      answer: "Not necessarily.",
    },
    {
      question:
        "Can we learn carnatic flute music on a Bansuri Flute?",
      answer:
        "No, you cannot learn carnatic flute on a bansuri, since the styles are different. More over Carnatic flute has 8 finger holes, while bansuri has 7 finger holes",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </Head>

      <section className="bg-[#f8f7f4] py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg bg-white"
              >
                <button
                  onClick={() => setOpen(open === index ? null : index)}
                  className="w-full flex justify-between items-center text-left px-5 py-4 font-medium text-gray-900"
                >
                  {faq.question}
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      open === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open === index && (
                  <div className="px-5 pb-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}