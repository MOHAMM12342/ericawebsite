"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight } from "lucide-react";
import {
  stadiums,
  getStadiumsSortedByName,
  getStadiumsSortedByCapacity,
} from "@/lib/stadiums";

type SortOption = "name" | "capacity";

export default function StadiumsPage() {
  const [sortBy, setSortBy] = useState<SortOption>("name");

  const sortedStadiums =
    sortBy === "name" ? getStadiumsSortedByName() : getStadiumsSortedByCapacity();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#F3F4F6] px-6 md:px-20 py-16">
        <span className="inline-flex items-center bg-[#EEF2FF] border border-[#C7D4FB] text-[#1B4FF0] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
          Explore
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[#0D0E14] mb-4">
          All Stadiums
        </h1>
        <p className="text-base font-normal text-[#6B7280] leading-relaxed max-w-xl">
          Explore all eight World Cup 2022 venues in Qatar. Each stadium has its own unique story and architectural design.
        </p>
      </section>

      {/* Content Section */}
      <section className="bg-[#F3F4F6] px-6 md:px-20 pb-20">
        {/* Sort Controls */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-sm text-[#6B7280]">Sort by:</span>
          <div className="flex gap-2">
            <button
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                sortBy === "name"
                  ? "bg-[#1B4FF0] text-white"
                  : "bg-white text-[#0D0E14] border border-[#E5E7EB] hover:border-[#999]"
              }`}
              onClick={() => setSortBy("name")}
            >
              Name
            </button>
            <button
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                sortBy === "capacity"
                  ? "bg-[#1B4FF0] text-white"
                  : "bg-white text-[#0D0E14] border border-[#E5E7EB] hover:border-[#999]"
              }`}
              onClick={() => setSortBy("capacity")}
            >
              Capacity
            </button>
          </div>
        </div>

        {/* Stadium Cards */}
        <div className="space-y-6">
          {sortedStadiums.map((stadium) => (
            <div
              key={stadium.id}
              className="group flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="relative md:w-80 aspect-video md:aspect-auto flex-shrink-0">
                <Image
                  src={stadium.image}
                  alt={stadium.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-1 p-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h2 className="text-xl font-bold text-[#0D0E14]">{stadium.name}</h2>
                  <span className="px-3 py-1 text-xs font-semibold bg-[#EEF2FF] text-[#1B4FF0] rounded-full">
                    {stadium.capacity.toLocaleString()} seats
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-[#6B7280] font-medium mb-3">
                  <MapPin size={14} />
                  {stadium.location}
                </div>
                <p className="text-[#6B7280] mb-4 line-clamp-2 leading-relaxed">
                  {stadium.description}
                </p>
                <Link
                  href={`/stadiums/${stadium.id}`}
                  className="inline-flex items-center text-[15px] font-semibold text-[#1B4FF0] hover:underline"
                >
                  View Details <ArrowRight className="ml-1" size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
