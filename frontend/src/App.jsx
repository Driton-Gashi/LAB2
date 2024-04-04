import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer';
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
          </Routes>

        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

