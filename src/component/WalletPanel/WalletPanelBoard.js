import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {deleteWallet} from '../../Actions/ProjectActions'
import {connect} from 'react-redux'

class WalletPanelBoard extends Component {
    deleteBtnClick = () =>{
        if(window.confirm("Are you using this wallet or want to delete it ")){
            this.props.deleteWallet(this.props.wallet.id)
        }
        
    }
    render() {
        const wallet = this.props.wallet
        return (
            <div className="container">
                <div className="card card-body bg-light mb-3">
                    <div className="row" >
                        <div className="col-lg-4 col-md-3 col-6">
                            <h3>{wallet.name}</h3>
                            <p>Account Number: {wallet.accountNumber}</p>
                            <p> {wallet.description} </p>
                        </div>
                        <div className="col-lg-4 col-md-3 col-6 text-center">
                            <h3>Balance</h3>
                            <h1>Rs. {wallet.currentBalance}</h1>
                        </div>
                        <div className="col-md-4 col-12 d-lg-block">
                            <ul className="list-group">
                               
                                <Link to={`/WalletUpdate/${wallet.id}`}>
                                    <li className="list-group-item list-group-item-dark">
                                        <i className="fa fa-edit pr-1"> Update Account Information</i>
                                    </li>
                                </Link>
                                <Link to="/WalletPanel" onClick={()=>this.deleteBtnClick()} >
                                    <li className="list-group-item delete text-danger">
                                        <i className="fa fa-minus-circle pr-1"> Delete this Account</i>
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null,{deleteWallet})(WalletPanelBoard)
