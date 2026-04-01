"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Plane,
  Train,
  Hotel,
  CreditCard,
  Languages,
  Shield,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import { heroImages, travelGuideImages } from "@/lib/images";

const temperatureData = [
  { month: "Nov", temp: 25 },
  { month: "Dec", temp: 22 },
  { month: "Jan", temp: 18 },
  { month: "Feb", temp: 20 },
  { month: "Mar", temp: 24 },
];

const tips = [
  {
    icon: Plane,
    title: "Getting There",
    description:
      "Fly into Hamad International Airport (DOH). Direct flights operate from most major cities worldwide.",
  },
  {
    icon: Train,
    title: "Public Transport",
    description:
      "The Doha Metro connects all stadiums. A day pass costs around 6 QAR (~$1.65). Taxis and Uber are also available.",
  },
  {
    icon: Hotel,
    title: "Where to Stay",
    description:
      "Options range from luxury hotels to budget apartments. Book early and stay near metro stations for easy access.",
  },
  {
    icon: CreditCard,
    title: "Money",
    description:
      "Currency is Qatari Riyal (QAR). Credit cards are widely accepted. ATMs are available everywhere.",
  },
  {
    icon: Languages,
    title: "Language",
    description:
      "Arabic is official, but English is widely spoken in tourist areas. Signs are bilingual.",
  },
  {
    icon: Shield,
    title: "Safety",
    description:
      "Qatar is one of the safest countries in the world with very low crime rates.",
  },
];

const metroLines = [
  { name: "Red Line", description: "Airport to Lusail (North-South)", color: "bg-red-500" },
  { name: "Green Line", description: "Education City and Al Rayyan", color: "bg-green-500" },
  { name: "Gold Line", description: "Sports City and Al Aziziyah", color: "bg-yellow-500" },
];

const faqs = [
  {
    question: "Do I need a visa to visit Qatar?",
    answer:
      "Citizens of over 90 countries can enter Qatar visa-free for stays up to 90 days. Check the official Qatar government website for the latest visa requirements for your nationality.",
  },
  {
    question: "What is the best time to visit?",
    answer:
      "The ideal time to visit is between November and March when temperatures are comfortable (18-25°C). Summer months (June-August) can be extremely hot with temperatures exceeding 45°C.",
  },
  {
    question: "Can I visit the stadiums now?",
    answer:
      "Yes! Most World Cup stadiums offer guided tours and some host local football matches. Lusail Stadium and Khalifa International Stadium are particularly popular for tours.",
  },
  {
    question: "What should I wear?",
    answer:
      "Qatar has a modest dress code. In public places, shoulders and knees should be covered. At hotels, malls, and tourist areas, dress codes are more relaxed but still conservative by Western standards.",
  },
  {
    question: "Is Qatar expensive?",
    answer:
      "Qatar can be expensive, especially for luxury hotels and dining. However, budget options exist, and public transport is very affordable. A mid-range traveler can expect to spend $100-150 per day.",
  },
];

export default function TravelGuidePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Hero
        title="Travel Guide"
        subtitle="Everything you need to plan your trip to Qatar"
        backgroundImage={heroImages.travelGuidePage}
      />

      {/* Best Time to Visit */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Best Time to Visit</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Qatar has a desert climate with hot summers and mild winters. The
            ideal time to visit for stadium exploration is between November and
            March, when temperatures are comfortable for outdoor activities.
          </p>

          {/* Temperature Chart */}
          <div className="max-w-xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-center">
              Average Temperatures
            </h3>
            <div className="flex items-end justify-center gap-4">
              {temperatureData.map((data) => (
                <div key={data.month} className="flex flex-col items-center">
                  <span className="text-sm font-medium mb-2">{data.temp}C</span>
                  <div
                    className="w-12 bg-primary/80 rounded-t-md"
                    style={{ height: `${data.temp * 4}px` }}
                  />
                  <span className="text-sm text-muted-foreground mt-2">
                    {data.month}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Essential Tips */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Essential Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip) => (
              <div
                key={tip.title}
                className="bg-card rounded-xl p-6 shadow-sm border border-border"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <tip.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                <p className="text-muted-foreground text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metro Guide */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Doha Metro Guide</h2>
              <p className="text-muted-foreground mb-6">
                The Doha Metro is the fastest way to travel between stadiums.
                Three lines cover all major destinations:
              </p>

              <div className="space-y-4 mb-6">
                {metroLines.map((line) => (
                  <div key={line.name} className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full ${line.color}`} />
                    <div>
                      <span className="font-medium">{line.name}:</span>{" "}
                      <span className="text-muted-foreground">
                        {line.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground">
                Operating hours: 6:00 AM - 11:00 PM (extended on event days)
              </p>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src={travelGuideImages.metro}
                alt="Doha Metro"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-4 text-left font-medium hover:bg-muted/50 transition-colors"
                >
                  {faq.question}
                  {openFaq === index ? (
                    <ChevronUp size={20} className="text-muted-foreground" />
                  ) : (
                    <ChevronDown size={20} className="text-muted-foreground" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-4 pb-4 text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-muted-foreground mb-8">
            Start your journey by discovering the amazing stadiums of Qatar!
          </p>
          <Button asChild size="lg">
            <Link href="/stadiums">View All Stadiums</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
