import { BrowserRouter, Routes, Route } from "react-router-dom";

// CSS
import "./css/main.css";
import "./css/fontawesome-all.min.css";
import "./css/style.css"

// pages & components
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Elements from "./pages/Elements";
import Generic from "./pages/Generic";


function App() {
  return (
    <>
      <BrowserRouter>
        <div id="wrapper">
          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/elements" element={<Elements />} />
              <Route path="/generic" element={<Generic />} />
            </Routes>
          </main>
          <Sidebar />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
