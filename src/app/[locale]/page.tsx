import Hero from './components/sections/Hero/Hero';
import Services from './components/sections/Services/Services';

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <Services />
    </div>
  );
}