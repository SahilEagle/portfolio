import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Project from './components/Project';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
