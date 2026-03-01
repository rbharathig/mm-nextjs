// pages/music-classes-in-pallikaranai.js

import Head from "next/head"
import Layout from "@/components/Layout"

import LocalHeroVideo from "@/components/pallikaranai/LocalHeroVideo"
import ScheduleSection from "@/components/pallikaranai/ScheduleSection"
import InstrumentSection from "@/components/pallikaranai/InstrumentSection"
import ContactSectionLocal from "@/components/pallikaranai/ContactSectionLocal"

import Tutors from "@/components/sections/Tutors"
import FAQSection from "@/components/sections/FAQSection"
import FinalCTA from "@/components/sections/FinalCTA"
import Testimonials from "@/components/sections/Testimonials"

import pallikaranaiFAQ from "@/data/pallikaranai-faq"
import pallikaranaiTutors from "@/data/pallikaranai-tutors"
import pallikaranaiTestimonials from "@/data/pallikaranai-testimonials"
import MusicClassesGrid from "@/components/pallikaranai/MusicClassesGrid"
import ElectricGuitarSection from "@/components/pallikaranai/ElectricGuitarSection"
import BassGuitarSection from "@/components/pallikaranai/BassGuitarSection"
import DrumsSection from "@/components/pallikaranai/DrumsSection"
import StudentPortalSection from "@/components/pallikaranai/StudentPortalSection"

export default function PallikaranaiPage() {
  return (
    <>
      <Head>
        <title>Music Classes in Pallikaranai | Music Master</title>
        <meta
          name="description"
          content="Best music classes in Pallikaranai for Piano, Guitar, Drums and Western Vocals. Trinity & Rockschool syllabus with certified trainers."
        />

        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicSchool",
              name: "Music Master - Pallikaranai",
              url: "https://musicmaster.in/music-classes-in-pallikaranai",
              telephone: "+91-7200145687",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Plot No.227 (First Floor), 1st Main Road, Kamakoti Nagar",
                addressLocality: "Pallikaranai",
                addressRegion: "Tamil Nadu",
                postalCode: "600100",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 12.941991,
                longitude: 80.210938,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "10:00",
                  closes: "20:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "09:00",
                  closes: "21:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/musicmasterchennai",
                "https://www.instagram.com/musicmasterchennai",
              ],
            }),
          }}
        />
      </Head>

      <Layout>
        <LocalHeroVideo />
        <MusicClassesGrid />


        {/* 🎹 Piano Section */}
        <InstrumentSection
          title="Piano / Keyboard Classes in Pallikaranai"
          image="/images/pallikaranai/piano-classes-in-pallikaranai.webp"
        >
          <p>
            One of the best choices for anyone to start their music journey is keyboard classes.
            All you need is a 61 keys keyboard to start your music journey.
            We accept students across all age groups.
          </p>

          <p>
            We focus on two things at Music Master while teaching keyboard / Piano –
            <strong> Grade Exams</strong> & <strong> Live Performance</strong>.
          </p>
        </InstrumentSection>

        {/* 🎸 Guitar Section */}
        <InstrumentSection
          title="Guitar Classes in Pallikaranai"
          image="/images/pallikaranai/guitar-classes-in-pallikaranai.webp"
          reverse
        >
          <p>
            If you are looking for guitar classes in Pallikaranai,
            you have landed in the right place.
            We coach students of all age groups.
          </p>

          <p>
            We emphasize on two things to ensure that there is structured learning
            for our guitar students –
            <strong> Grade Exams</strong> & <strong> Live Performance</strong>.
          </p>

          <p>
            For Grade Exams we focus on Trinity College & Rockschool, London syllabus.
          </p>
        </InstrumentSection>
        <BassGuitarSection />
        <DrumsSection />


        {/* 🗓 Schedule */}
        <ScheduleSection />

        {/* 👨‍🏫 Tutors */}
       <Tutors
  title="Meet Our Tutors"
  tutors={[
    {
      image: "/images/tutors/Udhay.webp",
      name: "Udhay",
      qualification: "Trinity Grade Certified",
      language: "Tamil & English",
    },
    {
      image: "/images/tutors/arvind-raj.webp",
      name: "Aravind Raj",
      qualification: "Rockschool Certified Guitar Trainer",
      language: "Tamil & English",
    },
    {
      image: "/images/tutors/Don_Bosco.webp",
      name: "Don Bosco",
      qualification: "Professional Drum Instructor",
      language: "Tamil & English",
    },
    {
      image: "/images/tutors/subaashri-sivakumar-vocals-.webp",
      name: "Subaashri Sivakumar",
      qualification: "Diploma in Western Vocals, KMMC",
      language: "Tamil & English",
    }
  ]}
/>

        {/* ❓ FAQ */}
        <FAQSection
          title="Frequently Asked Questions"
          faqs={pallikaranaiFAQ}
        />

        {/* 🗣 Testimonials */}
       <Testimonials
  title="Testimonials"
  testimonials={[
    {
      text: "As a proud parent, I am very grateful to the dedicated teachers and mentors at Musicmaster. Their passion, patience and guidance have helped my children not only to learn music but also grow in confidence and creativity.",
      name: "Naveen",
      role: "Parent",
    },
    {
      text: "Sitting as an audience while my sister performed was truly an amazing experience which touched my soul. Music requires perseverance and it could take years to master it.",
      name: "Aadesh",
      role: "Brother",
    },
    {
      text: "It's been more than five months since I've experienced great tutoring here. I could clearly visualize the passion in the tutors and students.",
      name: "Aadhi",
      role: "Student",
    }
  ]}
/>

        {/* 🎁 CTA */}
        <FinalCTA />

        {/* 📍 Contact */}
        <ContactSectionLocal />
        <StudentPortalSection />
      </Layout>
    </>
  )
}