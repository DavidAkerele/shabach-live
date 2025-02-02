import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "4cbzgm1w", // Replace with your actual Project ID
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-01",
});

export default client; // Ensure the export is default
