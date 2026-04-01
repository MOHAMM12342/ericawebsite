import Image from "next/image";
import Link from "next/link";
import { MapPin, Camera, BookOpen, Building2 } from "lucide-react";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import { heroImages, aboutImages } from "@/lib/images";

const stats = [
  { value: "30+", label: "Countries Visited" },
  { value: "8", label: "Stadiums Explored" },
  { value: "100+", label: "Photos Shared" },
];

const activities = [
  {
    icon: Camera,
    title: "Photography",
    description: "Capturing beautiful moments at stadiums and destinations",
  },
  {
    icon: BookOpen,
    title: "Travel Guides",
    description: "Creating helpful guides for fellow travelers",
  },
  {
    icon: Building2,
    title: "Stadium Reviews",
    description: "Detailed reviews of Qatar's World Cup venues",
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Me"
        subtitle="Hi! I'm Erica, a travel blogger exploring Qatar's World Cup stadiums"
        backgroundImage={heroImages.aboutPage}
      />

      {/* Location Badge */}
      <div className="flex justify-center -mt-6 relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full shadow-sm">
          <MapPin size={16} className="text-primary" />
          <span className="text-sm font-medium">Currently in Doha, Qatar</span>
        </span>
      </div>

      {/* My Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src={aboutImages.portrait}
                alt="Erica - Travel Blogger"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m Erica, a passionate travel blogger with a love for
                  exploring the world&apos;s most incredible destinations. My
                  journey into travel content creation began with a few photos
                  shared on social media during a trip to Japan.
                </p>
                <p>
                  When Qatar was announced as the host of the 2022 FIFA World
                  Cup, I knew I had to be there. Not just for the football, but
                  for the architecture, the culture, and the chance to witness
                  history.
                </p>
                <p>
                  I spent months documenting every stadium, learning the stories
                  behind their designs, and understanding how Qatar transformed
                  itself into a world-class destination.
                </p>
                <p>
                  This website is my way of sharing everything I learned with
                  you!
                </p>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="bg-card rounded-xl p-6 text-center shadow-sm border border-border"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <activity.icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{activity.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {aboutImages.gallery.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden"
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-muted-foreground mb-8">
            Check out my stadium guides and start planning your trip to Qatar!
          </p>
          <Button asChild size="lg">
            <Link href="/stadiums">View Stadiums</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
