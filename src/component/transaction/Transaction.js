import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Transaction extends Component {
    render() {
        let id = this.props.match.params.id;
        return (
            <div className="container">
                <Link to="/WalletPanel" className="btn btn-default btn-lg mb-3">
                    Back
                </Link>
                <Link to={`/trns/add/${id}`} className="btn btn-warning">
                    <i className="fas fa-plus-circle"> Record your new Transaction</i>
                </Link>
                <br />
                <div className="card text-center">
                    <div className="card-header ">
                        <h4>Amazon Pay Account Balance</h4>
                        <h1>Rs. 7000</h1>
                    </div>
                </div>
                <hr />
             
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Description</th>
                            <th scope="col">Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table table-dark">
                            <td>2020-04-15</td>
                            <td>Mobile Recharge</td>
                            <td className="text-danger">-599</td>
                            <td>
                                <a className="text-info" href="updatetransactionForm.html"><i className="fas fa-edit fa-2x"></i></a>
                                <span className="text-danger"><i className="fas fa-trash fa-2x"></i></span>
                            </td>
                        </tr>
                        <tr className="thead-dark">
                            <td>2020-04-01</td>
                            <td>Bulk Salary Income</td>
                            <td className="text-success">+30000</td>
                            <td>
                                <a className="text-info" href="updatetransactionForm.html"><i className="fas fa-edit fa-2x"></i></a>
                                <span className="text-danger"><i className="fas fa-trash fa-2x"></i></span>
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        )
    }
}

export default Transaction
