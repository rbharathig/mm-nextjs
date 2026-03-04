import { useState } from "react"

export default function ProductTabs({ product }: { product: any }) {
  const [activeTab, setActiveTab] = useState("description")

  const tabs = [
    { key: "description", label: "Description" },
    { key: "specs", label: "Tech Specifications" },
    { key: "additional", label: "Additional Information" },
    { key: "reviews", label: "Reviews" },
    { key: "faq", label: "FAQs" },
  ]

  return (
    <section className="mt-16 border-t border-gray-100 pt-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        <div className="flex gap-6 overflow-x-auto border-b border-gray-100 pb-4 text-sm font-medium">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`whitespace-nowrap pb-2 ${
                activeTab === tab.key
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="pt-8 text-gray-700 leading-relaxed text-sm md:text-base">
          {activeTab === "description" && (
            <div
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          )}
        </div>
      </div>
    </section>
  )
}