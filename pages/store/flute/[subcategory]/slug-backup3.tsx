import { useState } from "react"
import type { GetServerSideProps } from "next"
import Head from "next/head"

import TrustIcons from "../../../../components/store/TrustIcons"
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
import RatingBadge from "../../../../components/store/core/RatingBadge"
import { Variant } from "../../../../components/store/core/types"

// =============================================================================
// PAGE
// =============================================================================

export default function ProductPage({ product, variations }: any) {
  const isSimple = variations.length === 0

  const defaultVariant: Variant = isSimple
    ? {
        id: product.id,
        label: "Standard",
        price: Number(product.price),
        regularPrice: Number(product.regular_price),
        onSale: product.on_sale,
        stockStatus: product.stock_status,
        description: "",
        image: product.images?.[0]?.src || null,
      }
    : variations[0]

  const [selected, setSelected] = useState<Variant>(defaultVariant)
  const [qty, setQty] = useState(1)

  const addToCartUrl = isSimple
    ? `/store/cart/?add-to-cart=${product.id}&quantity=${qty}`
    : `/store/cart/?add-to-cart=${product.id}&variation_id=${selected.id}&quantity=${qty}`

  const isOutOfStock = selected.stockStatus !== "instock"

  return (
    <>
      <Head>
        <title>{product.name} | Music Master</title>
        {product.seoDescription && (
          <meta name="description" content={product.seoDescription} />
        )}
      </Head>

      <div className="min-h-screen pt-[70px] lg:pt-[40px] bg-[#fafaf8]">
        <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8 lg:py-10 space-y-8 lg:space-y-10">

          <WhatsAppCTA />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

            {/* LEFT — Gallery */}
            <ProductGallery product={product} selected={selected} />

            {/* RIGHT — Info panel */}
            <div className="space-y-5">

              {product.ratingCount > 0 && (
                <RatingBadge
                  rating={product.averageRating}
                  count={product.ratingCount}
                />
              )}

              <ProductTitle name={product.name} />

              {!isSimple && (
                <>
                  <VariantSelector
                    variations={variations}
                    selected={selected}
                    setSelected={setSelected}
                  />
                  <VariantDescription html={selected.description} />
                </>
              )}

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

        <TrustIcons />

        <ProductTabs
          product={product}
          specsHtml={product.specsHtml}
          faqContent={product.faqContent}
        />

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

  // 1. Fetch product
  const productRes = await fetch(
    `${process.env.WOO_API_URL}/products?slug=${slug}&consumer_key=${process.env.WOO_KEY}&consumer_secret=${process.env.WOO_SECRET}`
  )
  const products = await productRes.json()
  if (!products.length) return { notFound: true }

  const raw = products[0]

  // 2. Canonical redirect
  const categorySlugs = raw.categories.map((c: any) => c.slug)
  if (!categorySlugs.includes(subcategory)) {
    return {
      redirect: {
        destination: `/store/flute/${categorySlugs[0]}/${raw.slug}`,
        permanent: true,
      },
    }
  }

  // 3. Extract yikes_woo_products_tabs (Specs + FAQ)
  const wooTabs: any[] =
    raw.meta_data?.find((m: any) => m.key === "yikes_woo_products_tabs")?.value || []

  const specsTab = wooTabs.find(
    (t: any) => t.id === "specs" || t.title?.toLowerCase().includes("spec")
  )
  const faqTab = wooTabs.find(
    (t: any) =>
      t.id === "f-q" ||
      t.title?.toLowerCase().includes("faq") ||
      t.title?.toLowerCase().includes("f & q")
  )

  // FAQ tab uses a WP shortcode — pass raw content; plugin renders on WP side.
  // We display it as HTML if it's already HTML, or show a note if shortcode-only.
  const specsHtml: string | null = specsTab?.content || null
  const faqContent: string | null = faqTab?.content || null

  // 4. SEO meta
  const seoDescription =
    raw.meta_data?.find((m: any) => m.key === "rank_math_description")?.value ||
    raw.meta_data?.find((m: any) => m.key === "_yoast_wpseo_metadesc")?.value ||
    null

  // 5. Normalize product
  const product = {
    id: raw.id,
    name: raw.name,
    slug: raw.slug,
    type: raw.type,               // "simple" | "variable"
    description: raw.description,
    short_description: raw.short_description,
    images: raw.images,
    price: raw.price,
    regular_price: raw.regular_price,
    on_sale: raw.on_sale,
    stock_status: raw.stock_status,
    averageRating: Number(raw.average_rating),
    ratingCount: Number(raw.rating_count),
    specsHtml,
    faqContent,
    seoDescription,
  }

  // 6. Fetch variations (variable products only)
  let variations: Variant[] = []

  if (raw.type === "variable") {
    const variationRes = await fetch(
      `${process.env.WOO_API_URL}/products/${raw.id}/variations?consumer_key=${process.env.WOO_KEY}&consumer_secret=${process.env.WOO_SECRET}`
    )
    const variationsRaw = await variationRes.json()

    variations = variationsRaw
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
  }

  return { props: { product, variations } }
}
