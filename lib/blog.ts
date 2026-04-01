import { blogImages, blogHeroImages } from "./images";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  heroImage?: string;
}

export const blogCategories = [
  "All",
  "Stadium Reviews",
  "Travel Tips",
  "Culture",
  "Photography",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Inside Lusail Stadium: The Crown Jewel of Qatar",
    excerpt:
      "My first-hand experience exploring the venue that hosted the 2022 World Cup Final.",
    content: `
      <p>Stepping into Lusail Stadium for the first time was an experience I'll never forget. The sheer scale of this architectural marvel took my breath away. With a capacity of 80,000, it's the largest stadium in Qatar and was designed to host the most important match of the 2022 FIFA World Cup – the final.</p>
      
      <h2>The Design</h2>
      <p>The stadium's golden facade is inspired by the traditional fanar lantern, creating a mesmerizing interplay of light and shadow. The bowl-shaped design ensures excellent sightlines from every seat, while the state-of-the-art cooling system keeps fans comfortable despite the desert heat.</p>
      
      <h2>Getting There</h2>
      <p>The Doha Metro makes reaching Lusail Stadium incredibly easy. The Red Line takes you directly to Lusail station, from where it's a short walk to the venue. I recommend arriving early to explore the surrounding Lusail City, a futuristic development that's transforming into Qatar's new administrative capital.</p>
      
      <h2>My Experience</h2>
      <p>Walking through the concourses, I was struck by the attention to detail everywhere. The food options are excellent, ranging from local Qatari cuisine to international favorites. The atmosphere, even without a match, was electric – you could feel the history that was made here.</p>
    `,
    category: "Stadium Reviews",
    date: "March 15, 2024",
    readTime: "8 min",
    image: blogImages["1"],
    heroImage: blogHeroImages["1"],
  },
  {
    id: "2",
    title: "Al Bayt Stadium: A Tribute to Bedouin Culture",
    excerpt:
      "The tent-inspired design of Al Bayt Stadium is a love letter to Qatar's nomadic heritage.",
    content: `
      <p>Al Bayt Stadium is perhaps the most visually striking of all Qatar's World Cup venues. Its design, inspired by the traditional Bedouin tent (bayt al sha'ar), is a powerful tribute to Qatar's nomadic heritage.</p>
      
      <h2>The Tent Design</h2>
      <p>The black and white striped exterior creates one of the most distinctive stadium silhouettes I've ever seen. The tent motif represents hospitality – a core value in Bedouin culture and Qatari society.</p>
      
      <h2>Inside the Stadium</h2>
      <p>Beyond its stunning exterior, Al Bayt offers an incredible match-day experience. The retractable roof can open or close in about 20 minutes, allowing organizers to adapt to weather conditions.</p>
    `,
    category: "Stadium Reviews",
    date: "March 10, 2024",
    readTime: "6 min",
    image: blogImages["2"],
    heroImage: blogHeroImages["2"],
  },
  {
    id: "3",
    title: "Ultimate Guide to the Doha Metro",
    excerpt:
      "Everything you need to know about using Qatar's metro system for stadium visits.",
    content: `
      <p>The Doha Metro is your best friend when visiting Qatar's World Cup stadiums. This modern, efficient system connects most major venues and tourist destinations.</p>
      
      <h2>The Lines</h2>
      <p>Three color-coded lines serve the metro system: Red (North-South), Green (Education City and Al Rayyan), and Gold (Sports City and Al Aziziyah). Each line connects to key stadium locations.</p>
      
      <h2>Tickets and Fares</h2>
      <p>A standard journey costs just 2 QAR (about $0.55), while a day pass is 6 QAR. You can buy tickets at any station using cash or card.</p>
      
      <h2>Tips for Stadium Visits</h2>
      <p>On match days, the metro extends its operating hours and increases frequency. Trains run from about 6 AM to 11 PM normally, but can run until 3 AM during major events.</p>
    `,
    category: "Travel Tips",
    date: "March 5, 2024",
    readTime: "5 min",
    image: blogImages["3"],
  },
  {
    id: "4",
    title: "Photography Tips for Stadium Visits",
    excerpt:
      "My best tips for getting stunning photos at Qatar's World Cup stadiums.",
    content: `
      <p>Qatar's stadiums are a photographer's dream. Here are my top tips for capturing these architectural marvels.</p>
      
      <h2>Best Times to Shoot</h2>
      <p>Golden hour (shortly after sunrise or before sunset) provides the best lighting conditions. The stadiums' facades come alive with warm, golden light during these times.</p>
      
      <h2>Equipment Recommendations</h2>
      <p>A wide-angle lens is essential for capturing the full scale of these venues. I also recommend a tripod for low-light evening shots when the LED facades illuminate.</p>
    `,
    category: "Photography",
    date: "February 28, 2024",
    readTime: "7 min",
    image: blogImages["4"],
  },
  {
    id: "5",
    title: "Beyond Football: Exploring Qatari Culture",
    excerpt:
      "Discover the rich cultural experiences Qatar offers beyond its stadiums.",
    content: `
      <p>While the stadiums are spectacular, Qatar offers so much more for curious travelers. From ancient souqs to modern museums, there's a wealth of cultural experiences waiting.</p>
      
      <h2>Souq Waqif</h2>
      <p>This traditional market is the heart of old Doha. Wander through narrow alleys filled with spices, textiles, and traditional crafts. The atmosphere is magical, especially in the evening.</p>
      
      <h2>Museum of Islamic Art</h2>
      <p>Designed by I.M. Pei, this stunning museum houses one of the world's finest collections of Islamic art. The building itself is a masterpiece, sitting on its own island in Doha Bay.</p>
    `,
    category: "Culture",
    date: "February 20, 2024",
    readTime: "10 min",
    image: blogImages["5"],
  },
  {
    id: "6",
    title: "Stadium 974: The World's First Demountable Venue",
    excerpt:
      "Exploring the innovative Stadium 974 built from shipping containers.",
    content: `
      <p>Stadium 974 represents a revolutionary approach to stadium construction. Built from 974 repurposed shipping containers (Qatar's international dialing code), it was designed to be completely dismantled after the World Cup.</p>
      
      <h2>Sustainable Innovation</h2>
      <p>This stadium proves that major sporting venues don't have to be permanent structures that burden host cities for decades. Every component was designed for reuse.</p>
      
      <h2>The Waterfront Location</h2>
      <p>Situated on Doha's waterfront, the stadium offers stunning views of the bay. The industrial aesthetic of the shipping containers creates a unique visual identity.</p>
    `,
    category: "Stadium Reviews",
    date: "February 15, 2024",
    readTime: "6 min",
    image: blogImages["6"],
  },
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  if (category === "All") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}
