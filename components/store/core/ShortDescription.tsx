export default function ShortDescription({ html }: { html: string }) {
  if (!html) return null
  return (
    <div
      className="pt-6 text-sm text-gray-600 leading-relaxed border-t border-gray-100
        [&_ul]:space-y-1.5 [&_li]:flex [&_li]:items-start [&_li]:gap-2
        [&_li]:before:content-['✓'] [&_li]:before:text-emerald-600 [&_li]:before:font-bold [&_li]:before:flex-shrink-0
        [&_h2]:font-semibold [&_h2]:text-gray-800 [&_h2]:text-sm [&_h2]:mb-3
        [&_strong]:font-semibold [&_strong]:text-gray-800"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
