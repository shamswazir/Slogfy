import React from 'react';
import image1 from './images/web_design.jpg';
import image2 from './images/webdev.jpg';
import EcommerceImg from './images/silk.jpg';
import ResponsiveImg from './images/web-design-responsive-4.jpg';
import MaintenanceImg from './images/web-design-maintanance-5.jpg';
import './Component.css';

function Component() {
    return (
        <>
        <div className="component">
            <div className="leftimg">
               <img src={image1} alt=""/>
            </div>
            <div className="rightintro">
                <h1>Web Design</h1>
                <p>Slogfy, a Canada based digital company specializes in professional website design
                and development which focus on reaching your business goals. We are experienced in web page
                design, developing and hosting websites that suit your requirements. The different areas of 
                web design include graphic website design, attractive responsive website designs, and cool 
                website layouts. Looking for a web development company for your enterprise, then we are the 
                one.
                </p>
            </div>
        </div>

        

        <div className="component-webdev">
            <div className="rightimg">
               <img src={image2} alt=""/>
            </div>
            <div className="rightintro">
                <h1>Web Development</h1>
                <p>We design and develop different types of splendid websites including Static, E-commerce,
                 customized, dynamic, and content management system etc. Our web development team have great 
                 knowledge of the best website creating with latest trends in design of web page. Being a NYC
                  based company, we do frequent research and observations to perceive the emerging needs and
                 requirements of the modern clients that completely suits the modern businesses.
                </p>
            </div>
        </div>
        
        <div className="banner">
           <h1>Since 2006, Slogfy NYC has enjoyed coding over 450 Websites from E-commerce,
               Entertainment, Non-profit, to Social networks. If that sounds cool, let's talk.</h1>
        </div>
        
       
        <div className="component">
            <div className="leftimg">
               <img className="sizeofimage" src={EcommerceImg} alt=""/>
            </div>
            <div className="rightintro">
                <h1>E-commerce Web Design</h1>
                <p>Slogfy, a Canada based digital company specializes in professional website design and
                   development which focus on reaching your business goals. We are experienced in web page
                   design, developing and hosting websites that suit your requirements. The different areas of
                   web design include graphic website design, attractive responsive website designs, and cool
                    website layouts. Looking for a web development company for your enterprise, then we are the
                   one.
                </p>
            </div>
        </div>




        <div className="component-webdev">
            <div className="rightimg">
               <img src={ResponsiveImg} alt=""/>
            </div>
            <div className="rightintro">
                <h1>Web Development</h1>
                <p>We design and develop different types of splendid websites including Static, E-commerce,
                 customized, dynamic, and content management system etc. Our web development team have great 
                 knowledge of the best website creating with latest trends in design of web page. Being a NYC
                  based company, we do frequent research and observations to perceive the emerging needs and
                 requirements of the modern clients that completely suits the modern businesses.
                </p>
            </div>
        </div>


        <div className="component">
            <div className="leftimg">
               <img className="sizeofimage" src={MaintenanceImg} alt=""/>
            </div>
            <div className="rightintro">
                <h1>Website Maintenance</h1>
                <p>At Slogfy, our website maintenance programs ensure that your site is always up to date
                   and your project stays within your budget. Our website maintenance package includes
                   program such as content updates, image updates and customer support via telephone and
                   e-mail. We include all of the services you oblige in order to ensure both the long-term
                   and short term success of your online marketing. Our services also includes reviewing,
                   editing, or otherwise changing existing web pages in order to keep your website up to date.
                </p>
            </div>
        </div>
        
        </>
    )
}

export default Component
