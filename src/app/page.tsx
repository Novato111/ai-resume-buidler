"use client";

import AIShowcase from "@/components/AIShowcase";
import { CardStackDemo } from "@/components/CardStackDemo";

import FeaturesGrid from "@/components/FeaturesGrid";


import { Cover } from "@/components/ui/cover";
import { ArrowRight, CheckCircle2,  FileCheck,  FileCog, FileDown, Github, Linkedin, NotebookPen, Shield, Sparkles, Star } from "lucide-react";
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
    <>
      <header className="container mx-auto   ">
        <nav className="flex items-center justify-between gap-24 ">
          <div className="flex items-center space-x-3 ">

            <span className="text-xl font-bold tracking-tight">ResumeAi</span>
          </div>
          <div className="hidden md:flex items-center space-x-12">
            <a
              href="#features"
              className="text-white -600 hover:text-indigo-600 transition-colors"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-white y-600 hover:text-indigo-600 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#testimonials"
              className="text-white -600 hover:text-indigo-600 transition-colors"
            >
              Testimonials
            </a>
          </div>
          <Link  href={"/resume"}className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl">

          </Link>
        </nav>
      </header>


      <div className="relative min-h-screen bg-white/0">
        {/* Grid Background */}

      
     

        {/* Main Content */}
        <main className="relative z-10 flex min-h-screen flex-col items-center justify-center gap-6 px-8 text-center md:flex-row md:text-start lg:gap-8">
          <div className="max-w-prose space-y-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-full mb-8">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Powered by GPT-4</span>
            </div>
            <h1 className="font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-6xl">
                Build Your <Cover>Resume</Cover>
                <span className="inline-block bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
                  The Smart Way
                </span>
              </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Join over 1 million professionals who've transformed their careers with our AI-powered resume builder. Stand out from the competition with perfectly crafted resumes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
            <Link href={"/resume"} className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-10 py-4 rounded-lg hover:from-indigo-700 hover:to-violet-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group">
 Create Resume for Free
  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
</Link>

            
            </div>
            <div className="mt-12 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img 
                    key={i}
                    src={`https://i.pravatar.cc/40?img=${i}`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div className="flex items-center space-x-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">4.9/5</span> from 10,000+ reviews
              </p>
            </div>
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
          
        {/* Pricing */}
        <section id="pricing" className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-20">
            Choose Your <span className="gradient-text">Perfect Plan</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard 
              title="Basic"
              price="Free"
              features={[
                "1 Professional Template",
                "Basic AI Suggestions",
                "Export to PDF",
                "24/7 Support"
              ]}
              buttonText="Get Started"
              highlighted={false}
            />
            <PricingCard 
              title="Professional"
              price="$19"
              period="/month"
              features={[
                "All Basic Features",
                "30+ Premium Templates",
                "Advanced AI Writing",
                "LinkedIn Integration",
                "Multiple Resume Versions",
                "Priority Support"
              ]}
              buttonText="Start Free Trial"
              highlighted={true}
            />
            <PricingCard 
              title="Enterprise"
              price="$49"
              period="/month"
              features={[
                "All Pro Features",
                "Custom Branding",
                "Team Management",
                "API Access",
                "Dedicated Account Manager",
                "Custom AI Training"
              ]}
              buttonText="Contact Sales"
              highlighted={false}
            />
          </div>
        </div>
      </section>
        </div>

        <FeaturesGrid></FeaturesGrid>
      </div>
      <footer className="bg-black text-white py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <FileCheck className="h-8 w-8" />
                <span className="text-2xl font-bold">ResumeAI</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Creating perfect resumes with the power of artificial intelligence.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Product</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Templates</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-6">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ResumeAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

interface PricingCardProps {
  title: string;
  price: string | number;
  period?: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
}

function PricingCard({ title, price, period = "", features, buttonText, highlighted }:PricingCardProps) {
  return (
    <div className={`rounded-2xl p-8 hover-card ${
      highlighted 
        ? 'bg-gradient-to-br from-indigo-600 to-violet-600 text-white' 
        : 'bg-white text-black' 
    }`}>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="mb-8">
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-sm opacity-80">{period}</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full py-4 rounded-lg transition-all ${
        highlighted
          ? 'bg-white text-indigo-600 hover:bg-gray-100'
          : 'bg-black text-white hover:bg-gray-900'
      }`}>
        {buttonText}
      </button>
    </div>
  );
}
