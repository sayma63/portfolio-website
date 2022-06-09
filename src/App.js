import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar';
import Projects from './Pages/Home/Projects';
import Skills from './Pages/Home/Skills';
import AboutMe from './Pages/Home/AboutMe';
import Services from './Pages/Home/Services';

function App() {
  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='projects' element={<Projects></Projects>}></Route>
        <Route path='skills' element={<Skills></Skills>}></Route>
        <Route path='about' element={<AboutMe></AboutMe>}></Route>
        <Route path='services' element={<Services></Services>}></Route>
        
      </Routes>
     
    </div>
  );
}

export default App;
