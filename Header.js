import React from 'react'
import huronLogo from '../images/huronLogo.PNG'
import { Navbar, Nav } from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";


function Header() {
    return (
        <div className='mainHeader'>
          <Navbar variant="dark" className='p-0 m-0'>
          <Navbar.Brand className='p-2' href="home"><img src={huronLogo} className="huron-logo" alt="logo"/></Navbar.Brand>
          <Nav className="me-auto navbar_wraper">
            <NavLink to="/useraccessmanagement" activeClassName="active">User Access Management</NavLink>
            <NavLink to="/usermanagement" activeClassName="active">User management</NavLink>
            <NavLink to="/userauthorization" activeClassName="active">User Authorization</NavLink>
            <NavLink to="/reports" activeClassName="active">Reoprts</NavLink>
          </Nav>
          <Nav className="ms-auto navbar_wraper2">
            <NavLink ><IoIosNotificationsOutline /><em>1</em></NavLink>
            <NavLink><span>John Doe</span><FaRegUser /></NavLink>
          </Nav>
        </Navbar>
        </div>
    )
}

export default Header