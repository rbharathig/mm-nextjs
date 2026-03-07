export default function ProductTitle({ name }: { name: string }) {
  return (
    <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 leading-snug">
      {name}
    </h1>
  )
}
