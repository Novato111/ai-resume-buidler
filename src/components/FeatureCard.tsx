"use client";

import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <div className="relative flex flex-col gap-4 p-6 bg-white/5 rounded-2xl ring-1 ring-white/10 hover:ring-purple-500/20 transition-all">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10">
        <Icon className="h-6 w-6 text-purple-400" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-gray-400">{description}</p>
      </div>
    </div>
  );
}
