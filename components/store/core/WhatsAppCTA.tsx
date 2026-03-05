import React from 'react';

export default function WhatsAppCTA() {
  return (
    <div className="group relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl p-5 lg:p-6 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Decorative background element */}
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-emerald-100/40 rounded-full blur-2xl group-hover:bg-emerald-200/50 transition-colors" />

      <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          {/* WhatsApp Icon with "Online" badge */}
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200">
              <svg 
                viewBox="0 0 24 24" 
                className="w-7 h-7 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.411 0 .01 5.403.007 12.04c0 2.12.552 4.189 1.598 6.056L0 24l6.105-1.602a11.832 11.832 0 005.937 1.598h.005c6.637 0 12.038-5.403 12.041-12.04a11.817 11.817 0 00-3.417-8.529z"/>
              </svg>
            </div>
            {/* Green Pulse Dot */}
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
            </span>
          </div>

          <div className="flex flex-col">
            <h3 className="font-bold text-emerald-950 text-base sm:text-lg leading-tight">
              Have questions about this flute?
            </h3>
            <p className="text-emerald-700/80 text-xs sm:text-sm font-medium">
              We typically reply in under 5 minutes.
            </p>
          </div>
        </div>

        <a
          href="https://api.whatsapp.com/send?phone=919789897600"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white px-7 py-3 rounded-2xl text-sm font-bold shadow-md shadow-emerald-100 transition-all duration-200"
        >
          Chat Now
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>
      </div>
    </div>
  );
}