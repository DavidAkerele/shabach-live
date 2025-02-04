import Head from 'next/head';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import About from "../(about)/about/page";
import Hero from "../(hero)/hero/page";
import Selected from "../(selected)/selected/page";
import Contact from "../(contact)/contact/page";

// @params: This is the initial page that loads when navigating to /
export default function Work() {
  return (
    <div>
      <Head>
        <title>Shabach Rotimi</title>
        <meta name="description" content="Photographer & Videographer" />
        
        {/* Facebook Open Graph Meta Tags */}
        <meta property="og:url" content="https://shabach-live-2.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Shabach Rotimi" />
        <meta property="og:description" content="Photographer & Videographer" />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/b747bc85-bbb9-4510-bd11-c5a9d70fec74.jpg?token=ESk4S5xXCLt9388aqXxjWW2z-MfWpTAM5EjubWdXs6k&height=630&width=1200&expires=33274666489" />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="shabach-live-2.vercel.app" />
        <meta property="twitter:url" content="https://shabach-live-2.vercel.app/" />
        <meta name="twitter:title" content="Shabach Rotimi" />
        <meta name="twitter:description" content="Photographer & Videographer" />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/b747bc85-bbb9-4510-bd11-c5a9d70fec74.jpg?token=ESk4S5xXCLt9388aqXxjWW2z-MfWpTAM5EjubWdXs6k&height=630&width=1200&expires=33274666489" />
      </Head>
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
