import Link from "next/link"

type LinkItem = {
  slug: string
  title: string
}

type Props = {
  items: LinkItem[]
  category: string
  subcategory: string
}

export default function InternalLinks({
  items,
  category,
  subcategory
}: Props) {

  if (!items || items.length === 0) return null

  return (
    <section className="mt-20">

      <h2 className="text-xl font-semibold mb-6">
        Explore More {subcategory.replace("-", " ")}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">

        {items.map((item, index) => (

          <Link
            key={index}
            href={`/store/${category}/${subcategory}/${item.slug}`}
            className="text-sm text-gray-700 hover:text-red-600 underline underline-offset-2"
          >
            {item.title}

          </Link>

        ))}

      </div>

    </section>
  )
}