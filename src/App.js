import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/app.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Practice from "./pages/Practice";
import JobPortal from "./pages/JobPortal";
import About from "./pages/About"; // Import the About page
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/job-portal" element={<JobPortal />} />
        <Route path="/about" element={<About />} /> {/* Added About Route */}
      </Routes>
      <Footer />
      <MobileNav />
    </Router>
  );
}

export default App;
