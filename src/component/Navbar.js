import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';

class Navbar extends Component {
    render() {
        return (
            <div className="App">
                <div>
                    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                        {/* <ReactBootStrap.Navbar.Brand href="#home">Personal Expense Wallet</ReactBootStrap.Navbar.Brand> */}
                        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                            <ReactBootStrap.Nav className="me-auto">
                                <ReactBootStrap.Nav.Link href="#features">Wallet Panel</ReactBootStrap.Nav.Link>
                            </ReactBootStrap.Nav>
                            <ReactBootStrap.Nav>
                                <ReactBootStrap.Navbar.Brand href="#home" style={styles}>Personal Expense Wallet</ReactBootStrap.Navbar.Brand>
                            </ReactBootStrap.Nav>
                            <ReactBootStrap.Nav>
                                <ReactBootStrap.NavDropdown title="Sign in options" id="collasible-nav-dropdown">
                                    <ReactBootStrap.NavDropdown.Item href="#action/3.1">Sign up/ Register</ReactBootStrap.NavDropdown.Item>
                                    <ReactBootStrap.NavDropdown.Item href="#action/3.2">Sign in</ReactBootStrap.NavDropdown.Item>
                                </ReactBootStrap.NavDropdown>
                            </ReactBootStrap.Nav>
                        </ReactBootStrap.Navbar.Collapse>

                    </ReactBootStrap.Navbar>
                </div>
            </div>

        )
    }
}

const styles = {
    marginRight: 500   
}
export default Navbar