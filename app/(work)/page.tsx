import React from "react";
import Contact from "../(contact)/contact/page";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import About from "../(about)/about/page";
import Hero from "../(hero)/hero/page";
import Selected from "../(selected)/selected/page";
// @params: This is the initial page that loads when navigating to /

export default function Work() {
  return (
    <div>
      <Navbar />
      <div className=" ">
        <div className="">
          <Hero/>
          <About/>
          <Selected/>
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}
