import Features from "./components/Features";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="bg-black h-screen">
      <Navigation />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
