import { useState } from "react"
import { GetServerSideProps } from "next"
import Head from "next/head"

import ProductGallery from "../components//store/core/ProductGallery"
import VariantSelector from "../components//store/core/VariantSelector"
import QuantitySelector from "../components//store/core/QuantitySelector"
import AddToCartButton from "../components//store/core/AddToCartButton"
import ProductTabs from "../components//store/core/ProductTabs"
import MobileStickyCart from "../components//store/core/MobileStickyCart"
import WhatsAppCTA from "../components//store/core/WhatsAppCTA"
import { Variant } from "../components/store/core/types"

import TrustIcons from "../components/store/TrustIcons"

export default function TestProductPage({ product, variations }: any) {
  const [selected, setSelected] = useState<Variant>(variations[0])
  const [qty, setQty] = useState(1)

  const addToCartUrl = `/store/cart/?add-to-cart=${product.id}&variation_id=${selected.id}&quantity=${qty}`

  return (
    <>
      <Head>
        <title>{product.name} | Music Master</title>
      </Head>

      {/* Header Offset */}
      <div className="min-h-screen pt-[70px] lg:pt-[40px]">

        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8 lg:py-10 space-y-8 lg:space-y-10">

          {/* WhatsApp CTA */}
          <WhatsAppCTA />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* LEFT - Gallery */}
            <ProductGallery
              product={product}
              selected={selected}
            />

            {/* RIGHT - Product Info */}
            <div className="space-y-6">

              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug">
                {product.name}
              </h1>

              {/* Variant Selector */}
              <VariantSelector
                variations={variations}
                selected={selected}
                setSelected={setSelected}
              />

              {/* Variant Description */}
              <div
                className="text-gray-600 text-sm leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: selected.description,
                }}
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

              {/* Stock Badge */}
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

              {/* Desktop Quantity + Add to Cart */}
              <div className="hidden sm:flex items-center gap-5 pt-4">

                <QuantitySelector
                  qty={qty}
                  setQty={setQty}
                />

                <AddToCartButton
                  url={addToCartUrl}
                  disabled={selected.stockStatus !== "instock"}
                />

              </div>

              {/* Short Description */}
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

        {/* Trust Icons */}
        <TrustIcons />

        {/* Product Tabs */}
        <ProductTabs product={product} />

        {/* Mobile Sticky Cart */}
        <MobileStickyCart
          qty={qty}
          setQty={setQty}
          url={addToCartUrl}
          disabled={selected.stockStatus !== "instock"}
        />

      </div>
    </>
  )
}

/* ============================
   SERVER SIDE FETCH (Same Logic)
============================ */

export const getServerSideProps: GetServerSideProps = async (context) => {

  // You can temporarily hardcode slug for testing
  const slug = context.query.slug || "f-natural-carnatic-flute-4"

  const productRes = await fetch(
    `${process.env.WOO_API_URL}/products?slug=${slug}&consumer_key=${process.env.WOO_KEY}&consumer_secret=${process.env.WOO_SECRET}`
  )

  const products = await productRes.json()

  if (!products.length) {
    return { notFound: true }
  }

  const product = products[0]

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
    props: {
      product,
      variations,
    },
  }
}