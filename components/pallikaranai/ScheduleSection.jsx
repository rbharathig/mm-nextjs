// components/pallikaranai/ScheduleSection.jsx

import { useMemo, useState } from "react"
import schedule from "@/data/classes"

export default function ScheduleSection() {
  const [activeMonth, setActiveMonth] = useState("current")

  const now = new Date()

  const currentMonthName = now.toLocaleString("en-IN", {
    month: "long",
    year: "numeric",
  })

  const nextDate = new Date(now.getFullYear(), now.getMonth() + 1, 1)

  const nextMonthName = nextDate.toLocaleString("en-IN", {
    month: "long",
    year: "numeric",
  })

  const todayShort = now.toLocaleString("en-IN", {
    weekday: "short",
  })

  const todaysClasses = useMemo(() => {
    return schedule.classes.filter((c) => c.day === todayShort)
  }, [todayShort])

  const colorMap = {
    pink: "bg-pink-200",
    yellow: "bg-yellow-200",
    lavender: "bg-purple-200",
    purple: "bg-purple-400 text-white font-semibold",
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="bg-white rounded-3xl shadow-lg p-6 overflow-x-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Weekly Class Schedule
        </h2>

        {/* Month Switch */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveMonth("current")}
            className={`px-4 py-2 rounded-lg border ${
              activeMonth === "current"
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
          >
            {currentMonthName}
          </button>

          <button
            onClick={() => setActiveMonth("next")}
            className={`px-4 py-2 rounded-lg border ${
              activeMonth === "next"
                ? "bg-blue-600 text-white"
                : "bg-white"
            }`}
          >
            {nextMonthName}
          </button>
        </div>

        {/* Schedule Grid */}
        <div className="overflow-x-auto">
          <div className="min-w-[900px] grid grid-cols-8 gap-2 text-sm">

            {/* Empty Top Left */}
            <div></div>

            {/* Time Headers */}
            {schedule.timeSlots.map((slot) => (
              <div
                key={slot}
                className="bg-blue-100 font-semibold text-center py-3 rounded"
              >
                {slot}
              </div>
            ))}

            {/* Days */}
            {schedule.days.map((day) => (
              <>
                {/* Day Column */}
                <div
                  key={day}
                  className="font-semibold py-4"
                >
                  {day}
                </div>

                {/* Slots */}
                {schedule.timeSlots.map((slot) => {
                  const cls = schedule.classes.find(
                    (c) => c.day === day && c.slot === slot
                  )

                  if (!cls)
                    return (
                      <div
                        key={`${day}-${slot}`}
                        className="rounded bg-white min-h-[70px]"
                      />
                    )

                  return (
                    <div
                      key={`${day}-${slot}`}
                      className={`rounded p-2 min-h-[70px] flex flex-col justify-center text-center ${
                        colorMap[cls.color] || "bg-gray-200"
                      }`}
                    >
                      <div className="font-medium">
                        {cls.subject}
                      </div>
                      {cls.tutor && (
                        <div className="text-xs mt-1">
                          {cls.tutor}
                        </div>
                      )}
                    </div>
                  )
                })}
              </>
            ))}
          </div>
        </div>

        {/* Today's Classes */}
        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <img
            src="/images/pallikaranai/guitar-classes-in-pallikaranai.webp"
            alt="Today's Classes"
            width="600"
            height="400"
            loading="lazy"
            className="rounded-xl shadow-md"
          />

          {/* Today List */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Today's Classes
            </h3>

            {todaysClasses.length === 0 && (
              <p>No classes scheduled today.</p>
            )}

            <ul className="space-y-4">
              {todaysClasses.map((cls, i) => (
                <li
                  key={i}
                  className="p-4 bg-white rounded-lg shadow-sm border flex justify-between"
                >
                  <div>
                    <div className="font-semibold">
                      {cls.subject}
                    </div>
                    {cls.tutor && (
                      <div className="text-sm text-gray-600">
                        {cls.tutor}
                      </div>
                    )}
                  </div>
                  <div className="text-sm font-medium">
                    {cls.slot}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}