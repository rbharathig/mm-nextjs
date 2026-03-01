import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      
      {/* Header (Fixed) */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 pt-[89px]">
        {children}
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
