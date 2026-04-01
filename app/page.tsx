import Link from "next/link";
import { ArrowRight, Building2, Calendar, Users } from "lucide-react";
import { Hero } from "@/components/hero";
import { StadiumCard } from "@/components/stadium-card";
import { Button } from "@/components/ui/button";
import { heroImages } from "@/lib/images";
import { stadiums } from "@/lib/stadiums";

export default function HomePage() {
  const featuredStadiums = stadiums.slice(0, 4);

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Explore Qatar's World Cup Stadiums"
        subtitle="Hi, I'm Erica! Join me as I explore the amazing stadiums that hosted the 2022 FIFA World Cup in Qatar. Discover stunning architecture, travel tips, and more."
        backgroundImage={heroImages.home}
        size="large"
        badge="Travel Blog"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
            <Link href="/stadiums">View Stadiums</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            <Link href="/about">About Me</Link>
          </Button>
        </div>
      </Hero>

      {/* Stats Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Building2 className="text-primary" size={24} />
                <span className="text-3xl font-bold">8</span>
              </div>
              <p className="text-sm text-muted-foreground">Stadiums</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Calendar className="text-primary" size={24} />
                <span className="text-3xl font-bold">2022</span>
              </div>
              <p className="text-sm text-muted-foreground">World Cup</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="text-primary" size={24} />
                <span className="text-3xl font-bold">1.4M</span>
              </div>
              <p className="text-sm text-muted-foreground">Visitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stadiums Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Stadiums</h2>
              <p className="text-muted-foreground">
                Discover the iconic venues of the 2022 World Cup
              </p>
            </div>
            <Button asChild variant="ghost" className="hidden sm:flex">
              <Link href="/stadiums">
                View All <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStadiums.map((stadium) => (
              <StadiumCard key={stadium.id} stadium={stadium} variant="featured" />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button asChild>
              <Link href="/stadiums">
                View All Stadiums <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About This Project</h2>
            <p className="text-muted-foreground mb-8">
              This website is a travel blog documenting my exploration of
              Qatar&apos;s World Cup stadiums. Here you&apos;ll find information
              about each stadium, travel tips, and my personal experiences
              visiting these amazing venues.
            </p>
            <Button asChild>
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">8</div>
              <p className="text-sm text-muted-foreground">Stadiums Covered</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">10+</div>
              <p className="text-sm text-muted-foreground">Blog Posts</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">5</div>
              <p className="text-sm text-muted-foreground">Travel Guides</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">100+</div>
              <p className="text-sm text-muted-foreground">Photos</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
