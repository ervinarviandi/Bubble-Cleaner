import Head from "react";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Features from "./components/Features";
import Promo from "./components/Promo";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";

<Head>
  <title>Bubble Cleaner</title>
</Head>;
function App() {
  return (
    <div className="">
      <Navigation />
      <Hero />
      <Features />
      <Promo />
      <Services />
      <AboutUs />
    </div>
  );
}

export default App;
