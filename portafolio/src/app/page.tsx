"use client";
import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Projects from "@/components/projects/projects";
import Techonologies from "@/components/technologies/techonologies";
import banner from "@/../public/209438619-25091cdf-a126-4e95-a24c-5efdf8057606.gif";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState("about");
  const renderView = () => {
    switch (view) {
      case "about":
        return <About />;
      case "proyects":
        return <Projects />;
      case "technologies":
        return <Techonologies />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="flex flex-col align-center gap-40justify-center ">
      <div className="m-auto w-[100%] h-1/6">
        {/** banner */}
        <img src={banner.src} alt="" />
      </div>

      <div>{/** profile picture */}</div>
      <h1>TEST</h1>
      <div>{/** name */}</div>
      <h1>TEST</h1>
      <div>{/** header */}</div>

      <div className="bg-yellow-500 justify-center flex w-full h-1/6">
        {/** nav buttons */}
        <div className="bg-red-500 flex flex-row w-[80%] h-10 gap-4 justify-between">
          <button className="" onClick={() => setView("about")}>
            About
          </button>
          <button className="" onClick={() => setView("proyects")}>
            Proyects
          </button>
          <button className="" onClick={() => setView("contact")}>
            Contact
          </button>
          <button className="" onClick={() => setView("technologies")}>
            Tech
          </button>
        </div>
      </div>

      <div>{renderView()}</div>
    </div>
  );
}
