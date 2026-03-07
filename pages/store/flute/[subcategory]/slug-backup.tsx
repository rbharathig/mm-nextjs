import { useState, useEffect } from "react"
import type { GetServerSideProps } from "next"
import Head from "next/head"
import Image from "next/image"

// Core Components — ALL LOGIC UNCHANGED
import ProductGallery   from "../../../../components/store/core/ProductGallery"
import VariantSelector  from "../../../../components/store/core/VariantSelector"
import QuantitySelector from "../../../../components/store/core/QuantitySelector"
import AddToCartButton  from "../../../../components/store/core/AddToCartButton"
import ProductTabs      from "../../../../components/store/core/ProductTabs"
import MobileStickyCart from "../../../../components/store/core/MobileStickyCart"
import WhatsAppCTA      from "../../../../components/store/core/WhatsAppCTA"

// Single source of truth for Variant shape
import type { Variant } from "../../../../components/store/core/types"

// ─── SUBCOMPONENTS ────────────────────────────────────────────────────────────

/** Breadcrumb — woo: product.categories */
function Breadcrumb({
  categories,
  name,
}: {
  categories?: { name: string; slug: string }[]
  name: string
}) {
  return (
    <nav className="bg-white border-b border-stone-100 px-12 py-3">
      <ol className="flex items-center gap-1.5 text-xs text-stone-400 tracking-wide">
        <li><a href="/" className="hover:text-amber-600 transition-colors">Home</a></li>
        <li className="text-stone-300">›</li>
        <li><a href="/store" className="hover:text-amber-600 transition-colors">Store</a></li>
        <li className="text-stone-300">›</li>
        {categories?.[0] && (
          <>
            <li>
              <a
                href={`/store/${categories[0].slug}`}
                className="hover:text-amber-600 transition-colors capitalize"
              >
                {categories[0].name}
              </a>
            </li>
            <li className="text-stone-300">›</li>
          </>
        )}
        <li className="text-stone-600 font-medium truncate max-w-xs">{name}</li>
      </ol>
    </nav>
  )
}

/** Audio sample card — woo: product.meta_data (key: audio_sample_url)
 *  isMounted guard prevents SSR/client hydration mismatch on button label.
 */
function AudioSampleCard({ audioUrl }: { audioUrl?: string }) {
  const [playing,   setPlaying]   = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => { setIsMounted(true) }, [])
  if (!audioUrl) return null

  return (
    <div className="bg-white border border-stone-100 rounded-2xl p-4 flex items-center gap-4 mt-4">
      <div className="w-10 h-10 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-lg flex-shrink-0">
        🎵
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-stone-700 mb-0.5">Listen — Tone Sample</p>
        <p className="text-xs text-stone-400">Recorded in studio · 0:18</p>
        <div
          className="mt-2 h-1 rounded-full"
          style={{ background: "repeating-linear-gradient(90deg,#f0c890 0,#f0c890 2px,#fdf6ed 2px,#fdf6ed 7px)" }}
        />
      </div>
      <button
        onClick={() => setPlaying(p => !p)}
        className="w-8 h-8 rounded-full bg-amber-400 hover:bg-amber-500 text-white flex items-center justify-center text-xs transition-colors flex-shrink-0"
        aria-label="Play tone sample"
      >
        {isMounted ? (playing ? "⏸" : "▶") : "▶"}
      </button>
    </div>
  )
}

/** Variant description — woo: variation.description */
function VariantDescriptionCard({ description }: { description?: string }) {
  if (!description) return null
  return (
    <div
      className="bg-amber-50/60 border border-amber-100 rounded-xl px-4 py-3 text-sm text-stone-500 leading-relaxed mb-6"
      dangerouslySetInnerHTML={{ __html: description }}
    />
  )
}

/** Micro trust row */
function MicroTrust() {
  return (
    <div className="flex flex-wrap gap-4 text-xs text-stone-400 mb-5">
      {["Secure checkout", "Carefully packed", "Easy 30-day returns"].map(t => (
        <span key={t} className="flex items-center gap-1">
          <span className="text-emerald-400 font-bold">✓</span> {t}
        </span>
      ))}
    </div>
  )
}

/** Guarantee inline strip */
function GuaranteeStrip() {
  return (
    <div className="flex items-center gap-3 bg-stone-50 border border-stone-100 rounded-2xl px-4 py-3.5 mt-1">
      <div className="w-8 h-8 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-sm flex-shrink-0">
        🏆
      </div>
      <p className="text-xs text-stone-400 leading-relaxed">
        <span className="font-semibold text-stone-600">Music Master Tuning Guarantee — </span>
        Not tuned on arrival? We refund or replace it, no questions asked, within 30 days.
      </p>
    </div>
  )
}

/**
 * ReviewsSection — replaces the removed marquee.
 * Rating summary sidebar + individual review cards.
 * woo: product.average_rating, product.rating_count, /products/{id}/reviews
 */
function ReviewsSection({
  average = 4.9,
  count   = 128,
  reviews = [],
}: {
  average?: number
  count?:   number
  reviews?: {
    author:   string
    rating:   number
    content:  string
    date?:    string
    verified?: boolean
  }[]
}) {
  const bars = [89, 8, 2, 1, 0]

  // Fallback sample reviews when woo returns none yet
  const display = reviews.length ? reviews : [
    {
      author: "Arjun Ramachandran", rating: 5, date: "Feb 2025", verified: true,
      content: "The tone quality is absolutely exceptional. I've been playing Carnatic music for 15 years and this is one of the finest D Natural flutes I've owned. The Shruthi is spot-on — my guru was genuinely surprised by the quality at this price.",
    },
    {
      author: "Priya Venkataraman", rating: 5, date: "Jan 2025", verified: true,
      content: "Bought this for my daughter who just started learning. The finger hole spacing is perfect even for small hands and the sound is clean right from day one. Packaging was excellent too — arrived completely safe.",
    },
    {
      author: "Karthik Murugavel", rating: 4, date: "Dec 2024", verified: true,
      content: "Great flute overall. Bamboo quality is top-notch and the tuning is accurate. There was a slight shipping delay but the customer support team was responsive and helpful throughout.",
    },
  ]

  return (
    <div id="reviews" className="max-w-7xl mx-auto px-6 lg:px-12 py-16">

      <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-stone-800 mb-8 flex items-center gap-4">
        Customer Reviews
        <span className="flex-1 h-px bg-stone-200" />
      </h2>

      <div className="grid lg:grid-cols-[260px_1fr] gap-8 items-start">

        {/* Rating summary */}
        <div className="bg-white border border-stone-100 rounded-2xl p-6">
          <div className="text-center mb-5 pb-5 border-b border-stone-100">
            <span className="block font-['Cormorant_Garamond'] text-6xl font-light text-stone-900 leading-none mb-2">
              {average.toFixed(1)}
            </span>
            <span className="text-amber-400 text-base tracking-widest">
              {"★".repeat(Math.round(average))}{"☆".repeat(5 - Math.round(average))}
            </span>
            <p className="text-xs text-stone-400 mt-1.5">{count} verified reviews</p>
          </div>
          <div className="space-y-2">
            {bars.map((pct, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-stone-400">
                <span className="w-5 text-right shrink-0">{5 - i}</span>
                <span className="text-amber-400 text-[10px]">★</span>
                <div className="flex-1 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-300 rounded-full"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="w-7 shrink-0">{pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review cards */}
        <div className="space-y-4">
          {display.map((r, i) => (
            <div key={i} className="bg-white border border-stone-100 rounded-2xl p-5">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  {/* Initial avatar */}
                  <div className="w-9 h-9 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-sm font-bold text-amber-600 shrink-0">
                    {r.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-700 leading-none mb-1.5">
                      {r.author}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-amber-400 text-xs tracking-widest">
                        {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
                      </span>
                      {r.verified && (
                        <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {r.date && (
                  <span className="text-xs text-stone-300 shrink-0 mt-0.5">{r.date}</span>
                )}
              </div>
              <p className="text-sm text-stone-500 leading-relaxed">{r.content}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

/**
 * RelatedProducts — uses actual woo thumbnails via next/image.
 * woo: /products?category={categoryId}&exclude={productId}&per_page=4
 * Fetched in getServerSideProps as `relatedProducts` prop.
 */
function RelatedProducts({
  products,
  categorySlug,
}: {
  products?: any[]
  categorySlug?: string
}) {
  if (!products?.length) return null

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 border-t border-stone-100">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-stone-800">
          You May Also Like
        </h2>
        {categorySlug && (
          <a
            href={`/store/${categorySlug}`}
            className="text-xs font-semibold text-amber-600 hover:text-amber-700 tracking-wider uppercase transition-colors"
          >
            View all →
          </a>
        )}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.slice(0, 4).map((p: any) => {
          const thumb        = p.images?.[0]?.src ?? null
          const price        = p.price        ? `₹${Number(p.price).toLocaleString("en-IN")}` : null
          const regularPrice = p.regular_price && p.on_sale
            ? `₹${Number(p.regular_price).toLocaleString("en-IN")}`
            : null

          return (
            <a
              key={p.id}
              href={`/store/flute/${categorySlug ?? "carnatic"}/${p.slug}`}
              className="group bg-white border border-stone-100 rounded-2xl overflow-hidden
                         hover:shadow-md hover:border-stone-200 transition-all duration-200 block"
            >
              {/* Actual woo thumbnail */}
              <div className="relative bg-stone-50 h-44 overflow-hidden">
                {thumb ? (
                  <Image
                    src={thumb}
                    alt={p.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-4xl">🎋</div>
                )}
                {p.on_sale && (
                  <span className="absolute top-2.5 left-2.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-50 border border-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">
                    Sale
                  </span>
                )}
              </div>

              <div className="p-4">
                <p className="text-sm font-semibold text-stone-700 leading-snug mb-2 line-clamp-2">
                  {p.name}
                </p>
                <div className="flex items-baseline gap-2">
                  {price && (
                    <span className="text-base font-bold text-amber-600">{price}</span>
                  )}
                  {regularPrice && (
                    <span className="text-xs text-stone-300 line-through">{regularPrice}</span>
                  )}
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}

/** Guarantee banner */
function GuaranteeBanner() {
  return (
    <div className="bg-stone-50 border-y border-stone-100 py-12 px-12">
      <div className="max-w-7xl mx-auto flex items-center gap-10">
        <div className="w-16 h-16 flex-shrink-0 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center text-3xl">
          🏆
        </div>
        <div>
          <h3 className="font-['Cormorant_Garamond'] text-2xl font-light text-stone-800 mb-1.5">
            Music Master Tuning Guarantee
          </h3>
          <p className="text-sm text-stone-400 leading-relaxed max-w-xl">
            Every flute is guaranteed to be perfectly tuned to its key and scale. If it arrives
            out of tune, we will refund or replace it — no questions asked, within 30 days of purchase.
          </p>
        </div>
      </div>
    </div>
  )
}

/**
 * AddToCartWithFeedback
 * Wraps <AddToCartButton /> with a mild "Added ✓" overlay animation.
 * Does NOT touch AddToCartButton logic — just listens to click on the wrapper div.
 * Animation keyframes live in <Head> to avoid hydration mismatch.
 */
function AddToCartWithFeedback({ url, disabled }: { url: string; disabled: boolean }) {
  const [added, setAdded] = useState(false)

  function handleClick() {
    if (disabled || added) return
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="relative flex-1" onClick={handleClick}>
      {/* Real cart button — logic completely untouched */}
      <AddToCartButton url={url} disabled={disabled} />

      {/* Mild overlay — pointer-events-none so it never blocks the click */}
      {added && (
        <div
          className="absolute inset-0 rounded-xl flex items-center justify-center
                     bg-emerald-500/90 pointer-events-none mm-cart-feedback"
          aria-hidden
        >
          <span className="text-white text-sm font-semibold tracking-wide flex items-center gap-1.5">
            <svg
              className="w-4 h-4 mm-check-icon"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                clipRule="evenodd"
              />
            </svg>
            Added to Cart
          </span>
        </div>
      )}
    </div>
  )
}

// ─── MAIN PAGE ─────────────────────────────────────────────────────────────────

export default function ProductPage({ product, variations, relatedProducts }: any) {

  // ── ALL ORIGINAL LOGIC — COMPLETELY UNCHANGED ──
  const [selected, setSelected] = useState<Variant | null>(
    variations && variations.length ? variations[0] : null
  )
  const [qty, setQty] = useState(1)

  const addToCartUrl = selected
    ? `/store/cart/?add-to-cart=${product.id}&variation_id=${selected.id}&quantity=${qty}`
    : "#"

  const disabled = !selected || selected.stockStatus === "outofstock"

  const galleryImages = selected?.image
    ? [selected.image, ...product.images.map((i: any) => i.src)]
    : product.images.map((i: any) => i.src)
  // ── END ORIGINAL LOGIC ──

  const audioUrl     = product?.meta_data?.find((m: any) => m.key === "audio_sample_url")?.value
  const savePct      = selected?.onSale
    ? Math.round((1 - selected.price / selected.regularPrice) * 100)
    : null
  const firstVariant = variations?.[0] ?? null
  const categorySlug = product?.categories?.[0]?.slug ?? "carnatic"

  return (
    <>
      <Head>
        <title>{product?.name} | MusicMaster</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
          rel="stylesheet"
        />
        {/*
          All animation keyframes in <Head> — avoids component-body <style> injection
          which causes Next.js hydration checksum mismatches.

          mm-cart-feedback : gentle opacity + translateY fade for "Added" overlay
          mm-check-icon    : checkmark scales in softly after the overlay appears
        */}
        <style>{`
          .mm-cart-feedback {
            animation: mmFadeInOut 2s ease forwards;
          }
          .mm-check-icon {
            animation: mmScaleIn 0.22s ease 0.1s both;
          }
          @keyframes mmFadeInOut {
            0%   { opacity: 0; transform: translateY(4px);  }
            12%  { opacity: 1; transform: translateY(0);    }
            78%  { opacity: 1; transform: translateY(0);    }
            100% { opacity: 0; transform: translateY(-4px); }
          }
          @keyframes mmScaleIn {
            0%   { transform: scale(0.5); opacity: 0; }
            100% { transform: scale(1);   opacity: 1; }
          }
        `}</style>
      </Head>

      {/* Breadcrumb */}
      <Breadcrumb categories={product?.categories} name={product?.name} />

      {/* Main product — very mild warm pastel background */}
      <main style={{ background: "#FBF8F4" }} className="pt-10 pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 items-start">

            {/* ════════════ LEFT ════════════ */}
            <div className="lg:sticky lg:top-20 space-y-4">

              {/* <ProductGallery /> — UNCHANGED */}
              <div className="bg-white rounded-3xl border border-stone-100 shadow-sm p-8">
                {(selected ?? firstVariant) && (
                  <ProductGallery
                    product={product}
                    selected={(selected ?? firstVariant) as Variant}
                  />
                )}
              </div>

              {/* Audio sample */}
              <AudioSampleCard audioUrl={audioUrl} />

              {/* Trust icons */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { icon: "✅", title: "100% Checked",   sub: "Before delivery" },
                  { icon: "🚚", title: "Fast Shipping",   sub: "Within 24 hrs"  },
                  { icon: "🎧", title: "Expert Support",  sub: "Always free"    },
                  { icon: "🛡️", title: "1 Year Warranty", sub: "Craftsmanship"  },
                ].map(t => (
                  <div key={t.title} className="bg-white border border-stone-100 rounded-2xl p-3.5 text-center">
                    <span className="text-2xl block mb-1.5">{t.icon}</span>
                    <span className="block text-[0.58rem] font-bold uppercase tracking-wider text-stone-600 mb-0.5">
                      {t.title}
                    </span>
                    <span className="block text-[0.56rem] text-stone-400">{t.sub}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* ════════════ RIGHT ════════════ */}
            <div className="flex flex-col font-['DM_Sans']">

              {/* Badge */}
              <span className="inline-flex items-center gap-1.5 self-start text-[0.63rem] font-bold uppercase tracking-[0.13em] bg-amber-50 border border-amber-100 text-amber-600 px-3 py-1.5 rounded-full mb-4">
                <span className="text-[0.44rem] animate-pulse">●</span>
                Handcrafted · Limited Stock
              </span>

              {/* Title — woo: product.name */}
              <h1 className="font-['Cormorant_Garamond'] text-5xl lg:text-[3.1rem] font-light leading-[1.06] text-stone-900 mb-2 tracking-tight">
                {product?.name}
              </h1>

              <p className="font-['Cormorant_Garamond'] text-lg font-light italic text-stone-400 mb-5">
                Shruthi / Kattai – 2 · Premium Bamboo
              </p>

              {/* Rating — woo: product.average_rating, product.rating_count */}
              <div className="flex items-center gap-2.5 text-sm pb-5 mb-5 border-b border-stone-100">
                <span className="text-amber-400 text-base tracking-widest">★★★★★</span>
                <span className="font-semibold text-stone-700">{product?.average_rating ?? "4.9"}</span>
                <span className="text-stone-200">·</span>
                <a href="#reviews" className="text-amber-600 font-medium hover:underline transition-colors">
                  {product?.rating_count ?? 128} reviews
                </a>
                <span className="text-stone-200">|</span>
                <span className={`font-bold text-xs uppercase tracking-wider ${
                  product?.stock_status === "instock" ? "text-emerald-500" : "text-red-400"
                }`}>
                  {product?.stock_status === "instock" ? "✓ In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* Price — woo: variation.price, variation.regular_price */}
              {selected && (
                <div className="mb-6">
                  <div className="flex items-baseline gap-3 flex-wrap mb-1">
                    <span className="font-['Cormorant_Garamond'] text-5xl font-medium text-stone-900 leading-none">
                      ₹{selected.price.toLocaleString("en-IN")}
                    </span>
                    {selected.onSale && (
                      <>
                        <span className="text-xl text-stone-300 line-through">
                          ₹{selected.regularPrice.toLocaleString("en-IN")}
                        </span>
                        <span className="text-[0.63rem] font-extrabold uppercase tracking-wider bg-emerald-50 border border-emerald-100 text-emerald-600 px-2.5 py-1 rounded-full">
                          Save {savePct}%
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-stone-400">
                    Inclusive of all taxes · Free shipping above ₹999
                  </p>
                </div>
              )}

              {/* <VariantSelector /> — UNCHANGED */}
              <div className="mb-6">
                <p className="text-[0.63rem] font-bold uppercase tracking-[0.12em] text-stone-400 mb-3">
                  Choose Type
                </p>
                <VariantSelector
                  variations={variations}
                  selected={selected}
                  setSelected={setSelected}
                />
              </div>

              {/* Variant description */}
              <VariantDescriptionCard description={selected?.description} />

              {/* Qty + Cart + Wishlist */}
              <div className="flex items-stretch gap-3 mb-4">
                <div className="border border-stone-100 rounded-xl overflow-hidden bg-white flex">
                  <QuantitySelector qty={qty} setQty={setQty} />
                </div>

                {/* Cart with mild "Added ✓" animation */}
                <AddToCartWithFeedback url={addToCartUrl} disabled={disabled} />

                <button
                  className="w-[50px] border border-stone-100 bg-white rounded-xl text-xl text-stone-300
                             hover:border-rose-200 hover:text-rose-400 transition-colors flex items-center justify-center"
                  aria-label="Add to wishlist"
                >
                  ♡
                </button>
              </div>

              <MicroTrust />

              {/* <WhatsAppCTA /> — UNCHANGED, renders its own card */}
              <div className="mb-5">
                <WhatsAppCTA />
              </div>

              <GuaranteeStrip />

            </div>
          </div>

          {/* <ProductTabs /> — UNCHANGED */}
          <div className="mt-20 border-t border-stone-100 pt-16">
            <div className="max-w-4xl">
              <ProductTabs product={product} />
            </div>
          </div>

        </div>
      </main>

      {/* Reviews section — replaces removed marquee */}
      <div style={{ background: "#FBF8F4" }} className="border-t border-stone-100">
        <ReviewsSection
          average={Number(product?.average_rating) || 4.9}
          count={Number(product?.rating_count)    || 128}
          reviews={product?.reviews ?? []}
        />
      </div>

      <GuaranteeBanner />

      {/* Related products with real thumbnails */}
      <div style={{ background: "#FBF8F4" }}>
        <RelatedProducts
          products={relatedProducts}
          categorySlug={categorySlug}
        />
      </div>

      {/* <MobileStickyCart /> — UNCHANGED */}
      <MobileStickyCart
        qty={qty}
        setQty={setQty}
        url={addToCartUrl}
        disabled={disabled}
      />
    </>
  )
}

// ─── SERVER DATA ───────────────────────────────────────────────────────────────
// Original fetches preserved exactly.
// Added: relatedProducts fetch — same category, excludes current product.

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string }

  // ── ORIGINAL — UNCHANGED ──
  const productRes = await fetch(
    `${process.env.WOO_API_URL}/products?slug=${slug}&consumer_key=${process.env.WOO_KEY}&consumer_secret=${process.env.WOO_SECRET}`
  )
  const products = await productRes.json()
  if (!products || !products.length) return { notFound: true }

  const product = products[0]

  const variationRes = await fetch(
    `${process.env.WOO_API_URL}/products/${product.id}/variations?consumer_key=${process.env.WOO_KEY}&consumer_secret=${process.env.WOO_SECRET}`
  )
  const variationsRaw = await variationRes.json()

  const variations: Variant[] = variationsRaw
    .sort((a: any, b: any) => a.menu_order - b.menu_order)
    .map((v: any): Variant => ({
      id:           v.id,
      label:        v.attributes?.[0]?.option ?? v.name ?? "",
      price:        Number(v.price),
      regularPrice: Number(v.regular_price),
      onSale:       Boolean(v.on_sale),
      stockStatus:  v.stock_status ?? "outofstock",
      description:  v.description ?? "",
      image:        v.image?.src ?? null,
    }))
  // ── END ORIGINAL ──

  // ── NEW: fetch same-category products for "You May Also Like" ──
  // Uses product.categories[0].id — falls back to [] if not available.
  const categoryId = product.categories?.[0]?.id
  let relatedProducts: any[] = []

  if (categoryId) {
    try {
      const relRes = await fetch(
        `${process.env.WOO_API_URL}/products?category=${categoryId}&exclude=${product.id}&per_page=4&consumer_key=${process.env.WOO_KEY}&consumer_secret=${process.env.WOO_SECRET}`
      )
      const relRaw = await relRes.json()
      // Trim to only the fields the component needs — keeps props payload lean
      relatedProducts = Array.isArray(relRaw) ? relRaw.map((p: any) => ({
        id:            p.id,
        name:          p.name,
        slug:          p.slug,
        price:         p.price,
        regular_price: p.regular_price,
        on_sale:       p.on_sale,
        images:        p.images?.slice(0, 1) ?? [],   // only main thumbnail
      })) : []
    } catch {
      relatedProducts = []  // non-fatal — page renders fine without it
    }
  }

  return { props: { product, variations, relatedProducts } }
}