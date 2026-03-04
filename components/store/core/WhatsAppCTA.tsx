export default function WhatsAppCTA() {
  return (
    <div className="bg-emerald-50 border border-emerald-100 rounded-2xl px-4 lg:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
      <p className="font-medium text-emerald-900 text-sm sm:text-base">
        Have questions about this flute?
      </p>
      <a
        href="https://api.whatsapp.com/send?phone=919789897600"
        target="_blank"
        className="w-full sm:w-auto text-center bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition"
      >
        Chat on WhatsApp
      </a>
    </div>
  )
}