export default function Lightbox({
  open,
  onClose,
  images,
  activeIndex,
  prev,
  next,
}: any) {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4">
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white text-2xl"
      >
        ✕
      </button>

      <button
        onClick={prev}
        className="absolute left-4 text-white text-3xl"
      >
        ‹
      </button>

      <img
        src={images[activeIndex]}
        className="max-h-[80vh] object-contain"
      />

      <button
        onClick={next}
        className="absolute right-4 text-white text-3xl"
      >
        ›
      </button>
    </div>
  )
}