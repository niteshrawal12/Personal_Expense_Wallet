import React, { Component } from 'react'

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
                                
                                <a href="register.html" className="btn btn-danger">
                                    Sign Up
                                </a>
                                <a href="login.html" className="btn btn-success">
                                    Login
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome
