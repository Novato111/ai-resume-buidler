"use client";

import { Bot, FileText, Sparkles } from "lucide-react";

// Typing for the FeatureCard component
interface FeatureCardProps {
  title: string;
  description: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Correct typing for icon components
}

const FeatureCard = ({ title, description, Icon }: FeatureCardProps) => (
  <div className="flex flex-col items-center text-center">
    <div className="rounded-lg bg-white/5 p-2 ring-1 ring-white/10">
      <Icon className="h-6 w-6 text-purple-400" />
    </div>
    <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>
    <p className="mt-4 text-gray-300">{description}</p>
  </div>
);

export default function AIShowcase() {
  const features = [
    {
      title: "Smart Content Generation",
      description:
        "AI analyzes your experience and suggests professional descriptions",
      icon: Bot,
    },
    {
      title: "Perfect Formatting",
      description:
        "Automatically formats your content for optimal presentation",
      icon: FileText,
    },
    {
      title: "Keyword Optimization",
      description: "AI ensures your resume includes relevant industry keywords",
      icon: Sparkles,
    },
  ];

  return (
    <div className="relative isolate overflow-hidden">
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              AI-Powered Resume Creation
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Our advanced AI technology helps you create professional resumes
              with ease
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                Icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
