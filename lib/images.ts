/**
 * Central image registry for the Erica Travels Qatar website.
 * All image URLs used across the site are defined here.
 * Update URLs in this file to change images site-wide.
 */

// ─── Hero / Page Backgrounds ─────────────────────────────────────────────────

export const heroImages = {
  home: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?q=80&w=2940",
  stadiumsPage: "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=2940",
  blogPage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2940",
  travelGuidePage: "https://images.unsplash.com/photo-1578895101408-1a36b834405b?q=80&w=2940",
  aboutPage: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2940",
} as const;

// ─── Stadium Card Images (used on the home & stadiums listing pages) ──────────

export const stadiumCardImages: Record<string, string> = {
  lusail: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200",
  "al-bayt": "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200",
  "al-janoub": "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a8?q=80&w=1200",
  "ahmad-bin-ali": "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1200",
  "khalifa-international": "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1200",
  "stadium-974": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200",
  "education-city": "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=1200",
  "al-thumama": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200",
};

/**
 * Ordered array of card images matching the stadiums array order in lib/stadiums.ts.
 * Index 0 = Lusail, 1 = Al Bayt, 2 = Al Janoub, …
 */
export const stadiumCardImagesOrdered: string[] = [
  stadiumCardImages["lusail"],
  stadiumCardImages["al-bayt"],
  stadiumCardImages["al-janoub"],
  stadiumCardImages["ahmad-bin-ali"],
  stadiumCardImages["khalifa-international"],
  stadiumCardImages["stadium-974"],
  stadiumCardImages["education-city"],
  stadiumCardImages["al-thumama"],
];

// ─── Stadium Gallery Images (used on individual stadium detail pages) ─────────

export const stadiumGalleryImages: Record<string, [string, string, string]> = {
  lusail: [
    "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200",
    "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=1200",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200",
  ],
  "al-bayt": [
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200",
    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1200",
    "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a8?q=80&w=1200",
  ],
  "al-janoub": [
    "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a8?q=80&w=1200",
    "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200",
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200",
  ],
  "ahmad-bin-ali": [
    "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1200",
    "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=1200",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200",
  ],
  "khalifa-international": [
    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1200",
    "https://images.unsplash.com/photo-1459865264687-595d652de67e?q=80&w=1200",
    "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200",
  ],
  "stadium-974": [
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200",
    "https://images.unsplash.com/photo-1518604666860-9ed391f76460?q=80&w=1200",
    "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a8?q=80&w=1200",
  ],
  "education-city": [
    "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?q=80&w=1200",
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200",
    "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1200",
  ],
  "al-thumama": [
    "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200",
    "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200",
  ],
};

// ─── Home Page – Featured Stadium Cards (overrides with specific imagery) ─────

export const homeFeaturedImages: [string, string, string, string] = [
  "https://aemagazine.ma/wp-content/uploads/2022/11/qatars-lusail-stadium-designed-by-foster-plus-partners-hosts-its-first-game_7-1024x510.jpg",
  "https://qa.sakan.co/blog/wp-content/uploads/2025/05/%D8%A7%D8%B3%D8%AA%D8%A7%D8%AF-%D8%A7%D9%84%D8%A8%D9%8A%D8%AA.webp",
  "https://arquitecturaviva.com/assets/uploads/obras/44269/av_imagen.webp",
  "https://arqa.com/wp-content/uploads/2022/12/pattern004_n2_jpg.jpg",
];

// ─── Stadiums Page – Map Section ──────────────────────────────────────────────

export const mapImage =
  "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200";

// ─── Travel Guide Page ────────────────────────────────────────────────────────

export const travelGuideImages = {
  metro: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200",
} as const;

// ─── Blog Post Images ─────────────────────────────────────────────────────────

export const blogImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1200",
  "2": "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200",
  "3": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200",
  "4": "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a8?q=80&w=1200",
  "5": "https://images.unsplash.com/photo-1578895101408-1a36b834405b?q=80&w=1200",
  "6": "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200",
  "7": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200",
  "8": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1200",
};

/** Large (hero-width) versions of blog images used on the individual post page */
export const blogHeroImages: Record<string, string> = {
  "1": "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=1600",
  "2": "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1600",
};

// ─── About Page ───────────────────────────────────────────────────────────────

export const aboutImages = {
  portrait: "https://thewanderingquinn.com/wp-content/uploads/2023/01/IMG_3765-1440x1080.jpg",
  portraitSmall: "https://thewanderingquinn.com/wp-content/uploads/2023/01/IMG_3765-1440x1080.jpg",
  gallery: [
    "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=600",
    "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=600",
    "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a8?q=80&w=600",
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600",
  ],
} as const;
