import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route 
              path="/dashboard" 
              element={<Dashboard />} 
            />
          </Routes>

        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

