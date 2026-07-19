import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Hobbies } from './components/Hobbies';
import { Projects } from './components/Projects';
import { Opportunities } from './components/Opportunities';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Hobbies />
        <Projects />
        <Opportunities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
