import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href='/auth/google'>Login</a></li>
            default:
                return <li><a href='/api/logout'>Logout</a></li>
        }
    }
    render() {
        return (
            <div className='nav-container'>
                <div className='nav'>
                        <ul>
                            <li className='title'>
                                <Link to={this.props.auth ? '/todolist' : '/'}>write it down. get it done</Link>   
                            </li>
                            <li>
                                {this.renderContent()}
                            </li>
                        </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Header);