export default function ProductSchema({ product, selected }: any) {

  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.name,
    image: product.images?.map((img: any) => img.src),
    description: product.short_description?.replace(/<[^>]+>/g, ""),
    sku: selected.id,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: selected.price,
      availability:
        selected.stockStatus === "instock"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      url: typeof window !== "undefined" ? window.location.href : "",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}