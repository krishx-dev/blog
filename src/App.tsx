import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BlogContent from './components/BlogContent';
import About from './components/About';
import Contact from './components/Contact';
import Legal from './components/Legal';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Main Blog Article with Sidebars */}
      <BlogContent />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Legal & Compliance Section */}
      <Legal />

      {/* Footer */}
      <Footer />
    </div>
  );
}
