import { fullBlog } from "@/app/lib/interface";
import { client, ulrFor } from "@/app/lib/sanity";
import { Card, CardContent } from "@/components/ui/card";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type == 'blog' && slug.current == $slug] {
    "currentSlug" : slug.current,
    title,
    content,
    titleImage
  }[0]`;
  const data = await client.fetch(query, { slug });
  return data;
}

async function BlogArticle({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const data: fullBlog = await getData(slug);

  if (!data) {
    return <div>Blog not found</div>;
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <article className="space-y-8">
        {/* Header Section */}
        <header className="space-y-6 text-center">
          <div className="space-y-2">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">
              Abdellah - Blog
            </p>
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
              {data.title}
            </h1>
          </div>
        </header>

        {/* Featured Image */}
        <Card className="overflow-hidden border-none">
          <CardContent className="p-0">
            <div className="relative aspect-video w-full">
              <Image
                src={ulrFor(data.titleImage).url()}
                fill
                alt={data.title}
                priority
                className="object-cover rounded-lg"
              />
            </div>
          </CardContent>
        </Card>

        {/* Article Content */}
        <div className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tighter prose-p:leading-relaxed prose-a:text-primary max-w-none">
          <PortableText value={data.content} />
        </div>
      </article>
    </main>
  );
}

export default BlogArticle;
