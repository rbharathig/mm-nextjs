import { useState } from "react";

const faqs = [
  {
    question: "Is learning Carnatic music online for beginners effective?",
    answer:
      "Learning any music if available online is effective, provided it is a blend of both interactive teaching and sharing feedback. Online platforms like MUSIC MASTER cater to students of all skill levels and try to bring the very best out of them through precisely curated online lessons.",
  },
  {
    question:
      "What resources are provided online for making this learning effective?",
    answer:
      "MUSIC MASTER is not just a platform but a pool of resources when it comes to learning music or honing any instrument skill. There are a range of resources like a set of recorded lessons, interactive one-to-one classes, practice materials, and other supplementary materials needed. The list of all these resources will be fetched as you propel on your music journey and get enrolled in MUSIC MASTER.",
  },
  {
    question: "How do online platforms facilitate online learning?",
    answer:
      "MUSIC MASTER facilitates online learning in multiple ways like the inclusion of demonstrations, one-to-one guidance, and effective mentorship. It ensures that none of these students are lagged and upscale their skills that can be used for the best indeed.",
  },
  {
    question:
      "How does online Carnatic music synchronous with traditional offline classes?",
    answer:
      "With the roots of Carnatic music in south India and its melodies being so elegant; it is undoubtedly a question of confusion. However, with MUSIC MASTER one can be assured of availing the advantage of flexibility and accessibility that can help them to reach a level of perfection.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-[#0b4da2]/5">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-center text-3xl lg:text-4xl font-bold text-[#0b4da2] mb-16">
          FAQs
        </h2>

        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300 border-l-4 border-[#0b4da2]"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-6 flex justify-between items-center"
              >
                <h4 className="font-semibold text-lg text-gray-900 pr-6">
                  {index + 1}. {faq.question}
                </h4>

                <span
                  className={`text-[#0b4da2] text-xl transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "max-h-96 pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
