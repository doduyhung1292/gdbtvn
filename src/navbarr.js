import React, {Component} from 'react';
import { Navbar, NavbarBrand, NavbarText, Collapse, NavItem, NavLink, UncontrolledDropdown, 
  DropdownToggle, DropdownMenu, DropdownItem, NavbarToggler, Nav } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Navbarr extends Component {
  render() { 
    return (
      <div className="Navbarr">
        <div>
            <Navbar
              color="light"
              expand="md"
              light
            >
              <NavbarBrand href="/">
                Project1
              </NavbarBrand>
              <NavbarToggler onClick={function noRefCheck(){}} />
              <Collapse navbar>
                <Nav
                  className="me-auto"
                  navbar
                >
                  <NavItem>
                    <NavLink href="https://github.com/doduyhung1292/gdbtvn">
                      GitHub
                    </NavLink>
                  </NavItem>
                  
                </Nav>
              </Collapse>
            </Navbar>
          </div>
      </div>
  );
}; 
}
export default Navbarr;
