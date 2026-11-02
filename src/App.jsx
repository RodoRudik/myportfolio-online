import { Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import CaseStudy from './pages/CaseStudy';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;