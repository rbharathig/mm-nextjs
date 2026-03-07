import { useState } from "react"

interface FaqItem {
  question: string
  answer: string
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  if (!faqs || faqs.length === 0) {
    return (
      <p className="text-gray-400 italic text-sm text-center py-10">
        No FAQs available for this product yet.
      </p>
    )
  }

  return (
    <div className="space-y-3 max-w-3xl">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between text-left px-5 py-4 gap-4"
              aria-expanded={isOpen}
            >
              <span className="text-sm font-medium text-gray-900">
                {faq.question}
              </span>
              <span
                className={`flex-shrink-0 w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center transition-transform duration-200 ${
                  isOpen ? "rotate-45 border-emerald-600 bg-emerald-50" : ""
                }`}
              >
                <svg
                  className={`w-3 h-3 ${isOpen ? "text-emerald-600" : "text-gray-400"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
