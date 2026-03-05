import Link from "next/link"

type Props = {
  category: string
  subcategory: string
  product: string
}

export default function Breadcrumb({
  category,
  subcategory,
  product
}: Props) {

  return (
    <nav className="text-sm text-gray-500 mb-6">

      <ol className="flex flex-wrap items-center gap-2">

        <li>
          <Link href="/" className="hover:text-black">
            Home
          </Link>
        </li>

        <li>/</li>

        <li>
          <Link href={`/store/${category}`} className="hover:text-black">
            {category}
          </Link>
        </li>

        <li>/</li>

        <li>
          <Link
            href={`/store/${category}/${subcategory}`}
            className="hover:text-black"
          >
            {subcategory.replace("-", " ")}
          </Link>
        </li>

        <li>/</li>

        <li className="text-gray-800 font-medium">
          {product}
        </li>

      </ol>

    </nav>
  )
}