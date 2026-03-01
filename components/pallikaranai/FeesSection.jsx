// components/pallikaranai/FeesSection.jsx

export default function FeesSection() {
  const fees = [
    { grade: "Debut / Hobby", four: 1500, eight: 2500, twentyFour: 9000 },
    { grade: "Grade 1", four: 1700, eight: 4600, twentyFour: 12800 },
    { grade: "Grade 2", four: 1900, eight: 5200, twentyFour: 14600 },
    { grade: "Grade 3", four: 2100, eight: 5800, twentyFour: 16400 },
    { grade: "Grade 4", four: 2300, eight: 6400, twentyFour: 18200 },
    { grade: "Grade 5", four: 2500, eight: 7000, twentyFour: 20000 },
    { grade: "Grade 6", four: 2700, eight: 7600, twentyFour: 21800 },
    { grade: "Grade 7", four: 3000, eight: 8500, twentyFour: 24500 },
    { grade: "Grade 8", four: 3300, eight: 9400, twentyFour: 27200 },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Fees
        </h2>

        <div className="overflow-x-auto rounded-2xl shadow-sm bg-white">
          <table className="min-w-full text-sm md:text-base">

            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="py-4 px-6 text-left">Grade</th>
                <th className="py-4 px-6 text-center">4 Classes</th>
                <th className="py-4 px-6 text-center">8 Classes</th>
                <th className="py-4 px-6 text-center">24 Classes</th>
              </tr>
            </thead>

            <tbody>
              {fees.map((row, index) => (
                <tr
                  key={row.grade}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="py-4 px-6 font-medium">
                    {row.grade}
                  </td>
                  <td className="py-4 px-6 text-center">
                    ₹{row.four}
                  </td>
                  <td className="py-4 px-6 text-center">
                    ₹{row.eight}
                  </td>
                  <td className="py-4 px-6 text-center font-semibold text-blue-600">
                    ₹{row.twentyFour}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  )
}