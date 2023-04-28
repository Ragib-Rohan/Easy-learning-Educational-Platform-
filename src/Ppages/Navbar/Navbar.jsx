import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Container-fluid ">
      <div className="row m-0 p-0">
        <div className="col-11 mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top navBG">
        <div className="container-fluid">
            <NavLink className="navbar-brand" exact to="/">EasyLearning</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0 navC1" >
                    <li className="nav-item">
                    <NavLink className="nav-link "  activeClassName='NavAc'  aria-current="page"  exact to="/NewsFeed">NewsFeed</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link"  activeClassName='NavAc' exact to="/TeachersPage">Teachers</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link"  activeClassName='NavAc' exact to="/StudentsPage">Studnets</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" activeClassName='NavAc'  exact to="/ProfilePage">Profile</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" activeClassName='NavAc'  exact to="/LoginPage">LogIn</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" activeClassName='NavAc'  exact to="/SignUpPage">SignUp</NavLink>
                    </li>
                </ul>
            
            </div>
        </div>
        </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
