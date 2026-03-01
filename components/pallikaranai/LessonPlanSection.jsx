// components/pallikaranai/LessonPlanSection.jsx

import { useState } from "react"

export default function LessonPlanSection() {
  const [active, setActive] = useState("guitar")

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Lesson Plan
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["guitar", "piano", "singing"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`px-6 py-2 rounded-full border transition ${
                active === tab
                  ? "bg-blue-600 text-white"
                  : "bg-white"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">

          {active === "guitar" && (
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-6">
                Beginner Grade - Guitar
              </h3>
              <ol className="space-y-3 list-decimal list-inside text-gray-700">
                <li>Guitar Anatomy, String Names & Tunining</li>
                <li>Beginner Finger Exercise 1 & 2</li>
                <li>Open Chords - Em, E, Am, A, D, C, G, Dm</li>
                <li>Open Chord Progressions - Pattern 1, 2, 3, 4</li>
                <li>Strumming Pattern 1-10</li>
                <li>Musical Symbols, Notes on 1st & 2nd String</li>
                <li>Understanding musical notes</li>
                <li>C Major & G Major Scale</li>
                <li>Arpeggios C Major, G Major, D Minor</li>
                <li>Trinity Beginner Songs 1, 2, 3 & Technical Exercises</li>
              </ol>
            </div>
          )}

          {active === "piano" && (
            <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-6">
                Beginner Grade - Piano
              </h3>
              <ol className="space-y-3 list-decimal list-inside text-gray-700">
                <li>Understanding black & white keys, 12 notes.</li>
                <li>C Major Scale - Right & Left Hand Playing</li>
                <li>Finger Ex 1, 2, 3, 4, 5</li>
                <li>Songs: Happy Birthday, Mary had a little lamb, Jingle Bells, The Hill, Lighty Row, Waltz a Waltz</li>
                <li>Understanding Tempo & Counting beats</li>
                <li>Trinty Beginner Song 1, 2, 3</li>
                <li>Music Theory Intro - Notations, Time Signature, Clef</li>
                <li>Technical Exercise 1 & 2 for Grade Exam</li>
                <li>Handling Stage fear & getting ready for exam</li>
              </ol>
            </div>
          )}

          {active === "singing" && (
            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-6">
                  Initial Grade - Singing
                </h3>
                <ol className="space-y-3 list-decimal list-inside text-gray-700">
                  <li>Warm up drills</li>
                  <li>Introduction to pitch through vocal exercises</li>
                  <li>An easy song to try the learnt concept</li>
                  <li>Introduction to rhythms and tempo</li>
                  <li>Rockschool debut song 1, 2, 3, 4</li>
                  <li>Practise with reference tracks & backing tracks</li>
                  <li>Vocal exercises for flexibility and breathing</li>
                  <li>Technical exercises by Rockschool</li>
                  <li>Scales and arpeggios</li>
                </ol>
              </div>

              <div className="bg-gray-50 p-8 rounded-2xl shadow-sm">
                <h3 className="text-xl font-semibold mb-6">
                  Grade 1 - Singing
                </h3>
                <ol className="space-y-3 list-decimal list-inside text-gray-700">
                  <li>Warm up drills</li>
                  <li>Vocal exercises for pitching, rhythms and tempo</li>
                  <li>Rockschool grade 1- song 1, 2, 3, 4</li>
                  <li>Practise with reference tracks & backing tracks</li>
                  <li>Introduction to music theory- Notes, treble/bass notes</li>
                  <li>Vocal exercises for vowel placement and diaphragmatic breathing</li>
                  <li>Technical exercises by Rockschool</li>
                  <li>Scales and arpeggios</li>
                </ol>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  )
}