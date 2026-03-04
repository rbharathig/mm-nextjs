export default function AddToCartButton({
  url,
  disabled,
}: {
  url: string
  disabled: boolean
}) {
  return (
    <a
      href={url}
      className={`px-8 py-3 rounded-xl font-semibold text-white transition ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-red-600 hover:bg-red-700 shadow-md hover:shadow-lg"
      }`}
    >
      Add to Cart
    </a>
  )
}