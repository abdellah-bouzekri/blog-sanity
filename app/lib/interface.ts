import { TypedObject } from "@portabletext/types";
export interface simpleBlogCard {
  // ...
  // Add properties here
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
