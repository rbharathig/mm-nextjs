(function () {

  function getCountryAndRender() {
    fetch("https://ipinfo.io/json?token=4335681018e493")
      .then(res => res.json())
      .then(obj => {

        let countryCode = obj.country;
        let region = "usa"; // default fallback

        if (countryCode === "IN") region = "india";
        else if (countryCode === "GB") region = "uk";
        else if (countryCode === "AU") region = "australia";
        else if (countryCode === "US") region = "usa";
        else if (countryCode === "CA") region = "canada";
        else if (["FR","DE","IT","IE","NL","BE"].includes(countryCode)) region = "euro";
        else if (countryCode === "SG") region = "singapore";
        else if (countryCode === "MY") region = "malaysia";
        else if (["BH","IQ","KW","OM","QA","SA","AE"].includes(countryCode)) region = "gulf";

        displayPricingTable(region);

      })
      .catch(() => {
        displayPricingTable("usa"); // fallback if IP fails
      });
  }


  function displayPricingTable(region) {
    fetch("/data/pricing_plans.json")
      .then(res => res.json())
      .then(data => {

        if (!data[region]) return;

        let html = "";

        data[region].forEach(plan => {

          if (plan.status !== "active") return;

          // --- OFFER LOGIC FIX ---
          let offerSection = "";

          if (plan.offer && !isNaN(plan.offer)) {
            offerSection = `
              <div class="mt-2 text-sm text-gray-500">
                <del>${plan.currencySymbol} ${plan.MRP}</del>
                <span class="ml-2 bg-gray-100 text-gray-700 px-2 py-1 rounded-full font-semibold">
                  ${plan.offer}% OFF
                </span>
              </div>
            `;
          }

          html += `
            <div class="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between hover:shadow-xl transition">

              <div>

                <span class="inline-block mb-3 text-xs font-semibold uppercase tracking-wide bg-[#0b4da2]/10 text-[#0b4da2] px-3 py-1 rounded-full">
                  ${plan.planName}
                </span>

                <p class="text-gray-600 mb-4">
                  ${plan.planTitle}
                </p>

                <div class="text-3xl font-bold text-gray-900">
                  ${plan.currencySymbol} ${plan.sellingPrice}
                </div>

                ${offerSection}

                <ul class="mt-6 space-y-2 text-gray-700 text-sm">
                  <li>✔ Beginner Lessons</li>
                  <li>✔ ${plan.classCount} Online Classes</li>
                  <li>✔ ${plan.classDuration} min / Class</li>
                  <li>✔ Regional / English Instructions</li>
                  <li class="${plan.benefits1?.display || ""}">
                    ✔ ${plan.benefits1?.content || ""}
                  </li>
                  <li class="${plan.benefits2?.display || ""}">
                    ✔ ${plan.benefits2?.content || ""}
                  </li>
                </ul>

              </div>

              <div class="mt-8">
                <a href="${plan.paymentLink}"
                   class="block text-center bg-[#0b4da2] text-white font-semibold py-3 rounded-xl hover:opacity-90 transition">
                   Get Started
                </a>
              </div>

            </div>
          `;
        });

        const container = document.getElementById("plans-regular");
        if (container) container.innerHTML = html;

      })
      .catch(err => console.log(err));
  }

  // IMPORTANT: run immediately (React already mounted)
  getCountryAndRender();

})();
