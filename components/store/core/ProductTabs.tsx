import { useState } from "react";

export default function ProductTabs({ product }: { product: any }) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { key: "description", label: "Description" },
    { key: "specs", label: "Specifications" },
    { key: "additional", label: "More Info" },
    { key: "reviews", label: "Reviews" },
    { key: "faq", label: "FAQs" },
  ];

  return (
    <section className="mt-20 border-t border-gray-100 pt-16 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        {/* Tab Navigation Container */}
        <div className="relative border-b border-gray-100 group">
          <div className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-px">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative pb-4 text-sm md:text-base font-semibold whitespace-nowrap transition-all duration-300 outline-none
                    ${isActive ? "text-emerald-700" : "text-gray-400 hover:text-gray-600"}
                  `}
                >
                  {tab.label}
                  
                  {/* Active Indicator Line */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-emerald-600 rounded-t-full shadow-[0_-4px_10px_rgba(5,150,105,0.3)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="mt-10 min-h-[300px]">
          <div className="max-w-4xl">
            {activeTab === "description" && (
              <div 
                className="animate-in fade-in slide-in-from-bottom-2 duration-500"
              >
                {/* Applied a subtle prose-style formatting for better readability */}
                <div
                  className="prose prose-emerald prose-sm md:prose-base max-w-none text-gray-600 leading-[1.8] space-y-4"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
            )}

            {/* Placeholder for other tabs logic to remain intact */}
            {activeTab !== "description" && (
              <div className="animate-in fade-in duration-300 flex items-center justify-center py-20 text-gray-400 italic">
                Content for {activeTab} coming soon...
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Tailwind Utility Style for hidden scrollbar but scrollable */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}