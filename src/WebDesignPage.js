import React from 'react';
import image1 from './images/corporate.png';
import image2 from './images/loading.png';
import image3 from './images/e-commerce.png';
import image4 from './images/custom.png';
import web_design from './images/web_design.jpg';

import './web.css';

function WebDesignPage() {
    return (
        <>
          <div className="container">
              <div className="left">
                
              </div>
              <div className="right">
                <div className="intro">
                    <h1>Bring MORE
                    <span>awesomeness to your brand</span></h1>
                    <p>Your website is the most important component of your 
                        marketing strategy. It serves as the hub of all of your
                        online activity. It is where you will make money, or lose money. 
                        We design websites that help you generate the most conversions. We do
                        this by delivering an attractive design, responsive theme, and user-friendly website.
                   </p>
                   <div className="twopart">
                        <div className="firsticonPart">
                          <img src={image1} alt=""/>
                          <h3>Corporate web Design</h3>
                          <p>Slogfy NYC having pride on creating corporate websites that
                              are inventive and unique. From custom drawings, to handmade icons,
                              our experienced graphic designers will deliver you the quality at par with your
                            expectations.
                          </p>

                          <img src={image3} alt="" className="image3"/>
                          <h3>E-commerce websites</h3>
                          <p>Slogfy as a web development agency based in NYC offers well crafted, flawlessly 
                            optimized, feature rich eCommerce websites based on the analysis of your competitor,
                              your clients and your business.</p>
                        </div>
                        <div className="secondiconPart">
                                <img src={image2} alt=""/>
                                <h3>Landing pages</h3>
                                <p>If you planning to unveil a brand new product or service or have a new distinctive
                                    offer? Slogfy India and Canadacan build you a custom landing page to make your
                                    launch successful.
                                  </p>

                                  <img src={image4} alt="" className="image4"/>
                                <h3>Custom web development</h3>
                                <p>As a full house digital company, we focus in complex functionality to address your 
                                  budding business needs. Whenever you are in need to create a fully custom website you
                                    can count and rely on us.
                                </p>
                        </div>
                   </div>                   
                </div>               
              </div>
          </div>  
         
        </>
    )
}

export default WebDesignPage
