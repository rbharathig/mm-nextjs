"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">

        {/* Logo */}
        <a href="https://musicmaster.in/" className="flex items-center">
          <img
            src="https://musicmaster.in/images/musicmaster-logo.png"
            alt="Music Master"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10 text-black">

          {/* Instruments */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="group relative text-[15px] font-medium outline-none">
              <span className="relative">
                Instruments
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0b4da2] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                sideOffset={12}
                align="center"
                className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-xl p-8 w-[720px] border border-gray-100"
              >
                <div className="grid grid-cols-3 gap-x-10 gap-y-6 text-sm">

                  {[
                    { icon: "🎸", name: "Guitar", href: "online-guitar-classes.html" },
                    { icon: "🎹", name: "Piano", href: "online-piano-classes.html" },
                    { icon: "🎻", name: "Violin", href: "online-violin-classes.html" },
                    { icon: "🪈", name: "Flute", href: "online-flute-classes.html" },
                    { icon: "🥁", name: "Drums", href: "online-drums-classes.html" },
                    { icon: "🎶", name: "Ukulele", href: "online-ukulele-classes.html" },
                    { icon: "🎓", name: "Classes for Adults", href: "online-music-classes-for-adults.html" },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition group"
                    >
                      <span className="text-sm opacity-70">{item.icon}</span>
                      <span className="font-medium group-hover:text-[#0b4da2] transition">
                        {item.name}
                      </span>
                    </a>
                  ))}

                </div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          {/* Singing */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="group relative text-[15px] font-medium outline-none">
              <span className="relative">
                Singing
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0b4da2] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                sideOffset={12}
                align="center"
                className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-xl p-8 w-[480px] border border-gray-100"
              >
                <div className="space-y-5 text-sm">

                  {[
                    { icon: "🎼", name: "Carnatic", href: "online-carnatic-music-classes.html" },
                    { icon: "🎤", name: "Hindustani", href: "online-hindustani-music-classes.html" },
                    { icon: "🎧", name: "Western", href: "online-western-music-classes.html" },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition group"
                    >
                      <span className="text-sm opacity-70">{item.icon}</span>
                      <span className="font-medium group-hover:text-[#0b4da2] transition">
                        {item.name}
                      </span>
                    </a>
                  ))}

                </div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          {/* Grades */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="group relative text-[15px] font-medium outline-none">
              <span className="relative">
                Grades
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0b4da2] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                sideOffset={12}
                align="center"
                className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-xl p-8 w-[760px] border border-gray-100"
              >
                <div className="grid grid-cols-2 gap-12 text-sm">

                  <div className="border-r border-gray-100 pr-8">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                      🎓 Trinity College London
                    </h4>
                    <div className="space-y-3">
                      <a href="acoustic-guitar-grade-exam-trinity-college-london.html" className="block hover:text-[#0b4da2] transition">Acoustic Guitar</a>
                      <a href="piano-keyboard-grade-exams-trinity-college-london.html" className="block hover:text-[#0b4da2] transition">Piano</a>
                      <a href="singing-western-vocals-grade-exams-trinity-college-london.html" className="block hover:text-[#0b4da2] transition">Singing</a>
                    </div>
                  </div>

                  <div className="pl-8">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">
                      🎼 Rockschool London
                    </h4>
                    <div className="space-y-3">
                      <a href="acoustic-guitar-grade-exam-rockschool-london.html" className="block hover:text-[#0b4da2] transition">Acoustic Guitar</a>
                      <a href="keyboard-and-piano-grade-exams-rockschool-london.html" className="block hover:text-[#0b4da2] transition">Keyboard / Piano</a>
                      <a href="singing-grade-exam-rockschool-london.html" className="block hover:text-[#0b4da2] transition">Singing</a>
                    </div>
                  </div>

                </div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          {/* Resources */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="group relative text-[15px] font-medium outline-none">
              <span className="relative">
                Resources
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#0b4da2] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                sideOffset={12}
                align="center"
                className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-xl p-8 w-[600px] border border-gray-100"
              >
                <div className="grid grid-cols-2 gap-x-10 gap-y-6 text-sm">

                  {[
                    { icon: "❓", name: "FAQs", href: "faq.html" },
                    { icon: "🎯", name: "Guitar Tuner", href: "guitar-tuner.html" },
                    { icon: "⏱️", name: "Metronome", href: "metronome.html" },
                    { icon: "🎵", name: "Shruti Box", href: "shrutiBox.html" },
                    { icon: "🎹", name: "Virtual Piano", href: "virtual-piano.html" },
                    { icon: "🎙️", name: "Vocal Range Finder", href: "vocal-range-finder.html" },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition group"
                    >
                      <span className="text-sm opacity-70">{item.icon}</span>
                      <span className="font-medium group-hover:text-[#0b4da2] transition">
                        {item.name}
                      </span>
                    </a>
                  ))}

                </div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          {/* Direct Links */}
          <a href="/store/" className="text-[15px] font-medium hover:text-[#0b4da2] transition">
            Store
          </a>

          <a href="https://musicmaster.in/blog/" className="text-[15px] font-medium hover:text-[#0b4da2] transition">
            Blog
          </a>

          <a href="music-classes-fees.html" className="text-[15px] font-medium hover:text-[#0b4da2] transition">
            Pricing
          </a>

        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">

          <a
            href="https://musicmaster.onlineclass.site/signup"
            className="bg-red-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-red-700 transition"
          >
            Student Login
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=919789897600"
            className="bg-[#0b4da2] text-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-[#083a7a] transition"
          >
            Book a Demo
          </a>

        </div>

      </div>
    </header>
  );
}
