import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import { Route, Routes } from "react-router-dom"
import About from './components/About';
import Contact from './components/Contact';
import AOS from "aos"
import { useEffect } from "react";
import Typed from 'typed.js';
import Articles from './components/Articles';
import Dev from './components/Dev';

function App() {

  useEffect(() => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })

    const typed = document.querySelector('.typed')
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
})

  return (
    <div className="App">
     <Nav />
     <Routes>
      <Route exact path='/' element={<Hero />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/articles' element={<Articles />} />
      <Route exact path='/web-applications' element={<Dev />} />
     </Routes>
    </div>
  );
}

export default App;
