import React,{Component} from 'react';
import logo from '../../images/logo.png';
import {MenuItems} from './MenuItems';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{

    state = { clicked : false}

    handleClick = ()=>{
        this.setState({clicked:!this.state.clicked})
    }

    render(){
        return(
            <div className="NavbarItems">
                <img className="logo" src={logo} alt=""/>
                <div className="menu-icon" onClick={this.handleClick}>
                   {this.state.clicked ?<CloseIcon className="icon"/>:<MenuIcon className="icon"/>}
                </div>
                <ul className={this.state.clicked?'nav-menu active': 'nav-menu'}>
                    {MenuItems.map((item,index)=>{
                        return (
                            <li key={index}><Link className={item.cName} to={item.url}>
                                 {item.title}
                                </Link>
                            </li>
                        )
                    })}                   
                </ul>
            </div>
        )
    }
}

export default Navbar;