import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import { QrCode } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <div className="p-2 glass flex items-center justify-center">
              <QrCode className="text-accent-primary" size={24} style={{ color: 'var(--accent-primary)' }} />
            </div>
            <span className="gradient-text">QR Spark</span>
          </Link>

          <div className="flex items-center gap-2 p-2 glass rounded-full nav-pill">
            <Link
              to="/"
              className={`px-6 py-2 rounded-full transition-all font-medium ${location.pathname === '/' ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30' : 'text-muted hover:text-white hover:bg-white/5'}`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-6 py-2 rounded-full transition-all font-medium ${location.pathname === '/about' ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30' : 'text-muted hover:text-white hover:bg-white/5'}`}
            >
              About Us
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="p-10 text-center text-muted">
        <p>© 2025 QR Spark - Generate with style.</p>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
