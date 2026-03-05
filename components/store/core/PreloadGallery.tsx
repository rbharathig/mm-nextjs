import Head from "next/head"

type Props = {
  images: string[]
}

export default function PreloadGallery({ images }: Props) {

  if (!images || images.length === 0) return null

  const first = images[0]

  return (
    <Head>

      <link
        rel="preload"
        as="image"
        href={first}
      />

    </Head>
  )
}