import Home from './pages/Home/Home';
import Deals from './pages/Deals/Deals';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';

import Topbar from './components/Topbar/Topbar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import './App.scss';

import {
  Routes,
  Route,
} from "react-router-dom";
import RegisterCar from './pages/RegisterCar/RegisterCar';


function App() {
  return (
    <div className="App">
      <Topbar />
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='deals' element={<Deals />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='contact' element={<Contact />} />
          <Route path='register-car' element={<RegisterCar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
