import { useEffect, useState } from "react"
import Image from "next/image"
import dynamic from "next/dynamic"
import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import { Variant } from "./types"

// PageSpeed: Code-split Lightbox to reduce initial JS bundle size
const Lightbox = dynamic(() => import("./Lightbox"), { ssr: false })

export default function ProductGallery({
  product,
  selected,
}: {
  product: any
  selected: Variant
}) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Logic preserved from your working version
  const galleryImages = selected?.image
    ? [selected.image, ...product.images.map((i: any) => i.src)]
    : product.images.map((i: any) => i.src)

  useEffect(() => {
    setActiveIndex(0)
  }, [selected])

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const nextImage = () => {
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full space-y-6">
      {/* Main Display: Uses Radix AspectRatio for zero CLS */}
      <div className="relative group bg-white border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm">
        <AspectRatio.Root ratio={1}>
          <div 
            onClick={() => setLightboxOpen(true)}
            className="w-full h-full cursor-zoom-in relative flex items-center justify-center p-6"
          >
            <Image
              src={galleryImages[activeIndex]}
              alt={product.name}
              fill
              priority // LCP Optimization: Tells Next.js to preload this specific optimized version
              className="object-contain transition-transform duration-700 group-hover:scale-105"
              // PageSpeed: Specific sizes prevent loading overly large images on mobile
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            />
          </div>
        </AspectRatio.Root>

        {/* Navigation Overlays */}
        {galleryImages.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 flex items-center justify-center bg-white/90 backdrop-blur-sm shadow-lg rounded-full text-2xl hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 flex items-center justify-center bg-white/90 backdrop-blur-sm shadow-lg rounded-full text-2xl hover:bg-white transition-all opacity-0 group-hover:opacity-100"
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Optimized Thumbnails Tray */}
      {galleryImages.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
          {galleryImages.map((img: string, index: number) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-2xl border-2 transition-all duration-200 ${
                activeIndex === index
                  ? "border-emerald-500 ring-4 ring-emerald-50"
                  : "border-gray-100 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt="thumbnail"
                fill
                sizes="80px"
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}

      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={galleryImages}
          activeIndex={activeIndex}
          prev={prevImage}
          next={nextImage}
        />
      )}
    </div>
  )
}