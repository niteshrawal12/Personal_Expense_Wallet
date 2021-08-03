import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Welcome extends Component {
    render() {
        return (
            <div className="landing">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                            <div className="card text-center">
                                <div className="card-header">
                                <h1 className="display-3 mb-4">Personal Expense Wallet</h1>
                                </div>
                                </div>
                                <p className="text-muted">
                                    Create your account to manage your daily expense
                                </p>
                                
                                <Link to="/Register" className="btn btn-danger">
                                    Sign Up
                                </Link>
                                <Link to="/Login" className="btn btn-success">
                                    Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome
