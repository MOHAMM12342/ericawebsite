import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  children?: React.ReactNode;
  size?: "default" | "large";
  badge?: string;
}

export function Hero({
  title,
  subtitle,
  backgroundImage,
  children,
  size = "default",
  badge,
}: HeroProps) {
  return (
    <section
      className={`relative flex items-center justify-center ${
        size === "large" ? "min-h-[80vh]" : "min-h-[50vh]"
      }`}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        {badge && (
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full">
            {badge}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 text-pretty">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
