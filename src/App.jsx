import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from  './components/About';
import Projects  from './components/Projects';
import Contacts  from './components/Contacts';

function App() {
  return (
    <div className='App'>
      <Header/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
