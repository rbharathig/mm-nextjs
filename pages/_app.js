import "@/styles/globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppWidget />
    </>
  );
}
