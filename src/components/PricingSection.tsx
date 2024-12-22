"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createCheckoutSession } from "./ui/premium/action";
async function handlePremiumClick() {
  const redirectUrl = await createCheckoutSession(
    process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO_MONTHLY!
  );
  window.location.href = redirectUrl;
}

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out our AI resume builder",
    features: [
      "3 Resume Creations",
      "Basic Templates",
      "Export to PDF",
      "Real-time Preview",
      "Basic AI Suggestions",
    ],
    button: {
      text: "Get Started",
      href: "/create",
      variant: "secondary" as const,
    },
  },
  {
    name: "Premium",
    price: "$49",
    description: "Unlock the full potential of AI-powered resume creation",
    features: [
      "Unlimited Resume Creations",
      "Premium Templates",
      "Advanced AI Writing Assistant",
      "Custom Formatting Options",
      "Multiple Export Formats",
      "Cover Letter Generator",
      "LinkedIn Profile Optimization",
      "Priority Support",
    ],
    button: {
      text: "Upgrade to Premium",
      href: "/premium",
      variant: "default" as const,
    },
    popular: true,
  },
];

export default function PricingSection() {
  return (
    <div id="pricing" className="py-24 sm:py-32 scale-75">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Choose the perfect plan for your career journey
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-3xl bg-white/5 px-8 py-10 ring-1 ${
                plan.popular ? "ring-purple-500 relative" : "ring-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 right-8">
                  <div className="inline-flex items-center rounded-full bg-purple-500 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </div>
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold leading-8 text-white">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {plan.price}
                  </span>
                  {plan.price !== "$0" && (
                    <span className="text-sm font-semibold leading-6 text-gray-300">
                      /lifetime
                    </span>
                  )}
                </div>
                <p className="mt-6 text-base leading-7 text-gray-300">
                  {plan.description}
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-300"
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                onClick={handlePremiumClick}
                asChild
                size="lg"
                variant={plan.button.variant}
                className={`mt-8 ${
                  plan.popular ? "bg-purple-500 hover:bg-purple-600" : ""
                }`}
              >
                <Button>{plan.name}</Button>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
