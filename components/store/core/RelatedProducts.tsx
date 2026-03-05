import Image from "next/image"
import Link from "next/link"

type Product = {
  id: number
  name: string
  slug: string
  price: string
  images: { src: string }[]
}

type Props = {
  products: Product[]
  category: string
  subcategory: string
}

export default function RelatedProducts({
  products,
  category,
  subcategory
}: Props) {

  if (!products || products.length === 0) return null

  return (
    <section className="mt-20">

      <h2 className="text-2xl font-semibold mb-8">
        Related Flutes
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {products.map(product => {

          const image = product.images?.[0]?.src || ""

          return (
            <Link
              key={product.id}
              href={`/store/${category}/${subcategory}/${product.slug}`}
              className="group block border rounded-xl p-4 hover:shadow-md transition"
            >

              <div className="relative aspect-square mb-3">

                <Image
                  src={image}
                  alt={product.name}
                  fill
                  sizes="300px"
                  className="object-contain"
                />

              </div>

              <h3 className="text-sm font-medium mb-1 group-hover:text-red-600">
                {product.name}
              </h3>

              <p className="text-sm text-gray-600">
                ₹{product.price}
              </p>

            </Link>
          )
        })}

      </div>

    </section>
  )
}