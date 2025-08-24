import EducationSection from "@/components/portfolio/about/EducationSection";
import SkillsSection from "@/components/portfolio/about/SkillsSection";
import about_img from "@/assets/about_img.avif";
import WhoAmI from "@/components/portfolio/about/WhoAmI";
import ExperienceSection from "@/components/portfolio/about/ExperienceSection";
import Tagline from "./Tagline";
import AboutContact from "../components/portfolio/AboutContact";
import HeroPageSection from "@/components/portfolio/HeroPageSection";

function About() {
  const scrollDown = () => {
    const element = document.getElementById("whoami");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <HeroPageSection
        img={about_img}
        title="About Me"
        desc="A brief introduction about me and my interest."
        scrollDown={scrollDown}
      />

      <div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
        <div className="flex justify-center items-center flex-col my-5 self-start">
          <div
            className="bg-gray-700 w-28 h-1 rounded-full mb-3 self-start"
            style={{ opacity: 1, transform: "none" }}
          ></div>
          <div
            className="bg-gray-700 w-28 h-1 rounded-full"
            style={{ opacity: 1, transform: "translateX(-50px)" }}
          ></div>
          <h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
        </div>
      </div>

      <WhoAmI />
      <SkillsSection />
      <ExperienceSection />
      {/* <StatsCount /> */}
      <EducationSection />
      <Tagline />
      <AboutContact />
    </div>
  );
}
export default About;
