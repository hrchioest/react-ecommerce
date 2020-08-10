import React from 'react';
import './navbar.scss';

const Navbar = () =>{

    return(
        <nav>
            <a className="logo" href="#">LOGO</a>
            <ul className="navbar">
                <li className="navbar-item">
                    <a className="nav-link" href="#">Home</a>
                </li>
                <li className="navbar-item">
                    <a className="nav-link" href="#">Productos</a>
                    
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                    </div>
                </li>
                <li>
                    <input type="text" placeholder="Search"></input>
                    <button type="button">
                        <i class='fa fa-search'></i>
                    </button>
                    
                </li>
                
            </ul>
        </nav>
    );
}

export default Navbar;
