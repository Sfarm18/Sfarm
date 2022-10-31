import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {  // 브라우저가 작을 시 모바일 메뉴 버튼으로 바뀜
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true);
    }
  }

  useEffect(() => { // 첫 렌더링할 때 브라우저가 작을 때 모바일 메뉴 버튼 보여주기 위함
    showButton()
  }, [])

  window.addEventListener('resize', showButton);  // 브라우저 크기 조절 시 함수 호출

  return (
    <>
      <nav className="navbar"> 
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> 
            Sfarm
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
        </div>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}> 
              Home
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link to='/myfarm/weather' className='nav-links' onClick={closeMobileMenu}>
              MyFarm
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link to='/board' className='nav-links' onClick={closeMobileMenu}>
              Board
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
        </ul>
        {button && <Button pos = 'login' buttonStyle='btn--outline'>Login</Button>}
        {button && <Button pos = 'mypage' buttonStyle='btn--primary'>MyPage</Button>}
      </nav>  
    </>
  )
}

export default Navbar