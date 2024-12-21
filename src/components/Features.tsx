import React from "react";
import { Wand2, Layout, FileCheck, Palette, Bot, Download } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Wand2 className="h-6 w-6 text-blue-400" />,
      title: "AI-Powered Content Suggestions",
      description:
        "Get smart suggestions for your skills, experiences, and achievements.",
    },
    {
      icon: <Layout className="h-6 w-6 text-blue-400" />,
      title: "Professional Templates",
      description:
        "Choose from a variety of ATS-friendly templates designed by experts.",
    },
    {
      icon: <FileCheck className="h-6 w-6 text-blue-400" />,
      title: "ATS Optimization",
      description:
        "Ensure your resume passes through applicant tracking systems.",
    },
    {
      icon: <Palette className="h-6 w-6 text-blue-400" />,
      title: "Custom Styling",
      description:
        "Personalize fonts, colors, and layouts to match your style.",
    },
    {
      icon: <Bot className="h-6 w-6 text-blue-400" />,
      title: "Smart Formatting",
      description:
        "Auto-format your content for perfect presentation every time.",
    },
    {
      icon: <Download className="h-6 w-6 text-blue-400" />,
      title: "Multiple Export Options",
      description: "Download your resume in PDF, Word, or plain text formats.",
    },
  ];

  return (
    <div id="features" className="py-20 relative ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-transparent">
        <div className="text-center transform hover:-translate-y-1 transition-transform duration-300">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Powerful Features to Build Your Perfect Resume
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Everything you need to create professional, ATS-friendly resumes
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center transform group-hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg opacity-50 transform scale-150" />
                  {feature.icon}
                </div>
                <h3 className="ml-3 text-lg font-medium text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
