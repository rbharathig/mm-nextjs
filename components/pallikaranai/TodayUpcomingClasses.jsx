import classes from "@/data/classes"

export default function TodayUpcomingClasses() {

  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
  const todayIndex = new Date().getDay()
  const today = days[todayIndex]
  const tomorrow = days[(todayIndex + 1) % 7]

  const todayData = classes.days.find(d => d.day === today)
  const tomorrowData = classes.days.find(d => d.day === tomorrow)

  const todayClasses = todayData?.slots || []
  const upcomingClasses = tomorrowData?.slots || []

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">

        <img
          src="/images/pallikaranai/guitar-classes-in-pallikaranai.webp"
          alt="Music Classes"
          className="rounded-lg shadow-sm"
        />

        <div>

          <h2 className="text-3xl font-semibold mb-6">
            Today's Classes
          </h2>

          {todayClasses.length > 0 ? (
            <div className="space-y-3 mb-12">
              {todayClasses.map((cls, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border rounded-md px-4 py-3 bg-white"
                >
                  <div>
                    <span className="font-semibold">
                      {cls.subject}
                    </span>
                    {cls.teacher && (
                      <span className="text-gray-600">
                        {" "}({cls.teacher})
                      </span>
                    )}
                  </div>

                  <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-md">
                    {cls.time}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 mb-12">
              No classes scheduled today.
            </p>
          )}

          <h2 className="text-3xl font-semibold mb-6">
            Upcoming Classes
          </h2>

          {upcomingClasses.length > 0 ? (
            <div className="space-y-3">
              <div className="bg-gray-200 px-4 py-2 rounded-md font-medium">
                {tomorrow}
              </div>

              {upcomingClasses.map((cls, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center border rounded-md px-4 py-3 bg-white"
                >
                  <div>
                    <span className="font-semibold">
                      {cls.subject}
                    </span>
                    {cls.teacher && (
                      <span className="text-gray-600">
                        {" "}({cls.teacher})
                      </span>
                    )}
                  </div>

                  <span className="bg-gray-600 text-white text-sm px-3 py-1 rounded-md">
                    {cls.time}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">
              No upcoming classes.
            </p>
          )}

        </div>
      </div>
    </section>
  )
}