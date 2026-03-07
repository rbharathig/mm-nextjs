import QuantitySelector from "./QuantitySelector"
import AddToCartButton from "./AddToCartButton"

export default function DesktopCartBar({
  qty,
  setQty,
  url,
  disabled,
}: {
  qty: number
  setQty: (n: number) => void
  url: string
  disabled: boolean
}) {
  return (
    <div className="hidden sm:flex items-center gap-5 pt-4">
      <QuantitySelector qty={qty} setQty={setQty} />
      <AddToCartButton url={url} disabled={disabled} />
    </div>
  )
}
