import Menu from "./components/menu/Menu";
import Banner from "./components/banner/Banner";
import './App.css';
import About from "./components/about/About";
import Project from "./components/project/Project";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Menu />
        <Banner/>
        <About />
      </div>
      <Project />
      <Skills />
      <Work />
      <Gallery />
    </div>
  );
}

export default App;
