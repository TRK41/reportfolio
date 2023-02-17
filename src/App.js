// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import  Home  from './pages/Home';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
      <Routes>
        <Route path="/reportfolio" element={<Home/>}/>
        <Route path="/reportfolio/aboutme" element={<AboutMe/>}/>
        <Route path="/reportfolio/portfolio" element={<Portfolio/>}/>
        <Route path="/reportfolio/contact" element={<Contact/>}/>
        <Route path="/reportfolio/resume" element={<Resume/>}/>
      </Routes>
      <Footer/>
    </Router>
      
    </div>
  );
}

export default App;
