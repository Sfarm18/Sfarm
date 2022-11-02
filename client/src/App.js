 import './App.css';
 import Navbar from './components/Navbar'
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 import Home from './pages/Home'
import About from './pages/About';
import Board from './pages/Board';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Footer from './components/Footer';
import MyFarm from './pages/MyFarm';
import Register from './pages/Register';

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
          <Route path="/register" element = {<Register/>} />
          <Route path="/login" element = {<Login />} />
          <Route path="/mypage" element = {<MyPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
