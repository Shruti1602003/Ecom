import React from 'react'
import "./Navbar.css"
import navlogo from "../../assets/logo.png"
import navProfile from '../../assets/admin-logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
        <img src={navlogo} alt="" className="nav-logo" />
        <h3>Admin Panel</h3>
        </div>
        <img src={navProfile} className='nav-profile' alt="" />
    </div>
  ) 
}

export default Navbar