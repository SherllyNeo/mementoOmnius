import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Home from './components/pages/Home.js'
import About from './components/pages/About.js'
import Contact from './components/pages/Contact.js'
import Train from './components/pages/Train.js'
import Learn from './components/pages/Learn.js'

import Train_Numbers from './components/pages/trainPages/trainNumbers.js'




import './App.css';

function App() {
  return (
      <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' exact element={<Home />} /> 
            <Route path='/about' exact element={<About />} /> 
            <Route path='/contact' exact element={<Contact />} /> 
            <Route path='/train' exact element={<Train />} /> 
            <Route path='/learn' exact element={<Learn />} /> 

            <Route path='/train/numbers' exact element={<Train_Numbers />} /> 

        </Routes>
      </Router>
      </>
  );
}

export default App;
