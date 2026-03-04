import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function CraftingProcess() {
  const [open, setOpen] = useState(null);

  const steps = [
    {
      title: "1. Selection of Bamboo",
      content: `The first step is selection of the finest quality bamboo. The ideal raw bamboo for flutes are available only in ‘select’ forests in Kerala & Karnataka. Mr.Indiran travels to these places once in a month to select the bamboo. The bamboo pieces have to be of a certain age, length, diameter, thickness etc. and have to be cut in particular parts of the bamboo tree to preserve the natural nodes (referred to as ‘Kanu’ meaning the one end is naturally closed) an essential feature of classical bamboo Carnatic flute. These raw bamboo is moved from forests to Indiran’s garage by trucks and the whole process takes about a week.`,
    },
    {
      title: "2. Seasoning of Bamboo",
      content: `When the raw bamboo reaches Indiran’s garage, the bamboo is green and raw. Since the wood is fresh there will be a fair amount of natural moisture. The bamboo is dried approximately for 10-15 days at room temperature without sunlight. All these are manually wiped and cleaned for the wood to get a smooth finish. The average temperature of Kanyakumari is 26 Celsius making it an ideal place to manufacture flutes. During the process of seasoning, the wood loses a fair amount of moisture naturally and close to 50% of flutes will get bent naturally.

The natural bamboo secretes certain kinds of liquid, technically known as ‘slime flux’ or sometimes known as ‘wet wood’. The ‘bent’ flutes are unfit for further process. The balance bamboos depending upon the size and length are then segregated and marked what are the scales that can be made from them.

Interesting fact: The bamboo in this stage will turn from green to white colour. The whole process takes 2-3 weeks just to get the wood ready to start the process of manufacturing the flute.`,
    },
    {
      title: "3. Handcrafting Carnatic Flute – One at a time",
      content: `Once the initial process of seasoning is done, in the next step special oils are applied on the wood and the wood is heat treated to remove the balanced moisture. The wood becomes hard so that it can last for a long time. During the heat treatment process the wood turns into a beautiful dark natural colour. This is done piece by piece. Unlike the majority of the Carnatic flutes, which are mass produced and machine cut, Indiran’s handcrafts are made one flute at a time.`,
    },
    {
      title: "4. Tuning a Carnatic Flute – The magic of Mr.Indiran",
      content: `The thickness of all bamboo is not the same. So depending upon the diameter, gauge and the size and position of the node, each flute is marked for position to drill the blowing and finger holes. The fingering holes position and size are decided with respect to those of blowing holes. So even in the same scale for two different flutes, the size of the blowing hole and fingering hole may not be the same. The diameter of the finger holes are adjusted one by one to get the root note and respective notes of the key.

So each flute is personally handcrafted by Indiran ensuring it meets the rigorous demand of Carnatic flautists in terms of perfect tuning, playability and craftsmanship. When you are buying a Carnatic flute by Indiran you are becoming a part of tradition and community of great Carnatic flautists.`,
    },
    {
      title: "5. Customized Carnatic Flutes",
      content: `A Carnatic flute can be customized to a specific need. Some of the Carnatic flautists may have smaller or thinner fingers. So if they play with the same standard size, it will be difficult to cover the full hole and notes will not be correct while playing the venu. For such players, we can customize the finger holes with reduced diameter or hole size. Crafting such customized flutes needs experience, patience and more importantly it needs lot of attention and time.`,
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Wonder How Indiran Makes India’s Best Carnatic Flutes?
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex justify-between items-center w-full text-left text-lg font-medium"
              >
                {step.title}
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="mt-4 text-gray-700 leading-relaxed whitespace-pre-line">
                  {step.content}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}