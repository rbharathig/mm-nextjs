import { useState, useEffect, useRef } from "react";

export default function TutorsSection() {
   const tutors = [
    {
      name: "Mehavarshini",
      qualification: "BA (Music)",
      languages: "Tamil & English",
      image: "/images/carnatic/tutors/Mehavarshini.webp",
      audio: "/audio/carnatic/mehavarshini.mp3",
    },
    {
      name: "Ranjana",
      qualification: "Carnatic",
      languages: "Tamil, Malayalam & English",
      image: "/images/carnatic/tutors/Ranjana_tutor.webp",
      audio: "/audio/carnatic/ranjana.mp3",
    },
    {
      name: "Anupama",
      qualification: "Carnatic",
      languages: "Tamil & English",
      image: "/images/carnatic/tutors/Anupama_tutor.webp",
      audio: "/audio/carnatic/anupama_sample.mp3",
    },
    {
      name: "Lakshmi KN",
      qualification: "Carnatic",
      languages: "Tamil, Kannada & English",
      image: "/images/carnatic/tutors/Lakshmi_tutor.webp",
      audio: "/audio/carnatic/lakshmi.mp3",
    },
    {
      name: "Apoorva",
      qualification: "Carnatic",
      languages: "Tamil & English",
      image: "/images/carnatic/tutors/Apoorva_tutor.webp",
      audio: "/audio/carnatic/apoorva.mp3",
    },
    {
      name: "Sharumathi",
      qualification: "Carnatic & Film Songs",
      languages: "Tamil & English",
      image: "/images/carnatic/tutors/Sharumathi_tutor.webp",
      audio: "/audio/carnatic/sharumathi.mp3",
    },
    {
      name: "Krithika Srinivasan",
      qualification: "Carnatic",
      languages: "Tamil & English",
      image: "/images/carnatic/tutors/KrithikaSrinivasan_tutor.webp",
      audio: "/audio/carnatic/krithika.mp3",
    },
    {
      name: "Sanjeev Chilukuri",
      qualification: "Carnatic",
      languages: "Telugu, Tamil & English",
      image: "/images/carnatic/tutors/Sanjeev_tutor.webp",
      audio: "/audio/carnatic/sanjeev.mp3",
    },
    {
      name: "Akila Swaminathan",
      qualification: "Carnatic",
      languages: "Tamil & English",
      image: "/images/carnatic/tutors/Akila_tutor.webp",
      audio: "/audio/carnatic/akila.mp3",
    },
    {
      name: "Somasundaram S",
      qualification: "Carnatic",
      languages: "Tamil & English",
      image: "/images/carnatic/tutors/Somasundaram_tutor.webp",
      audio: "/audio/carnatic/somasundaram.mp3",
    },
    {
      name: "Kavitha Ajay",
      qualification: "Carnatic",
      languages: "Tamil & English",
      image: "/images/carnatic/tutors/Kavitha_tutor.webp",
      audio: "/audio/carnatic/kavitha.mp3",
    },
    {
      name: "Deepa Ramachandran",
      qualification: "Carnatic",
      languages: "Tamil & English",
      image: "/images/carnatic/tutors/Deepa_tutor.webp",
      audio: "/audio/carnatic/deepa.mp3",
    },
    {
      name: "Sowmya Krishnan",
      qualification: "Carnatic",
      languages: "Tamil, Malayalam & English",
      image: "/images/carnatic/tutors/Sowmya_tutor.webp",
      audio: "/audio/carnatic/sowmya.mp3",
    },
    {
      name: "Sangeetha Mahes",
      qualification: "Carnatic",
      languages: "Tamil, Malayalam & English",
      image: "/images/carnatic/tutors/Sangeetha_tutor.webp",
      audio: "/audio/carnatic/sangeetha.mp3",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);
  const [playingIndex, setPlayingIndex] = useState(null);
  const audioRefs = useRef([]);

  // Responsive visible count
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const next = () => {
    if (current < tutors.length - visibleCount) {
      setCurrent(current + 1);
    }
  };

  const prev = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const toggleAudio = (index) => {
    const currentAudio = audioRefs.current[index];
    if (!currentAudio) return;

    // Stop all other audios
    audioRefs.current.forEach((audio, i) => {
      if (i !== index && audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    if (playingIndex === index) {
      currentAudio.pause();
      setPlayingIndex(null);
    } else {
      // Lazy attach src only on first click
      if (!currentAudio.src) {
        currentAudio.src = tutors[index].audio;
      }

      currentAudio.play();
      setPlayingIndex(index);
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-3xl lg:text-4xl font-bold text-[#0b4da2] mb-12">
          Our Carnatic Music Teachers
        </h2>

        <div className="relative">

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(current * 100) / visibleCount}%)`,
              }}
            >
              {tutors.map((tutor, index) => (
                <div
                  key={index}
                  className="px-4"
                  style={{ flex: `0 0 ${100 / visibleCount}%` }}
                >
                  <div className="bg-[#0b4da2]/5 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition">

                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      width="112"
                      height="112"
                      loading="lazy"
                      decoding="async"
                      className="w-28 h-28 mx-auto rounded-full object-cover mb-6"
                    />

                    <h4 className="font-semibold text-lg text-gray-900">
                      {tutor.name}
                    </h4>

                    <p className="text-sm text-gray-600">
                      {tutor.qualification}
                    </p>

                    <p className="text-sm text-gray-500 mb-6">
                      {tutor.languages}
                    </p>

                    <button
                      onClick={() => toggleAudio(index)}
                      className="bg-[#0b4da2] text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto hover:opacity-90 transition"
                    >
                      {playingIndex === index ? "❚❚" : "▶"}
                    </button>

                    {/* Audio without src initially — fully lazy */}
                    <audio
                      ref={(el) => (audioRefs.current[index] = el)}
                      preload="none"
                    />

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {current > 0 && (
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-[#0b4da2] hover:bg-[#0b4da2] hover:text-white transition"
            >
              ‹
            </button>
          )}

          {current < tutors.length - visibleCount && (
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-[#0b4da2] hover:bg-[#0b4da2] hover:text-white transition"
            >
              ›
            </button>
          )}

        </div>
      </div>
    </section>
  );
}
