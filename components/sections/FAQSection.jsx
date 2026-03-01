import { useState } from "react"

export default function FAQSection({ title, faqs }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {title && (
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            {title}
          </h2>
        )}

        <div className="space-y-4">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="border rounded-2xl overflow-hidden"
            >

              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center font-semibold text-lg hover:bg-gray-50 transition"
              >
                <span>{item.question}</span>

                <span className="text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  {item.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}