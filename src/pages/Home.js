import React from "react";
import Hero from "../components/Hero/Hero";
import Internships from "../components/Internships/Internships";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Extracurricular from "../components/Extracurricular/Extracurricular"
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Internships />
      <Projects />
      <Extracurricular />
      
      <Contact />      
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
