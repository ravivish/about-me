import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="main-content">
      {/* Navbar always renders */}
      <Navbar />

      {/* Footer always renders */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
