import { fullBlog } from "@/app/lib/interface";
import { client, ulrFor } from "@/app/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

async function getData(slug: string) {
  const query = `*[_type == 'blog' && slug.current == '${slug}'] {
    "currentSlug" : current.slug,
      title,
      content,
      titleImage
}[0]`;
  const data = await client.fetch(query);
  return data;
}

async function BlogArticle({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const data: fullBlog = await getData(slug);

  if (!data) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="mt-8">
      <h1>
        <span className="block text-base text-center text-primary uppercase tracking-wide font-semibold">
          Abdellah - Blog
        </span>
        <span className="mt-2 block text-2xl text-center leading-3 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
      <Image
        src={ulrFor(data.titleImage).url()}
        width={800}
        height={800}
        alt="title image"
        priority
        className="rounded-lg object-cover mt-8"
      />
      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}

export default BlogArticle;
