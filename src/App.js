import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Service from './components/Service';
import Spec from './components/Spec';
import Contact from './components/Contact';
import Price from './components/Price';

function App() {
  return (
    <div className = "bg-primary w-full overflow-hidden">
        <Navbar/>
        <Hero/>
        <Stats/>
        <Spec/>
        <Service/>
        <Price/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App
