import { useEffect, useState } from "react";
import Background from "./components/background/Background";
import BackToTop from "./components/common/BackToTop";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/public/Home";
import useScrollReveal from "./hooks/useScrollReveal";
import "./styles/global.css";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);

  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    const sectionObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActiveSection(entry.target.id),
        ),
      { rootMargin: "-35% 0px -55% 0px" },
    );
    document
      .querySelectorAll("section[id]")
      .forEach((section) => sectionObserver.observe(section));
    window.addEventListener("scroll", onScroll);
    return () => {
      sectionObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Background />
      <Navbar activeSection={activeSection} />
      <Home />
      <Footer />
      <BackToTop visible={showTop} />
    </>
  );
};

export default App;
