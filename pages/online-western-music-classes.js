import Layout from "@/components/Layout";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Advantages from "@/components/sections/Advantages";
import Tutors from "@/components/sections/Tutors";
import Testimonials from "@/components/sections/Testimonials";
import GradeExams from "@/components/sections/GradeExams";
import PricingSection from "@/components/sections/PricingSection";
import HiringSection from "@/components/sections/HiringSection";
import GiftMusicSection from "@/components/sections/GiftMusicSection";
import FinalCTA from "@/components/sections/FinalCTA";
import RockstarsSection from "@/components/sections/RockstarsSection";







export default function WesternPage() {
  return (
    <Layout>
      <Hero
        title="Online Western Vocal Classes"
        subtitle="Live 1 to 1 Western style singing classes taught by qualified music teachers
    "
        image="/images/online-western-music-classes.webp"
        alt="Online Western Music Classes in India"
        primaryCtaText="Book Free Demo"
        primaryCtaLink="#pricing"
        secondaryCtaText="View Courses"
        secondaryCtaLink="#courses"
      />
        <HowItWorks
          eyebrow="How It Works"
          title="Learning Western Music Online"
          highlight="Made Simple"
          steps={[
            {
              number: "1",
              text: "Register on our website or WhatsApp us DEMO. We will schedule your FREE online Western vocal class.",
            },
            {
              number: "2",
              text: "Meet the Western vocal teacher, discuss your goals and experience a real class session.",
            },
            {
              number: "3",
              text: "Like the demo? Upgrade and start your structured Western vocal lessons.",
            },
          ]}
          image="/images/western-1-musicmaster.in.webp"
          imageAlt="How It Works - Western Music Classes"
          primaryCtaText="Book a FREE Demo"
          primaryCtaLink="https://api.whatsapp.com/send?phone=919789897600"
          secondaryCtaText="WhatsApp Us"
          secondaryCtaLink="https://api.whatsapp.com/send?phone=919789897600"
        />
        <Advantages
            title="Best Online Western Vocal Lessons"
            subtitle="The Musicmaster Advantage"
            image="/images/western-musicmaster.in.webp"
            imageAlt="Western vocal lessons online"
            items={[
                {
                icon: "/images/goal-based-guitar-lessons.webp",
                iconAlt: "Goal based lessons",
                title: "Goal Based Western Vocal Lessons",
                text: "Set your singing goals and follow a structured lesson plan guided by qualified Western vocal teachers."
                },
                {
                icon: "/images/western-3-musicmaster.in.webp",
                iconAlt: "Learn favourite songs",
                title: "Sing Your Favourite Songs",
                text: "Learn songs you love while building strong vocal foundations through proper exercises."
                },
                {
                icon: "/images/friendly-online-guitar-teacher.webp",
                iconAlt: "Friendly vocal teacher",
                title: "Friendly Online Western Vocal Teachers",
                text: "Stay motivated with personalised guidance and continuous feedback from experienced tutors."
                }
            ]}
        />
        <Tutors
            title="Our Western Vocal Teachers"
            tutors={[
                {
                image: "/images/tutors/Subhasree_tutor.webp",
                name: "Subaashri Sivakumar",
                qualification: "Diploma in Western Vocals, KMMC",
                language: "Tamil & English",
                },
                {
                image: "/images/tutors/annie_tutor.webp",
                name: "Annie Jennifer M",
                qualification: "ATCL, Diploma in Western Vocals",
                language: "Tamil & English",
                },
                {
                image: "/images/tutors/sejuti_tutor.webp",
                name: "Sejuti Barua",
                qualification: "Rockschool Grade 4",
                language: "English",
                },
                    {
                image: "/images/tutors/Banrimika_tutor.webp",
                name: "Banrimika Dellis",
                qualification: "M.A Music",
                language: "English",
                },
            ]}
        />

        <RockstarsSection
            title="Check Our Rockstars In Action"
            posts={[
                {
                image: "/images/instagram/onlinevocallessons-musicmaster.in.webp",
                link: "https://www.instagram.com/p/CTEc2sajIzh/",
                alt: "Online western music class student performance",
                },
                {
                image: "/images/instagram/onlinecarnaticmusicclass-musicmaster.in.webp",
                link: "https://www.instagram.com/p/CSHcjSiFdH2/",
                alt: "Online vocal coach performance session",
                },
                {
                image: "/images/instagram/singingsongonlordshiva-musicmaster.in.webp",
                link: "https://www.instagram.com/p/CSwfZn-leZ0/",
                alt: "Western singing lesson online student",
                },
            ]}
        />


        <Testimonials
            title="Our Customers Words About Us"
            testimonials={[
                {
                text: "We tried these online classes during the pandemic. My child has been learning for over a year and the progress is amazing.",
                name: "Sheeba Kiran",
                role: "Parent",
                },
                {
                text: "The teachers are very supportive and structured. My confidence in singing improved drastically.",
                name: "Rohan M",
                role: "Student",
                },
                {
                text: "Highly recommend for Trinity exam preparation. Professional and goal-oriented training.",
                name: "Divya S",
                role: "Parent",
                },
            ]}
        />
        <GradeExams
            title="Prepare for International Grade Exams"
            subtitle="Give Western Vocal Grade Exams from the comfort of your home"
            description1="Music Master helps students prepare for internationally recognised certifications from Trinity College London and Rockschool."
            description2="Our structured online training ensures you are fully prepared for practical exams, theory requirements and performance standards."
            image="/images/grade-exams.webp"
            imageAlt="Online western vocal grade exam preparation"
            buttonText="Explore Music Grades"
            buttonLink="/music-grade-exams"
        />


        <PricingSection />

        <HiringSection
            title="Western Vocal Tutor Recruitment"
            description="If you are formally certified with Grade 5 (from Trinity College London, Rockschool or equivalent) or above, explore teaching Western vocal lessons with us."
            image="/images/western-vocal-teacher-hiring.webp"
            imageAlt="Western vocal teacher hiring"
            buttonText="Apply Here"
            buttonLink="/hiring"
        />

        <GiftMusicSection
            title="Give Your Kids the Gift of Music That Lasts a Lifetime"
            paragraphs={[
                "Every child deserves a qualified music teacher who can build strong foundations in singing.",
                "Our Western vocal classes follow structured international syllabi such as Trinity College London and Rockschool.",
                "With consistent practice and guided routines, singing confidently becomes achievable for every student.",
                "Gift your child a musical journey that builds creativity, discipline and lifelong confidence."
            ]}
            image="/images/singing-classes-online.webp"
            imageAlt="Kids learning western singing online"
            buttonText="Book a FREE Demo"
            buttonLink="https://api.whatsapp.com/send?phone=919789897600"
        />
        <FinalCTA
            title="Start Your Western Singing Journey Today"
            subtitle="Book a free demo class and experience structured 1-to-1 online training."
            primaryText="Book Free Demo"
            primaryLink="https://api.whatsapp.com/send?phone=919789897600"
            secondaryText="WhatsApp Us"
            secondaryLink="https://api.whatsapp.com/send?phone=919789897600"
        />


    </Layout>
  );
}
