import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <About />
    </div>
  );
}