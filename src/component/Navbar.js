import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container">

                        <Link className="navbar-brand order-1 " to="/">
                            Personal Expense Wallet
                        </Link>
                        <button className="navbar-toggler order-2" type="button" data-toggle="collapse" data-target="#mobile-nav">
                            <span className="navbar-toggler-icon" />
                        </button>

                        <div className="collapse navbar-collapse order-3" id="mobile-nav">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/WalletPanel">
                                        Wallet Panel
                                    </Link>
                                </li>
                            </ul>

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link " to="/Register">
                                        Sign Up
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/Login">
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}

export default Navbar