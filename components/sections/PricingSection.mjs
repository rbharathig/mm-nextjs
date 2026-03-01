import { useEffect, useState } from "react";

export default function PricingSection() {
  const [plans, setPlans] = useState([]);
  const [region, setRegion] = useState("india");

  useEffect(() => {
    // Detect region from browser language (fast & no API call)
    const locale = navigator.language || "";

    if (locale.includes("IN")) setRegion("india");
    else if (locale.includes("GB")) setRegion("uk");
    else if (locale.includes("AU")) setRegion("australia");
    else if (locale.includes("US")) setRegion("usa");
    else setRegion("india"); // default

  }, []);

  useEffect(() => {
    fetch("/data/pricing_plans.json")
      .then(res => res.json())
      .then(data => {
        if (data[region]) {
          const activePlans = data[region].filter(
            plan => plan.status === "active"
          );
          setPlans(activePlans);
        }
      })
      .catch(err => console.log(err));
  }, [region]);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-center text-3xl font-bold text-black mb-10">
          Subscription Plans for Your Musical Journey
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between hover:shadow-xl transition"
            >
              <div>
                <span className="inline-block mb-3 text-xs font-semibold uppercase tracking-wide bg-blue-100 text-blue-900 px-3 py-1 rounded-full">
                  {plan.planName}
                </span>

                <p className="text-gray-600 mb-4">
                  {plan.planTitle}
                </p>

                <div className="text-3xl font-bold text-gray-900">
                  {plan.currencySymbol} {plan.sellingPrice}
                </div>

               {plan.offer && !isNaN(plan.offer) && (
                  <div className="mt-2 text-sm text-gray-500">
                    <del>{plan.currencySymbol} {plan.MRP}</del>
                    <span className="ml-2 bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-semibold">
                      {plan.offer}% OFF
                    </span>
                  </div>
                )}

                <ul className="mt-6 space-y-2 text-gray-700 text-sm">
                  <li>✔ Beginner Lessons</li>
                  <li>✔ {plan.classCount} Online Classes</li>
                  <li>✔ {plan.classDuration} min / Class</li>
                  <li>✔ Regional / English Instructions</li>
                </ul>
              </div>

              <div className="mt-8">
                <a
                  href={plan.paymentLink}
                  className="block text-center bg-blue-900 text-white font-semibold py-3 rounded-xl hover:opacity-90 transition"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
