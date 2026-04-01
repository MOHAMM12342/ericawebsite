import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { getBlogPostById, blogPosts } from "@/lib/blog";

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const post = getBlogPostById(id);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Erica Travels Qatar`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const post = getBlogPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-[#F3F4F6]">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-[15px] font-semibold text-[#1B4FF0] hover:underline mb-8"
        >
          <ArrowLeft className="mr-2" size={16} /> Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          <span className="inline-block px-3 py-1 bg-[#EEF2FF] text-[#1B4FF0] rounded-full text-sm font-semibold mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0D0E14] mb-4 text-balance tracking-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-[#6B7280]">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {post.readTime} read
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
          <Image
            src={post.heroImage || post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#0D0E14] prose-p:text-[#6B7280] prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Navigation */}
        <div className="border-t border-[#E5E7EB] mt-12 pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#1B4FF0] text-white text-[15px] font-semibold px-6 py-3 rounded-lg hover:bg-[#163DD0] transition-all"
          >
            <ArrowLeft size={16} /> Back to All Posts
          </Link>
        </div>
      </div>
    </article>
  );
}
