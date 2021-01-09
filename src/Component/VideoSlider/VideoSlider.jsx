import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CallIcon from "@material-ui/icons/Call";
import "./VideoSlider.css";
import video1 from "../../Assets/videos/video1.mp4";
import video2 from "../../Assets/videos/video2.mp4";

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
              </div>
            </div>
            <div className="each-fade">
              <div className="videos">
                <video loop autoPlay muted src={video1}></video>
              </div>
            </div>
          </Fade>
        </div>
      </div>
      <div className="hedding">
        <h1>
          WE BRING <span>IMPACTFUL</span> DIGITAL SOLUTIONS
        </h1>
        <Button size="medium" className="landingButton">
          <CallIcon /> SAY HELLO
        </Button>
      </div>
    </div>
  );
};

export default Slideshow;
