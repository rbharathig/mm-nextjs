export default function StockBadge({ stockStatus }: { stockStatus: string }) {
  if (stockStatus === "instock") {
    return (
      <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-medium">
        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
        In Stock
      </span>
    )
  }
  return (
    <span className="inline-flex bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-medium">
      Out of Stock
    </span>
  )
}
