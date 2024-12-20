"use client";

import { cn } from "@/lib/utils";
import { CardStack } from "./ui/card-stack";
import HeroResumePre from "./HeroResumePre";
export function CardStackDemo() {
  return (
    <div className=" ">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    component: (
      <HeroResumePre
        form={{
          id: "cm4vcj8480000u4ofedsff3hn",
          title: undefined,
          description: undefined,
          photo:
            "https://dpbducyqwhi6dzfk.public.blob.vercel-storage.com/resume_photos/-jsQnuaSzzZPCFUfkRlvTqFXKpwCawK.avif",
          firstName: "Aiden",
          lastName: "Blaze",
          jobTitle: "UI/UX Designer",
          city: "NewYork City",
          country: "USA",
          phone: "+1 987 654 3210",
          email: "AidenBlaze@gmail.com",
          workExperiences: [
            {
              position: "Senior UI/UX Designer",
              company: "Creative Studio Ltd., New York, USA",
              startDate: "2020-01-01",
              endDate: undefined,
              description:
                "Designed user-centric interfaces for 10+ web and mobile applications\n" +
                "Conducted user research and usability testing to identify and resolve\n" +
                "Collaborated with developers to implement responsive designs",
            },
            {
              position: "UI/UX Designer",
              company: "Innovate Digital, San Francisco, USA",
              startDate: "2017-04-01",
              endDate: "2019-12-01",
              description:
                "Created wireframes, prototypes, and high-fidelity designs for 15+ client projects in e-commerce and SaaS industries.\n" +
                "Partnered with stakeholders to define user requirements and translate them into actionable design solutions.\n" +
                "Reduced design iteration cycles by 20% by implementing a feedback-driven design approach.",
            },
            {
              position: undefined,
              company: undefined,
              startDate: undefined,
              endDate: undefined,
              description: undefined,
            },
          ],
          educations: [
            {
              degree: "Master of Arts in Graphic Design",
              school: "University of California, Berkeley",
              startDate: "2017-05-01",
              endDate: undefined,
            },
            {
              degree: "Bachelor of Arts in Graphic Design",
              school: "University of California, Berkeley",
              startDate: "2014-12-01",
              endDate: undefined,
            },
          ],
          skills: [
            "Figma",
            "Sketch",
            "Adobe XD",
            "Adobe Creative",
            "Design",
            "Material UI",
            "HTML5",
            "CSS3",
            "JavaScript",
          ],
          borderStyle: "squircle",
          colorHex: "#eb144c",
          summary:
            "I am a passionate and innovative UI/UX Designer with over 6 years of experience in creating intuitive and visually captivating user interfaces. My expertise lies in understanding user behavior, transforming complex problems into elegant solutions, and delivering seamless user experiences across web and mobile platforms.",
        }}
      ></HeroResumePre>
    ),
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    component: (
      <HeroResumePre
        form={{
          id: "cm4twh0i6000fu43eo39c7m6b",
          title: "Another Cool",
          description: undefined,
          photo:
            "https://dpbducyqwhi6dzfk.public.blob.vercel-storage.com/resume_photos/-7RQRnA2aFBqmA5VttkeIVSMNYUCnXZ.webp",
          firstName: "Stephen",
          lastName: "Strange",
          jobTitle: "Master of Mystical Healing and Reality Defense",
          city: "Aurangabad",
          country: "India",
          phone: "+1 212 555 1700",
          email: "dr.strange@sorcery.org",
          workExperiences: [
            {
              position: "Master of the Mystic Arts",
              company: "Sanctum Sanctorum, New York, USA",
              startDate: "2015-07-20",
              endDate: "2026-10-20",
              description:
                "Guarded the New York Sanctum and assisted in maintaining the balance of the multiverse\n" +
                "        Collaborated with the Avengers to combat Thanos and reverse the effects of the Snap\n" +
                "       Specialized in creating complex protective spells",
            },
            {
              position: "Neurosurgeon",
              company: "Metro-General Hospital, New York, USA",
              startDate: "2005-06-18",
              endDate: "2015-01-01",
              description:
                "Performed groundbreaking neurosurgical procedures with a focus Achieved international recognition for advancing the field of \n" +
                "Mentored junior doctors and contributed to numerous medical journals.",
            },
            {
              position: undefined,
              company: undefined,
              startDate: undefined,
              endDate: undefined,
              description: undefined,
            },
          ],
          educations: [
            {
              degree: "Master of the Mystic Arts",
              school: "Kamar-Taj",
              startDate: undefined,
              endDate: undefined,
            },
            {
              degree: "Doctor of Medicine (MD)",
              school: "Columbia University College of Physicians",
              startDate: "2001-01-01",
              endDate: "1995-01-01",
            },
          ],
          skills: [
            "Time Travel",
            "Spellcasting",
            "Martial Arts",
            "Time Manipulation",
            "Surgical Precision",
            "Leadership",
            "Problem Solving",
          ],
          borderStyle: "circle",
          colorHex: "#9900ef",
          summary:
            "I am Dr. Stephen Strange, a former world-renowned neurosurgeon turned Sorcerer Supreme. I specialize in defending Earth from mystical and interdimensional threats, mastering ancient relics, and safeguarding the multiverse. With a unique combination of medical expertise and ....",
        }}
      ></HeroResumePre>
    ),
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    component: (
      <HeroResumePre
        form={{
          id: "elon12345",
          title: undefined,
          description: undefined,
          photo:
            "https://dpbducyqwhi6dzfk.public.blob.vercel-storage.com/resume_photos/-PKOYxEfZMYQII3MGOodzpKviuMW2Cm.jpg",
          firstName: "Elon",
          lastName: "Musk",
          jobTitle: "Visionary Innovator and Space Pioneer",
          city: "Austin",
          country: "USA",
          phone: "+1 310 555 1234",
          email: "elon.musk@tesla.com",
          workExperiences: [
            {
              position: "CEO & Chief Engineer",
              company: "SpaceX, Hawthorne, USA",
              startDate: "2002-05-01",
              endDate: undefined,
              description:
                "Revolutionized space exploration by founding SpaceX and achieving the first privately-funded spacecraft to reach orbit.\n" +
                "Designed and developed reusable rockets, significantly reducing the cost of space travel.\n" +
                "Led the Starship program to pioneer interplanetary colonization, with a focus on Mars.",
            },
            {
              position: "CEO & Product Architect",
              company: "Tesla, Palo Alto, USA",
              startDate: "2004-02-01",
              endDate: undefined,
              description:
                "Transformed the automotive industry by mass-producing electric vehicles and advancing sustainable energy solutions.\n" +
                "Launched innovative products, including the Model S, Model 3, and Powerwall.\n" +
                "Expanded Tesla's global reach with Gigafactories and breakthroughs in battery technology.",
            },
            {
              position: "Co-founder",
              company: "PayPal, Palo Alto, USA",
              startDate: "1999-03-01",
              endDate: "2002-10-01",
              description:
                "Redefined online payments by co-founding X.com, which later became PayPal.\n" +
                "Streamlined digital transactions and built one of the world's most popular payment platforms.\n" +
                "Facilitated PayPal's acquisition by eBay for $1.5 billion, solidifying its position in fintech.",
            },
          ],
          educations: [
            {
              degree: "Bachelor of Science in Physics",
              school: "University of Pennsylvania",
              startDate: "1992-09-01",
              endDate: "1995-05-01",
            },
            {
              degree: "Bachelor of Science in Economics",
              school: "Wharton School of the University of Pennsylvania",
              startDate: "1992-09-01",
              endDate: "1995-05-01",
            },
          ],
          skills: [
            "Entrepreneurship",
            "Space Exploration",
            "Electric Vehicles",
            "Sustainable Energy",
            "Leadership",
            "Product Design",
            "Engineering",
            "AI Development",
          ],
          borderStyle: "rounded",
          colorHex: "#e84393",
          summary:
            "I am Elon Musk, a visionary entrepreneur dedicated to pushing the boundaries of technology and sustainability. With a passion for innovation, I have founded and led transformative companies in space exploration, electric vehicles, and fintech. My mission is to create a better future for humanity by advancing clean energy and making life multi-planetary.",
        }}
      ></HeroResumePre>
    ),
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
