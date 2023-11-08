import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicDesign from "./pages/GraphicDesign";
import Locations from "./pages/Locations";
import Navigation from "./components/Navigation";

import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (clicked) document.body.style.overflow = "hidden";
    if (!clicked) document.body.style.overflow = "visible";
  }, [clicked]);
  return (
    <>
      <div className=" max-w-[1440px]  mx-auto md:pt-16 md:px-10 xl:px-40">
        <ScrollToTop />
        <Navigation clicked={clicked} setClicked={setClicked} />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/app-design" element={<AppDesign />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
