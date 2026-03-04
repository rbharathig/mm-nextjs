import { Variant } from "./types"

export default function VariantSelector({
  variations,
  selected,
  setSelected,
}: {
  variations: Variant[]
  selected: Variant
  setSelected: (v: Variant) => void
}) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-gray-700">Choose Type</p>

      <div className="flex gap-2 sm:gap-3 flex-wrap">
        {variations.map((variant) => {
          const active = selected.id === variant.id
          const disabled = variant.stockStatus !== "instock"

          return (
            <button
              key={variant.id}
              onClick={() => !disabled && setSelected(variant)}
              disabled={disabled}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition ${
                active
                  ? "bg-emerald-600 text-white shadow-md"
                  : "border border-gray-300 hover:border-emerald-600 hover:text-emerald-600"
              } ${disabled && "opacity-40 cursor-not-allowed"}`}
            >
              {variant.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}