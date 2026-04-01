import Image from "next/image";
import Link from "next/link";
import { MapPin, Users } from "lucide-react";
import type { Stadium } from "@/lib/stadiums";

interface StadiumCardProps {
  stadium: Stadium;
  variant?: "default" | "featured";
}

export function StadiumCard({ stadium, variant = "default" }: StadiumCardProps) {
  if (variant === "featured") {
    return (
      <Link
        href={`/stadiums/${stadium.id}`}
        className="group relative block overflow-hidden rounded-xl bg-card shadow-md transition-transform hover:scale-[1.02]"
      >
        <div className="relative aspect-[4/3]">
          <Image
            src={stadium.image}
            alt={stadium.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-lg font-semibold mb-1">{stadium.name}</h3>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {stadium.location}
              </span>
              <span className="flex items-center gap-1">
                <Users size={14} />
                Capacity: {stadium.capacity.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/stadiums/${stadium.id}`}
      className="group block overflow-hidden rounded-xl bg-card border border-border shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={stadium.image}
          alt={stadium.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
          unoptimized
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
          {stadium.name}
        </h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <MapPin size={14} />
            {stadium.location}
          </span>
          <span className="flex items-center gap-1">
            <Users size={14} />
            {stadium.capacity.toLocaleString()}
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {stadium.description}
        </p>
      </div>
    </Link>
  );
}
