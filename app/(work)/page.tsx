import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import About from "@/app/(about)/about/page";
import Hero from "@/app/(hero)/hero/page";
import Selected from "@/app/(selected)/selected/page";
import Contact from "@/app/(contact)/contact/page";

export const metadata = {
  title: "Shabach Rotimi",
  description: "Photographer & Videographer",
  metadataBase: new URL("https://rotimishabach.vercel.app/"), // Add this
  openGraph: {
    title: "Shabach Rotimi",
    description: "Photographer & Videographer",
    url: "https://rotimishabach.vercel.app/",
    type: "website",
    images: [
      {
        url: "/ogimage.jpg",
        width: 1200,
        height: 630,
        alt: "Shabach Rotimi - Photographer & Videographer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shabach Rotimi",
    description: "Photographer & Videographer",
    images: [
      "/ogimage.jpg",
    ],
  },
};



export default function Work() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <About />
        <Selected />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
