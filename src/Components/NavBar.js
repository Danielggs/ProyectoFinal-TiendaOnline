import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { AiOutlineQq } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartList from './CartList.js'
import CartModel from './CartModel'


function Navbar() {
  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);

  const handleClick2 = () => setClick2(!click2);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/create"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Agregar Producto
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Admin
                </NavLink>
              </li>
            </ul>
            <Link to="/cart" className="navbar-logo2" onClick={handleClick2}>
              <AiOutlineShoppingCart className="navbar-icon" />
            </Link>
            <Link to="/cart" className="navbar-logo3"   onClick={closeMobileMenu} >
              <AiOutlineShoppingCart className="navbar-icon" />
            </Link>

           
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;