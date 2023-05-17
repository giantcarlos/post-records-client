import React, { useContext } from 'react'
import { UserContext } from './Context'
import { NavLink } from "react-router-dom";


function Navigation() {
  const {login, handleLogin} = useContext(UserContext)
  return (
    <nav>
        <div className="site-title">POST-RECORDS</div>
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/shop">Shop</NavLink>
        <NavLink exact to="/collection">Purchase History</NavLink>
        <NavLink exact to="/about">About</NavLink>
        <button className="loginBtn" onClick={handleLogin}>{login ? "Logout" : "Login"}
          </button>
    </nav>
  );
}

export default Navigation;