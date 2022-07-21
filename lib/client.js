import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "2halx1en",
  dataset: "production",
  apiVersion: "2022-07-21",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

//import images from products on sanity
const builder = imageUrlBuilder(client);


export const urlFor = (source) => builder.image(source);