import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

function Sidebar() {
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <sidebar className="sidebar"> 
        <ul className={click ? 'side-menu active' : 'side-menu'}>
          <h4 className='side-headline'>MyFarm</h4>

          <li className='side-item'>
            <Link to='/myfarm_weather' className='side-links' onClick={closeMobileMenu}> 
              Weather & Forecast
            </Link>
          </li>
          
          <li className='side-item'>
            <Link to='/myfarm_cctv' className='side-links' onClick={closeMobileMenu}>
              CCTV
            </Link>
          </li>
          
          <li className='side-item'>
            <Link to='/myfarm_record' className='side-links' onClick={closeMobileMenu}>
              Record
            </Link>
          </li>
        </ul>
      </sidebar>  
    </>
  )
}

export default Sidebar