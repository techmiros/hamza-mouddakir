
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Service from './components/Service';
import Skill from './components/Skills';
import Certificate from './components/Certificate'
import Contact from './components/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
     <Header />
     <Main />
     <Service/>
     <Skill/>
     <Certificate />
     <Contact/>
     <Footer/>
     
    </div>
  );
}

export default App;
