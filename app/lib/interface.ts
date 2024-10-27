import { TypedObject } from "@portabletext/types";
// import { SanityImageObject } from "@sanity/image-url/lib/types/types";

export interface simpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
}

export interface fullBlog {
  currentSlug: string;
  title: string;
  content: TypedObject[];
  titleImage: any;
}
