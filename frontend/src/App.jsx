import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./css/main.css";
import "./css/fontawesome-all.min.css";
import "./css/style.css"

// pages & components
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Generic from "./pages/Generic";
import OurNews from "./pages/OurNews";

function App() {
  return (
    <>
      <BrowserRouter>
        <div id="wrapper">
          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/generic" element={<Generic />} />
              <Route path="/our-news" element={<OurNews />} />
            </Routes>
          </main>
          <Sidebar />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
