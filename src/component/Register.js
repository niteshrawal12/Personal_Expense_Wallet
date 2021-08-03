import React, { Component } from 'react'

class Register extends Component {
    render() {
        return (
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your Account</p>
                            <form action="/">
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Name" name="name"
                                        required />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-lg" placeholder="Email Address"
                                        name="email" />

                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg" placeholder="Password"
                                        name="password" />
                                </div>
                               
                                <div class="form-actions">
                                <input type="submit" className="btn btn-dark" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Register
