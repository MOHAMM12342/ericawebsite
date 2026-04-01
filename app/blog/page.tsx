"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import { blogPosts, blogCategories, getBlogPostsByCategory, type BlogCategory } from "@/lib/blog";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory>("All");

  const filteredPosts = getBlogPostsByCategory(selectedCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#F3F4F6] px-6 md:px-20 py-16">
        <span className="inline-flex items-center bg-[#EEF2FF] border border-[#C7D4FB] text-[#1B4FF0] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide">
          Stories
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[#0D0E14] mb-4">
          Blog
        </h1>
        <p className="text-base font-normal text-[#6B7280] leading-relaxed max-w-xl">
          Stories, guides, and tips from my Qatar stadium adventures.
        </p>
      </section>

      {/* Content Section */}
      <section className="bg-[#F3F4F6] px-6 md:px-20 pb-20">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {blogCategories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                selectedCategory === category
                  ? "bg-[#1B4FF0] text-white"
                  : "bg-white text-[#0D0E14] border border-[#E5E7EB] hover:border-[#999]"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    unoptimized
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-sm text-[#6B7280] mb-2">
                    <span className="px-2.5 py-1 bg-[#EEF2FF] text-[#1B4FF0] rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0D0E14] mb-2 group-hover:text-[#1B4FF0] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#6B7280] text-sm line-clamp-2 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-[#1B4FF0]">
                    Read More <ArrowRight className="ml-1" size={14} />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
