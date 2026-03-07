export default function VariantDescription({ html }: { html: string }) {
  if (!html) return null
  return (
    <div
      className="text-gray-600 text-sm leading-relaxed"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
