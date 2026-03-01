import { useState } from "react";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const phone = "919789897600";
  const message = "Hello, I would like to know more about Carnatic classes.";

  const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2 transition z-50"
      >
        💬 Chat with us
      </button>

      {/* Popup */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden z-50">

          <div className="bg-[#0b4da2] text-white p-4 flex justify-between items-center">
            <div>
              <p className="font-semibold">musicmaster.in</p>
              <p className="text-xs opacity-80">
                Typically replies within an hour
              </p>
            </div>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="p-4 text-sm text-gray-700">
            Hi there! 👋 <br />
            How can I help you?
          </div>

          <div className="p-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-semibold transition"
            >
              Start Chat
            </a>
          </div>

        </div>
      )}
    </>
  );
}
