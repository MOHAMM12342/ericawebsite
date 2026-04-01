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
import { travelGuideImages } from "@/lib/images";

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
      "The ideal time to visit is between November and March when temperatures are comfortable (18-25C). Summer months (June-August) can be extremely hot with temperatures exceeding 45C.",
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
      {/* Hero Section */}
      <section className="bg-[#F3F4F6] px-6 md:px-20 py-16">
        <span className="inline-flex items-center bg-[#EEF2FF] border border-[#C7D4FB] text-[#1B4FF0] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
          Guide
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[#0D0E14] mb-4">
          Travel Guide
        </h1>
        <p className="text-base font-normal text-[#6B7280] leading-relaxed max-w-xl">
          Everything you need to plan your trip to Qatar.
        </p>
      </section>

      {/* Best Time to Visit */}
      <section className="bg-[#F3F4F6] px-6 md:px-20 py-12">
        <h2 className="text-3xl font-extrabold text-[#0D0E14] mb-4 text-center tracking-tight">
          Best Time to Visit
        </h2>
        <p className="text-[#6B7280] text-center max-w-2xl mx-auto mb-8 leading-relaxed">
          Qatar has a desert climate with hot summers and mild winters. The
          ideal time to visit for stadium exploration is between November and
          March, when temperatures are comfortable for outdoor activities.
        </p>

        {/* Temperature Chart */}
        <div className="max-w-xl mx-auto bg-white rounded-xl p-6">
          <h3 className="text-lg font-bold text-[#0D0E14] mb-4 text-center">
            Average Temperatures
          </h3>
          <div className="flex items-end justify-center gap-6">
            {temperatureData.map((data) => (
              <div key={data.month} className="flex flex-col items-center">
                <span className="text-sm font-semibold text-[#0D0E14] mb-2">{data.temp}C</span>
                <div
                  className="w-12 bg-[#1B4FF0] rounded-t-md"
                  style={{ height: `${data.temp * 4}px` }}
                />
                <span className="text-sm text-[#6B7280] mt-2 font-medium">
                  {data.month}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Essential Tips */}
      <section className="bg-white px-6 md:px-20 py-16">
        <h2 className="text-3xl font-extrabold text-[#0D0E14] mb-8 text-center tracking-tight">
          Essential Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.title}
              className="bg-[#F3F4F6] rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-full bg-[#EEF2FF] flex items-center justify-center mb-4">
                <tip.icon size={24} className="text-[#1B4FF0]" />
              </div>
              <h3 className="text-lg font-bold text-[#0D0E14] mb-2">{tip.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white px-6 md:px-20 py-16">
        <h2 className="text-3xl font-extrabold text-[#0D0E14] mb-8 text-center tracking-tight">
          Frequently Asked Questions
        </h2>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#F3F4F6] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left font-semibold text-[#0D0E14] hover:bg-[#E5E7EB]/50 transition-colors"
              >
                {faq.question}
                {openFaq === index ? (
                  <ChevronUp size={20} className="text-[#6B7280]" />
                ) : (
                  <ChevronDown size={20} className="text-[#6B7280]" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-4 pb-4 text-[#6B7280] leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F3F4F6] px-6 md:px-20 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#0D0E14] mb-4 tracking-tight">
            Ready to Explore?
          </h2>
          <p className="text-[#6B7280] mb-8">
            Start your journey by discovering the amazing stadiums of Qatar!
          </p>
          <Link
            href="/stadiums"
            className="inline-flex items-center gap-2 bg-[#1B4FF0] text-white text-[15px] font-semibold px-6 py-3 rounded-lg hover:bg-[#163DD0] transition-all hover:-translate-y-0.5"
          >
            View All Stadiums
          </Link>
        </div>
      </section>
    </>
  );
}
