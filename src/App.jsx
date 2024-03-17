import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Skill from "./components/skills/skills";
import ParticlesComponent from "./components/particles/particles";
import Particles from "@tsparticles/react";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Servicios">
        <Parallax type="Servicios" />
      </section>
      <section>
        <Services />
      </section>
      <section id="skills">
      <Parallax type="skills" />
      </section>
      <section>
        <Skill/>
      </section>
      <section id="Porfolio">
        <Parallax type="Porfolio" />
      </section>
      <Portfolio />
      <section id="Contacto">
        <Contact />
      </section>
    </div>
  );
};

export default App;
