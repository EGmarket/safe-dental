import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FormOutlined } from '@ant-design/icons';
import './Header.css';
import logo from '../../Assets/Images/Logo.png'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user,logout} = useAuth();
    return (
        <div className="nav-container" >
           <nav className="nav">
               <Link to='/'>
                   <img height="50px" src={logo} alt="" srcset="" />
               </Link>
               <div className="nav_right">
                   <div className="nav-cart">
                   <FormOutlined />
                   </div>
                   <NavLink to='/services' className="nav-route">
                       Services
                   </NavLink>
                   <NavLink to='/booking' className="nav-route">
                       Booking
                   </NavLink>
                   <NavLink to='/login' className="nav-route">
                   {!user?.email  && <h2>Login</h2>}
                   </NavLink>
                   {/* <NavLink to='/signup' className="signup">
                        Sing-up
                   </NavLink> */}
                   {
                        user?.email && <span className="mx-2">Hello, {user.displayName || user.email} </span>
                    }
                    {user?.email  && <button onClick={logout}>Logout</button>}
               </div>
            </nav> 
        </div>
    );
};

export default Header;