import client from "./sanity"; // Import the default export

export async function getNavbar() {
  const query = `*[_type == "navbar"][0]{
    "logoUrl": logo.asset->url,
    links
  }`;

  return await client.fetch(query);
}
