import React, { Component } from "react";
import "./DetailsPage.css";

export default class DetailsPage extends Component {
  render() {
    return (
      <div className="count">
        <div className="countContainer">
          <div className="text-center">
            <h3>What we have achieved so far</h3>
            <p>
              Slogyfy is the basic building and maintenance of websites; it’s
              the whole procedure that happens to make a website look great,
              responsive, work smooth, and performing well with seamless user
              experience.
            </p>
          </div>
          <div className="counter">
            <div className="countIteam">
              <span>232</span>
              <p>Clients</p>
            </div>
            <div className="countIteam">
              <span>521</span>
              <p>Projects</p>
            </div>
            <div className="countIteam">
              <span>1,463</span>
              <p>Hours Of Support</p>
            </div>
            <div className="countIteam">
              <span>15</span>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
