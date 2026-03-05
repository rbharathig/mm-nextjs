import Head from "next/head"

type FAQ = {
  question: string
  answer: string
}

type Props = {
  faqs: FAQ[]
}

export default function ProductFAQ({ faqs }: Props) {

  if (!faqs || faqs.length === 0) return null

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  }

  return (
    <section className="mt-20">

      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      </Head>

      <h2 className="text-2xl font-semibold mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">

        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">

            <h3 className="font-medium text-gray-900 mb-2">
              {faq.question}
            </h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {faq.answer}
            </p>

          </div>
        ))}

      </div>

    </section>
  )
}