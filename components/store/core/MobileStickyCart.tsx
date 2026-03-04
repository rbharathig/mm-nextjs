import QuantitySelector from "./QuantitySelector"
import AddToCartButton from "./AddToCartButton"

export default function MobileStickyCart({
  qty,
  setQty,
  url,
  disabled,
}: any) {
  return (
    <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-white border-t shadow-lg p-4 flex items-center justify-between gap-3 z-40">
      <QuantitySelector qty={qty} setQty={setQty} />
      <AddToCartButton url={url} disabled={disabled} />
    </div>
  )
}