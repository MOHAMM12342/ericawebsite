import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Users, Check } from "lucide-react";
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
      {/* Hero Section with Stadium Image */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={stadium.image}
          alt={stadium.name}
          fill
          className="object-cover"
          unoptimized
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-20 pb-12">
          <span className="inline-flex items-center bg-[#EEF2FF] border border-[#C7D4FB] text-[#1B4FF0] text-xs font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide">
            Stadium
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
            {stadium.name}
          </h1>
          <div className="flex items-center gap-1.5 text-white/80">
            <MapPin size={16} />
            <span className="text-lg">{stadium.location}</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#F3F4F6] px-6 md:px-20 py-12">
        <Link
          href="/stadiums"
          className="inline-flex items-center text-[15px] font-semibold text-[#1B4FF0] hover:underline mb-8"
        >
          <ArrowLeft className="mr-2" size={16} /> Back to Stadiums
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
              {stadium.description}
            </p>

            {/* Gallery */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#0D0E14] mb-4">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {stadium.galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video rounded-xl overflow-hidden"
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
            <div>
              <h2 className="text-2xl font-bold text-[#0D0E14] mb-4">Matches Hosted</h2>
              <ul className="space-y-3">
                {stadium.matchesHosted.map((match, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-[#6B7280]"
                  >
                    <Check size={16} className="text-[#1B4FF0]" />
                    {match}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 sticky top-24">
              <h3 className="text-lg font-bold text-[#0D0E14] mb-4">Stadium Info</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EEF2FF] flex items-center justify-center">
                    <Users size={20} className="text-[#1B4FF0]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#6B7280]">Capacity</p>
                    <p className="font-semibold text-[#0D0E14]">
                      {stadium.capacity.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EEF2FF] flex items-center justify-center">
                    <MapPin size={20} className="text-[#1B4FF0]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#6B7280]">Location</p>
                    <p className="font-semibold text-[#0D0E14]">{stadium.location}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#E5E7EB] mt-6 pt-6">
                <h4 className="font-bold text-[#0D0E14] mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {stadium.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-sm text-[#6B7280]"
                    >
                      <Check size={14} className="text-[#1B4FF0]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
