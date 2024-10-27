import { TypedObject } from "@portabletext/types";
export interface simpleBlogCard {
  // ...
  // Add properties here
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
}
export interface SanityImageAsset {
  _type: "image";
  asset: {
    _ref: string; // Reference to the asset in Sanity
    _type: "reference";
  };
}
export interface fullBlog {
  currentSlug: string;
  title: string;
  content: TypedObject[];
  titleImage: SanityImageAsset;
}
