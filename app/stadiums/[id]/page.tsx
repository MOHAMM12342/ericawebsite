import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Users, Check } from "lucide-react";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import { getStadiumById, stadiums } from "@/lib/stadiums";

interface StadiumDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return stadiums.map((stadium) => ({
    id: stadium.id,
  }));
}

export async function generateMetadata({ params }: StadiumDetailPageProps) {
  const { id } = await params;
  const stadium = getStadiumById(id);

  if (!stadium) {
    return { title: "Stadium Not Found" };
  }

  return {
    title: `${stadium.name} | Erica Travels Qatar`,
    description: stadium.description,
  };
}

export default async function StadiumDetailPage({ params }: StadiumDetailPageProps) {
  const { id } = await params;
  const stadium = getStadiumById(id);

  if (!stadium) {
    notFound();
  }

  return (
    <>
      <Hero
        title={stadium.name}
        subtitle={stadium.location}
        backgroundImage={stadium.image}
      />

      <section className="py-12">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/stadiums">
              <ArrowLeft className="mr-2" size={16} /> Back to Stadiums
            </Link>
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {stadium.description}
                </p>
              </div>

              {/* Gallery */}
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {stadium.galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`${stadium.name} gallery image ${index + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Matches Hosted */}
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Matches Hosted</h2>
                <ul className="space-y-2">
                  {stadium.matchesHosted.map((match, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-muted-foreground"
                    >
                      <Check size={16} className="text-primary" />
                      {match}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-muted rounded-xl p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4">Stadium Info</h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Capacity</p>
                      <p className="font-semibold">
                        {stadium.capacity.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold">{stadium.location}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border mt-6 pt-6">
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {stadium.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <Check size={14} className="text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
