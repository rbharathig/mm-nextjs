import { useState } from "react"
import type { GetServerSideProps } from "next"
import Head from "next/head"

// ── Layout / shared ──────────────────────────────────────────────────────────
import TrustIcons from "../../../../components/store/TrustIcons"

// ── Core product components ───────────────────────────────────────────────────
import WhatsAppCTA from "../../../../components/store/core/WhatsAppCTA"
import ProductGallery from "../../../../components/store/core/ProductGallery"
import ProductTitle from "../../../../components/store/core/ProductTitle"
import VariantSelector from "../../../../components/store/core/VariantSelector"
import VariantDescription from "../../../../components/store/core/VariantDescription"
import PriceBlock from "../../../../components/store/core/PriceBlock"
import StockBadge from "../../../../components/store/core/StockBadge"
import DesktopCartBar from "../../../../components/store/core/DesktopCartBar"
import ShortDescription from "../../../../components/store/core/ShortDescription"
import ProductTabs from "../../../../components/store/core/ProductTabs"
import MobileStickyCart from "../../../../components/store/core/MobileStickyCart"

// ── Types ─────────────────────────────────────────────────────────────────────
import { Variant } from "../../../../components/store/core/types"

// =============================================================================
// PAGE
// =============================================================================

export default function ProductPage({ product, variations }: any) {
  const [selected, setSelected] = useState<Variant>(variations[0])
  const [qty, setQty] = useState(1)

  const addToCartUrl = `/store/cart/?add-to-cart=${product.id}&variation_id=${selected.id}&quantity=${qty}`
  const isOutOfStock = selected.stockStatus !== "instock"

  return (
    <>
      <Head>
        <title>{product.name} | Music Master</title>
      </Head>

      <div className="min-h-screen pt-[70px] lg:pt-[40px]">

        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8 lg:py-10 space-y-8 lg:space-y-10">

          {/* WhatsApp CTA banner */}
          <WhatsAppCTA />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* LEFT — Image gallery */}
            <ProductGallery product={product} selected={selected} />

            {/* RIGHT — Product info panel */}
            <div className="space-y-6">

              <ProductTitle name={product.name} />

              <VariantSelector
                variations={variations}
                selected={selected}
                setSelected={setSelected}
              />

              <VariantDescription html={selected.description} />

              <PriceBlock selected={selected} />

              <StockBadge stockStatus={selected.stockStatus} />

              <DesktopCartBar
                qty={qty}
                setQty={setQty}
                url={addToCartUrl}
                disabled={isOutOfStock}
              />

              <ShortDescription html={product.short_description} />

            </div>
          </div>
        </div>

        {/* Full-width trust strip */}
        <TrustIcons />

        {/* Description / specs / reviews tabs */}
        <ProductTabs product={product} />

        {/* Mobile sticky add-to-cart bar */}
        <MobileStickyCart
          qty={qty}
          setQty={setQty}
          url={addToCartUrl}
          disabled={isOutOfStock}
        />

      </div>
    </>
  )
}

// =============================================================================
// SERVER-SIDE DATA FETCHING
// =============================================================================

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug, subcategory } = context.params as { slug: string; subcategory: string }

  const productRes = await fetch(
    `${process.env.WOO_API_URL}/products?slug=${slug}&consumer_key=${process.env.WOO_KEY}&consumer_secret=${process.env.WOO_SECRET}`
  )
  const products = await productRes.json()

  if (!products.length) return { notFound: true }

  const product = products[0]
  const categorySlugs = product.categories.map((c: any) => c.slug)

  // Canonical redirect — if URL subcategory doesn't match product's category
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

  const variations: Variant[] = variationsRaw
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

  return { props: { product, variations } }
}
