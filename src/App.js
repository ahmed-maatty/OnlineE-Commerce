import './App.css';
import Navv from './Component/Nav/Navv';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import Footer from './Component/Footer/Footer';
import Element from './Component/Shop/Element';
import About from './Component/About/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';

function App() {
  return (
    <div>
      <BrowserRouter> 
        <Navv/>
          <Routes>
              <Route index path='/' element = {<Header />} />      
              <Route path='/shop' element = {<Shop />} />
              <Route path='/element' element = {<Element />} />
              <Route path='/blog' element = {<Blog />} />
              <Route path='/about' element = {<About />} />
              <Route path='/contact' element = {<Contact />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
      
  );
}

export default App;
