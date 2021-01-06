import "./Navbar.css";
import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="main-header clearfix" role="header">
            <div className="logo">
              <a href="" class="logo mr-auto">
                <img src="assets/images/logo22.png" alt="" class="img-fluid" />
              </a>
            </div>
            <a href="#menu" className="menu-link">
              <i className="fa fa-bars"></i>
            </a>
            <div id="menu" className="main-nav" role="navigation">
              <ul className="main-menu">
                <li className="active">
                  <a href="#section1">Home</a>
                </li>
                <li className="has-submenu">
                  <a href="#section2">About Us</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#section2">Who we are?</a>
                    </li>
                    <li>
                      <a href="#section3">What we do?</a>
                    </li>
                    <li>
                      <a href="#section4">What we say?</a>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <a href="#">Services</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">Web Development</a>
                    </li>
                    <li>
                      <a href="#">App Development</a>
                    </li>
                    <li>
                      <a href="#">Internet Of Things</a>
                    </li>
                    <li>
                      <a href="#">Search Engine Optimization</a>
                    </li>
                    <li>
                      <a href="#">Ecommerce website</a>
                    </li>
                    <li>
                      <a href="#">Website Branding</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="#">Our Team</a>
                </li>

                <li>
                  <a href="#section5">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
