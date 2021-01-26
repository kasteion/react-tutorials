import logo from './logo.svg';
import './App.sass';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Navbar />
    <Hero />
    <MainContent/>
    <Footer />
    </div>
      );
}

export default App;
