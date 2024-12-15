import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router";
import ContactUs from "./components/ContactUs";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Home />
              <Footer />
            </>
          } 
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
