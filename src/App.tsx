import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import ContactUs from "./components/ContactUs";
import AllProjects from "./components/AllProjects";

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/projects" element={<AllProjects />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
