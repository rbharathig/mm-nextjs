export default function QuantitySelector({
  qty,
  setQty,
}: {
  qty: number
  setQty: (n: number) => void
}) {
  return (
    <div className="flex items-center border rounded-xl overflow-hidden">
      <button
        onClick={() => setQty(Math.max(1, qty - 1))}
        className="px-4 py-2 hover:bg-gray-100"
      >
        −
      </button>
      <div className="px-4 min-w-[40px] text-center">{qty}</div>
      <button
        onClick={() => setQty(qty + 1)}
        className="px-4 py-2 hover:bg-gray-100"
      >
        +
      </button>
    </div>
  )
}