import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <ul className="nav navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="/index">ReactJS <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/product">Product</a>
                </li>
            </ul>
        </nav>
    );
  }
}

export default Header;