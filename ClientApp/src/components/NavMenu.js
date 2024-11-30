import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";

export function NavMenu() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 navbar-dark bg-primary"
        container
        light
      >
        <NavbarBrand tag={Link} to="/">
          My application
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse
          className="d-sm-inline-flex flex-sm-row-reverse"
          isOpen={!collapsed}
          navbar
        >
          <ul className="navbar-nav flex-grow">
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/counter">
                Counter
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/fetch-data">
                Fetch data
              </NavLink>
            </NavItem>
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
}
