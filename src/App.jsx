import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import NavLinks from './components/NavLinks';
import Projects from './components/Projects';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Hero />

        <main className="container">
          <div className="main">
            <NavLinks />

            <Routes>
              <Route path="/" element={<Projects />} />
              <Route path="about" element={<About />} />
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
