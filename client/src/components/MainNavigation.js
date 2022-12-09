import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../utils/AuthContext'

const MainNavigation = () => {
    const authCtx = useContext(AuthContext);
    const [name, setName] = useState('');
    let isLogin = authCtx.isLoggedIn;
    let isGet = authCtx.isGetSuccess;

    const callback = (str) => {
        setName(str);
    };

    useEffect(() => {
        if (isLogin) {
            console.log('start');
            authCtx.getUser();
        }
    }, [isLogin]);

    useEffect(() => {
        if (isGet) {
            console.log('get start');
            callback(authCtx.userObj.name);
        }
    }, [isGet]);
    
    const toggleLogoutHandler = () => {
        authCtx.logout();
    };

    return(
        <header>
          <Link to='/'>Home</Link>
          <nav>
            <ul>
              <li>{!isLogin && <Link to='/login'>Login</Link>}</li>
              <li>{!isLogin && <Link to='/signup'>Sign-Up</Link>}</li>
              <li>{isLogin && <Link to='/mypage'>mypage:{name}</Link>}</li>
              <li>{isLogin && <button onClick={toggleLogoutHandler}>Logout</button>}</li>
            </ul>
          </nav>
        </header>
      );

};
export default MainNavigation;