import { useState, useEffect } from "react"
import type { GetServerSideProps } from "next"
import Head from "next/head"
import TrustIcons from "../../../../components/store/TrustIcons"

type Variant = {
  id: number
  label: string
  price: number
  regularPrice: number
  onSale: boolean
  stockStatus: string
  description: string
  image?: string | null
}

export default function ProductPage({ product, variations }: any) {
  const [selected, setSelected] = useState<Variant>(variations[0])
  const [qty, setQty] = useState(1)
  const [activeIndex, setActiveIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const galleryImages = selected.image
    ? [selected.image, ...product.images.map((i: any) => i.src)]
    : product.images.map((i: any) => i.src)

  useEffect(() => {
    setActiveIndex(0)
  }, [selected])

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    )
  }

  const nextImage = () => {
    setActiveIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    )
  }

  const addToCartUrl = `/store/cart/?add-to-cart=${product.id}&variation_id=${selected.id}&quantity=${qty}`

  return (
    <>
      <Head>
        <title>{product.name} | Music Master</title>
      </Head>

      {/* Header offset */}
      <div className="min-h-screen pt-[70px] lg:pt-[40px]">

        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8 lg:py-10 space-y-8 lg:space-y-10">

          {/* WhatsApp CTA */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl px-4 lg:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="font-medium text-emerald-900 text-sm sm:text-base">
              Have questions about this flute?
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=919789897600&text=&source=&data="
              target="_blank"
              className="w-full sm:w-auto text-center bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* LEFT - Gallery */}
            <div className="bg-white rounded-2xl shadow-sm p-4 lg:p-6 space-y-4">

              <div className="relative aspect-square flex items-center justify-center">

                <img
                  src={galleryImages[activeIndex]}
                  alt={product.name}
                  onClick={() => setLightboxOpen(true)}
                  className="max-h-[320px] sm:max-h-[380px] lg:max-h-[420px] object-contain cursor-zoom-in transition-all duration-300"
                />

                {/* Always visible on mobile */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 lg:left-3 bg-white/90 shadow rounded-full w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center"
                >
                  ‹
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-2 lg:right-3 bg-white/90 shadow rounded-full w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center"
                >
                  ›
                </button>
              </div>

              {/* Thumbnails */}
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

            {/* RIGHT - Info */}
            <div className="space-y-6">

              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug">
                {product.name}
              </h1>

              {/* Variant Selector */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-gray-700">
                  Choose Type
                </p>

                <div className="flex gap-2 sm:gap-3 flex-wrap">
                  {variations.map((variant: Variant) => {
                    const active = selected.id === variant.id
                    const disabled = variant.stockStatus !== "instock"

                    return (
                      <button
                        key={variant.id}
                        onClick={() => !disabled && setSelected(variant)}
                        disabled={disabled}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
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

              <div
                className="text-gray-600 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: selected.description }}
              />

              {/* Price */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  {selected.onSale && (
                    <span className="text-gray-400 line-through text-base">
                      ₹{selected.regularPrice}
                    </span>
                  )}
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                    ₹{selected.price}
                  </span>
                </div>
              </div>

              {/* Stock */}
              {selected.stockStatus === "instock" ? (
                <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-full font-medium">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  In Stock
                </span>
              ) : (
                <span className="inline-flex bg-red-100 text-red-600 text-xs px-3 py-1 rounded-full font-medium">
                  Out of Stock
                </span>
              )}

              {/* Quantity + Add to Cart (Desktop) */}
              <div className="hidden sm:flex items-center gap-5 pt-4">

                <div className="flex items-center border rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-4 py-2 hover:bg-gray-100 transition"
                  >
                    −
                  </button>
                  <div className="px-4 min-w-[40px] text-center">{qty}</div>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-4 py-2 hover:bg-gray-100 transition"
                  >
                    +
                  </button>
                </div>

                <a
                  href={addToCartUrl}
                  className={`px-8 py-3 rounded-xl font-semibold text-white transition-all duration-200 ${
                    selected.stockStatus !== "instock"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-red-600 hover:bg-red-700 shadow-md hover:shadow-lg"
                  }`}
                >
                  Add to Cart
                </a>
              </div>

              {product.short_description && (
                <div
                  className="pt-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100"
                  dangerouslySetInnerHTML={{
                    __html: product.short_description,
                  }}
                />
              )}
            </div>
          </div>
        </div>

        <TrustIcons />

       

        {/* Sticky Mobile Add to Cart */}
        <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-white border-t shadow-lg p-4 flex items-center justify-between gap-3 z-40">
          <div className="flex items-center border rounded-xl overflow-hidden">
            <button
              onClick={() => setQty(Math.max(1, qty - 1))}
              className="px-3 py-2"
            >
              −
            </button>
            <div className="px-3 min-w-[30px] text-center">{qty}</div>
            <button
              onClick={() => setQty(qty + 1)}
              className="px-3 py-2"
            >
              +
            </button>
          </div>

          <a
            href={addToCartUrl}
            className={`flex-1 text-center px-6 py-3 rounded-xl font-semibold text-white ${
              selected.stockStatus !== "instock"
                ? "bg-gray-400"
                : "bg-red-600"
            }`}
          >
            Add to Cart
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-5 right-5 text-white text-2xl"
          >
            ✕
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 text-white text-3xl"
          >
            ‹
          </button>
          <img
            src={galleryImages[activeIndex]}
            className="max-h-[80vh] object-contain"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 text-white text-3xl"
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug, subcategory } = context.params as any

  const productRes = await fetch(
    `${process.env.WOO_API_URL}/products?slug=${slug}&consumer_key=${process.env.WOO_KEY}&consumer_secret=${process.env.WOO_SECRET}`
  )

  const products = await productRes.json()
  if (!products.length) return { notFound: true }

  const product = products[0]
  const categorySlugs = product.categories.map((c: any) => c.slug)

  if (!categorySlugs.includes(subcategory)) {
    return {
      redirect: {
        destination: `/store/flute/${categorySlugs[0]}/${product.slug}`,
        permanent: true,
      },
    }
  }

  const variationRes = await fetch(
    `${process.env.WOO_API_URL}/products/${product.id}/variations?consumer_key=${process.env.WOO_KEY}&consumer_secret=${process.env.WOO_SECRET}`
  )

  const variationsRaw = await variationRes.json()

  const variations = variationsRaw
    .sort((a: any, b: any) => a.menu_order - b.menu_order)
    .map((v: any) => ({
      id: v.id,
      label: v.attributes[0]?.option || v.name,
      price: Number(v.price),
      regularPrice: Number(v.regular_price),
      onSale: v.on_sale,
      stockStatus: v.stock_status,
      description: v.description,
      image: v.image?.src || null,
    }))

  return {
    props: { product, variations },
  }
}