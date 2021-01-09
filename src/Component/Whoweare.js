import React from 'react';
import Button from './Button';
import './Whoweare.css';

function Whoweare() {
    return (
      <div className="container-webexpert">
       <div className="row">
          <div className="left-content">
              <span>About us</span>
              <h4>
                  WE ARE <br/>
                  WEB-EXPERT
              </h4>
              <p>
              SLOGFY is an indian based Private limited company established in 2019, that specializes
              in robotics-related services and products, which include robotics,IoT, 3d printer , software IT services & web
              technologies development company.
              <br/>
              <br/>
              We are a full house digital branding & Development company based in India providing Branding Services, Social
              Media Marketing, Mobile App, Web Design & Web Development.              
              </p>
              <Button title="DROP US A LINE"/>
          </div>
          <div className="right-contant">
              <div className="video">
                  <div className="title">
                      <h4>WEB DESIGNER</h4>
                  </div>
              </div>             
          </div>
       </div>
      </div>
    )
}

export default Whoweare

