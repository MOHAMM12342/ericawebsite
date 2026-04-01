import Image from "next/image";
import Link from "next/link";
import { MapPin, Camera, BookOpen, Building2 } from "lucide-react";
import { aboutImages } from "@/lib/images";

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
      {/* Hero Section */}
      <section className="bg-[#F3F4F6] px-6 md:px-20 py-16">
        <span className="inline-flex items-center bg-[#EEF2FF] border border-[#C7D4FB] text-[#1B4FF0] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
          About
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[#0D0E14] mb-4">
          About Me
        </h1>
        <p className="text-base font-normal text-[#6B7280] leading-relaxed max-w-xl">
          Hi! I&apos;m Erica, a travel blogger exploring Qatar&apos;s World Cup stadiums.
        </p>
      </section>

      {/* Location Badge */}
      <div className="bg-[#F3F4F6] px-6 md:px-20 pb-8">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E5E7EB] rounded-full shadow-sm">
          <MapPin size={16} className="text-[#1B4FF0]" />
          <span className="text-sm font-medium text-[#0D0E14]">Currently in Doha, Qatar</span>
        </span>
      </div>

      {/* My Story */}
      <section className="bg-[#F3F4F6] px-6 md:px-20 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-12">
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
              <h2 className="text-3xl font-extrabold text-[#0D0E14] mb-6 tracking-tight">My Story</h2>
              <div className="space-y-4 text-[#6B7280] leading-relaxed">
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
                    <div className="text-3xl font-extrabold text-[#1B4FF0]">
                      {stat.value}
                    </div>
                    <p className="text-sm text-[#6B7280]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="bg-white px-6 md:px-20 py-16">
        <h2 className="text-3xl font-extrabold text-[#0D0E14] mb-8 text-center tracking-tight">
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="bg-[#F3F4F6] rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#EEF2FF] flex items-center justify-center mx-auto mb-4">
                <activity.icon size={28} className="text-[#1B4FF0]" />
              </div>
              <h3 className="text-lg font-bold text-[#0D0E14] mb-2">{activity.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="bg-[#F3F4F6] px-6 md:px-20 py-16">
        <h2 className="text-3xl font-extrabold text-[#0D0E14] mb-8 text-center tracking-tight">
          Photo Gallery
        </h2>
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
      </section>

      {/* CTA */}
      <section className="bg-white px-6 md:px-20 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#0D0E14] mb-4 tracking-tight">
            Ready to Explore?
          </h2>
          <p className="text-[#6B7280] mb-8">
            Check out my stadium guides and start planning your trip to Qatar!
          </p>
          <Link
            href="/stadiums"
            className="inline-flex items-center gap-2 bg-[#1B4FF0] text-white text-[15px] font-semibold px-6 py-3 rounded-lg hover:bg-[#163DD0] transition-all hover:-translate-y-0.5"
          >
            View Stadiums
          </Link>
        </div>
      </section>
    </>
  );
}
