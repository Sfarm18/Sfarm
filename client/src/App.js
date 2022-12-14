 import './App.css';
 import Navbar from './components/Navbar'
 import { Routes, Route, Navigate } from 'react-router-dom';
 import React, { useContext } from 'react';
 import Layout from './components/Layout';
 import Home from './pages/Home'
import About from './pages/About';
import Board from './pages/Board';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Footer from './components/Footer';
import MyFarm from './pages/MyFarm';
import SignUp from './pages/SignUp';
import AuthContext from './utils/AuthContext'

function App() {

  const authCtx = useContext(AuthContext);

  return (
    <>
    
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element = {<Home />} />
            <Route path="/myfarm/*" element = {<MyFarm />} />
            <Route path="/board" element = {<Board />} />
            <Route path="/about" element = {<About />} />
            <Route path="/signup" element = {authCtx.isLoggedIn ? <Navigate to='/' /> : <SignUp/>} />
            <Route path="/login" element = {authCtx.isLoggedIn ? <Navigate to='/' /> : <Login />} />
            <Route path="/mypage" element = {!authCtx.isLoggedIn ? <Navigate to='/' /> : <MyPage />} />
          </Routes>
        </Layout>
        <Footer />
    </>
  );
}

export default App;
