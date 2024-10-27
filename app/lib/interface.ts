import { TypedObject } from "@portabletext/types";
import { SanityImageObject } from "@sanity/image-url/lib/types/types";

export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: SanityImageObject;
}

export interface fullBlog {
  currentSlug: string;
  title: string;
  content: TypedObject[];
  titleImage: SanityImageObject;
}
