import Menu from "./components/menu/Menu";
import Banner from "./components/banner/Banner";
import './App.css';
import About from "./components/about/About";
import Project from "./components/project/Project";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Gallery from "./components/gallery/Gallery";
import microsoft from './img/microsoft.png';
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";


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
      <div className="microsoft-box">
        <img src={microsoft} alt="microsoft"/>
        <img src={microsoft} alt="microsoft"/>
        <img src={microsoft} alt="microsoft"/>
        <img src={microsoft} alt="microsoft"/>
      </div>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
