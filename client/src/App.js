 import './App.css';
 import Navbar from './components/Navbar'
 import Slidebanner from './components/Slidebanner'
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Home from './components/pages/Home'
import MyFarmWeather from './components/pages/MyFarmWeather';
import MyfarmCCTV from './components/pages/MyfarmCCTV';
import MyfarmRecord from './components/pages/MyfarmRecord';
import About from './components/pages/About';
import Board from './components/pages/Board';
import Login from './components/pages/Login';
import MyPage from './components/pages/MyPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Slidebanner/>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/myfarm_weather' element = {<MyFarmWeather />} />
          <Route path='/myfarm_cctv' element = {<MyfarmCCTV />} />
          <Route path='/myfarm_record' element = {<MyfarmRecord />} />
          <Route path='/board' element = {<Board />} />
          <Route path='/about' element = {<About />} />
          <Route path='/login' element = {<Login />} />
          <Route path='/mypage' element = {<MyPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
