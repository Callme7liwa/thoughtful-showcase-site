import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProjectsNew from "@/components/ProjectsNew";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <ProjectsNew />
        <TechStack />
        <Education />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
