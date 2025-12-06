import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./section/Home";
import AboutMe from "./section/AboutMe";
import Project from "./section/Project";
import Links from "./components/Links";
import Contact from "./section/Contact";

function App() {
  const navItems = [
    { id: "#home", title: "Esteves Helder" },
    { id: "#aboutme-section", title: "A propos de moi" },
    { id: "#projects-section", title: "Projets" },
    { id: "#contact-section", title: "Contact" },
  ];

  return (
    <div className="scrollbar bg-custom-white scroll-smooth">
      <NavBar navItems={navItems} />
      <Home />
      <AboutMe />
      <Project />
      <Contact navItems={navItems} />
      <div className="fixed right-0 bottom-0 z-1000 m-5">
        <Links></Links>
      </div>
    </div>
  );
}

export default App;
