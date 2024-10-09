import React from 'react';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About/About';
import Projects from './Pages/Project/Projects';
import Contact from './Pages/Contact/Contact';
import Service from './Pages/Service/Service';
import GetInTouch from './Pages/GetInTouch/GetInTouch';


const App = () => {
  return (
   
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Service' element={<Service />} />
          <Route path='/GetInTouch' element={<GetInTouch />} />

        </Routes>
      </div>
   
  );
}

export default App;
