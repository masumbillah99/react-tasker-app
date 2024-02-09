import "./App.css";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="bg-[#191D26] font-[Inter] text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <HeroSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
