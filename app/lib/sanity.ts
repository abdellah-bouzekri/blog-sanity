import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  apiVersion: "2023-10-01",
  dataset: "production",
  projectId: "4crsxgid",
  useCdn: false,
});
const builder = imageUrlBuilder(client);

export function ulrFor(source: any) {
  return builder.image(source);
}
