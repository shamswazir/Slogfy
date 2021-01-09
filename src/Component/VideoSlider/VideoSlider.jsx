import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { makeStyles } from "@material-ui/core/styles";

import CallIcon from "@material-ui/icons/Call";
import "./VideoSlider.css";
import Button from "../Button/Button";
import video1 from "../../Assets/videos/video1.mp4";
import video2 from "../../Assets/videos/video2.mp4";
import video3 from "../../Assets/videos/video3.mp4";
import video4 from "../../Assets/videos/video4.mp4";

const fadeImages = [video1, "images/slide_6.jpg", "images/slide_7.jpg"];

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Slideshow = () => {
  const classes = useStyles();
  return (
    <div>
      <div className="videoContainer">
        <div className="slide-container">
          <Fade>
            <div className="each-fade">
              <div className="videos">
                <video loop autoPlay muted src={video2}></video>
                <div className="background_color"></div>
                <div className="textContainer">
                  <div className="hedding">
                    <h1>Artificial Intelligence</h1>
                    <h3>Making Life More Easier & Safe </h3>
                    <Button title="DISCOVER MORE" />
                  </div>
                </div>
              </div>
            </div>
            <div className="each-fade">
              <div className="videos">
                <video loop autoPlay muted src={video1}></video>
                <div className="background_color"></div>
                <div className="textContainer">
                  <div className="hedding">
                    <h1>Internet Of Things</h1>
                    <h3> Connecting Your world</h3>
                    <Button title="DISCOVER MORE" />
                  </div>
                </div>
              </div>
            </div>
            <div className="each-fade">
              <div className="videos">
                <video loop autoPlay muted src={video3}></video>
                <div className="background_color"></div>
                <div className="textContainer">
                  <div className="hedding">
                    <h1>Web development</h1>
                    <h3> Shaping Your Imagination</h3>
                    <Button title="DISCOVER MORE" />
                  </div>
                </div>
              </div>
            </div>
            <div className="each-fade">
              <div className="videos">
                <video loop autoPlay muted src={video4}></video>
                <div className="textContainer">
                  <div className="background_color"></div>
                  <div className="hedding">
                    <h1>App Development</h1>
                    <h3> Shaping Your Imagination </h3>
                    <Button title="DISCOVER MORE" />
                  </div>
                </div>
              </div>
            </div>
            <div className="each-fade">
              <div className="videos">
                <video loop autoPlay muted src={video1}></video>
                <div className="background_color"></div>
                <div className="textContainer">
                  <div className="hedding">
                    <h1>Hardware prototyping</h1>
                    <h3> Shaping Your Imagination</h3>
                    <Button title="DISCOVER MORE" />
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
