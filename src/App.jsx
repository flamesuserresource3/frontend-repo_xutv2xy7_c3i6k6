import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import BackgroundFX from './components/BackgroundFX';

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white relative">
      <BackgroundFX />
      <Navbar />
      <Hero />
      <Sections />
    </div>
  );
}

export default App;
