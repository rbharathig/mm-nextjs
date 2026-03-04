import { useEffect, useState } from "react"
import { Variant } from "./types"
import Lightbox from "./Lightbox"

export default function ProductGallery({
  product,
  selected,
}: {
  product: any
  selected: Variant
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const galleryImages = selected.image
    ? [selected.image, ...product.images.map((i: any) => i.src)]
    : product.images.map((i: any) => i.src)

  useEffect(() => {
    setActiveIndex(0)
  }, [selected])

  const prevImage = () =>
    setActiveIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    )

  const nextImage = () =>
    setActiveIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    )

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm p-4 lg:p-6 space-y-4">
        <div className="relative aspect-square flex items-center justify-center">
          <img
            src={galleryImages[activeIndex]}
            alt={product.name}
            onClick={() => setLightboxOpen(true)}
            className="max-h-[320px] sm:max-h-[380px] lg:max-h-[420px] object-contain cursor-zoom-in"
          />

          <button
            onClick={prevImage}
            className="absolute left-2 bg-white/90 shadow rounded-full w-9 h-9 flex items-center justify-center"
          >
            ‹
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 bg-white/90 shadow rounded-full w-9 h-9 flex items-center justify-center"
          >
            ›
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2">
          {galleryImages.map((img: string, index: number) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg border ${
                activeIndex === index
                  ? "border-emerald-600"
                  : "border-gray-200"
              }`}
            >
              <img
                src={img}
                className="w-full h-full object-contain rounded-lg"
              />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryImages}
        activeIndex={activeIndex}
        prev={prevImage}
        next={nextImage}
      />
    </>
  )
}