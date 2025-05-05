import "./assets/css/style.css";
import { Footer } from "./components/PPFooter";
import { Header } from "./components/PPHeader";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/Home";
import { Misc } from "./pages/Misc";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <>
      <Header />
      <Home />
      <div className="body-wrapper">
        <About />
        <Experience />
        <Projects />
        <Misc />
        <Footer />
      </div>
    </>
  );
}

export default App;

// https://civio-template.framer.website/
