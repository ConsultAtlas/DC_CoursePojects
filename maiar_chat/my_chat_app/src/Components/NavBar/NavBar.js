import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Navbar, Jumbotron, Button, Alert, NavItem, MenuItem, Nav, NavDropdown } from 'react-bootstrap';
import LoginForm from '../Login/Login';
import JumbotronInstance from "../Jumbotron/Jumbotron";


class navbarInstance extends Component {
	render () {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <NavLink to="/" exact>Home</NavLink>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1}>
                            <NavLink to="/login" exact>Login</NavLink>
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Me
                        </NavItem>
                        <NavItem eventKey={3} href="#">
                            Chater
                        </NavItem>
                        {/* <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown> */}
                    </Nav>
                    {/* <Route path="/" exact component={JumbotronInstance} /> */}
                    <div>
                        <Route path="/login" exact component={LoginForm} />
                    </div>
                </Navbar>
            </div>
        );
    }
    
}

export default navbarInstance;

