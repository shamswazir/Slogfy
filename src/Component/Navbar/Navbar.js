import React, { Component } from "react";
import logo from "../../images/logo.png";
import { MenuItems } from "./MenuItems";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Menu, Dropdown } from "antd";
import "antd/dist/antd.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            WHAT WE ARE ?
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            WHAT WE DO ?
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            WHAT WE SAY ?
          </a>
        </Menu.Item>
      </Menu>
    );

    const service = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            WEB DEVELOPMENT
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            APP DEVELOPMENT
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            INTERNET OF THINGS
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            SEARCH ENGINE OPTIMIZATION
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            ECOMMERCE WEBSITE
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            WEBSITE BRANDING
          </a>
        </Menu.Item>
      </Menu>
    );

    return (
      <div className="NavbarItems">
        <div className="leftSide">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="menu-icon" onClick={this.handleClick}>
            {this.state.clicked ? (
              <CloseIcon className="icon" />
            ) : (
              <MenuIcon className="icon" />
            )}
          </div>
        </div>
        <div className="rightSide">
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            <div className="text-iteam">HOME</div>
            <div className="text-iteam">
              <Dropdown overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  ABOUT US
                </a>
              </Dropdown>
            </div>
            <div className="text-iteam">
              <Dropdown overlay={service}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  SERVICES
                </a>
              </Dropdown>
            </div>
            <div className="text-iteam">OUR TEAM</div>
            <div className="text-iteam">CONTACT</div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
