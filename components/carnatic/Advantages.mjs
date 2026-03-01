export default function Advantages() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0b4da2] mb-4">
            Best Online Carnatic Lessons
          </h2>

          <p className="text-lg font-semibold text-gray-600 mb-8">
            The MUSIC MASTER Advantage
          </p>

          <img
            src="/images/carnatic/carnatic-music.webp"
            alt="Carnatic lessons for kids"
            title="beginners Carnatic lessons"
            width="250"
            height="250"
            className="w-full max-w-xs lg:max-w-sm object-contain"
            loading="lazy"
          />
        </div>
        

        {/* RIGHT SIDE FEATURES */}
        <div className="space-y-12">

          {/* Feature 1 */}
          <div className="flex gap-6">
            <img
              src="/images/carnatic/goal-based-guitar-lessons.webp"
              alt="best Carnatic classes in chennai"
              width="60"
              height="60"
              className="w-14 h-14 object-contain"
              loading="lazy"
            />
            <div>
              <h3 className="text-xl font-semibold text-[#0b4da2] mb-2">
                Goal Based Carnatic Lessons
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You will learn from a qualified Carnatic teacher, who has already done it all. Grade exams, stage shows and performances. Set your goals, then the Carnatic teacher will help you with right lesson plan, exercises and track progress to get faster results.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-6">
            <img
              src="/images/carnatic/carnatic-1-musicmaster.in.webp"
              alt="Carnatic classes in bangalore"
              width="60"
              height="60"
              className="w-14 h-14 object-contain"
              loading="lazy"
            />
            <div>
              <h3 className="text-xl font-semibold text-[#0b4da2] mb-2">
                Play Your Favourite Songs
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The whole point is to sing your favourite songs in Carnatic. Discuss your favourite songs with your Carnatic teacher & your tutor will help you learn quickly. All you have to do is to focus on practise.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-6">
            <img
              src="/images/carnatic/friendly-online-guitar-teacher.webp"
              alt="friendly-online-Carnatic-teacher"
              width="60"
              height="60"
              className="w-14 h-14 object-contain"
              loading="lazy"
            />
            <div>
              <h3 className="text-xl font-semibold text-[#0b4da2] mb-2">
                Friendly Online Carnatic Teacher
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Your Carnatic teacher will keep you motivated and you can reach them to get your doubts cleared. You can send recorded videos and ask for feedback. The teacher will help you to achieve your goal and support in your Carnatic journey.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
