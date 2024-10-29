import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';

const App = () => {
  return (
    <BrowserRouter>
      <div className="main m-0 p-0 box-border bg-yellow-300 min-h-screen">
        <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>} />
          <Route path = "/about" element = {<About/>} />
          <Route path = "/contact" element = {<Contact/>} />
          <Route path = "/project" element = {<Project/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
