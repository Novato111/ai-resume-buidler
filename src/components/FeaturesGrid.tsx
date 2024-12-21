"use client";

import {
  Wand2,
  FileSearch,
  PenTool,
  LayoutTemplate,
  Share2,
  Shield,
} from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    title: "AI Writing Assistant",
    description:
      "Generate professional descriptions of your work experience with our advanced AI",
    icon: Wand2,
  },
  {
    title: "ATS-Friendly",
    description:
      "Ensure your resume passes Applicant Tracking Systems with optimized formatting",
    icon: FileSearch,
  },
  {
    title: "Custom Sections",
    description:
      "Create custom sections to highlight your unique skills and achievements",
    icon: PenTool,
  },
  {
    title: "Professional Templates",
    description: "Choose from a variety of professionally designed templates",
    icon: LayoutTemplate,
  },
  {
    title: "Easy Sharing",
    description: "Share your resume directly or export in multiple formats",
    icon: Share2,
  },
  {
    title: "Privacy First",
    description:
      "Your data is encrypted and secure with enterprise-grade protection",
    icon: Shield,
  },
];

export default function FeaturesGrid() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to create the perfect resume
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our platform combines powerful features with ease of use to help you
            create outstanding resumes
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
