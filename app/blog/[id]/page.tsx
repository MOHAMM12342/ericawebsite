import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    <article className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2" size={16} /> Back to Blog
          </Link>
        </Button>

        {/* Header */}
        <header className="mb-8">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
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
          className="prose prose-lg max-w-none prose-headings:font-semibold prose-p:text-muted-foreground prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Navigation */}
        <div className="border-t border-border mt-12 pt-8">
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2" size={16} /> Back to All Posts
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
