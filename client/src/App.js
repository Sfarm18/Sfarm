 import './App.css';
 import Navbar from './components/Navbar'
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Home from './components/pages/Home'
import About from './components/pages/About';
import Board from './components/pages/Board';
import Login from './components/pages/Login';
import MyPage from './components/pages/MyPage';
import Footer from './components/Footer';
import MyFarm from './components/pages/MyFarm';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/myfarm/*" element = {<MyFarm />} />
          <Route path="/board" element = {<Board />} />
          <Route path="/about" element = {<About />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/mypage" element = {<MyPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
