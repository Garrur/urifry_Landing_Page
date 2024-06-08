import React, { useEffect } from 'react';
import './style.css'; 
import NavBar from './components/NavBar';
import Header from './components/Header';
import Features from './components/Features';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Banner from './components/Banner';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider } from './components/ThemeContext';
function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ThemeProvider>
    <div className="App">
      <NavBar />
      <Header />
      <Features />
      <Advantages />
      <Testimonials />
      <FAQ />
      <Banner />
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
