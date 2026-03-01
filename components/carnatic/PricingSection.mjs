import { useEffect } from "react";

export default function PricingSection() {

  useEffect(() => {
    // Load pricing_table.js dynamically (client-side only)
    const script = document.createElement("script");
    script.src = "/js/pricing_table_v2.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-12 bg-[#0b4da2] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Fees for Online Carnatic Music Classes
        </h2>

        {/* Required for pricing logic */}
        <div id="mm-price" className="mt-16">
          <div className="container-fluid">
            <div
              id="plans-regular"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            ></div>
          </div>
        </div>

      </div>
    </section>
  );
}
