import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        return (
            <div className="landing">
                <div className="light-overlay landing-inner text-dark">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Personal Expense Wallet</h1>
                                <p className="text-muted">
                                    Create your account to manage your daily expense
                                </p>
                                
                                <a href="register.html" className="btn btn-light">
                                    Sign Up
                                </a>
                                <a href="login.html" className="btn btn-light">
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
