"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Users, ArrowRight } from "lucide-react";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import { heroImages } from "@/lib/images";
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
      <Hero
        title="All Stadiums"
        subtitle="Explore all eight World Cup 2022 venues in Qatar"
        backgroundImage={heroImages.stadiumsPage}
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Sort Controls */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <div className="flex gap-2">
              <Button
                variant={sortBy === "name" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("name")}
              >
                Name
              </Button>
              <Button
                variant={sortBy === "capacity" ? "default" : "outline"}
                size="sm"
                onClick={() => setSortBy("capacity")}
              >
                Capacity
              </Button>
            </div>
          </div>

          {/* Stadium Cards */}
          <div className="space-y-6">
            {sortedStadiums.map((stadium) => (
              <div
                key={stadium.id}
                className="group flex flex-col md:flex-row bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
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
                    <h2 className="text-xl font-semibold">{stadium.name}</h2>
                    <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                      {stadium.capacity.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <MapPin size={14} />
                    {stadium.location}
                  </div>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {stadium.description}
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/stadiums/${stadium.id}`}>
                      View Details <ArrowRight className="ml-1" size={14} />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
