import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <div className="sidebar"> 
        <ul className={click ? 'side-menu active' : 'side-menu'}>
          <h4 className='side-headline'>Categories</h4>

          <li className='side-item'>
            <Link to='/myfarm/weather' className='side-links' onClick={closeMobileMenu}> 
              Weather & Forecast
            </Link>
          </li>
          
          <li className='side-item'>
            <Link to='/myfarm/cctv' className='side-links' onClick={closeMobileMenu}>
              CCTV
            </Link>
          </li>
          
          <li className='side-item'>
            <Link to='/myfarm/record' className='side-links' onClick={closeMobileMenu}>
              Record
            </Link>
          </li>
        </ul>
      </div>  
    </>
  )
}

export default Sidebar