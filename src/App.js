import React from 'react';
import './App.css';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Navbar from './Navbar'; // Importa il componente Navbar
import Footer from './Footer'; // Importa il componente Footer

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={require('./miriamferrara.jpg')} alt="Miriam Ferrara" className="profile-pic" />

 <h1>Benvenuto nel mio sito personale!</h1>
      </header>
      <Navbar />
      <main>
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

