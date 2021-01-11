import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { makeStyles } from "@material-ui/core/styles";

import CallIcon from "@material-ui/icons/Call";
import "./VideoSlider.css";
import Button from "../Button/Button";
import details from "./VideosDetails";

// const fadeImages = [video1, "images/slide_6.jpg", "images/slide_7.jpg"];

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
            {details.map((data) => {
              return (
                <div className="each-fade">
                  <div className="videos">
                    <video loop autoPlay muted src={data.video}></video>
                    <div className="background_color"></div>
                    <div className="textContainer">
                      <div className="hedding">
                        <h1>{data.hedding}</h1>
                        <h3>{data.subHedding} </h3>
                        <Button title="DISCOVER MORE" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
