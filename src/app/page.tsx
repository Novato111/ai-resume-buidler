"use client";

import logo from "@/assets/logo.png";
import resumePreview from "@/assets/resume-preview.jpg";
import { CardStackDemo } from "@/components/CardStackDemo";
import HeroResumePre from "@/components/HeroResumePre";
import { AnimatedTestimonialsDemo } from "@/components/ui/AnimatedTestimonialsDemo";
import { Button } from "@/components/ui/button";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CardSpotlightDemo } from "@/components/ui/CardSpotlightDemo";
import { Cover } from "@/components/ui/cover";
import { FeaturesSectionDemo } from "@/components/ui/FeaturesSectionDemo";
import ResumePreview from "@/components/ui/ResumePreview";
import { FileCog, FileDown, NotebookPen, Tally1 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Step 1",
      description:
        " To Build Perfect Resume Launch our Ai Resume Editor App  .",
      link: <FileCog size="50" className="text-purple-400 " />,
    },
    {
      id: 2,
      title: "Step 2",
      description: "Enter your Info Follow a guide step by step process",
      link: <NotebookPen size="50" className="text-purple-400 " />,
    },
    {
      id: 3,
      title: "Step 3",
      description: "Download your Resume as PDf by clicking the print.",
      link: <FileDown size="50" className="text-purple-400 " />,
    },
  ];
  return (
    <div className=" bg-black bg-dot-white/[0.2] ">
      {" "}
      <main className="flex bg-black bg-dot-white/[0.2] min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-r  px-8 text-center  md:flex-row md:text-start lg:gap-8">
        <div className="max-w-prose space-y-3 ">
          <h1 className=" font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            <Cover> Build Your resume</Cover>
            <span className="inline-block bg-gradient-to-r from-green-300 to-green-900 bg-clip-text text-transparent">
              The Smart way
            </span>{" "}
          </h1>
          <p className="text-lg text-white">
            Our <span className="font-bold">AI resume builder</span> helps you
            design a professional resume, even if you&apos;re not very smart.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/resumes">Launch app</Link>
          </Button>
        </div>
        <div className="w-screen lg:rotate-[1.5deg] h-screen mt-20 flex justify-center  ">
          <CardStackDemo></CardStackDemo>
        </div>

        {/* <div className=" w-full container h-screen mx-auto overflow-hidden shadow-md lg:rotate-[1.5deg] "></div> */}
      </main>
      <div className="h-full flex flex-col items-center justify-center  text-white p-10 mt-10  scale-70">
        <div className="text-center ">
          <h1 className="font-bold bg-clip-text text-transparent  text-4xl lg:text-5xl">
            <span className="text-white bg-clip-text text-transparent">
              Build Resume in 3 Simple Steps
            </span>
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-10">
          <div>
            <HoverEffect items={projects} />
          </div>
        </div>
      </div>
    </div>
  );
}
