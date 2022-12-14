import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import { Route, Routes } from "react-router-dom"
import About from './components/About';
import Contact from './components/Contact';
import { useEffect, useState } from "react";
import Articles from './components/Articles';
import Dev from './components/Dev';
import "aos/dist/aos.css";
import Resume from './components/Resume';

function App() {
  const [articles, setArticles] = useState([])
  const [projects, setProjects] = useState([])

  useEffect(() => {

    const article_url = 'https://dev.to/api/articles?username=abzed'
    const project_url = 'https://portfolio-api-kn7h.onrender.com/projects'

    fetch(article_url).then(res => res.json())
      .then(data => setArticles(data))
    
    fetch(project_url).then(res => res.json())
      .then(data => setProjects(data))

}, [])

  return (
    <div className="App">
     <Nav />
     <Routes>
      <Route exact path='/' element={<Hero />} />
      <Route exact path='/about' element={<About />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route exact path='/resume' element={<Resume />} />
      <Route exact path='/articles' element={<Articles articles={articles} />} />
      <Route exact path='/web-applications' element={<Dev projects={projects} />} />
     </Routes>
    </div>
  );
}

export default App;
