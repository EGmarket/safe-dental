import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../Assets/Images/Logo.png";
import useAuth from "../../../hooks/useAuth";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <div className="nav-container">
      <Navbar className="container">
        <Container>
        <Link to="/">
          <img className="logo" height="50px" src={logo} alt="" srcset="" />
        </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavLink to="/services" className="nav-route">
              Services
            </NavLink>
            <NavLink to="/booking" className="nav-route">
              Booking
            </NavLink>
            <NavLink to="/teams" className="nav-route">
              Team
            </NavLink>
            <NavLink to="/login" className="nav-route">
              {!user?.email && <h2>Login</h2>}
            </NavLink>
            <Navbar.Text>
              {user?.email && (
                <span className="mx-2">
                  Hello, {user.displayName || user.email}{" "}
                </span>
              )}
              {user?.email && <button onClick={logout}>Logout</button>}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
