import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { AiOutlineQq } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartList from './CartList.js'
import CartModel from './CartModel'
import Profile from "./profile"
import Login from "./login"
import Logout from "./logout"
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

function Navbar() {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);

  const handleClick2 = () => setClick2(!click2);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [isAdmin,setIsAdmin]= useState(false);
  useEffect(async()=>{
    if(!isAuthenticated)return;
    var token=await getAccessTokenSilently();
    const r= await axios("https://pf-backend-production-1e5b.up.railway.app/user?name="+user.name,{headers:{Authorization : `Bearer ${token}`}})
    setIsAdmin(r.data.isAdmin)
  },[isAuthenticated])

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <AiOutlineQq className="navbar-icon" />
              Titulo
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              {isAdmin?<li className="nav-item">
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Admin
                </NavLink>
              </li>:null}

            </ul>
            <Link to="/cart" className="navbar-logo2" onClick={handleClick2}>
              <AiOutlineShoppingCart className="navbar-icon" />
            </Link>
            <Link to="/cart" className="navbar-logo3"   onClick={closeMobileMenu} >
              <AiOutlineShoppingCart className="navbar-icon" />
            </Link>
            <Profile/>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;