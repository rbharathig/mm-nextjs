import { useState } from "react"
import FaqAccordion from "./FaqAccordion"

interface FaqItem {
  question: string
  answer: string
}

interface Props {
  product: any
  specsHtml?: string | null
  faqItems?: FaqItem[]
}

export default function ProductTabs({ product, specsHtml, faqItems }: Props) {
  const tabs = [
    { key: "description", label: "Description",         available: !!product.description },
    { key: "specs",       label: "Tech Specifications",  available: !!specsHtml },
    { key: "reviews",     label: "Reviews",              available: true },
    { key: "faq",         label: "FAQs",                 available: true },
  ].filter((t) => t.available)

  const [activeTab, setActiveTab] = useState(tabs[0]?.key || "description")

  return (
    <section className="mt-16 border-t border-gray-100 pt-12 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Tab bar */}
        <div className="flex gap-6 overflow-x-auto border-b border-gray-200 text-sm font-medium">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`whitespace-nowrap pb-3 border-b-2 transition-colors duration-200 ${
                activeTab === tab.key
                  ? "text-emerald-700 border-emerald-600"
                  : "text-gray-500 border-transparent hover:text-gray-800"
              }`}
            >
              {tab.label}
              {tab.key === "faq" && faqItems && faqItems.length > 0 && (
                <span className="ml-1.5 bg-gray-100 text-gray-500 text-xs px-1.5 py-0.5 rounded-full">
                  {faqItems.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="pt-8 text-gray-700 leading-relaxed text-sm md:text-base">

          {/* Description */}
          {activeTab === "description" && product.description && (
            <div
              className="prose prose-sm md:prose max-w-none
                prose-headings:text-gray-900 prose-headings:font-semibold
                prose-h2:text-xl prose-h3:text-base
                prose-p:text-gray-600 prose-li:text-gray-600
                prose-a:text-emerald-700 prose-a:no-underline hover:prose-a:underline
                prose-table:text-sm prose-th:bg-gray-50 prose-th:font-semibold prose-th:text-gray-700
                prose-td:text-gray-600 prose-td:border prose-td:border-gray-200
                prose-th:border prose-th:border-gray-200"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          )}

          {/* Tech Specifications */}
          {activeTab === "specs" && specsHtml && (
            <div
              className="
                [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm
                [&_th]:bg-gray-50 [&_th]:text-left [&_th]:px-4 [&_th]:py-3
                [&_th]:font-semibold [&_th]:text-gray-700 [&_th]:border [&_th]:border-gray-200
                [&_td]:px-4 [&_td]:py-3 [&_td]:text-gray-600 [&_td]:border [&_td]:border-gray-200
                [&_tr:nth-child(even)_td]:bg-gray-50
                [&_tr:hover_td]:bg-emerald-50 [&_tr]:transition-colors
              "
              dangerouslySetInnerHTML={{ __html: specsHtml }}
            />
          )}

          {/* Reviews — plugin-managed */}
          {activeTab === "reviews" && (
            <div id="product-reviews" className="min-h-[120px]">
              <p className="text-gray-400 italic text-sm text-center py-10">
                Reviews loading via plugin…
              </p>
            </div>
          )}

          {/* FAQs — from mm_faq_items meta field */}
          {activeTab === "faq" && (
            <FaqAccordion faqs={faqItems || []} />
          )}

        </div>
      </div>
    </section>
  )
}
