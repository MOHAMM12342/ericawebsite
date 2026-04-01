import { stadiumCardImagesOrdered, stadiumGalleryImages, homeFeaturedImages } from "./images";

export interface Stadium {
  id: string;
  name: string;
  location: string;
  capacity: number;
  description: string;
  image: string;
  galleryImages: string[];
  features: string[];
  matchesHosted: string[];
}

export const stadiums: Stadium[] = [
  {
    id: "lusail",
    name: "Lusail Stadium",
    location: "Lusail City",
    capacity: 80000,
    description:
      "The crown jewel of Qatar's World Cup venues, Lusail Stadium hosted the 2022 FIFA World Cup Final. Its stunning golden facade, inspired by the interplay of light and shadow from the traditional fanar lantern, creates a mesmerizing spectacle. This architectural masterpiece represents the pinnacle of modern stadium design.",
    image: homeFeaturedImages[0],
    galleryImages: stadiumGalleryImages["lusail"],
    features: [
      "Largest stadium in Qatar",
      "Hosted World Cup Final",
      "Fanar lantern-inspired design",
      "State-of-the-art cooling",
    ],
    matchesHosted: [
      "World Cup Final",
      "Semi-final",
      "Group stage matches",
    ],
  },
  {
    id: "al-bayt",
    name: "Al Bayt Stadium",
    location: "Al Khor",
    capacity: 60000,
    description:
      "Designed to resemble a traditional Bedouin tent (bayt al sha'ar), Al Bayt Stadium pays homage to Qatar's nomadic past. The striking black and white striped exterior creates one of the most visually distinctive stadiums ever built, symbolizing hospitality and the welcoming nature of the Qatari people.",
    image: homeFeaturedImages[1],
    galleryImages: stadiumGalleryImages["al-bayt"],
    features: [
      "Bedouin tent design",
      "Retractable roof",
      "Traditional hospitality theme",
      "Second largest capacity",
    ],
    matchesHosted: [
      "Opening match",
      "Semi-final",
      "Group stage matches",
    ],
  },
  {
    id: "al-janoub",
    name: "Al Janoub Stadium",
    location: "Al Wakrah",
    capacity: 40000,
    description:
      "Designed by the legendary Zaha Hadid, Al Janoub Stadium draws inspiration from the dhow boats that were central to Al Wakrah's pearling history. Its flowing curves and innovative roof design create an unforgettable silhouette against the Qatari skyline.",
    image: homeFeaturedImages[2],
    galleryImages: stadiumGalleryImages["al-janoub"],
    features: [
      "Zaha Hadid design",
      "Dhow boat inspiration",
      "Retractable roof",
      "Pearling heritage theme",
    ],
    matchesHosted: ["Group stage matches", "Round of 16"],
  },
  {
    id: "ahmad-bin-ali",
    name: "Ahmad Bin Ali Stadium",
    location: "Al Rayyan",
    capacity: 40000,
    description:
      "Rising from the desert landscape, Ahmad Bin Ali Stadium celebrates Qatar's culture, history, and wildlife. Its glowing facade features patterns representing the importance of family, the beauty of the desert, native flora and fauna, and local and international trade.",
    image: homeFeaturedImages[3],
    galleryImages: stadiumGalleryImages["ahmad-bin-ali"],
    features: [
      "Desert-inspired design",
      "LED facade",
      "Cultural patterns",
      "Sustainable construction",
    ],
    matchesHosted: ["Group stage matches", "Round of 16"],
  },
  {
    id: "khalifa-international",
    name: "Khalifa International Stadium",
    location: "Aspire Zone",
    capacity: 45416,
    description:
      "A renovated masterpiece with a rich sporting heritage, Khalifa International Stadium has been Qatar's national stadium since 1976. The iconic dual arches and integrated museum make this venue a bridge between Qatar's sporting past and its ambitious future.",
    image: stadiumCardImagesOrdered[4],
    galleryImages: stadiumGalleryImages["khalifa-international"],
    features: [
      "Historic venue since 1976",
      "Iconic dual arches",
      "Sports museum",
      "Athletic track",
    ],
    matchesHosted: [
      "Third place playoff",
      "Group stage matches",
    ],
  },
  {
    id: "stadium-974",
    name: "Stadium 974",
    location: "Ras Abu Aboud",
    capacity: 40000,
    description:
      "The world's first fully demountable World Cup stadium, Stadium 974 is a bold statement of sustainable architecture. Built from 974 repurposed shipping containers (Qatar's international dialing code), this innovative venue showcases what's possible when creativity meets environmental responsibility.",
    image: stadiumCardImagesOrdered[5],
    galleryImages: stadiumGalleryImages["stadium-974"],
    features: [
      "First demountable stadium",
      "974 shipping containers",
      "Sustainable design",
      "Waterfront location",
    ],
    matchesHosted: ["Group stage matches", "Round of 16"],
  },
  {
    id: "education-city",
    name: "Education City Stadium",
    location: "Education City",
    capacity: 40000,
    description:
      "Known as 'The Diamond in the Desert,' Education City Stadium's triangular facade creates a dazzling display of geometric patterns. Surrounded by Qatar's leading universities, this venue represents the nation's commitment to knowledge and innovation.",
    image: stadiumCardImagesOrdered[6],
    galleryImages: stadiumGalleryImages["education-city"],
    features: [
      "Diamond facade design",
      "University district location",
      "LEED certified",
      "Innovation theme",
    ],
    matchesHosted: [
      "Quarter-final",
      "Group stage matches",
    ],
  },
  {
    id: "al-thumama",
    name: "Al Thumama Stadium",
    location: "Al Thumama",
    capacity: 40000,
    description:
      "Inspired by the gahfiya, the traditional woven cap worn throughout the Arab world, Al Thumama Stadium celebrates regional identity and craftsmanship. This distinctively Qatari design honors the coming-of-age moment when young boys begin wearing this symbolic headwear.",
    image: stadiumCardImagesOrdered[7],
    galleryImages: stadiumGalleryImages["al-thumama"],
    features: [
      "Gahfiya cap design",
      "Cultural symbolism",
      "Coming-of-age theme",
      "Local architect",
    ],
    matchesHosted: [
      "Quarter-final",
      "Group stage matches",
    ],
  },
];

export function getStadiumById(id: string): Stadium | undefined {
  return stadiums.find((stadium) => stadium.id === id);
}

export function getStadiumsSortedByName(): Stadium[] {
  return [...stadiums].sort((a, b) => a.name.localeCompare(b.name));
}

export function getStadiumsSortedByCapacity(): Stadium[] {
  return [...stadiums].sort((a, b) => b.capacity - a.capacity);
}
