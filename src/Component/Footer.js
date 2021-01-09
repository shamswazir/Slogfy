import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
import logo from '../images/logo22.png';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Footer() {
    return (
        <div id="footer" className="footer">
            <div className="contain">
               <div className="footer-contact">
                <img src={logo} alt=""/>
                <br/>
                <br/>
                <p>B-78,<br/>
                  Near Saket Metro station,<br/>
                  Gate no. 2,<br/>
                  New Delhi,110030<br/><br/>

                  <strong>Phone:</strong> (+91) 8130937887<br/>
                  (+91) 8851719915<br/>
                  <strong>Email:</strong> slogfy@gmail.com<br/>
                </p>
                <br/>
                <div>
                  <Link className="icon"><TwitterIcon/></Link>
                  <Link className="icon"><FacebookIcon/></Link>
                  <Link className="icon"><InstagramIcon/></Link>
                  <Link className="icon"><LinkedInIcon/></Link>
                </div>
               </div> 

               <div className="footer-link">
                 <h4>Useful Links</h4>
                 <Link className="link">Home</Link>
                 <Link className="link">About us</Link>
                 <Link className="link">Services</Link>
                 <Link className="link">Terms of service</Link>
                 <Link className="link">Privacy policy</Link>
               </div> 

               <div className="footer-link">
                 <h4>Our Services</h4>
                 <Link className="link">Web Design</Link>
                 <Link className="link">Web Development</Link>
                 <Link className="link">Product Management</Link>
                 <Link className="link">Digital Marketing</Link>
                 <Link className="link">Graphic Design</Link>
               </div> 

               <div className="footer-link">
                 <h4>Our Technologies</h4>
                 <Link className="link">Laravel</Link>
                 <Link className="link">Magneto</Link>
                 <Link className="link">Codeigniter</Link>
                 <Link className="link">. net Development</Link>
                 <Link className="link">Word press</Link>
               </div> 
            </div>    

            <div className="intro">
               <div className="detail">
                   <h5>© Copyright 
                       <span> Slogfy.</span>
                       All Rights Reserved
                   </h5>
               </div>
            </div>

        </div>
    )
}

export default Footer
