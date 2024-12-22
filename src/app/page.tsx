"use client";

import AIShowcase from "@/components/AIShowcase";
import { CardStackDemo } from "@/components/CardStackDemo";

import FeaturesGrid from "@/components/FeaturesGrid";
import PricingSection from "@/components/PricingSection";

import { Button } from "@/components/ui/button";

import { Cover } from "@/components/ui/cover";
import { FileCog, FileDown, NotebookPen } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Step 1",
      description:
        "Launch our AI Resume Editor App to build the perfect resume.",
      link: <FileCog size="50" className="text-purple-400" />,
    },
    {
      id: 2,
      title: "Step 2",
      description: "Enter your info following our step-by-step guide process.",
      link: <NotebookPen size="50" className="text-purple-400" />,
    },
    {
      id: 3,
      title: "Step 3",
      description: "Download your resume as PDF with a single click.",
      link: <FileDown size="50" className="text-purple-400" />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-black/90">
      {/* Grid Background */}
      <div className="  absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6 px-8 text-center md:flex-row md:text-start lg:gap-8">
        <div className="max-w-prose space-y-6">
          <div className="space-y-2">
            <h1 className="font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl">
              Build Your <Cover>Resume</Cover>
              <span className="inline-block bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
                The Smart Way
              </span>
            </h1>
            <p className="text-lg text-neutral-300">
              Our{" "}
              <span className="font-bold text-purple-400">
                AI resume builder
              </span>{" "}
              crafts professional resumes that stand out, making the process
              effortless and intuitive.
            </p>
          </div>
          <div className="flex gap-4 justify-center md:justify-start text-white">
            <Button
              asChild
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white hover:bg-transparent hover:underline"
            >
              <Link href="/resumes" className="font-bold">
                Create Resume
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-400/50"
            >
              <Link href="#pricing">Learn More</Link>
            </Button>
          </div>
        </div>

        <div className="w-screen lg:rotate-[1.5deg] h-screen mt-20 flex justify-center">
          <CardStackDemo />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-30 filter blur-[128px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 opacity-20 filter blur-[128px] rounded-full"></div>
      </main>

      {/* Steps Section */}
      <div
        id="learn-more"
        className="relative z-10 h-full flex flex-col items-center justify-center  p-10 mt-10 
         text-black"
      >
        <AIShowcase></AIShowcase>
      </div>
      <div id="Pricing">
        {" "}
        <PricingSection></PricingSection>
      </div>

      <FeaturesGrid></FeaturesGrid>
    </div>
  );
}
