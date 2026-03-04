import "../styles/globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import WhatsAppWidget from "../components/WhatsAppWidget"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      
       <main className="pt-20">
        <Component {...pageProps} />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
