import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Header Test Page
        </h1>
      </div>
      <div className="bg-red-500 text-white p-4">Tailwind Test</div>

    </Layout>
  );
}
