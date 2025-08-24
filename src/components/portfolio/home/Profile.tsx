import { Download, ExternalLink, Loader2 } from "lucide-react";
import resumeFile from "@/assets/my_resume_copy.pdf";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import mainProfile from "@/assets/personal/main_profile.jpg";

function Profile() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const handleResume = () => {
    setIsLoading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = resumeFile;
      link.download = "mahaveer_resume";
      link.click();
      setIsLoading(false);
    }, 1000);
  };

  useGSAP(() => {
    gsap.from(".name", {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1.2,
      ease: "power3.out",
    });
  }, []);

  useGSAP(() => {
    gsap.from(".image-ani", {
      opacity: 0,
      scale: 0.5,
      duration: 1.2,
      ease: "back.out(1.7)",
      delay: 0.3,
    });
  }, []);

  const scrollToContact = () => {
    const Element = document.getElementById("contactSection");
    if (Element) {
      Element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="h-auto mb-20 md:mb-0 md:h-[100vh] w-screen flex flex-col items-center justify-center overflow-hidde">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-5 gap-40 overflow-hidde md:w-[75%] w-full max-w-7xl">
          <div className="col-span-3 flex flex-col justify-center items-center md:items-start text-center md:text-start md:right-[10%]">
            <div className="block md:hidden col-span-1 mt-32 mb-32">
              <div className=" bg-slate-500 rounded-full h-60 w-60 grayscale-0 hover:grayscale-0 transition-all ease duration-300">
                <span className="image-ani relative max-w-full h-full overflow-hidden">
                  <img
                    alt="Mahaveer"
                    className="rounded-full w-full h-[120%] object-cover"
                    src={mainProfile}
                  />
                </span>
              </div>
            </div>
            <p
              className="name uppercase text-xl mb-3 font-normal text tracking-[.5rem] text-gray600"
              style={{ opacity: 1, transform: "none" }}
            >
              Mahaveer Singh Gurjar
            </p>
            <h1 className="name text-black text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold my-2 md:my-5">
              Full Stack <br /> Developer
            </h1>
            <p className="name mt-2 md:mt-0">
              <a
                className="text-xl mb-3 font-normal text tracking-[0.3rem] md:tracking-[.5rem] text-gray600 flex justify-start items-center"
                href="https://www.eggoz.com/"
                target="blank"
              >
                @ Eggoz Nutrition{" "}
                <span className="hidden md:block">
                  <ExternalLink className="w-5 h-5 ml-4" />
                </span>
              </a>{" "}
            </p>
            <p
              style={{ opacity: 1, transform: "none" }}
              className="name text-lg  2xl:text-xl mt-8 md:mt-4 px-6 md:px-0 tracking-wider text-gray600 leading-[1.7rem]"
            >
              I’m a Full Stack Developer and IIT Tirupati graduate with
              expertise in building end-to-end web and mobile solutions.
              Starting with Frontend Development, I’ve grown into Full Stack
              engineering and now also develop cross-platform mobile apps using
              React Native. Passionate about exploring new technologies, I’m
              always eager to take on new challenges and deliver impactful
              products.
            </p>
            <div
              style={{ opacity: 1, transform: "none" }}
              className="name buttons flex flex-col md:flex-row justify-center md:justify-start items-center gap-4 mt-20 md:mt-10 w-full"
            >
              <button
                onClick={handleResume}
                className=" mr-3 min-w-[250px] w-[280px] rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out bg-gray-700 hover:bg-transparent border-transparent hover:border-gray-700 border-2 text-gray-100 hover:text-gray-700 box-border flex justify-center items-center gap-3"
              >
                {isLoading ? (
                  <span>
                    <Loader2 className="animate-spin w-4 h-4" />
                  </span>
                ) : (
                  <span>
                    <Download className="w-4 h-4 " />
                  </span>
                )}
                Download Resume
              </button>
              <button
                onClick={scrollToContact}
                className="min-w-[250px] w-[280px] rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out transparent border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-gray-100 box-border"
              >
                Open to Work
              </button>
            </div>
          </div>
          <div className="hidden md:flex col-span-2 mx-auto justify-center items-center">
            <div className="rounded-full h-[450px] w-[300px] grayscale hover:grayscale-0 transition-all ease duration-300">
              <span className="image-ani relative max-w-full h-full  overflow-hidden">
                <img
                  alt="Mahaveer"
                  className="rounded-full w-full h-full object-cover"
                  src={mainProfile}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
