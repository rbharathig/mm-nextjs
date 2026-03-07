import { Variant } from "./types"

export default function PriceBlock({ selected }: { selected: Variant }) {
  const savings = selected.onSale ? selected.regularPrice - selected.price : 0
  const savingsPct = selected.onSale
    ? Math.round((savings / selected.regularPrice) * 100)
    : 0

  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-3 flex-wrap">
        {selected.onSale && (
          <span className="text-gray-400 line-through text-base">
            ₹{selected.regularPrice.toLocaleString("en-IN")}
          </span>
        )}
        <span className="text-2xl sm:text-3xl font-bold text-gray-900">
          ₹{selected.price.toLocaleString("en-IN")}
        </span>
        {selected.onSale && savingsPct > 0 && (
          <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded-full">
            {savingsPct}% off
          </span>
        )}
      </div>
      {selected.onSale && savings > 0 && (
        <p className="text-xs text-emerald-700 font-medium">
          You save ₹{savings.toLocaleString("en-IN")}
        </p>
      )}
      <p className="text-xs text-gray-400">Inclusive of all taxes</p>
    </div>
  )
}
