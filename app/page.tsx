import Link from "next/link";
import Image from "next/image";
import { MapPin, Trophy, Users } from "lucide-react";
import { homeFeaturedImages } from "@/lib/images";

const featuredStadiums = [
  {
    id: "lusail",
    name: "Lusail Stadium",
    location: "Lusail City",
    capacity: "80,000",
    image: homeFeaturedImages[0],
  },
  {
    id: "al-bayt",
    name: "Al Bayt Stadium",
    location: "Al Khor",
    capacity: "60,000",
    image: homeFeaturedImages[1],
  },
  {
    id: "al-janoub",
    name: "Al Janoub Stadium",
    location: "Al Wakrah",
    capacity: "40,000",
    image: homeFeaturedImages[2],
  },
  {
    id: "ahmad-bin-ali",
    name: "Ahmad Bin Ali Stadium",
    location: "Al Rayyan",
    capacity: "40,000",
    image: homeFeaturedImages[3],
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#F3F4F6] px-6 md:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center bg-[#EEF2FF] border border-[#C7D4FB] text-[#1B4FF0] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
              Travel Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[#0D0E14] mb-6">
              Explore Qatar&apos;s<br />World Cup Stadiums
            </h1>
            <p className="text-base font-normal text-[#6B7280] leading-relaxed max-w-lg mb-10">
              Hi, I&apos;m Erica! Join me as I explore the amazing stadiums that hosted the 2022 FIFA World Cup in Qatar. Discover stunning architecture, travel tips, and more.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <Link
                href="/stadiums"
                className="inline-flex items-center gap-2 bg-[#1B4FF0] text-white text-[15px] font-semibold px-6 py-3 rounded-lg hover:bg-[#163DD0] transition-all hover:-translate-y-0.5"
              >
                View Stadiums &nbsp;&rarr;
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center bg-white text-[#0D0E14] text-[15px] font-semibold px-6 py-3 rounded-lg border-[1.5px] border-[#E5E7EB] hover:border-[#999] transition-all hover:-translate-y-0.5"
              >
                About Me
              </Link>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[16/11] bg-[#0E1220] relative">
            {/* Stadium tunnel SVG illustration */}
            <svg viewBox="0 0 700 490" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" className="w-full h-full absolute inset-0">
              <defs>
                <linearGradient id="tunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#0a0d18" }} />
                  <stop offset="100%" style={{ stopColor: "#111827" }} />
                </linearGradient>
                <radialGradient id="pitchGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{ stopColor: "#16a34a", stopOpacity: 0.9 }} />
                  <stop offset="100%" style={{ stopColor: "#065f46", stopOpacity: 0.4 }} />
                </radialGradient>
              </defs>
              <rect width="700" height="490" fill="url(#tunGrad)" />
              <polygon points="0,0 220,120 220,370 0,490" fill="#1a1c28" />
              <polygon points="220,120 280,160 280,330 220,370" fill="#151722" />
              <polygon points="700,0 480,120 480,370 700,490" fill="#1a1c28" />
              <polygon points="480,120 420,160 420,330 480,370" fill="#151722" />
              <polygon points="0,0 700,0 480,120 220,120" fill="#12141f" />
              <polygon points="0,490 700,490 480,370 220,370" fill="#0d0f1a" />
              <ellipse cx="350" cy="245" rx="135" ry="95" fill="url(#pitchGlow)" />
              <rect x="220" y="160" width="260" height="165" fill="url(#pitchGlow)" rx="4" />
              <rect x="230" y="200" width="240" height="115" fill="#15803d" opacity="0.85" />
              <line x1="350" y1="200" x2="350" y2="315" stroke="white" strokeWidth="1.5" opacity="0.5" />
              <ellipse cx="350" cy="257" rx="40" ry="28" fill="none" stroke="white" strokeWidth="1.5" opacity="0.5" />
              <g opacity="0.35">
                <rect x="30" y="140" width="18" height="60" fill="#dc2626" rx="2" />
                <ellipse cx="39" cy="135" rx="10" ry="10" fill="#dc2626" />
                <rect x="70" y="155" width="16" height="55" fill="#dc2626" rx="2" />
                <ellipse cx="78" cy="150" rx="9" ry="9" fill="#dc2626" />
                <rect x="108" y="160" width="15" height="52" fill="#dc2626" rx="2" />
                <rect x="145" y="165" width="14" height="50" fill="#dc2626" rx="2" />
                <rect x="178" y="168" width="14" height="48" fill="#dc2626" rx="2" />
                <rect x="652" y="140" width="18" height="60" fill="#dc2626" rx="2" />
                <ellipse cx="661" cy="135" rx="10" ry="10" fill="#dc2626" />
                <rect x="614" y="155" width="16" height="55" fill="#dc2626" rx="2" />
                <rect x="577" y="160" width="15" height="52" fill="#dc2626" rx="2" />
                <rect x="543" y="165" width="14" height="50" fill="#dc2626" rx="2" />
                <rect x="508" y="168" width="14" height="48" fill="#dc2626" rx="2" />
              </g>
              <polygon points="0,490 700,490 480,370 220,370" fill="#090b14" opacity="0.6" />
              <line x1="350" y1="370" x2="350" y2="490" stroke="#16a34a" strokeWidth="1" opacity="0.2" />
              <line x1="250" y1="30" x2="310" y2="120" stroke="#ffffff" strokeWidth="1" opacity="0.07" />
              <line x1="350" y1="20" x2="350" y2="120" stroke="#ffffff" strokeWidth="1.5" opacity="0.1" />
              <line x1="450" y1="30" x2="390" y2="120" stroke="#ffffff" strokeWidth="1" opacity="0.07" />
            </svg>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#F3F4F6] px-6 md:px-20 py-5 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-8 flex flex-col items-center gap-1">
            <div className="text-[#1B4FF0] mb-2">
              <MapPin size={28} strokeWidth={1.8} />
            </div>
            <div className="text-4xl font-extrabold tracking-tight text-[#0D0E14]">8</div>
            <div className="text-sm font-medium text-[#6B7280]">Stadiums</div>
          </div>
          <div className="bg-white rounded-xl p-8 flex flex-col items-center gap-1">
            <div className="text-[#1B4FF0] mb-2">
              <Trophy size={28} strokeWidth={1.8} />
            </div>
            <div className="text-4xl font-extrabold tracking-tight text-[#0D0E14]">2022</div>
            <div className="text-sm font-medium text-[#6B7280]">World Cup</div>
          </div>
          <div className="bg-white rounded-xl p-8 flex flex-col items-center gap-1">
            <div className="text-[#1B4FF0] mb-2">
              <Users size={28} strokeWidth={1.8} />
            </div>
            <div className="text-4xl font-extrabold tracking-tight text-[#0D0E14]">1.4M</div>
            <div className="text-sm font-medium text-[#6B7280]">Visitors</div>
          </div>
        </div>
      </section>

      {/* Featured Stadiums Section */}
      <section className="bg-[#F3F4F6] px-6 md:px-20 py-5 pb-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0D0E14]">Featured Stadiums</h2>
            <p className="text-[15px] text-[#6B7280] mt-1.5">Discover the iconic venues of the 2022 World Cup</p>
          </div>
          <Link href="/stadiums" className="text-[15px] font-semibold text-[#1B4FF0] whitespace-nowrap pb-0.5 hidden md:block">
            View All &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredStadiums.map((stadium) => (
            <Link
              key={stadium.id}
              href={`/stadiums/${stadium.id}`}
              className="bg-white rounded-xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={stadium.image}
                  alt={stadium.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold tracking-tight text-[#0D0E14] mb-2">{stadium.name}</h3>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1.5 text-[13px] text-[#6B7280] font-medium">
                    <MapPin size={13} strokeWidth={2} className="flex-shrink-0" />
                    {stadium.location}
                  </div>
                  <div className="text-[13px] text-[#6B7280] font-medium">
                    Capacity: {stadium.capacity}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link href="/stadiums" className="text-[15px] font-semibold text-[#1B4FF0]">
            View All &rarr;
          </Link>
        </div>
      </section>

      {/* About This Project Section */}
      <section className="bg-[#F3F4F6] px-6 md:px-20 py-5 pb-20">
        <div className="bg-white rounded-2xl p-10 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0D0E14] mb-5">About This Project</h2>
            <p className="text-[15px] text-[#6B7280] leading-relaxed mb-8">
              This website is a travel blog documenting my exploration of Qatar&apos;s World Cup stadiums. Here you&apos;ll find information about each stadium, travel tips, and my personal experiences visiting these amazing venues.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center bg-white text-[#0D0E14] text-[15px] font-semibold px-6 py-3 rounded-lg border-[1.5px] border-[#E5E7EB] hover:border-[#999] transition-all hover:-translate-y-0.5"
            >
              Learn More About Me
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#F3F4F6] rounded-lg p-6 text-center">
              <div className="text-3xl font-extrabold text-[#1B4FF0] tracking-tight">8</div>
              <div className="text-[13px] text-[#6B7280] font-medium mt-1">Stadiums Covered</div>
            </div>
            <div className="bg-[#F3F4F6] rounded-lg p-6 text-center">
              <div className="text-3xl font-extrabold text-[#1B4FF0] tracking-tight">10+</div>
              <div className="text-[13px] text-[#6B7280] font-medium mt-1">Blog Posts</div>
            </div>
            <div className="bg-[#F3F4F6] rounded-lg p-6 text-center">
              <div className="text-3xl font-extrabold text-[#1B4FF0] tracking-tight">5</div>
              <div className="text-[13px] text-[#6B7280] font-medium mt-1">Travel Guides</div>
            </div>
            <div className="bg-[#F3F4F6] rounded-lg p-6 text-center">
              <div className="text-3xl font-extrabold text-[#1B4FF0] tracking-tight">100+</div>
              <div className="text-[13px] text-[#6B7280] font-medium mt-1">Photos</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
