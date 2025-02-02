import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "4cbzgm1w", // Replace with your actual Project ID
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-01",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => builder.image(source);
