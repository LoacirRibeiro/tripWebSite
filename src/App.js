

// Create Travel and Stay Website Using ReactJS | Fully Responsive Project 2024.
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import Popular from './Components/Popular/popular';
import Oferta from './Components/Ofertas/oferta';
import Sobre from './Components/Sobre/sobre';
import Blog from './Components/Blog/blog';
import Footer from './Components/Footer/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Popular />
      <Oferta />
      <Sobre />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
