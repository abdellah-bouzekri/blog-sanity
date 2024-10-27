import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client, ulrFor } from "./lib/sanity";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'blog'] | order(_createdAt desc) {
    title,
    smallDescription,
    "currentSlug": slug.current,
    titleImage 
  }`;
  return await client.fetch(query);
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Latest Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {data.map((post, idx) => (
          <Card
            key={idx}
            className="group hover:shadow-xl transition-shadow duration-300">
            <div className="relative overflow-hidden">
              <Image
                src={ulrFor(post.titleImage).url()}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <CardContent className="p-6">
              <h3 className="text-xl font-semibold dark:text-slate-300 mb-3 line-clamp-2">
                {post.title}
              </h3>

              <p className="dark:text-slate-300 text-base line-clamp-2 mb-4">
                {post.smallDescription}
              </p>

              <Button
                asChild
                className="w-full dark:bg-slate-900 hover:bg-gray-700 transition-colors  dark:text-slate-300">
                <Link
                  href={`/blog/${post.currentSlug}`}
                  className="flex items-center justify-center gap-2">
                  Read More
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
